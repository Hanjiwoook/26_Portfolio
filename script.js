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

    const closeModal = () => modal.classList.remove('show');
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // 6. Project Rendering with New Card Design
    const renderProjects = (data) => {
        const sections = {
            'projects': document.querySelector('#projects .card-grid'),
            'qa': document.querySelector('#qa .card-grid')
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
                modalTitle.textContent = item.title;
                modalTags.innerHTML = tagsHtml;
                modalBody.innerHTML = item.details;
                
                
                if (item.imageUrl) {
                    modalBanner.innerHTML = '';
                    const urls = Array.isArray(item.imageUrl) ? item.imageUrl : [item.imageUrl];
                    urls.forEach(url => {
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
