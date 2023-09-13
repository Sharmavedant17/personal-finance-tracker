import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import path from "path";
import  Dashboard from "../src/pages/dashboard/Dashboard";


// const db = require("./config/mongoose");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/users", userRoutes);

// Serve static files from the 'build' directory for client-side rendering
// app.use(express.static(path.join(__dirname, "../../build"), { index: false }));

app.get("/healthcheck", function (req, res) {
  res.send("Ok done!");
});

// Server-side rendering for the dashboard route using EJS template
// ...

// Server-side rendering for the dashboard route using EJS template

// Serve static files from the 'build' directory for client-side rendering
app.use(express.static(path.join(__dirname, "../build")));

// Server-side rendering for the dashboard route using EJS template
app.get("/dashboard/:slug", async (req, res) => {
  console.log("req.params--------->", req);
  const dashboardHtml = renderToString(
    <div>
      <Dashboard data={req.params.slug}/>
    </div>
  );
  return res.send(`
    <html>
      <head>
        <!-- You don't need to manually include the CSS file here -->
      </head>
      <body>
        <div id="root">
          ${dashboardHtml}
        </div>
      </body>
    </html>
  `);
});


// ...


// Client-side rendering for other routes
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

    // app.listen(PORT, () => console.log("Server is running at port ", PORT))
