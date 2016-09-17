var articles = ['/instagrade/index.html', '/flashlight/index.html', '/hab/index.html'];

$(document).ready(function() {
	var loadState = 'none'; // none / loading / pause / nomore
	$(document).scroll(function() {
		var distFromBottom = $(document).height() - ($(window).height() + $('body').scrollTop());
		if (loadState == 'none' && distFromBottom < 600) {
			loadState = 'loading';
			loadMore(function(success) {
				if (success) {
					loadState = 'pause';
					setTimeout(function() {
						loadState = 'none';
					}, 1000);
				} else {
					loadState = 'nomore';
				}
			})
		}
	})

	var loadMore = function(callback) {
		var toLoad = pickArticleToLoad();
		if (toLoad) {
			// alert('would load ' + toLoad);
			loadContent(toLoad, '[data-portfolio-segment]', function(content) {
				if (content) {
					$('[data-portfolio-segment]').last().after(content).after('<div class=divider></div>');
					callback(true);
				} else {
					callback(false);
				}
			});
		} else {
			callback(false);
		}
	}

	var pickArticleToLoad = function() {
		var currentlyLoaded = $('[data-portfolio-segment]').toArray().map(function(el) {
			return el.getAttribute('data-portfolio-segment');
		});
		for (var i=0; i<articles.length; i++) {
			if (currentlyLoaded.indexOf(articles[i]) == -1) {
				return articles[i];
			}
		}
		return null;
	}

	var loadContent = function(url, selector, callback) {
		$.get({
			url: url,
			success: function(html) {
				callback($(html.split('<!--OPEN-->')[1].split('<!--CLOSE-->')[0]));
			}
		})
	}
})
