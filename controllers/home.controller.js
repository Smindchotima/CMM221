exports.index = function(req, res) {
	res.render('home.twig')
}

/*exports.index = function(req, res){
	let content = {
		banner: [
			{
				id: 1,
				url: '//image/img-1.ipg'
			},

			{
				id: 2,
				url: '//image/img-1.ipg'
			}
		]
	}

	res. json(content)
}*/