/* <label class="itemToDo"> 
            <input type="checkbox">
            <span class="checkmark"> </span>
            <div class="texto">Teste </div>
            <input type="button" value="X">
            </label> */




let banco = [
    // { tarefa:"" , status:"" }
]



const criarTarefa = (tarefa, status, indice) => {
    const item = document.createElement('label')
    item.classList.add('itemToDo')
    item.innerHTML = `
    <input type='checkbox' ${status } data-indice=${indice}>
    <span class="checkmark"> </span>
    <div class="texto">${ tarefa }</div>
    <input type="button" value="X" data-indice=${indice}>
    `
    document.getElementById('todoList').appendChild(item)
}

//Para atualizar a tela.
const getItem = () => {
    limparTela()
    banco.forEach((item, indice) => criarTarefa(item.tarefa, item.status, indice))
}

const limparTela = () => {
    const tela = document.getElementById('todoList')
    while(tela.firstChild){
        tela.removeChild(tela.lastChild)
    }
}

//Atualiza o banco e manda as inormações para a tela
const setItem = (evento) => {
    const tarefa = evento.target.value;
    const tecla =  evento.key;
    
    if(tecla === "Enter"){
        banco.push( {'tarefa': tarefa , 'status': ''} )
        getItem()
        evento.target.value = ''; // limpa a caixa de input para que se possa adicionar uma nova tarefa
    }
    
}

const removerItem = (index) => {
    banco.splice(index, 1);
    getItem()
}

const atualizarItem = (indice) => {
    banco[indice].status = banco[indice].status === '' ? 'checcked' : '';
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice
        removerItem(indice)
    }else if(elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;
        atualizarItem(indice)
    }
}

document.getElementById('enter').addEventListener('keypress', setItem)
document.getElementById('todoList').addEventListener('click', clickItem)





























