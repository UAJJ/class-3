$(document).ready(function() {

	var i = 1;

	function loopDogFadeIn() {
		var image = '<img id="dog'+i+'" class="animal-image" src="img/dogs/dog'+i+'.jpg">'
		$('#animal-container').append(image);
		$('#dog'+i).hide()
				   .fadeIn(500, function() {
				   		if (i < 5) {
				   			i++
				   			loopDogFadeIn();
				   		} else {
				   			i = 1;
				   			return true;
				   		}
				   });
	}

	function loopCatFadeIn() {
		var image = '<img id="cat'+i+'" class="animal-image" src="img/cats/cat'+i+'.jpg">'
		$('#animal-container').append(image);
		$('#cat'+i).hide()
				   .fadeIn(500, function() {
				   		if (i < 5) {
				   			i++
				   			loopCatFadeIn();
				   		} else {
				   			i = 1;
				   			return true;
				   		}
				   });
	}

	$('.nav-selection').click(function() {
		if ($(this).attr('id') == "dog-selection") {
			$('#animal-container').empty();

			console.log('dogs '+ i);
			var image = '<img id="dog'+i+'" class="animal-image" src="img/dogs/dog'+i+'.jpg">'
			$('#animal-container').append(image);
			$('#dog'+i).hide()
					   .fadeIn(500, function() {
					   		i++;
					   		loopDogFadeIn();
					   });

			i = 1;

		} else if($(this).attr('id') == "cat-selection") {
			$('#animal-container').empty();
			console.log('cats');

			console.log('cats '+ i);
			var image = '<img id="cat'+i+'" class="animal-image" src="img/cats/cat'+i+'.jpg">'
			$('#animal-container').append(image);
			$('#cat'+i).hide()
				   .fadeIn(500, function() {
				   		i++;
				   		loopCatFadeIn();
				   });

			i = 1;
		}
	});

});