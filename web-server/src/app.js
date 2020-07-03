const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()


// DEFINE PATHS FOR EXPRESS CONFIG
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// SETUP HANDLEBARS ENGING AND VIEWS LOCATION
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)



// SETUP PUBLIC DIRECTORY TO SERVE
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'WEATHER APP',
        name: 'BLUEMINGS'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ABOUT ME',
        name: 'BLUEMINGS'
    })
})

app.get('/weather', (req, res) => {
    res.send([{
        city: 'Saginaw',
        weather: 69,
        precip: 'Partly Cloudy'
    }])
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "U NEED SOME ASSISTANCE BR0?",
        title: 'HELP',
        name: 'BLUEMINGS'
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term!'
        })
    }

    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 HELP',
        name: 'BLUEMINGS',
        errorMessage: 'HELP ARTICLE NOT FOUND!'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'BLUEMINGS',
        errorMessage: 'PAGE NOT FOUND!'
    })
})


// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})