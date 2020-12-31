// Selecionar Estado e Cidade
function populateUFs(){
    const stateSelect = document.querySelector("select[name=state]");
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res)=>{return res.json()})
    .then( states => {
        for( state of states){
            stateSelect.innerHTML += `<option value ="${state.id}">${state.nome}</option>`
        }
    })
}
populateUFs();
function getCities(event){
    const citySelect = document.querySelector("[name=city]");
    const stateInput = document.querySelector("[name=uf]");
    const ufValue = event.target.value;
    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
    
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>";
    citySelect.disabled = true;
    fetch(url)
    .then((res)=>{return res.json()})
    .then( cities => {
        for( city of cities){
            citySelect.innerHTML += `<option value ="${city.nome}">${city.nome}</option>`;
        }
        citySelect.disabled = false;
    })
}
document.querySelector('select[name=state').addEventListener("change",getCities);

// ---------------------------------------------------------------------------------------------------------------------------
// Itens de Coleta
const itensCollect = document.querySelectorAll("#itens-grid li");
for(const item of itensCollect){
    item.addEventListener("click",handleSelectedItem);
}
const collectedItems = document.querySelector("input[name=items]");
let selectedItems = [];
function handleSelectedItem(event){
    const itemLi =event.target;
    // adicionar e remover classes com js
    itemLi.classList.toggle("selected");
    const itemID = itemLi.dataset.id;
    // console.log(event.target.dataset.id);
    // Verificar se exitem itens selecionados
    const alreadySelected = selectedItems.findIndex(function(indexFound){
        const itemFound = indexFound == itemID;
        return itemFound;
    });
    if(alreadySelected != -1){
        const filterItems = selectedItems.filter(item =>{
            const itemIsDifferent = item != itemID;
            return itemIsDifferent;
        })
        selectedItems = filterItems;
    }else{
        selectedItems.push(itemID);
    }
    collectedItems.value=selectedItems;
}
