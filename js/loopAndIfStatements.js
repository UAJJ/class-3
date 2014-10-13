$(document).ready(function() {
	//click on a selection-nav
	$('.makeshift-nav div').click(function() {
		// if it is cats...
		if ($(this).attr('id') == 'cat-selection') {
			$('#animal-container').empty();
			//loop the loading of cat images
			for (var i = 1; i < 6; i++) {
				var img = '<img class="col-sm-3 animal-images" src="img/cats/cat'+i+'.jpg">';
				$('#animal-container').append(img);

			}
			$('.animal-images').hide()
							   .fadeIn(600);
		// else if its dogs...
		} else {
			$('#animal-container').empty();
			//loop the loading of dog images
			for (var i = 1; i < 6; i++) {
				var img = '<img class="col-sm-3 animal-images" src="img/dogs/dog'+i+'.jpg">';
				$('#animal-container').append(img);

			}
			$('.animal-images').hide()
							   .fadeIn(600);
		}
	});
	// if its cats,
	// 	loop the loading of cat images
	// else
	// 	loop the loading of dog images
});