app.get('/', function(req, res) {
	res.render('index.ejs', {res: res, req: req, me: req.me? req.me : false });
});
app.get('/index', function(req, res) {
	res.render('index.ejs', {res: res, req: req, me: req.me? req.me : false });
});

app.get('/register', function(req, res) {
	if(req.me){
		res.redirect('/index')
	}else{
		res.render('register.ejs', {res: res, req: req, me: req.me? req.me : false });
	}
});