import Database from "better-sqlite3";
import express from "express";
import cors from "cors";

const db = new Database("database.db");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.json("You are in my root route");
});

app.get("/messages", (request, response) => {
  const getMessage = db.prepare(`SELECT * FROM messages`).all();
  response.json(getMessage);
});

app.post("/messages", (request, response) => {
  const name = request.body.username;
  const message = request.body.message;
  const createMessage = db
    .prepare(`INSERT INTO messages (username, message) VALUES (?,?)`)
    .run(name, message);
});

app.listen(8080, () => {
  console.log("the server is listening to port 8080");
});
