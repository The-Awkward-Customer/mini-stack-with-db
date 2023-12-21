import Database from "better-sqlite3";

const db = new Database("database.db");

db.exec(`CREATE TABLE IF NOT EXISTS messages(
    id INT AUTOINCREMENT,
    username TEXT,
    message TEXT
)`);

const insertNewMessage = db.prepare(
  `INSERT INTO messages (username, message) VALUES (?, ?)`
);

insertNewMessage.run("Pete", "Hello!");
