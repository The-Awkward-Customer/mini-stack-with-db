import Database from "better-sqlite3";

const db = new Database("database.db");

const migrateData = db.transaction(() => {
  db.exec(`
CREATE TABLE new_messages(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    message TEXT
)
`);

  db.exec(`
INSERT INTO new_messages (username, message)
    SELECT username, message
    FROM messages;
`);

  db.exec(`DROP TABLE messages;`);

  db.exec(`ALTER TABLE new_messages RENAME TO messages;`);

  console.log("ID column added successfully, and data migrated.");
});

try {
  migrateData();
} catch (error) {
  console.error("Error during the process:", error.message);
} finally {
  // Close the database connection
  db.close();
}
