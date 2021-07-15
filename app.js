const progress = document.querySelector("#progress");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

nextBtn.addEventListener("click", function (e) {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prevBtn.addEventListener("click", function (e) {
  currentActive--;

  if (currentActive <= 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}
