const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUser = (req,res) => {
    const users = [
        {
            id : 1,
            name : 'Fernando'
        },
        {
            id : 2,
            name : ' Carlos'
        }
    ]
    res.json(users)
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createUser = (req,res) => {
    const user = req.body;
    user.id = 12345;
    const result = {
        message : 'User create',
        user,
    }
    res.status(201).json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updateUser = (req,res) => {
    const { id } = req.params;
    const user = req.body;
    user.id = id;
    const result = {
        message : 'User update',
        user
    }
    res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePartialUser = (req,res) => {
    const result = {
        message : 'User create with patch'
    }
    res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deleteUser = (req,res) => {
    const { id } = req.params;
    const result = {
        message : `User with id: ${id} deleted`
    }
    res.json(result)
};

module.exports = {
    getAllUser,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}