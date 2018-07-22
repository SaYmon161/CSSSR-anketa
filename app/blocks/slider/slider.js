const pointer = $('.slider__pointer');
const slider = $('.slider');
let currentPos = 0;
const sliderLeftOffset = slider.offset().left;
let dragging = false;
let points = $('.slider__item');
let pointsPositions = [];

points.each((i, el) => {
	pointsPositions.push($(el).offset().left - sliderLeftOffset);
});

pointsPositions[pointsPositions.length - 1] = slider.width();

console.log(pointsPositions);

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
			if (currentPos >= -8.5 && currentPos <= slider.width()) {
				currentPos = e.pageX - sliderLeftOffset;
				pointer.css({
					left: `${currentPos}px`
				});
			}else return;
		}
	})
	.mouseup(e => {
		dragging = false;
		console.log(currentPos);

		$.each(pointsPositions, (i, el) => {
			console.log(pointsPositions[i]);
			if (
				currentPos <= pointsPositions[i + 1] &&
				currentPos >= pointsPositions[i]
			) {
				if (
					currentPos >=
					(pointsPositions[i + 1] - pointsPositions[i]) / 2
				) {
					currentPos = pointsPositions[i + 1];
				}else {
					currentPos = pointsPositions[i];
				}
			}
		});
		$('.wrapper').css({
			'-webkit-user-select': '',
			'-moz-user-select': '',
			'-ms-user-select': ''
		});
	});
