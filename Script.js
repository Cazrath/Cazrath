document.addEventListener('DOMContentLoaded', () => {
  const gate = document.getElementById('gate');
  const mainContent = document.getElementById('main-content');
  const input = document.getElementById('access-code');
  const button = document.getElementById('submit-code');

  button.addEventListener('click', () => {
    const code = input.value.trim();
    if (code === '2005') {
      gate.style.display = 'none';
      mainContent.style.display = 'block';
    } else {
      alert('Invalid access code.');
    }
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      button.click();
    }
  });
});
