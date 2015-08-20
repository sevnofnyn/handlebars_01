$(document).ready(function(){     
	function user(name, city, birthplace, otherPlaces, cat, tvShows, sports, favColor){
		this.name = name;         
		this.city = city;         
		this.birthPlace = birthplace;         
		this.otherPlaces = otherPlaces;
		this.cat = cat; 
		this.tvShows = tvShows;
		this.sports = sports;
		this.favColor = favColor;   
	}

	var users = [new user ('Kim Hayden', 'Minneapolis','Washington D.C.',
	'Copenhagen, Brussels, Sydney', 'Mr Fitz, Footsie/Snoopy, Cinnamon, C3P0/Shamoo/Kitty, Sonic, Loki, Izzy, Catoshi', 'Doctor Who, Battlestar Gallactica, Game of Thrones, Star Trek', 'roller derby, tennis, ice skating, swimming', 'orange')];  

	console.log(users);

	var source   = $("#entry-template").html(); 
	var template = Handlebars.compile(source);

	$('.content').html(template(users));


});

//'Doctor Who, Battlestar Gallactica, Game of Thrones, Star Trek'
	//