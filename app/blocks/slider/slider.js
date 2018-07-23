import $ from 'jquery';

$(document).ready(() => {
	const pointer = $('.slider__pointer');
	const slider = $('.slider');
	const sliderLeftOffset = slider.offset().left;
	const points = $('.slider__item');
	const pointsPositions = [];
	let currentPos = 0;
	let dragging = false;
	let currentIndex = 0;

	points.each((i, el) => {
		pointsPositions.push($(el).position().left);
	});

	pointsPositions[pointsPositions.length - 1] = slider.width();

	function slide(toPos) {
		currentPos = toPos;
		pointer.css({
			left: `${currentPos}px`
		});
	}

	slide(pointsPositions[pointsPositions.length - 1]);

	pointer.mousedown(() => {
		currentPos = pointer.position().left;
		$('.wrapper').css({
			'-webkit-user-select': 'none',
			'-moz-user-select': 'none',
			'-ms-user-select': 'none'
		});
		dragging = true;
	});

	$('.wrapper')
		.mousemove(e => {
			if (dragging) {
				slide(e.pageX - sliderLeftOffset);
			}
			if (currentPos < 0) {
				slide(0);
			}
			if (currentPos > 770) {
				slide(slider.width());
			}
		})
		.mouseup(() => {
			dragging = false;
			$.each(pointsPositions, i => {
				if (
					currentPos <= pointsPositions[i + 1] &&
					currentPos >= pointsPositions[i]
				) {
					if (
						currentPos >=
						pointsPositions[i] +
							(pointsPositions[i + 1] - pointsPositions[i]) / 2
					) {
						currentIndex = i + 1;
					}else {
						currentIndex = i;
					}
				}
			});
			slide(pointsPositions[currentIndex]);
			$('.wrapper').css({
				'-webkit-user-select': '',
				'-moz-user-select': '',
				'-ms-user-select': ''
			});
		});
});
