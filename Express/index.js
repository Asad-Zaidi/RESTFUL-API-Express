const express = require('express');
const app = express();
app.use(express.json());
const products = ["Laptop", "LCD", "Mobile", "Computers", "Tablet", "Printer"];

app.get('/', function (req, res) {
    res.send('<div style="text-align:center; padding-top:20px;"> <h1>Welcome to Home Page.</h1> <br> <h2>Click here to Explore the Products </h2> <br> <a href="http://localhost:3000/api/products">Click Here</a> </div> ')
});

app.get("/api/products", function (req, res) {
    res.send(products);
});

app.get("/api/products/:index", function (req, res) {
    if (!products[req.params.index]) {
        res.status(404).send("Product not found");
    }
    res.send(products[req.params.index]);
});

app.put("/api/products/:index", function (req, res) {
    products[req.params.index] = req.body.name;
    res.send(products[req.params.index]);
});

app.delete("/api/products/:index", function (req, res) {
    products.splice(req.params.index, 1);
    res.send(products);
});

app.post("/api/products", function (req, res) {
    products.push(req.body.name);
    res.send(products);
});

app.listen(3000)