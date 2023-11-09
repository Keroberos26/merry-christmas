document.addEventListener('DOMContentLoaded', function () {
  const snowflakesContainer = document.querySelector('.snowflakes');

  for (let i = 0; i < 75; i++) {
    const snowflake = document.createElement('i');
    snowflake.className = 'fa-regular fa-snowflake';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 3}s`;

    snowflakesContainer.appendChild(snowflake);
  }
});

var count = 0;
const box = document.getElementById('box');
box.addEventListener('click', () => {
  count++;
  if (count < 3) {
    box.classList.add('shake-animation');
    setTimeout(() => {
      box.classList.remove('shake-animation');
    }, 500);
  }
});
