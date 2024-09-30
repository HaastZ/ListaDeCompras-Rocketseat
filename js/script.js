const input = document.getElementById("value-user")
const button = document.getElementById("button")
const list = document.querySelector("ul")

function AddAndRemoveItem(item) {
    let novoItem = document.createElement('li')
    novoItem.innerHTML = `<p>${item}</p> <img src="./assets/icons/icon delete.svg" alt="">`

    // Adiciona evento de clique à imagem de remoção
    const img = novoItem.querySelector('img')

    img.addEventListener('click', () => {
        novoItem.classList.add('remover')
    })

    return novoItem
}


button.addEventListener("click", () => {
    if(input.value !== ""){
        list.append(AddAndRemoveItem(input.value))
        input.value = "";
        
    }
    else
        alert("Escreva algo para adicionar na lista")
})