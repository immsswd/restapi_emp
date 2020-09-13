// routes
const express = require('express');
const router = express.Router();
// model.posts
const Emp = require('../../models/model.emp');

// @routes for GET api/emp.posts
// desc: GET all emp datas
router.get('/', async (req, res) => {
    try {
        let findEmp = await Emp.find();
        if (!findEmp) throw Error('no items');
        res.status(200).json(findEmp);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

// @routes for POST api/emp.posts
// desc: create a post
router.post('/', async (req, res, next) => {
    let newEmpPost = new Emp(req.body);
    try {
        let emp = await newEmpPost.save();
        res.status(200).json(emp);
        if (!emp) throw Error('something wrong');
    } catch (err) {
        res.status(400).json({ msg: err })
    }
    next();
});

module.exports = router;