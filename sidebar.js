const sidebarHeight = document.querySelector('.sidebar').clientHeight;
const collapsedItems = document.querySelectorAll('.navigation__item--collapse');
collapsedItems.forEach(el => el.style.height = `${sidebarHeight}px`);