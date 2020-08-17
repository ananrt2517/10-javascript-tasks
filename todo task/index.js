let tasks = [
  {
    id: "1",
    title: "task1",
    note: "ovo je prvi task",
  },
  {
    id: "2",
    title: "task2",
    note: "ovo je prvi task",
  },
  {
    id: "3",
    title: "task3",
    note: "ovo je prvi task",
  },
];

const show = document.querySelector(".prikaz");
const addNote = document.querySelector("#addNote");
const del = document.querySelector("#deleteNote");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");
const inputTitle = document.querySelector("#input-title");
const inputNote = document.querySelector("#input-note");
const submitBtn = document.querySelector(".submit");
const closeDrawer = document.querySelector(".close-drawer");
const drawer = document.querySelector(".drawer");
const editTitleVal = document.querySelector(".edit-title");
const editNoteVal = document.querySelector(".edit-note");
const submitEdit = document.querySelector(".submit-edit");

function showJson() {
  for (let item of tasks) {
    show.innerHTML += `
          <div class="list-item">
            <div>Title: ${item.title}</div>
            <div style="margin-bottom: 8px;">Note: ${item.note}</div>
            <button onclick="deleteNote(${item.id})" class="delete-btn">delete</button>
            <button onclick="editNote(${item.id})" class="edit-btn">edit</button><hr>
          </div>
            `;
  }
}
showJson();

function controlModal(isOpened) {
  if (isOpened) {
    modalBg.classList.add("modal-active");
    return;
  }

  modalBg.classList.remove("modal-active");
}

addNote.addEventListener("click", () => controlModal(true));

modalClose.addEventListener("click", () => controlModal(false));

submitBtn.addEventListener("click", function () {
  let lastObject = tasks[tasks.length - 1];
  let feed = {
    id: parseInt(lastObject.id) + 1,
    title: inputTitle.value,
    note: inputNote.value,
  };
  tasks.push(feed);
  show.innerHTML = "";
  showJson();
  controlModal(false);
});

function deleteNote(id) {
  let newList = [];
  for (let item of tasks) {
    if (item.id != id) {
      newList.push(item);
    }
  }
  tasks = newList;
  show.innerHTML = "";

  showJson();
}

function editNote(id) {
  drawer.classList.add("show-drawer");

  for (let item of tasks) {
    if (item.id == id) {
      editTitleVal.value = item.title;
      editNoteVal.value = item.note;
    }
  }
  submitEdit.addEventListener("click", () => submitValue(id));
}

closeDrawer.addEventListener("click", function () {
  drawer.classList.remove("show-drawer");
});

function submitValue(id) {
  let newArray = [];

  for (let item of tasks) {
    if (item.id == id) {
      item.title = editTitleVal.value;
      item.note = editNoteVal.value;
    }
    newArray.push(item);
  }
  tasks = newArray;
  show.innerHTML = "";
  showJson();
  drawer.classList.remove("show-drawer");
}
