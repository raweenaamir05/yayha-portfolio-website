// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const scrollContainer = document.getElementById("resultScroll");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

const cardWidth = 280; // card + gap
const scrollAmount = 3 * cardWidth;

// Scroll right
scrollRightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// Scroll left
scrollLeftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

// Show/hide arrows based on scroll position
scrollContainer.addEventListener("scroll", () => {
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  if (scrollContainer.scrollLeft <= 0) {
    scrollLeftBtn.style.display = "none";
  } else {
    scrollLeftBtn.style.display = "block";
  }

  if (scrollContainer.scrollLeft >= maxScrollLeft - 5) {
    scrollRightBtn.style.display = "none";
  } else {
    scrollRightBtn.style.display = "block";
  }
});

// Initial state
window.addEventListener("load", () => {
  scrollLeftBtn.style.display = "none"; // at start
});
