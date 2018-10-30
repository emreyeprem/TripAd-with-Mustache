const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const PORT = 3003

let trips = []
 app.use(express.static('css'))

 app.use(bodyParser.urlencoded({ extended: false }))
 app.engine('mustache',mustacheExpress())
 app.set('views','./views')
 app.set('view engine','mustache')

 // app.get('/',function(req,res){
 //   res.render()
 // })

 app.get('/add_trips',function(req,res){
   res.render('add_trips')
 })
 app.get('/',function(req,res){
   res.redirect('/add_trips')
 })
app.post('/add_trips',function(req,res){
   let tripLocations = req.body.tripLocation
   let tripDepartureDates = req.body.tripDepartureDate
   let tripReturnDates = req.body.tripReturnDate
   let tripLocationImage = req.body.tripLocationImage
   trips.push({tripLocations : tripLocations, tripDepartureDates : tripDepartureDates, tripReturnDates : tripReturnDates, tripLocationImage : tripLocationImage})
   res.redirect("/trips")
})

app.get("/trips",function(req,res){
   res.render('trips',{tripList : trips})
})





app.listen(PORT,function(){
     console.log("Server is running..")
})
