;(function(){
	var $links = document.querySelectorAll('a');

	$links.forEach(function ($link){
		$link.addEventListener('click', handleClick, false);
	});

	function handleClick(e){
		e.preventDefault();
		var state = {};
		var title = '';
		var url = e.target.getAttribute('href');
		history.pushState(state, title, url);
	}
})();