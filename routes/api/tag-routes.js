const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all Tags, and their associated Products data
router.get('/', (req, res) => {
  Tag.findAll({
    // include Products
    include: [Product]
  })
    .then(dbTagData => {
      // if there is no data
      if (!dbTagData) {
        // respond with 404
        res.status(404).json({ message: 'No tags found.' });
        return;
      }
      // send the data
      res.json(dbTagData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET one Tag based on `id` value, and it's associated Products data
router.get('/:id', (req, res) => {
  Tag.findAll({
    // find which Tag based on `id` value
    where: {
      id: req.params.id
    },
    // include Products
    include: [Product]
  })
    .then(dbTagData => {
      // if there is no data
      if (!dbTagData) {
        // respond with 404
        res.status(404).json({ message: 'No tags found.' });
        return;
      }
      // send the data
      res.json(dbTagData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

// POST (create) a new Tag
router.post('/', (req, res) => {
  Tag.create({
    // name for new Tag
    tag_name: req.body.tag_name
  })
    .then(dbTagData => {
      // if there is no data
      if (!dbTagData) {
        // respond with 404
        res.status(404).json({ message: 'Unable to create this tag.' });
        return;
      }
      // send the data
      res.json(dbTagData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT (update) a Tag name based on `id` value
router.put('/:id', (req, res) => {
  Tag.update(
    {
      // new name for the existing Tag
      tag_name: req.body.tag_name
    },
    {
      // find what Tag to rename based on `id` value
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbTagData => {
      // if there is no data
      if (!dbTagData) {
        // respond with 404
        res.status(404).json({ message: 'Unable to locate a tag with this id.' });
        return;
      }
      // send the data
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a Tag based on `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    // find which Tag to delete, based on `id` value
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    // if there is no data
    if (!dbTagData) {
      // respond with 404
      res.status(404).json({ message: 'Unable to locate a tag with this id.' });
      return;
    }
    // send the data
    res.json(dbTagData)
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
