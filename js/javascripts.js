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
		///////////////////настройка слайдера
		let sliderValue = document.getElementById( "slider-1" );
		let selectbutton = document.getElementById("select-btn-id");
		let output = document.getElementById("inp");
		let selectplace = document.getElementById("select-id");
		output.innerHTML = sliderValue.value;
		sliderValue.oninput = function() {
			selectbutton.style.width =this.value + "%";
			console.log(this.value + "%");
			output.value = this.value;
		}

		let sliderValue_1 = document.getElementById( "slider-2" );
		let output_1 = document.getElementById("inp-2");
		let progressbar_2 = document.getElementById("progressbar-2");
		output_1.innerHTML = sliderValue_1.value;
		sliderValue_1.oninput = function() {
			output_1.value = this.value;
			progressbar_2.style.width = this.value + "%";
		}
		///////////////////////////////////////////////
		//настройка чекбоксов списка
		let radiobtn=document.getElementsByClassName("radiobutton-input-fake");
		let li_radiobtn = document.getElementsByClassName("screen6-in-div-ul-li");
		let rbutton_id;
		
		$(".screen6-in-div-ul-li").click(function(){
			rbutton_id= $(this).find(".radiobutton-input-fake").prop("id");
			$(this).find(".radiobutton-input-fake").addClass("active");
			console.log(rbutton_id);
			console.log(li_radiobtn[0]);
			console.log(li_radiobtn[0].find(".radiobutton-input-fake"));
			for (let i = 0; i < radiobtn.length; i++) {
				if (li_radiobtn[i].find(".radiobutton-input-fake").prop("id")==rbutton_id) {
					li_radiobtn[i].classList.add("active");
				}
				else{
					li_radiobtn[i].classList.remove("active");
					radiobtn[i].classList.remove("active");
				}
			}
		})
});
