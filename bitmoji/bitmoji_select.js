
let startBitmojiUpdates = function() {
	let weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
	let matchesWeekdays = function(date, possibleWeekdayNames) {
		let day = date.getDay();
		return possibleWeekdayNames.indexOf(weekdays[day]) != -1;
	}
	
	let dailyBitmojis = weekdays.map((function(weekday) {
		return {name: weekday, criteria: function(date) { return matchesWeekdays(date, [weekday]) }};
	}))
	
	let hourlyBitmojis = [
		{name: 'lunch_time', criteria: function(date) { return date.getHours() == 12 }},
		{name: 'dinner_time', criteria: function(date) { return date.getHours() == 18 }},
		{name: 'saturday_night', criteria: function(date) { return date.getHours() > 8 && matchesWeekdays(date, ['saturday']) } },
		{name: 'good_night', criteria: function(date) { return date.getHours() >= 23 }},
		{name: 'asleep', criteria: function(date) { return date.getHours() <= 6 }},
		{name: 'morning', criteria: function(date) { return date.getHours() >= 7 && date.getHours() <= 9 }},
	]
	
	let bitmojis = [
		...hourlyBitmojis,
		...dailyBitmojis
	];
	
	let update = function() {
		let d = new Date();
		let matches = bitmojis.filter(function(b) { return b.criteria(d) });
		document.getElementById('bitmojiImage').style.backgroundImage = 'url(/bitmoji/' + matches[0].name + '.png';
	}
	
	setInterval(function() {
		update();
	}, 60 * 60 * 1000); // once an hour
	update();
}

startBitmojiUpdates();
