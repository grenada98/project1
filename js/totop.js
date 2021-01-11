$(document).ready(function(){
	// появление/затухание кнопки #back-top
	$(function (){

		// при клике на ссылку плавно поднимаемся вверх
		$(".footer-div-3-toTOP").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});
	$(document).click((e) => {
		const {target} = e;
		if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
		  e.preventDefault();
		}
	  });
});