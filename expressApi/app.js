// import express 
const express = require('express');
// Create an express app object
const app = express();

// import body-parser
const bodyparser = require('body-parser');
// Array of users
users = [
{id: 1, name: 'Neeraj', mailId: 'a@b.com', password: '1234'},
{id: 2, name: 'Pankaj', mailId: 'p@k.com', password: '1234'},
{id: 3, name: 'Rahul', mailId: 'r@h.com', password: '1234'},
{id: 4, name: 'Nitin', mailId: 'n@t.com', password: 'abcd'},
];
// registering the body-parser middleware for processing json payload
app.use(bodyparser.json());
// define routes for the express app. 
// each route is a method which process an HTTP request
counter = 4;
app.get('/users',(req,res)=>{
    res.json(users);
});
app.get('/users/:email',(req,res)=>{
    let toBeSearched = req.params['email'];
    for(let i in users) {
        if(users[i].mailId === toBeSearched)
        {
         res.json(users[i]);
         return;
        }
    }
    res.json({status: 'Not Found'});
});

app.post('/users',(req,res)=>{
    let toBeSaved = {id: ++counter, name: req.body.name,
    mailId: req.body.mailId, password: req.body.password};
    users.push(toBeSaved);
    res.json({status: 'success'});
});
app.put('/users',(req,res)=>{
    
    for(let i in users) {
        if(users[i].id === req.body.id)
        {
            // current element is removed 
            // and updated element is inserted
            // at its position.
            users.splice(i,1,req.body); 
            res.json({status: 'success'});
            return;
        }
         
    }
    res.json({status: 'failure'});
});
 
app.delete('/users/:id',(req,res)=>{
    let id = req.params['id'];
    console.log('Id of the user to be deleted '+id);
    for(let i in users) {
        if(users[i].id == id)
        {
            users.splice(i,1); // element is removed from the array
            res.json({status: 'success'});
            return;
        }
         
    }
    res.json({status: 'failure'});
});

// start the server on a port.
app.listen(4500,() => {
    console.log('Server is ready on port 4500...');
});
