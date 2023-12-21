import Database from "better-sqlite3";

const db = new Database("database.db");

try {
  // SQL command to delete rows where both `username` and `message` are empty strings
  const deleteQuery = `
DELETE FROM messages
WHERE username = ''
AND message = '';
`;

  // Execute the delete command
  const changes = db.exec(deleteQuery);
  console.log(`Deleted ${changes} rows with empty username and message.`);
} catch (error) {
  console.error("Error during the process:", error.message);
} finally {
  // Close the database connection
  db.close();
}
