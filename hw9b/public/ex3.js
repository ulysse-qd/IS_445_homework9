const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  fetch('/articles', {
    method: 'POST',
    body: formData
  })
    .then(res => res.text())
    .then(res => document.querySelector('#result').innerHTML = res)
    .catch(err => console.log(err));
});