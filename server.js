const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb');
var path = require("path");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'))
app.use(express.static('assets'));
 app.set('views', [path.join(__dirname, 'views'),
                      path.join(__dirname, 'views/admin/'), 
                      path.join(__dirname, 'views/admin/assets'), 
                      path.join(__dirname, 'views/admin/admin_include')]);
var db;

// --------------Mongo connection--------------//

MongoClient.connect('mongodb://localhost:27017/mydb',{ useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err);
  db = client.db('mydb') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

// --------------Index file redirection--------------//

app.get('/', (req, res) => {
    res.redirect('/get_quotes');
});


// --------------Inser into table--------------//

app.post('/quotes', (req, res) => {
	console.log(req.body);
	 if (!req.body.q_id) {
	 	 db.collection('quotes').save(req.body, (err, result) => {
		    if (err) return console.log(err)
		
		    console.log('saved to database');
		    res.redirect('/get_quotes');
		  })

	  }else{
	  		 obj = {"_id": new MongoClient.ObjectId(req.body.q_id)};
	  		 var newvalues = { $set: {name: req.body.name, quote: req.body.quote } };
  			 db.collection('quotes').updateOne(obj,newvalues, (err, result) => {
  			  if (err) return console.log(err)
  			  console.log('updated');
  			  res.redirect('/get_quotes');
  			});
	  }  
})


// --------------get data from table--------------//

app.get('/get_quotes', (req, res) => {
 	var cursor = db.collection('quotes').find();
 	cursor.toArray(function(err, results) {
 	console.log(results)
 	res.render('test.ejs', {quotes: results})
 	// send HTML file populated with quotes here
	})
})

// --------------delete data from table--------------//

app.get('/delete_quotes/:id', (req, res) => {
  	var id = req.params.id;
  	console.log(id);
  	obj = {"_id": new MongoClient.ObjectId(id)};
  	db.collection('quotes').deleteOne(obj, (err, result) => {
  	 if (err) return console.log(err)
  	 console.log('deleted')
  	 res.redirect('/get_quotes')
  	})
})

// --------------Update data of table--------------//

app.get('/quotes_addEdit/:id?', (req, res) => {
  	var id = req.params.id;
  	console.log(id);
  	var cursor = db.collection('quotes').find({"_id": new MongoClient.ObjectId(id)});
  	cursor.toArray(function(err, results) {
  	res.render('index.ejs', {quotes: results});
  	console.log(results);
  	})
})


// --------------Update data of table--------------//

app.get('/get_template', (req, res) => {
 
  res.render('admin/test.ejs');
  // send HTML file populated with quotes here
  })

