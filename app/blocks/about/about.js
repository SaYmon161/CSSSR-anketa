import $ from 'jquery';
import autosize from 'autosize';

const textarea = $('.about__textarea');

autosize(textarea);

textarea.val(
	'Привлекла возможность учиться. Как раз этого я и жду от работы - возможности обучаться, прокачиваться в JS, изучать новые приемы. Пока мое портфолио это всего лишь учебный проект, но, как там и написано, сделанный с любовью и старанием.'
);
