import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import autosize from 'autosize';
import '../blocks/date/date';

autosize($('.textarea'));

$(() => {
	svg4everybody();
});
