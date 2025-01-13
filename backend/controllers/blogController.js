import Blog from '../models/Blog.js';

export const addBlog = async (req, res) => {
    const { title, description, image } = req.body;
    const blog = new Blog({ title, description, image, author: req.user.id });
    await blog.save();
    res.status(201).send('Blog added');
};

export const deleteBlog = async (req, res) => {
    const blogId = req.params.id;
    await Blog.findByIdAndDelete(blogId);
    res.send('Blog deleted');
};

export const updateBlog = async (req, res) => {
    const blogId = req.params.id;
    await Blog.findByIdAndUpdate(blogId, req.body);
    res.send('Blog updated');
};