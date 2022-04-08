/* <label class="itemToDo"> 
            <input type="checkbox">
            <span class="checkmark"> </span>
            <div class="texto">Teste </div>
            <input type="button" value="X">
            </label> */




let banco = [
    {
        tarefa:"netflix" ,
        status: ""
    }
]



const criarTarefa = (tarefa, status) => {
    const item = document.createElement('label')
    item.classList.add('itemToDo')
    item.innerHTML = `
    <input type=${ status }>
    <span class="checkmark"> </span>
    <div class="texto">${ tarefa }</div>
    <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item)
}

const addItem = () => {
    banco.forEach(item => criarTarefa(item.tarefa, item.status))

}

document.getElementById('enter').addEventListener()

































