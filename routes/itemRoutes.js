import { Router } from 'express';
import Item from '../models/Item.js';

const router = Router();

// CREATE
router.post('/', async (req, res) => {
    const { name, description } = req.body;
    const newItem = new Item({ name, description });
    try {
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ (all items)
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ (single item by id)
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
