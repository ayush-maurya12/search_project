const express = require('express');
const router = express.Router();
const Item = require('../models/Item.js');

router.get('/search', async (req, res) => {
    const query = req.query.query;
    try {
        const items = await Item.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
            ],
        });
        res.json(items); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
