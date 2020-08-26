const txtInput = document.querySelector('.txtInput');
const btnClick = document.querySelector('.btnSubmit');
const divList = document.querySelector('.list-afazeres');

function addItem (e) {
    e.preventDefault();
    let itemRotina = txtInput.value;

    let lista = document.createElement("div");
    let btnDelet = document.createElement("button");

    lista.classList.add('divLista')
    lista.innerHTML = itemRotina;
    btnDelet.innerHTML = "Excluir"

    divList.appendChild(lista);
    lista.appendChild(btnDelet);


    function excluir () {
        divList.removeChild(lista);
        lista.removeChild(btnDelet);
    }

    btnDelet.addEventListener('click', excluir)
}

btnClick.addEventListener('click', addItem)