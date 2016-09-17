$(document).ready(function() {
	$('#hey').click(function() {
		var heyPos = $('#hey').offset();
		var nextPos = $('#hab').offset();
		if (nextPos.left > heyPos.left) {
			// scroll horizontal
			$('#scroll').animate({ scrollLeft: $('#hey').width()});
		} else {
			// scroll vertical
			$('html, body').animate({ scrollTop: nextPos.top - 10});
		}
	})
});