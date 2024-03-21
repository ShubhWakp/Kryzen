const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000; 

app.use(cors());
app.use(express.json());

const chartData =[
  {
    date: "9 Dec 2023",
    retailPrice: 47.0,
    wholesalePrice: { min: 30.0, max: 32.0 },
    priceAtFarm: { min: 31.0, max: 28.0 },
  },
  {
    date: "10 Dec 2023",
    retailPrice: 56.0,
    wholesalePrice: { min: 35.0, max: 38.0 },
    priceAtFarm: { min: 36.0, max: 34.0 },
  },
  {
    date: "11 Dec 2023",
    retailPrice: 49.0,
    wholesalePrice: { min: 31.0, max: 33.0 },
    priceAtFarm: { min: 32.0, max: 29.0 },
  },
  {
    date: "12 Dec 2023",
    retailPrice: 52.0,
    wholesalePrice: { min: 33.0, max: 35.0 },
    priceAtFarm: { min: 34.0, max: 31.0 },
  },
  {
    date: "13 Dec 2023",
    retailPrice: 50.0,
    wholesalePrice: { min: 32.0, max: 34.0 },
    priceAtFarm: { min: 33.0, max: 30.0 },
  },
  {
    date: "14 Dec 2023",
    retailPrice: 47.0,
    wholesalePrice: { min: 30.0, max: 32.0 },
    priceAtFarm: { min: 31.0, max: 28.0 },
  },
  {
    date: "15 Dec 2023",
    retailPrice: 52.0,
    wholesalePrice: { min: 33.0, max: 35.0 },
    priceAtFarm: { min: 34.0, max: 31.0 },
  },
  {
    date: "16 Dec 2023",
    retailPrice: 46.0,
    wholesalePrice: { min: 29.0, max: 31.0 },
    priceAtFarm: { min: 30.0, max: 28.0 },
  },
  {
    date: "17 Dec 2023",
    retailPrice: 51.0,
    wholesalePrice: { min: 32.0, max: 35.0 },
    priceAtFarm: { min: 33.0, max: 31.0 },
  },
  {
    date: "18 Dec 2023",
    retailPrice: 51.0,
    wholesalePrice: { min: 32.0, max: 35.0 },
    priceAtFarm: { min: 33.0, max: 31.0 },
  },
  {
    date: "19 Dec 2023",
    retailPrice: 47.0,
    wholesalePrice: { min: 30.0, max: 32.0 },
    priceAtFarm: { min: 31.0, max: 28.0 },
  },
];

// Endpoint 
app.get("/retailprices", (req, res) => {
  const retailPrices = chartData.map(data => data.retailPrice);
  res.json(retailPrices);
});


const Data = [
  {
    product: "Itaian Basil",
    productname: "Italian Basil",
    wholesaleprice: "₹33.80",
    retailprice: "₹52.00",
    weekshigh: "₹59.00",
    weekslow: "₹47.00",
    trend: "",
  },
  {
    product:"Swiss Chard",
    productname: "Swiss Chard",
    wholesaleprice: "₹31.20",
    retailprice: "₹48.00",
    weekshigh: "₹59.00",
    weekslow: "₹48.00",
    trend: "",
  },
  {
    product:"Brocolli",
    productname: "Broccoli",
    wholesaleprice: "₹29.90",
    retailprice: "₹46.00",
    weekshigh: "₹59.00",
    weekslow: "₹46.00",
    trend: "",
  },

];

// Endpoint 
app.get("/api/data", (req, res) => {



    // Pagination 
    const page = parseInt(req.query.page) || 1;
    const elementsPerPage = 10;
    const startIndex = (page - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    
    
    const paginatedData = Data.slice(startIndex, endIndex);
  
    
    res.json(paginatedData);
  });

// Start 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
