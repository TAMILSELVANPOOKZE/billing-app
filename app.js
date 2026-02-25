const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Sample products
const products = [
  { id: 1, name: 'Apple', price: 10 },
  { id: 2, name: 'Banana', price: 5 },
  { id: 3, name: 'Milk', price: 25 },
  { id: 4, name: 'Bread', price: 30 },
  { id: 5, name: 'Eggs', price: 60 },
];

// Home page
app.get('/', (req, res) => {
  res.render('index', { products });
});

// Generate bill
app.post('/bill', (req, res) => {
  const selected = req.body.items || [];
  const itemIds = Array.isArray(selected) ? selected : [selected];
  
  const billItems = products.filter(p => itemIds.includes(String(p.id)));
  const total = billItems.reduce((sum, item) => sum + item.price, 0);
  
  res.render('bill', { billItems, total, date: new Date().toLocaleString() });
});

// // Health check (needed for AKS)
// app.get('/health', (req, res) => {
//   res.json({ status: 'ok' });
// });

module.exports = app;