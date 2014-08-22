var mycode = function() {
	'use strict';
	//hide-start
	var testTicker = Date.now(),
		testTime = testTicker,
		testNow,
		testMessage = document.getElementById('testmessage');
	//hide-end

	//define variables
	var myInput,
		updateInput;

	//import image
	scrawl.getImagesByClass('demo405');

	//clone image and add filter to it
	scrawl.image.parrot.clone({
		name: 'thresholdparrot',
	}).filter('threshold', {
		value: 0.5,
		useSourceData: true,
	});

	//define sprites
	scrawl.newPicture({
		name: 'parrot',
		startX: 10,
		startY: 10,
		scale: 0.5,
		source: 'parrot',
	}).clone({
		startX: 120,
		startY: 210,
		source: 'thresholdparrot',
	});

	//preparing the DOM input elements
	myInput = document.getElementById('myvalue');
	myInput.value = 0.5;

	//event listener
	updateInput = function(e) {
		scrawl.image.thresholdparrot.filter('threshold', {
			value: parseFloat(myInput.value),
			useSourceData: true,
		});
		e.preventDefault();
		e.returnValue = false;
	};
	myInput.addEventListener('input', updateInput, false); //for firefox real-time updating
	myInput.addEventListener('change', updateInput, false);

	//animation object
	scrawl.newAnimation({
		fn: function() {
			scrawl.render();

			//hide-start
			testNow = Date.now();
			testTime = testNow - testTicker;
			testTicker = testNow;
			testMessage.innerHTML = 'Current threshold value: ' + myInput.value + '. Milliseconds per screen refresh: ' + Math.ceil(testTime) + '; fps: ' + Math.floor(1000 / testTime);
			//hide-end
		},
	});
};

scrawl.loadModules({
	path: '../source/',
	minified: false,
	modules: ['images', 'filters', 'animation'],
	callback: function() {
		window.addEventListener('load', function() {
			scrawl.init();
			mycode();
		}, false);
	},
});
