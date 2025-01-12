const express = require('express');
const midtransClient = require('midtrans-client');

const app = express();

// Midtrans Server Key (Replace with your own key)
const serverKey = 'YOUR_SERVER_KEY';

// Midtrans API Client
const snap = new midtransClient.Snap({
    isProduction: false, // Use sandbox for testing
    serverKey: serverKey
});

// Route to create a transaction
app.post('/create-transaction', async (req, res) => {
    try {
        const orderId = 'ORDER-' + new Date().getTime(); // Unique order ID
        const transactionDetails = {
            transaction_details: {
                order_id: orderId,
                gross_amount: 100000 // Amount in IDR
            },
            customer_details: {
                first_name: "Rahmawati",
                email: "rahmawati@example.com"
            }
        };

        const transaction = await snap.createTransaction(transactionDetails);
        res.json({ token: transaction.token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create transaction' });
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
