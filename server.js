const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwtAuth = require('./src/config/jwtAuth');

// Routes
const authRoutes = require('./src/routes/authRoutes');
const paymentLinkRoutes = require('./src/routes/paymentLinkRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const accountRoutes = require('./src/routes/accountRoutes');

const app = express();

// Middleware
var corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/users', authRoutes);
app.use('/api/payment-links', jwtAuth.authenticateToken, paymentLinkRoutes);
app.use('/api/payments', jwtAuth.authenticateToken, paymentRoutes);
app.use('/api/accounts', jwtAuth.authenticateToken, accountRoutes);

//Home route
app.get("/", (req, res) => {
  res.json({ message: "Cashful API's." });
});

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});