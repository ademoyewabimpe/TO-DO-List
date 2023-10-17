// function addTask(){
//     const input = document.getElementById("to-do");
//     const text =input.value.trim();

//     if (text !== "") {
//         const list = document.getElementById("list");
//         const listItem = document.createElement("li");
//         listItem.textContent = text;
//         list.appendChild(listItem);
//         input.value = "";
//     }
// }

function validateForm(){
    let form = document.forms["bimz"]["bim"].value;
    if (form == ""){
        alert("Please write something!");
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("to-do");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${taskText} <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);

            taskInput.value = "";

            const deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});


