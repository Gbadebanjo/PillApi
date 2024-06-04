const axios = require('axios');


const FLW_PUBLIC_KEY = process.env.FLW_PUBLIC_KEY;
const FLW_SECRET_KEY = process.env.FLW_SECRET_KEY;
const FLW_BASE_URL = process.env.FLW_BASE_URL;

class FlutterwaveService {
    static async initiatePayment({ amount, email, tx_ref, currency = 'NGN' }) {
        const data = {
            tx_ref,
            amount,
            currency,
            redirect_url: `${process.env.BASE_URL}/payment/complete`,
            customer: {
                email,
            },
        };

        try {
            const response = await axios.post(`${FLW_BASE_URL}/payments`, data, {
                headers: {
                    Authorization: `Bearer ${FLW_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            console.error("Flutterwave payment initiation failed:", error.response ? error.response.data : error.message);
            throw new Error(error.response ? error.response.data.message : error.message);
        }
    }

    static async verifyPayment(transactionId) {
        try {
            const response = await axios.get(`${FLW_BASE_URL}/transactions/${transactionId}/verify`, {
                headers: {
                    Authorization: `Bearer ${FLW_SECRET_KEY}`,
                },
            });

            return response.data;
        } catch (error) {
            throw new Error(error.response ? error.response.data.message : error.message);
        }
    }
}

module.exports = FlutterwaveService;