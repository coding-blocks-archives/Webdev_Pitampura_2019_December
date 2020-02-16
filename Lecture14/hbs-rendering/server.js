const express = require("express");
const app = express();

app.set("view engine", "hbs");

let todos = [
  { name: "first task", done: false },
  { name: "another task", done: true },
  { name: "third task", done: true },
  { name: "one more task", done: false }
];

app.use((req, res, next) => {
  setTimeout(next, 3000);
});

// These are middlewares that help parse the req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("todo", {
    title: "Todo List",
    todos: todos
  });
});

app.post("/add", (req, res) => {
  console.log("POST /add");
  console.log(req.body);
  if (req.body.newtask) {
    todos.push({
      name: req.body.newtask,
      done: req.body.completed == "on"
    });
  }
  res.redirect("/");
});

app.get("/api/todos", (req, res) => {
  res.send(todos);
});

app.post("/api/add", (req, res) => {
  console.log("POST /api/add");
  console.log(req.body);
  if (req.body.newtask) {
    todos.push({
      name: req.body.newtask,
      done: req.body.completed == "true"
    });
  }
  res.send(todos);
});

app.listen(5432, () => {
  console.log("started on http://localhost:5432");
});
