app.get('/', function(req, res) {
	//console.log(req.me);
    res.render('index.ejs', {res: res, req: req, user: req.me? req.me : false })
});