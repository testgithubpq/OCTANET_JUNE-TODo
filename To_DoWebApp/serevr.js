const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const tasks = [];

function showAllTasks() {
       tasks.forEach((value, index) => {
              const div = document.createElement("div");
              div.setAttribute("class", "task");
              const innerdiv = document.createElement("div");
              div.append(innerdiv);

              const p = document.createElement("p");
              p.innerText = value.title;
              innerdiv.append(p);

              const span = document.createElement("span");
              span.innerText = value.description;
              innerdiv.append(span);

              const btn = document.createElement("button");
              btn.setAttribute("class", "deleteBtn");
              btn.innerText = "-";

              div.append(btn);
              container.append(div);
       });
}

form.addEventListener("submit", (e) => {
       e.preventDefault();
       tasks.push({
              title: title.value,
              description: description.value,
       });
       console.log(tasks);
       showAllTasks();
 });