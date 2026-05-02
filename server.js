const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("LeadFlow CRM Backend Running");
});

app.get("/leads", (req, res) => {
  const leads = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "New Lead",
    },
    {
      id: 2,
      name: "Sharmila",
      email: "sharmila@gmail.com",
      status: "Contacted",
    },
  ];

  res.json(leads);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
