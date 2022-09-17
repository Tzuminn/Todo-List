// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const doneTodo = document.querySelector("#done-todo");
const taskSection = document.querySelector("#tasks-section");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
// 新增Todo清單
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

// 新增Done清單
function addDoneItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="done" class="checked">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  doneTodo.appendChild(newItem);
}

// Create
// 用trim()刪除空格  防止產生空白 todo
addBtn.addEventListener("click", function () {
  const inputValue = input.value;
  if (inputValue.trim().length > 0) {
    addItem(inputValue);
    // 輸入成功清空格子
    input.value = "";
  } else {
    input.value = "";
  }
});
// 按下 Enter 鍵時，可以新增 to-do
// 不會按到按鈕，事件監聽器改綁在input上
input.addEventListener("keydown", function (event) {
  const inputValue = input.value;

  if (inputValue.trim().length > 0 && event.key === "Enter") {
    addItem(inputValue);
    input.value = "";
  }
});

// Delete and check
// 新增功能 點標題會在Todo和Done移動
taskSection.addEventListener("click", function (event) {
  const target = event.target;
  let parentElement = target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    if (target.classList.contains("checked")) {
      addItem(target.innerText);
      parentElement.remove();
    } else {
      addDoneItem(target.innerText);
      parentElement.remove();
    }
  }
});
