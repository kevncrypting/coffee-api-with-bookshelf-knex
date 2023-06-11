const express = require('express');
const router = express.Router();
const Bean = require('../models/Bean')

// GET all beans
router.get('/', function(req, res, next) {
    Bean.fetchAll()
        .then((beans) => res.json(beans))
        .catch((err) => next(err));
});

// GET a specific bean by ID
router.get("/:id", function (req, res, next) {
    const { id } = req.params;

    Bean.where({ id })
        .fetch()
        .then((bean) => res.json(bean))
        .catch((err) => next(err));
});

// POST a new bean
router.post("/", function (req, res, next) {
    const { name, region, roastLevel, price, description } = req.body;

    new Bean({ name, region, roastLevel, price, description })
        .save()
        .then((bean) => res.json(bean))
        .catch((err) => next(err));
});

module.exports = router;
