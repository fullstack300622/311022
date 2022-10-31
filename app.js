const express = require('express');
const app = express();

app.use(express.json()) //json
app.use(express.urlencoded({ extended: true }))

//Get (Get data)  
//Post (Add data)
//Put (Updata data)
//Delete (Delete data)

const users = [
    { id: 1, name: 'beni', lastName: 'Franklin' },
    { id: 2, name: 'Sarah', lastName: 'Conor' }
] //should be from database


const tickets = [
    { destination: 'USA', price: '4000$' },
    { destination: "Turkey", price: '1000$' }
] //database

app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
    //lets get tickets from database
    res.render('index', { tickets: tickets }) //
})


app.get('/', (req, res) => {
    // response.render('index');
    res.render('index')
})


app.get('/users/:id', (req, res) => {
    let foundUser;
    for (const user of users) {
        if (user.id == req.params.id) {
            foundUser = user;
        }
    }
    if (foundUser) {
        return res.send(foundUser)
    } else {
        return res.send('no user found')
    }
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/users')
})


app.post('/users', (req, res) => {
    console.log(req.body)
    res.send('ok')
})


app.get('/users', (request, response) => {
    console.log('hello world')
    response.render('/users')
})

app.get('/welcome', (request, response) => {
    response.send('welcome')
})


app.listen(3000, () => {
    console.log('server is running on port 3000');
})
