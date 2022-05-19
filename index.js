const diceButton = document.querySelector('.dice-button')


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
  const advice = document.querySelector('.advice')
  const id = data.slip.id
  const content = data.slip.advice
  adviceTitle.textContent = `advice #${id.toString()}`
  advice.textContent = `"${content}"`
}



getData()

diceButton.addEventListener('click', getData)