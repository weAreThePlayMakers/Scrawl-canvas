var mycode = function() {
	'use strict';
	//hide-start
	var testTicker = Date.now(),
		testTime = testTicker,
		testNow,
		testMessage = document.getElementById('testmessage');
	//hide-end

	//define variables
	var myMessage = document.getElementById('message'),
		mouseDown = false,
		currentEntity = false,
		myPad = scrawl.pad.mycanvas,
		myCanvas = scrawl.canvas.mycanvas,
		here,
		sX,
		sY,
		myColor,
		lines,
		startDrawing,
		keepDrawing,
		endDrawing,
		spinLines;

	//setup canvas
	scrawl.cell[myPad.base].set({
		backgroundColor: '#eee',
	});

	//define designs (color)
	myColor = scrawl.newColor({
		rMin: 50,
		rMax: 220,
		gMin: 50,
		gMax: 220,
		bMin: 50,
		bMax: 220,
		a: 1,
	});

	//define groups
	lines = scrawl.newGroup({
		name: 'lines',
	});

	//event listeners
	startDrawing = function(e) {
		mouseDown = true;
		currentEntity = scrawl.newShape({
			start: here.getData(),
			method: 'draw',
			lineWidth: 10,
			lineJoin: 'round',
			lineCap: 'round',
			strokeStyle: myColor.clone({
				random: true,
				a: 1
			}).name,
			data: 'l0,0 ',
			group: 'lines',
		});
		sX = here.x;
		sY = here.y;
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
	};
	scrawl.canvas.mycanvas.addEventListener('mousedown', startDrawing, false);

	endDrawing = function(e) {
		if (currentEntity) {
			currentEntity = false;
		}
		mouseDown = false;
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
	};
	scrawl.canvas.mycanvas.addEventListener('mouseup', endDrawing, false);

	//animation functions
	keepDrawing = function() {
		if (currentEntity) {
			if (here.x !== sX || here.y !== sY) {
				currentEntity.set({
					data: currentEntity.data + ' ' + (here.x - sX) + ',' + (here.y - sY),
				});
				sX = here.x;
				sY = here.y;
			}
		}
	};
	spinLines = function() {
		for (var i = 0, z = lines.entitys.length; i < z; i++) {
			scrawl.entity[lines.entitys[i]].setDelta({
				roll: 1,
			});
		}
	};

	//animation object
	scrawl.newAnimation({
		fn: function() {
			here = myPad.getMouse();
			if (here.active) {
				if (mouseDown) {
					keepDrawing();
				}
				else {
					spinLines();
				}
				myMessage.innerHTML = (mouseDown) ? 'Drawing...' : 'Click-and-drag to draw lines';
			}
			else {
				if (currentEntity) {
					endDrawing();
				}
				myMessage.innerHTML = 'Click-and-drag to draw lines';
				spinLines();
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
	modules: ['animation', 'shape', 'color'],
	callback: function() {
		window.addEventListener('load', function() {
			scrawl.init();
			mycode();
		}, false);
	},
});
