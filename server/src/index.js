import app from "./app";
import "./db";

app.listen(app.get("PORT"));
console.log("Server is running on port: ", app.get("PORT"));
