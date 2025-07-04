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
// connecting contact form to google sheets
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxnpZjeWmkqv_gPOMrrjMfyV6vSfuCD9uZIVVOW0sXsH530PWCU4rFIx4IqTiFyOU5w/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

