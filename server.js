const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
const config = require("config");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get("mongoURI");

// Connect to Mongo (local)
mongoose
  .connect("mongodb://localhost/test", { useNewUrlParser: true });

// Connect to Mongo
// mongoose
//   .connect(db, { useNewUrlParser: true, useCreateIndex: true })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch(err => console.log(err));

// Use Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/items", require("./routes/items"));

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler function
app.use((err, req, res, next) => {
  const error = process.env.NODE_ENV === "development" ? err : {};
  const status = err.status || 500;

  // Respond to client
  res.status(status).json({
    msg: error.message
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);