const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all Categories and their associated Products data
router.get('/', (req, res) => {
  Category.findAll({
    // include Product table
    include: [Product]
  })
    .then(dbCategoryData => {
      // if there is no data
      if (!dbCategoryData) {
        // respond with 404
        res.status(404).json({ message: 'No categories found.' });
        return;
      }
      // send data
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
});

// GET a Category based on `id` value, and it's associated Products data
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      // find the right Category based on `id` value
      id: req.params.id
    },
    // include Product table
    include: [Product]
  })
    .then(dbCategoryData => {
      // if there is no data
      if (!dbCategoryData) {
        // respond with 404
        res.status(404).json({ message: 'No category found with this id.' });
        return;
      }
      // send the data
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST (create) a new Category
router.post('/', (req, res) => {
  Category.create({
    // get name for new Category
    category_name: req.body.category_name
  })
    .then(dbCategoryData => {
      // if there is no data
      if (!dbCategoryData) {
        // respond with 404
        res.status(404).json({ message: 'Unable to create this category.' });
        return;
      }
      // send the new data
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// PUT (update) a Category based on `id` value
router.put('/:id', (req, res) => {
  Category.update(
    // get new name for existing Category
    {
      category_name: req.body.category_name
    },
    {
      // find which Category to rename based on `id` value
      where: {
        id: req.params.id
      }
    })
    .then(dbCategoryData => {
      // if there is no data
      if (!dbCategoryData) {
        // respond with 404
        res.status(404).json({ message: 'No category found with this id.' });
        return;
      }
      // send the new data
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a Category based on `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      // find which Category to delete based on `id` value
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      // if there is no data
      if (!dbCategoryData) {
        // respond with 404
        res.status(404).json({ message: 'No category found with this id.' });
        return;
      }
      // send the data
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
