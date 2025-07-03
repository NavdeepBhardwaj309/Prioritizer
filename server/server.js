// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/api/tasks', (req, res) => {
//     console.log("task api called");
//   res.json([{ id: 1, title: 'Sample Tasking', completed: true }]);
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");//old
const cors = require("cors");//old
require("dotenv").config(); //new lin added comapred t prev code

const app = express();//old
app.use(cors());//old
app.use(express.json());//old

const db = require("./models");   //new
db.sequelize.sync().then(() => { //new
  console.log("✔️ Synced database");
});

app.get("/", (req, res) => {
  res.send("Server is running and DB connected");
});

// Use task routes
const taskRoutes = require("./routes/task.routes");
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000; //old
app.listen(PORT, () => { //old
  console.log(`🚀 Server running on port ${PORT}`);
});