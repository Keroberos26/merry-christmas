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

const box = document.getElementById('box');
box.addEventListener('click', () => {
  var text = document.querySelector('h1');
  text.textContent = "Merry Christmas"
  box.classList.add('open-animation');
});
