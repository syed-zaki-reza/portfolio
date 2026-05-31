document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("resumeModal");
  const openBtn = document.getElementById("openResumeModal");
  const closeBtn = document.getElementById("closeResumeModal");
  const downloadBtn = document.getElementById("downloadPdfBtn");
  
  // Open Modal
  if (openBtn) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });
  }

  // Close Modal Function
  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Close when clicking outside content
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Download/Print PDF logic
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      window.open('./pages/Single Page Resume.html?print=true', '_blank');
    });
  }

  // Sticky Header Effect
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Parallax Hero Effect
  const heroContent = document.querySelector('.hero-content');
  const heroMedia = document.querySelector('.hero-media');
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    if (scrollPos < 600) { // Only animate when in view
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollPos * 0.3}px) scale(${1 - scrollPos * 0.0005})`;
        heroContent.style.opacity = 1 - scrollPos * 0.002;
      }
      if (heroMedia) {
        heroMedia.style.transform = `translateY(${scrollPos * 0.15}px)`;
      }
    }
  });

  // Advanced Intersection Observer for Scroll Animations
  const slideLeftElements = document.querySelectorAll('.slide-in-left');
  const slideRightElements = document.querySelectorAll('.slide-in-right');
  const fadeInUpElements = document.querySelectorAll('.fade-in-up');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  slideLeftElements.forEach(el => observer.observe(el));
  slideRightElements.forEach(el => observer.observe(el));
  fadeInUpElements.forEach(el => observer.observe(el));
});