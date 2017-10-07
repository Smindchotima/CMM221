const express = require('express') // const to keep variable but u cannot edit that variable
const { twig } = require('twig')

const app = express() //call express to keep in app

/*app.get('/', function(req, res){ 
		res.send('Hello')
})

app.get('/home', function(req, res){ //rout call this function to use because it has home after /
		res.send('')
}) */

app.set('view engine','twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

app.get('/', homeController.index)
app.get('/news', newsController.index)

app.use('/assets', express.static(__dirname + '/static/assets',{
	maxAge: 86400000
}))


	
app. listen(8000, function (err) {
	console. log('Server is running on port 8000') // show ค่า
})

