//Selectors

const dataButton = document.querySelector(".data-button");
const dataList = document.querySelector('.data-list');


//Event Listeners

dataButton.addEventListener('click', fetchCat)

//Functions
//hoisting - functions that are defined as functions that can be seen earlier - if this was changed to const => then the func would have to be above the event listener 
function fetchCat(){
  fetch(`https://catfact.ninja/fact`)
  .then(response => response.json())
  .then(data => {
    const catData = data.fact
    const fact = document.createElement('li')
    fact.innerText = catData
    dataList.appendChild(fact)
  })
}

fetchCat()
// setInterval(fetchCat,2000)


