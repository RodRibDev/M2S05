const inputElement = document.querySelector('input');
const buttonAdd = document.querySelector('.button-add');
const list = document.querySelector('ul');
const buttonClear = document.querySelector('.button-clear');
const noticiaPrincipal = document.querySelector('.title-news-today')


function recuperarList() {
    const listaStorage = localStorage.getItem('meus-interesses');

    if (listaStorage) {
        const listaFormated = JSON.parse(listaStorage);
        
        list.innerHTML = "";
        
        listaFormated.forEach(item => {
            const liElement = document.createElement('li');
            liElement.innerHTML = item;
            list.appendChild(liElement);
        });
    }
}

buttonAdd.addEventListener('click', () => {
    const value = inputElement.value;

    if (value) {
        const listaStorage = localStorage.getItem('meus-interesses');

        if (listaStorage) {
            const listaFormated = JSON.parse(listaStorage);
            listaFormated.push(value);
            localStorage.setItem('meus-interesses', JSON.stringify(listaFormated));
        
        } else {
            const novaLista = [value];
            localStorage.setItem('meus-interesses', JSON.stringify(novaLista));
        }
        recuperarList();
    }

    inputElement.value = "";
});

buttonClear.addEventListener('click', () => {
    localStorage.removeItem('meus-interesses');
    list.innerHTML = "";
    recuperarList();
});

setInterval(recuperarList, 1000)

async function pegarNoticia() {
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
    const noticia = await resposta.json()
    const noticiaFetch = noticia.items[0].titulo
    noticiaPrincipal.innerHTML = noticiaFetch

}

pegarNoticia()