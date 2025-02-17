document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname == "/Trek-Web/") {
    window.location.replace("/Trek-Web/index.html");
  }

  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      otherDetail()
      if (window.location.pathname.split('/').pop().includes('index' || '')) {
        initializeSwiper();
      }
      applyActiveClass();
    });

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });
});

function otherDetail() {
  // Mobile navigation
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  if (burger) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });

      burger.classList.toggle("toggle");
    });
  } else {
  }

  // Statistics counter animation
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => startCounting(counter), 1);
    } else {
      counter.innerText = target;
    }
  };

  // Intersection Observer for counter animation
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".counter");
        counters.forEach((counter) => startCounting(counter));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const statsSection = document.querySelector(".statistics");
  if (statsSection) {
    observer.observe(statsSection);
  }

  // Testimonial Read More functionality
  document.querySelectorAll(".read-more").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const testimonial = button.parentElement;
      testimonial.classList.toggle("expanded");
      button.textContent = testimonial.classList.contains("expanded")
        ? "read less"
        : "read more";
    });
  });

  // Gallery Lightbox functionality
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (lightbox) {
    const lightboxImg = lightbox.querySelector("img");
    galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
        const imgSrc = this.querySelector("img").src;
        const imgAlt = this.querySelector("img").alt;
        lightboxImg.src = imgSrc;
        lightboxImg.alt = imgAlt;
        lightbox.classList.add("active");
      });
    });
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });

    // Add keyboard support for closing the lightbox
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("active")) {
        lightbox.classList.remove("active");
      }
    });
  } else {
  }
}

function applyActiveClass() {
  let currentPage = window.location.pathname.split("/").pop() || "index.html";
  let navLinks1 = document.querySelectorAll(".nav-links a");
  navLinks1.forEach((link) => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");
    }
    else if (currentPage === "trek-detail.html" && link.getAttribute('href') == 'treks.html') {
      link.classList.add("active");
    }
    else if (currentPage === "blog-detail.html" && link.getAttribute('href') == 'blog.html') {
      link.classList.add("active");
    }
    else {
      link.classList.remove("active");
    }
  });
}

function initializeSwiper() {
  // Initialize Swiper for hero carousel
  const heroSwiper = new Swiper(".hero-carousel .swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Initialize Typed.js
  const typed = new Typed(".typing-text", {
    strings: ["Adventure", "Excitement", "Nature", "Freedom"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
    showCursor: true,
    // cursorChar: "|"
  });

  // Initialize Swiper for Snow Treks
  const snowTreksSwiper = new Swiper(".snow-treks-swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    },
  });

  // Initialize Swiper for Family Treks
  const familyTreksSwiper = new Swiper(".family-treks-swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    },
  });
}
