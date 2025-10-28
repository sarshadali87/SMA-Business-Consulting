import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🧾 Store orders temporarily in memory
let orders = [];

app.post('/api/orders', (req, res) => {
  const { items, total_price, delivery_method, location } = req.body;
  const order = { id: orders.length + 1, items, total_price, delivery_method, location, status: 'pending' };
  orders.push(order);
  console.log('✅ Order received:', order);

  res.json({
    message: 'Order received successfully!',
    order_id: order.id,
    estimated_time: '25 minutes'
  });
});

app.get('/api/orders', (req, res) => res.json(orders));

app.listen(5000, () => console.log('🚀 Order API running on port 5000'));
