import $ from 'jquery';

const textareaResize = function () {
	const textarea = $('.textarea');
	const initialHeight = 90;

	const resize = () => {
		textarea.css({height: `${initialHeight}px`});
	};

	resize();
};

export default textareaResize;
