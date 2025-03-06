const tarefas = [
    { id: 1, titulo: "Tarefa Inicial", concluida: false}
];

document.getElementById("addTarefa").addEventListener("click", () => {
    const tarefaInput = document.getElementById("tarefaInput");
    const titulo = tarefaInput.trim();
    if (!titulo) return alert("Digite uma tarefa!");
});

// Adicionar nova tarefa
const novaTarefa = {id: tarefas.length + 1, titulo, concluida: false};
tarefas.push(novaTarefa);
tarefaInput.value = "";
alert("Tarefa adicionada com sucesso!");
atualizarTarefas();

// Filtrar tarefas pendentes 
document.getElementById("filtrarPendentes").addEventListener("click", () => {
    const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida);
    atualizarTarefas(tarefasPendentes);
});

// Criar a lista de farefas 
function atualizarTarefas(listaTarefa = tarefas) {
    const listaTarefa = document.getElementById("listaTarefa");
    listaTarefa.innerHTML = "";

    listaTarefa.forEach(({id, titulo, concluida}) => {
        const li = document.createElement("li");
        li.textContent = titulo;
        li.style.textDecoration = concluida ? "line-through" : "none";

        const botaoConcluir = document.createElement("button");
        botaoConcluir.textContent = "Concluir";
        botaoConcluir.addEventListener("click", () => marcarConcluida(id));

        li.appendChild(botaoConcluir);
        listaTarefa.appendChild(li);
    });
}