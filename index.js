const diceButton = document.querySelector('.dice-button')

// // Get user with id 2
// fetch('https://api.adviceslip.com/advice')
//   .then((response) => response.json())
//   .then((data) => console.log(data))

async function getData() {
  try {
    const res = await fetch('https://api.adviceslip.com/advice')
    const jsonResult = await res.json()
    displayResult(jsonResult)
  } catch (error) {
    console.log(error)
  }  
}


const displayResult = (data) => {
  const adviceTitle = document.querySelector('.advice-title')
  const id = data.slip.id
  console.log(typeof id)
  adviceTitle.textContent = id.toString()
}



getData()

diceButton.addEventListener('click', getData)