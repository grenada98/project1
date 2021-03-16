$(document).ready(function(){
	//создание всплывающего меню при наводе на кнопку в хедере



	// появление/затухание кнопки #back-top
	////////////pop up

	let popup = document.getElementById("popup-id");
	let popupbtn= document.getElementById("btn-popup");
	popupbtn.onclick = function(){
		popup.style.display="block";
	}

	$(".screen6-in-div-a-5").click(function(){
		$(".popup-in.active").removeClass("active");
		$(".popup-in-2").addClass("active");
	});

	$(".popup-in-2-a-img").click(function(){
		popup.style.display="none";
		$(".popup-in").addClass("active");
		$(".popup-in-2.active").removeClass("active");
	});

		/////////////////переключение между экранами при выборе манипуляторов
		$(".screen6-in-div-a").click(function (){ //переход на 2
			$(".screen6-in-div.active").removeClass("active");
			$(".screen6-in-div-2").addClass("active");
		});
		
		
		
		$(".screen6-in-div-a-back-2").click(function (){ //переход на 1 назад
			$(".screen6-in-div-2.active").removeClass("active");
			$(".screen6-in-div").addClass("active");
			
		});
		$(".screen6-in-div-a-2").click(function (){ //переход на 3
			$(".screen6-in-div-2.active").removeClass("active");
			$(".screen6-in-div-3").addClass("active");
		});




		$(".screen6-in-div-a-back-3").click(function (){ //переход на 2 назад
			$(".screen6-in-div-3.active").removeClass("active");
			$(".screen6-in-div-2").addClass("active");
			
		});


		$(".screen6-in-div-a-3").click(function (){ //переход на 4
			$(".screen6-in-div-3.active").removeClass("active");
			$(".screen6-in-div-4").addClass("active");
			
		});

		$(".screen6-in-div-a-back-4").click(function (){ //переход на 3 назад
			$(".screen6-in-div-4.active").removeClass("active");
			$(".screen6-in-div-3").addClass("active");
			
		});


		$(".screen6-in-div-a-4").click(function (){ //переход на 5
			$(".screen6-in-div-4.active").removeClass("active");
			$(".screen6-in-div-5").addClass("active");
			
		});


		$(".screen6-in-div-a-back-5").click(function (){ //переход на 4 назад
			$(".screen6-in-div-5.active").removeClass("active");
			$(".screen6-in-div-4").addClass("active");
			
		});


		$(".screen6-in-div-a-5").click(function (){ //переход на 6
			$(".screen6-in-div-5.active").removeClass("active");
			$(".screen6-in-div-6").addClass("active");
			
		});


		$(".screen6-in-div-a-back-6").click(function (){ //переход на 5 назад
			$(".screen6-in-div-6.active").removeClass("active");
			$(".screen6-in-div-5").addClass("active");
			
		});
		///////////////////////////////////////////////
		///////////////////настройка слайдера 1
		//1 слайдер
		let sliderValue = document.getElementById( "slider-1" );  //сам слайдер
		let output = document.getElementById("inp"); //вывод числа в инпуте
		document.getElementById("slider-1").oninput = function() {
			var value = (this.value-this.min)/(this.max-this.min)*100;
			output.value = this.value;
			this.style.background = 'linear-gradient(to right, #E8702D 0%, #E8702D ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)';
		  };
		  document.getElementById("inp").oninput = function() {
			  sliderValue.value=this.value;
			  sliderValue.style.background = 'linear-gradient(to right, #E8702D 0%, #E8702D ' + this.value + '%, #d3d3d3 ' + this.value + '%, #d3d3d3 100%)';
		  }

		  //2 слайдер
		let sliderValue_1 = document.getElementById( "slider-2" );
		let output_1 = document.getElementById("inp-2");
		document.getElementById("slider-2").oninput = function() {
			var value = (this.value-this.min)/(this.max-this.min)*100;
			output_1.value = this.value;
			this.style.background = 'linear-gradient(to right, #E8702D 0%, #E8702D ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)';
		  };
		  document.getElementById("inp-2").oninput = function() {
			  sliderValue_1.value=this.value;
			  sliderValue_1.style.background = 'linear-gradient(to right, #E8702D 0%, #E8702D ' + this.value + '%, #d3d3d3 ' + this.value + '%, #d3d3d3 100%)';
		  }
		//настройка чекбоксов
		$(".screen6-in-div-ul-li").click(function(){
			$(".screen6-in-div-ul-li").removeClass("active");
			$(".radiobutton-input").prop("checked", false);
			$(".radiobutton-input-checkmark.active").removeClass("active");
			$(this).find(".radiobutton-input").prop("checked", true);
			$(this).find(".radiobutton-input-checkmark").addClass("active");
			$(this).addClass("active");
		})
});
