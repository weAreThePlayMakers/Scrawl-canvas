var mycode = function() {
	'use strict';
	//hide-start
	var testTicker = Date.now(),
		testTime = testTicker,
		testNow,
		testMessage = document.getElementById('testmessage');
	//hide-end

	//define variables
	var myPad = scrawl.pad.mycanvas,
		myEntity,
		here,
		dragGroup,
		getPhrase,
		dropPhrase;

	//define groups
	dragGroup = scrawl.newGroup({
		name: 'drag',
	});

	//define entitys
	scrawl.newPhrase({
		name: 'lefty',
		group: 'drag',
		text: 'Hello! Lefty reporting for duty!\nI am a very long line of text\nthat has been broken up into\nseparate lines. I am\nleft justified and my lineHeight\nattribute has been set to\na value of 1.2.',
		textAlign: 'left',
		lineHeight: 1.2,
		handleX: 'center',
		handleY: 'top',
		startX: 140,
		startY: 20,
		font: '13pt Arial, san-serif',
	}).clone({
		name: 'centra',
		text: 'Hi! My name is Centra and I\'ve\nbeen given the job of looking\nafter the middle column of text.\nMy details are\ntextAlign: \'center\',\nlineHeight: 1.4.\nHave a nice day!',
		textAlign: 'center',
		lineHeight: 1.4,
		startX: 395,
		startY: 18,
		fillStyle: 'blue',
	}).clone({
		name: 'righty',
		text: 'As a right justified column with a\nlineHeight value of 1.8, I don\'t\nfeel the need to say much.\nOh, yeah: the name\'s Righty.\nGood to meet you!',
		textAlign: 'right',
		lineHeight: 1.8,
		startX: 650,
		startY: 14,
		fillStyle: 'green',
	});

	//event listeners
	getPhrase = function(e) {
		myEntity = dragGroup.getEntityAt(here);
		if (myEntity) {
			myEntity.pickupEntity(here);
		}
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
	};
	dropPhrase = function(e) {
		if (myEntity) {
			myEntity.dropEntity();
			myEntity = false;
		}
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
	};
	scrawl.canvas.mycanvas.addEventListener('mousedown', getPhrase, false);
	scrawl.canvas.mycanvas.addEventListener('mouseup', dropPhrase, false);

	//animation object
	scrawl.newAnimation({
		fn: function() {
			here = myPad.getMouse();
			if (!here.active && myEntity) {
				dropPhrase();
			}
			scrawl.render();

			//hide-start
			testNow = Date.now();
			testTime = testNow - testTicker;
			testTicker = testNow;
			testMessage.innerHTML = 'Milliseconds per screen refresh: ' + Math.ceil(testTime) + '; fps: ' + Math.floor(1000 / testTime);
			//hide-end
		},
	});
};

scrawl.loadModules({
	path: '../source/',
	minified: false,
	modules: ['phrase', 'animation'],
	callback: function() {
		window.addEventListener('load', function() {
			scrawl.init();
			mycode();
		}, false);
	},
});
