document.addEventListener('DOMContentLoaded', () => {

    // Sidebar Navigation Logic
    const navItems = document.querySelectorAll('.nav-item:not(.submenu-toggle)');
    const sections = document.querySelectorAll('.content-section');
    const menuTitle = document.querySelector('.page-header h1');

    // Handle generic nav clicks
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. Remove active state from all nav items
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.submenu-item').forEach(el => el.classList.remove('active'));

            // 2. Add active to clicked
            item.classList.add('active');

            // 3. Show target section
            const targetId = item.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Submenu Toggle (Class Board)
    const classBoardToggle = document.querySelector('.submenu-toggle');
    const submenu = document.querySelector('.submenu');

    if (classBoardToggle) {
        classBoardToggle.addEventListener('click', (e) => {
            e.preventDefault();
            classBoardToggle.classList.toggle('open');
            submenu.classList.toggle('open');
        });
    }

    // Submenu Items (Class Rooms)
    const classItems = document.querySelectorAll('.submenu-item');
    classItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active from all nav items
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.submenu-item').forEach(el => el.classList.remove('active'));

            // Set active
            item.classList.add('active');
            classBoardToggle.classList.add('active'); // Keep parent active

            // Show Board Section
            showSection('class-board');

            // Update Board Title dynamically
            const className = item.getAttribute('data-class');
            document.getElementById('current-class-title').textContent = `${className} 학급 게시판`;
        });
    });

    function showSection(id) {
        // Hide all
        sections.forEach(sec => sec.classList.remove('active'));

        // Show target
        const target = document.getElementById(id);
        if (target) {
            target.classList.add('active');
            window.scrollTo(0, 0);
        }
    }

    // Tab Logic for Planner (retained)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
