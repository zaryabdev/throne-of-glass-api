import axios from "axios";
import cheerio from "cheerio";
import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config();

const connectionString = process.env.DATABASE_URL || "";
const connection = mysql.createConnection(connectionString);
connection.connect();

console.log("seedme started");

const loadCharacters = async () => {
    const sql = `
        INSERT INTO Characters (id, name, species, image)
        VALUES ( 3, 'Zaryab', 'Developer', 'image.png')
        `;

    connection.query(sql, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("Data entered successfully!");
    });
};

loadCharacters();
