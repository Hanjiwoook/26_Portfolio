document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.horizontal-container');

    // 마우스 휠(세로 스크롤)을 가로 스크롤로 매끄럽게 변환
    container.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
    }, { passive: false });

    // 모달 관련 요소 찾기
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalBody = document.getElementById('modal-body');
    const modalGithub = document.getElementById('modal-github');

    // 모달 닫기 제어
    const closeModal = () => {
        modal.classList.remove('show');
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(); 
    });

    // 교차 관찰자 (Intersection Observer) 생성 함수
    const setupCardObserver = () => {
        const observerOptions = {
            root: container,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        return observer;
    };

    const cardObserver = setupCardObserver();

    // 캐러셀 페이지네이션 구현 (카드 3개가 모여서 1페이지(dot)를 이룸)
    const setupPagination = (section, grid, cards) => {
        const paginationContainer = section.querySelector('.pagination');
        paginationContainer.innerHTML = ''; 

        // 한 번에 최대 보이는 카드 수 == 3 
        const itemsPerPage = 3;
        const totalPages = Math.ceil(cards.length / itemsPerPage);

        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active'); // 처음에 1페이지가 활성화됨
            dot.setAttribute('aria-label', `Page ${i + 1}`);
            
            // 점을 누르면 해당 페이지(인덱스 i * itemsPerPage)의 최좌측 카드로 부드럽게 스크롤
            dot.addEventListener('click', () => {
                const targetCard = cards[i * itemsPerPage];
                if (targetCard) {
                    grid.scrollTo({
                        left: targetCard.offsetLeft, 
                        behavior: 'smooth'
                    });
                }
            });
            
            paginationContainer.appendChild(dot);
        }

        const dots = paginationContainer.querySelectorAll('.dot');

        // 스크롤 시 각 페이지의 첫 번째 위치를 기준으로 어느 점(dot)을 활성화할지 찾음
        grid.addEventListener('scroll', () => {
            let activeIdx = 0;
            let minDiff = Infinity;
            
            cards.forEach((card, idx) => {
                const diff = Math.abs(card.offsetLeft - grid.scrollLeft);
                if (diff < minDiff) {
                    minDiff = diff;
                    activeIdx = idx;
                }
            });

            // 화면상 현재 제일 왼쪽에 붙어있는 카드 인덱스를 기준으로 페이지 구하기
            const activePage = Math.floor(activeIdx / itemsPerPage);
            
            dots.forEach(d => d.classList.remove('active'));
            if (dots[activePage]) {
                dots[activePage].classList.add('active');
            }
        });
    };

    // 로컬 환경(file://)에서 fetch API CORS 에러 방지를 위해 window.projectsData 정적 데이터 활용
    const renderProjects = (data) => {
        const sections = {
            'projects': document.querySelector('#projects .card-grid'),
            'qa': document.querySelector('#qa .card-grid')
        };

        // 그리드 내용 초기화
        if(sections['projects']) sections['projects'].innerHTML = '';
        if(sections['qa']) sections['qa'].innerHTML = '';

        data.forEach((item, index) => {
            const grid = sections[item.sectionId];
            if (!grid) return;

            const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            const cardHtml = `
                <div class="card-image-placeholder">${item.placeholderLabel}</div>
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-text">${item.summary}</p>
                    <div class="card-tags">${tagsHtml}</div>
                </div>
            `;

            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = cardHtml;

            // 나타나기 애니메이션 초기상태
            cardElement.style.opacity = '0';
            cardElement.style.transform = 'translateY(30px) scale(0.95)';
            // 3의 배수(페이지 단위)에 맞춰 순차적으로 떠오르도록 애니메이션 지연시간 조정
            cardElement.style.transition = `opacity 0.6s ease-out, border-color 0.3s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${(index % 3) * 0.15}s`;

            // 카드 클릭 => 상세 모달 창 띄우기
            cardElement.addEventListener('click', () => {
                modalTitle.textContent = item.title;
                modalTags.innerHTML = tagsHtml;
                modalBody.innerHTML = item.details;
                
                if (item.githubUrl) {
                    modalGithub.href = item.githubUrl;
                    modalGithub.style.display = 'inline-block';
                } else {
                    modalGithub.style.display = 'none';
                }

                modal.classList.add('show');
            });

            grid.appendChild(cardElement);
            cardObserver.observe(cardElement);
        });

        // HTML 추가가 끝난 이후에 페이지네이션(점) 구조를 세팅함
        document.querySelectorAll('.portfolio-section').forEach(section => {
            const grid = section.querySelector('.card-grid');
            if (grid) {
                const cards = grid.querySelectorAll('.card');
                if (cards.length > 0) {
                    setupPagination(section, grid, cards);
                }
            }
        });
    };

    // 전역 변수로 선언된 프로젝트 데이터를 기반으로 렌더 실행
    if (typeof window.projectsData !== 'undefined') {
        renderProjects(window.projectsData);
    } else {
        console.error("데이터 로드 실패: projectsData 전역 변수가 정의되지 않았습니다.");
    }
});
