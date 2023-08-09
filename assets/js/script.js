'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
const navBar = document.querySelector(".navbar");
const galleryOverlay = document.querySelector(".gallery-overlay");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
        const galleryContent = document.querySelector('.gallery-content');
        const galleryImages = document.querySelectorAll('.gallery-img');

        gsap.fromTo(galleryImages, {
          y: 100}, {
          duration: 1,
          ease: "back",
          y: 0,
          stagger: 0.2,});

        if (this.innerHTML.toLowerCase() === "gallery" && window.matchMedia("(min-width: 1024px)").matches) {
          navBar.classList.add("gallery");
        } else {
          navBar.classList.remove("gallery");
        }
        if (this.innerHTML.toLowerCase() === "gallery" && window.matchMedia("(min-width: 320px)").matches) {
          sidebar.classList.add("hide");
          galleryOverlay.classList.add("active");
          
        } else {
          sidebar.classList.remove("hide");
          galleryOverlay.classList.remove("active");
        }
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
        
      }
    }
  });
}

// Get references to elements
const galleryImages = document.querySelectorAll('.gallery-img');

// Options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5, // Trigger when at least 50% of the image is in the viewport
};

// Create the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const imgUrl = entry.target.src;
      galleryOverlay.style.backgroundImage = `url(${imgUrl})`;
    }
  });
}, options);

// Observe each gallery image
galleryImages.forEach(image => {
  observer.observe(image);
});

// Use ScrollTrigger to scale the background image
ScrollTrigger.create({
  trigger: galleryOverlay,
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: self => {
    const progress = self.progress; // Progress value between 0 and 1
    const scale = 1 + progress * 2; // Adjust the scale factor as needed

    // Apply the scaling to the background image
    galleryOverlay.style.transform = `scale(${scale})`;
  },
});
