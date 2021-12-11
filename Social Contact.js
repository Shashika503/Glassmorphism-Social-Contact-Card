var mousePosition;
	var offset;
	var isDown = false;
	var slide = document.getElementById('slider');

	const container = document.querySelector('#glassmorphism');
	
    slide.addEventListener('mousedown', function(e) {
		isDown = true;
		offset = slide.offsetLeft - e.clientX;
	});
	document.addEventListener('mouseup', function() {
		isDown = false;
	});

	document.addEventListener('mousemove', function(event) {
			if (isDown === true) {
				mousePosition = event.clientX
			};
			slide.style.left = (mousePosition + offset) + 'px';
			container.style.width = (mousePosition + offset + 100) + 'px';
		});