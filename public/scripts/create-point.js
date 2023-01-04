function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  // .then( (res) => {return res.json })
  .then( res => res.json() )
  .then( states => {
    for ( const state of states ) {
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
  })
}

populateUFs();

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");

  const ufValue = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = "<option value>Selecione a cidade</option>";
  citySelect.disabled - true;

  fetch(url)
  // .then( (res) => {return res.json })
  .then( res => res.json() )
  .then( cities => {
    for ( const city of cities ) {
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }

    citySelect.disabled = false;
  })
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)


// Collect items
// Select all li's

const itemsToCollect = document.querySelectorAll(".items-grid li");

for ( const item of itemsToCollect ) {
  item.addEventListener("click", handleSelectedItem);
}

const collectedItems = document.querySelector("input[name=items");

let selectedItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;
  // add or remove class with javascript
  itemLi.classList.toggle("selected");

  const itemId = event.target.dataset.id

  // console.log('ITEM ID', itemId)

  // verify for selected items and take the selected items
  // if is selected, take the selected items

  const alreadySelected = selectedItems.findIndex( item => {
    const itemFound = item === itemId; // it's going to be true or false
    return itemFound;
  })

  // if is selected remove selected item
  if( alreadySelected >= 0 ) {
    // remove selected item
    const filteredItems = selectedItems.filter( item => {
      const itemIsDiferent = item != itemId; // false
      return itemIsDiferent;
    })
    selectedItems = filteredItems;
  } else {
    // if is not selected add selected item
    selectedItems.push( itemId );
  }

  // console.log('selectedItems: ', selectedItems); 

  // update hidden input with selected item
  collectedItems.value = selectedItems;
}