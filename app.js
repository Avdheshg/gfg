
const express = require('express');
const path = require('path');

const app = express();

app.get('/geeksforgeeks.org/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Resume_Avduesh Gautam.pdf'));
});

app.get('/geeksforgeeks.org/data-structures', (req, res) => {
    res.sendFile(path.resolve(__dirname,'ds.pdf'))
})

app.get('/geeksforgeeks.org/fundamentals-of-algorithms', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'algorithms.pdf'))
})

app.get('/geeksforgeeks.org/courses/complete-interview-preparation', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Interview Preparation.pdf'))
})

app.get('/geeksforgeeks.org/explore', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'explore.pdf'))
})

app.get('/geeksforgeeks.org/c-plus-plus', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'C++.pdf'))
})

app.get('/geeksforgeeks.org/java', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'java.pdf'))
})

app.get('/geeksforgeeks.org/python', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'python.pdf'))
})

app.get('/geeksforgeeks.org/competitive-programming-a-complete-guide', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Competitive Programming.pdf'))
})



app.listen(3000, () => {
    console.log("GFG is running on the port 3000");
})


// const path = require('path');
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'));
// })


















































