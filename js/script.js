let tarefas = [{
    id: 1,
    titulo: "Exemplo de tarefa",
    concluida: false
  }];
  
  // Exibir as tarefas
  function exibirTarefas() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';  
  
    tarefas.forEach(tarefa => {
      const li = document.createElement('li');
      
      // Botão concluido
      const statusBotao = tarefa.concluida ? 'Concluído' : 'Concluir';
  
      li.innerHTML = `
        <span style="text-decoration: ${tarefa.concluida ? 'line-through' : 'none'}">${tarefa.titulo}</span>
        <button onclick="concluirTarefa(${tarefa.id})">${statusBotao}</button>
      `;
      listaTarefas.appendChild(li);
    });
  }
  
  // Adicionar evento de submit no formulário
  document.getElementById('formAdicionarTarefa').addEventListener('submit', (event) => {
    event.preventDefault();  // Impede o envio do formulário
  
    const tarefaInput = document.getElementById('tarefaInput');
    const novaTarefa = {
      id: tarefas.length + 1,  
      titulo: tarefaInput.value,
      concluida: false
    };
    tarefas = [...tarefas, novaTarefa];  // Usando spread para adicinar tarefa
    tarefaInput.value = '';  // Limpa o input
    exibirTarefas();  // Exibe a lista de tarefas
    alert('Tarefa adicionada com sucesso!');  // Mensagem de sucesso
  });
  
  // Marca a tarefa como concluída
  function concluirTarefa(id) {
    tarefas = tarefas.map(tarefa => 
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    exibirTarefas();  // Atualiza a lista de tarefas
  }
  
  // Filtrar tarefas pendentes
  document.getElementById('filtrarPendentesBtn').addEventListener('click', () => {
    const pendentes = tarefas.filter(tarefa => !tarefa.concluida);
    exibirTarefasFiltradas(pendentes);
  });
  
  function exibirTarefasFiltradas(tarefasFiltradas) {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';
  
    tarefasFiltradas.forEach(tarefa => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${tarefa.titulo}</span>
        <button onclick="concluirTarefa(${tarefa.id})">Concluir</button>
      `;
      listaTarefas.appendChild(li);
    });
  }
  