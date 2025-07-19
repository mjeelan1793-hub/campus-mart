
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const items = [
  {
    title: "Cycle",
    price: "2000",
    description: "Good condition cycle, used for 6 months.",
    contact: "9876543210",
    image: "https://via.placeholder.com/280x180?text=Cycle"
  },
  {
    title: "Engineering Books",
    price: "500",
    description: "Set of second year engineering books.",
    contact: "9876543211",
    image: "https://via.placeholder.com/280x180?text=Books"
  },
  {
    title: "Scientific Calculator",
    price: "300",
    description: "Casio fx-991ES Plus in perfect condition.",
    contact: "9876543212",
    image: "https://via.placeholder.com/280x180?text=Calculator"
  }
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
