const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAllUsers = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.json(users);
});
const createUser = catchError(async(req, res) => {
    const user = req.body
    const createNewUser = await User.create(user);
    return res.status(201).json(createNewUser);
});
const getOneUser = catchError(async(req, res) => {
    const { id } = req.params;
    const oneUser = await User.findByPk(id);
    if(!oneUser) return res.status(404).json({message: 'user no found'});
    return res.json(oneUser);
});
const deleteUser = catchError(async(req, res) => {
    const { id } = req.params;
    const deleteUserByPk = await User.destroy({where: {id}});
    if(!deleteUserByPk) return res.status(404).json({message: 'user no found'});
    return res.sendStatus(204);
});
const updateUser = catchError(async(req, res) => {
    const { id } = req.params;
    const dataUser = req.body;
    const updateUserByPk = await User.update(dataUser, {where: {id}, returning: true});
    if(updateUserByPk[0] == 0) return res.status(404).json({message: 'user no found'});
    return res.json(updateUserByPk);
})
module.exports = {
    getAllUsers,
    createUser,
    getOneUser,
    deleteUser,
    updateUser
}