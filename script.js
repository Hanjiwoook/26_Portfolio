document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const container = document.querySelector('.main-container');

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        // Re-create icons to update colors if needed
        lucide.createIcons();
    });

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinksContainer = document.getElementById('nav-links');
    const menuIcon = mobileMenuBtn?.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn?.querySelector('.close-icon');

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', () => {
            const isActive = navLinksContainer.classList.contains('active');
            navLinksContainer.classList.toggle('active');
            
            if (isActive) {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            } else {
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            }
        });

        // Close menu when clicking a link
        const navLinks = navLinksContainer.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            });
        });
    }

    // 4. Hero Terminal Typing Animation
    const typeTerminal = () => {
        const terminalBody = document.getElementById('hero-typing');
        if (!terminalBody) return;

        const lines = [
            { text: '> playwright test', class: 'command' },
            { text: 'Running E2E tests on Chrome, Firefox, Webkit...', class: 'log' },
            { text: '✓ Login flow successful (12ms)', class: 'log success' },
            { text: '✓ Dashboard widget interaction (45ms)', class: 'log success' },
            { text: '✓ API payload validation (8ms)', class: 'log success' },
            { text: 'All 3 tests passed!', class: 'log success' }
        ];

        terminalBody.innerHTML = '';
        let lineIdx = 0;

        const addLine = () => {
            if (lineIdx < lines.length) {
                const line = lines[lineIdx];
                const span = document.createElement('span');
                span.className = line.class;
                span.textContent = line.text;
                terminalBody.appendChild(span);
                terminalBody.appendChild(document.createElement('br'));
                lineIdx++;
                setTimeout(addLine, 600);
            } else {
                setTimeout(typeTerminal, 3000); // Loop after 3s
            }
        };

        addLine();
    };

    typeTerminal();

    // 5. Modal Logic
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalBody = document.getElementById('modal-body');
    const modalGithub = document.getElementById('modal-github');
    const modalBanner = document.getElementById('modal-banner');
    const modalTabs = document.getElementById('modal-tabs');

    const closeModal = () => modal.classList.remove('show');
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // ── Tab Switching State ──
    let currentItem = null; // 현재 모달에 열린 프로젝트 데이터

    const switchTab = (tabName) => {
        if (!currentItem) return;

        // 탭 버튼 활성화 상태 전환
        modalTabs.querySelectorAll('.modal-tab').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        // 콘텐츠 전환
        if (tabName === 'dev') {
            modalBody.innerHTML = currentItem.devDetails || currentItem.details || '';
        } else if (tabName === 'qa') {
            modalBody.innerHTML = currentItem.qaDetails || '';
        }
    };

    // 탭 버튼 이벤트 리스너 (이벤트 위임)
    modalTabs.addEventListener('click', (e) => {
        const tabBtn = e.target.closest('.modal-tab');
        if (!tabBtn) return;
        switchTab(tabBtn.dataset.tab);
    });

    // 6. Project Rendering with New Card Design
    const renderProjects = (data) => {
        const sections = {
            'projects': document.querySelector('#projects .card-grid'),
        };

        Object.values(sections).forEach(grid => { if(grid) grid.innerHTML = ''; });

        data.forEach((item, index) => {
            const grid = sections[item.sectionId];
            if (!grid) return;

            const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <div class="card-image-placeholder">${item.placeholderLabel}</div>
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-text">${item.summary}</p>
                    <div class="card-tags">${tagsHtml}</div>
                </div>
            `;

            cardElement.addEventListener('click', () => {
                // 현재 아이템 저장 (탭 전환에 사용)
                currentItem = item;

                modalTitle.textContent = item.title;
                modalTags.innerHTML = tagsHtml;

                // ── 배너 이미지 처리 ──
                if (item.imageUrl && item.imageUrl.length > 0) {
                    modalBanner.innerHTML = '';
                    const urls = Array.isArray(item.imageUrl) ? item.imageUrl : [item.imageUrl];
                    urls.forEach(url => {
                        if (!url) return;
                        const img = document.createElement('img');
                        img.src = url;
                        img.className = 'modal-banner-img';
                        img.alt = '프로젝트 시연화면';
                        modalBanner.appendChild(img);
                    });
                    modalBanner.style.display = 'flex';
                } else {
                    modalBanner.style.display = 'none';
                    modalBanner.innerHTML = '';
                }

                // ── 탭 표시 여부 결정 ──
                const hasDevDetails = !!item.devDetails;
                const hasQaDetails = !!item.qaDetails;

                if (hasDevDetails && hasQaDetails) {
                    // 두 탭 모두 존재 → 탭 UI 표시, Dev 탭 기본 활성화
                    modalTabs.style.display = 'flex';
                    modalTabs.querySelectorAll('.modal-tab').forEach(btn => {
                        btn.classList.toggle('active', btn.dataset.tab === 'dev');
                    });
                    modalBody.innerHTML = item.devDetails;
                } else if (hasDevDetails) {
                    // Dev만 존재 (Banergy 등) → 탭 숨기고 Dev 내용만 표시
                    modalTabs.style.display = 'none';
                    modalBody.innerHTML = item.devDetails;
                } else {
                    // 레거시 fallback (details 필드)
                    modalTabs.style.display = 'none';
                    modalBody.innerHTML = item.details || '';
                }

                // ── GitHub 버튼 ──
                if (item.githubUrl) {
                    modalGithub.href = item.githubUrl;
                    modalGithub.style.display = 'inline-flex';
                } else {
                    modalGithub.style.display = 'none';
                }

                modal.classList.add('show');
            });

            grid.appendChild(cardElement);
        });

        // Re-init icons for newly added HTML
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };

    // 7. Smooth Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    if (typeof window.projectsData !== 'undefined') {
        renderProjects(window.projectsData);
    }
});
