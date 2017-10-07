exports.index = function(req, res) {
	let content = {
		highlight:{
			url: '/assets/images/home/myflower/h.jpg',
			title: 'Hello! I\'m Smind'
		},

		thumbnail: [
		{
			url: '/assets/images/home/myflower/th1.jpg',
			title: 'S'
		},
		{
			url: '/assets/images/home/myflower/th2.jpg',
			title: 'M'
		},
		{
			url: '/assets/images/home/myflower/th3.jpg',
			title: 'I'
		},
		{
			url: '/assets/images/home/myflower/th4.jpg',
			title: 'N'
		},
		{
			url: '/assets/images/home/myflower/th5.jpg',
			title: 'D'
		}

		]
	}
	res.render('home.twig', content)
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