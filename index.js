// Get user with id 2
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => console.log(data))