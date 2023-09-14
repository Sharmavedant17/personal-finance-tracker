import React from "react";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { renderToString } from "react-dom/server";
import  Dashboard from "../src/pages/dashboard/Dashboard";

const appRoutes = require("./routes/appRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/app", appRoutes);

app.use(express.static(path.join(__dirname, "../build")));

app.get("/dashboard/:slug", async (req, res) => {
  const dashboard = renderToString(
    <div>
      <Dashboard data={req.params.slug}/>
    </div>
  );
  return res.send(`
    <html>
      <head>
      </head>
      <body>
        <div id="root">
          ${dashboard}
        </div>
      </body>
    </html>
  `);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const PORT = process.env.port || 5003;
const mongoDB = `mongodb+srv://vedantsharma170598:JGTqUkXYimMD3dP3@vedant.9lkgesg.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => console.log("Server is running at port ", PORT))
  )
  .catch((err) => console.log("Error in running server ", err));

