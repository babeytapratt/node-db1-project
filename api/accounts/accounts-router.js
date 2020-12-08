const express = require('express');
const router = express.Router();
const Account = require('./accounts-router');

router.get('/', async (req, res) => {
    try {
        const data = await Account.getAll()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await Account.getById(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

const validatePost = (req, res, next) => next()


router.post('/', validatePost, async (req, res) => {
    try {
        const account = req.body
        const data = await Account.create(account)
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.body
        const changes = req.body
        await Account.update(id, changes)
        const updated = await Account.getById(id)
        res.json(updated)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Account.delete(id)
        res.json({ message: `account with id ${id} was deleted`})
    }    catch(error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;
