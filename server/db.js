import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Duc@1340",
  database: "my-blog-app",
});
