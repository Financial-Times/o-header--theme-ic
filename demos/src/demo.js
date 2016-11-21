/*global require*/
import './../../main.js';

function initDemos() {
	document.addEventListener('DOMContentLoaded', function() {
		document.documentElement.className = document.documentElement.className.replace('core', 'enhanced');
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	});
}

initDemos();
