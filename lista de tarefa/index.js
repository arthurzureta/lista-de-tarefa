var inputTarefas = document.getElementById("input-tarefas")
var button = document.getElementById("btn-add")
var ul = document.getElementById("lista-tarefas")
var idTarefa = 0

button.addEventListener("click", () => {
    if (inputTarefas.value != "") {
        idTarefa++;
        var li = document.createElement("li");
        li.id = idTarefa;
        li.innerHTML = `${inputTarefas.value} <button onclick="removerTarefa(event)" name=${idTarefa}>Remover</button>`;
        ul.appendChild(li);
        inputTarefas.value = "";

    }
    else {
        alert("digite uma tarefa");
    }
});

inputTarefas.addEventListener("keypress", (event) => {
    console.log(event.key)
    if (event.key == "Enter") {
        if (inputTarefas.value != "") {
            idTarefa++;
            var li = document.createElement("li");
            li.id = idTarefa;
            li.innerHTML = `${inputTarefas.value} <button onclick="removerTarefa(event)" name=${idTarefa}>Remover</button>`;
            ul.appendChild(li);
            inputTarefas.value = "";

        }
        else {
            alert("digite uma tarefa");
        }
    }

})


function removerTarefa(event) {
    var elementoParaRemover = document.getElementById(event.target.name)
    elementoParaRemover.remove();
}