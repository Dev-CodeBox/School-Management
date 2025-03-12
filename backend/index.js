const express = require("express");
const cors = require("cors");
const app = express();
const schoolRoutes = require("./routes/school.routes");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/school", schoolRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (request, response) => {
  response.send(
    `<h1 style="text-align:center;">Backend is Running and this is '/' Route</h1>`
  );
});
