const textArea = document.querySelector("#textArea");
const addBtn = document.querySelector("#addbtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
  let taskText = textArea.value;

  if (taskText.trim() === "") {
    alert("Please write a task first");
    return;
  } else {
    const li = document.createElement("li");
    li.innerText = taskText;
    li.classList.add("task");

    li.innerHTML = `

    <span class="task-text">${taskText}</span>
            <div class="actions">
                <button class="delete">Delete</button>
            </div>
  `;
    taskList.appendChild(li);

    const deleteBtn = li.querySelector(".delete");
    const editBox = li.querySelector(".task-text");

    editBox.addEventListener("dblclick", () => {
      editBox.contentEditable = true;
      editBox.focus();
    });

    editBox.addEventListener("blur", () => {
      editBox.contentEditable = false;
    });

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    textArea.value = "";
  }
});
