app.get('/', function(req, res) {
    res.render('index.ejs', {number: 1})
});