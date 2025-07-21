const express = require('express');
const app = express();
const userModel = require('./userModel');

app.get('/', (req, res) => {
    res.send('Welcome to Databass API');
});

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: 'jake',
        email: 'jake@gmail.com',
        username: 'jake_doe'
    });
    console.log(createdUser);
});
app.get('/update', async (req, res) => {
    try {
        const updatedUser = await userModel.findOneAndUpdate(
            { username: 'john_doe' },
            { name: 'suzen' },
            { new: true }
        );
        res.send(updatedUser);
       
    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.get('/read', async (req,res)=>{
    try{
let users = await userModel.findOne({name: 'jake'});
res.send(users);
    } catch{
        res.status(500).send('Error fetching user');
    }
})
app.get('/delete', async(_, res) => {
    try {
        let deletedUser = await userModel.findOneAndDelete({name: 'suzen'});
        res.send(deletedUser);
    } catch (error) {
        res.status(500).send('Error deleting user');
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
})