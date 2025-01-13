import User from '../models/User.js';

export const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).send('User added');
};

export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.send('User deleted');
};

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    await User.findByIdAndUpdate(userId, req.body);
    res.send('User updated');
};