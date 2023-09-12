const navBar = document.getElementById("navbar");
const supportSiteBtn = document.querySelector(".support-site-button");
const navList = document.querySelector(".nav-list");

function updateBreadcrumb(matches) {
  if (matches) {
    navBar.classList.add("breadcrumb");
  } else {
    navBar.classList.remove("breadcrumb"); 
  }
}

const mediaQueryMobile = window.matchMedia('(max-width: 768px)');
mediaQueryMobile.addEventListener('change', (e) => updateBreadcrumb(e));

if (window.innerWidth < 769) {
  navBar.classList.add("breadcrumb");
} else {
  navBar.classList.remove("breadcrumb"); 
}

let navBarIsOpen = false;

function toggleOpenBreadCrumb() {
  navBarIsOpen = !navBarIsOpen;
  if (window.innerWidth >= 769) return;
  if (!navBarIsOpen) {
    navList.style.position = "absolute";
    navList.style.opacity = "0";
  } else {
    navList.style.position = "static";
    navList.style.opacity = "1";
  }
}

toggleOpenBreadCrumb();
supportSiteBtn.addEventListener("click", toggleOpenBreadCrumb);



