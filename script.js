// Example: Click on a grid item to alert its number
document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked box ${item.textContent}`);
  });
});
