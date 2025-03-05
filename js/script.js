const tarefas = [
    { id: 1, titulo: "Tarefa Inicial", concluida: false}
]

document.getElementById("addTarefa").addEventListener("click", () => {
    const tarefaInput = document.getElementById("tarefaInput");
    const titulo = tarefaInput.trim();
    if (!titulo) return alert("Digite uma tarefa!");
})

const novaTarefa = {id: tarefas.length + 1, titulo, concluida: false};
tarefas.push(novaTarefa);
tarefaInput.value = "";
alert("Tarefa adicionada com sucesso!");
atualizarTarefas();