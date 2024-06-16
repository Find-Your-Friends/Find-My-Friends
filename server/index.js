require("dotenv").config();
const path = require("path");
const express = require("express");
const cron = require("node-cron");

const handleCookieSessions = require("./middleware/handleCookieSessions");
const logRoutes = require("./middleware/logRoutes");

const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const postControllers = require("./controllers/postControllers");

const app = express();

// middleware
app.use(handleCookieSessions); // adds a session property to each request representing the cookie
app.use(logRoutes); // print information about each incoming request
app.use(express.json()); // parse incoming request bodies as JSON
app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Serve static assets from the dist folder of the frontend

app.use("/api", authRouter);
app.use("/api/users", userRouter);

// Requests meant for the API will be sent along to the router.
// For all other requests, send back the index.html file in the dist folder.
app.get("*", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) return next();
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
<<<<<<< HEAD
// app.get("*", (req, res) => {
//   if (req.originalUrl.startsWith("/api")) {
//     return res.status(404).send('API route not found');
//   }
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
// });
=======

cron.schedule("* * * * *", async () => {
  try {
    console.log("Running active status update task");
    await postControllers.updateActiveStatus();
  } catch (error) {
    console.error("Error running active status update task:", error);
  }
});

>>>>>>> 046cc284bb248a3b930a3eabf9e42f0fb64548f9
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "dist/index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });
