console.log("JSが読み込まれています");
const headerImage = document.querySelector('.headerImage');
const images = document.querySelectorAll('.headerImage img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 1;
let slideWidth;

const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

headerImage.appendChild(firstClone);
headerImage.insertBefore(lastClone, images[0]);

const allSlides = document.querySelectorAll('.headerImage img');
const total = allSlides.length;

function updateSlideWidth() {
  slideWidth = allSlides[0].offsetWidth;
}

function setInitialPosition() {
  headerImage.style.transform = `translateX(${-slideWidth * index}px)`;
}

function showSlide() {
  headerImage.style.transition = "transform 1s ease-in-out";
  headerImage.style.transform = `translateX(${-slideWidth * index}px)`;
}

headerImage.addEventListener('transitionend', () => {
  if (allSlides[index].isSameNode(firstClone)) {
    headerImage.style.transition = "none";
    index = 1;
    headerImage.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (allSlides[index].isSameNode(lastClone)) {
    headerImage.style.transition = "none";
    index = total - 2;
    headerImage.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

function nextSlide() {
  if (index >= total - 1) return;
  index++;
  showSlide();
}

function prevSlide() {
  if (index <= 0) return;
  index--;
  showSlide();
}

let autoSlide = setInterval(nextSlide, 3500);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3500);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

window.addEventListener('load', () => {
  updateSlideWidth();

  headerImage.style.transition = "none";
  setInitialPosition();

  setTimeout(() => {
    headerImage.style.transition = "transform 1s ease-in-out";
  }, 100);
});
window.addEventListener('resize', () => {
  updateSlideWidth();
  setInitialPosition();
});