
var article06 = document.createElement('article');
	body.appendChild(article06);
	article06.setAttribute('id', 'mygallery');
	article06.setAttribute("class", "article06");
	article06.innerHTML += "<div class='container-fluid'></div>";
	
	// var img01 = new g_img01("images/pooja_nursing_home_gallery_01.png");
	// var img02 = new g_img01("images/pooja_nursing_home_gallery_02.png");
	// var img03 = new g_img01("images/pooja_nursing_home_gallery_03.png");
	// var img04 = new g_img01("images/pooja_nursing_home_gallery_04.png");
	// var img05 = new g_img01("images/pooja_nursing_home_gallery_05.png");
	// var img06 = new g_img01("images/pooja_nursing_home_gallery_06.png");
	// var img07 = new g_img01("images/pooja_nursing_home_gallery_07.png");
	// var img08 = new g_img01("images/pooja_nursing_home_gallery_08.png");
	
	document.querySelector('.article06>.container-fluid').innerHTML +=`
	     <div class="row text-center pad-10">
		     <h1>Our <span class="light_green ">Gallery</span></h1>
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_01.png" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_02.png" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_03.png" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_04.png" style="width:100%" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
			  </div>
		 </div>
		 <div class="row">
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_05.png" style="width:100%" onclick="openModal();currentSlide(5)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_06.png" style="width:100%" onclick="openModal();currentSlide(6)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_07.png" style="width:100%" onclick="openModal();currentSlide(7)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_08.png" style="width:100%" onclick="openModal();currentSlide(8)" class="hover-shadow cursor">
			  </div>
		 </div>
		  <div class="row">
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_09.png" style="width:100%" onclick="openModal();currentSlide(9)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_10.png" style="width:100%" onclick="openModal();currentSlide(10)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_11.png" style="width:100%" onclick="openModal();currentSlide(11)" class="hover-shadow cursor">
			  </div>
			  <div class="column">
				<img src="images/pooja_nursing_home_gallery_12.png" style="width:100%" onclick="openModal();currentSlide(12)" class="hover-shadow cursor">
			  </div>
		 </div>

			<div id="myModal" class="modal">
			  <span class="close cursor" onclick="closeModal()">&times;</span>
			  <div class="modal-content">

				<div class="mySlides">
				  <div class="numbertext">1 / 2</div>
				  <img src="images/pooja_nursing_home_gallery_01.png" style="width:100%">
				</div>

				<div class="mySlides">
				  <div class="numbertext">2 / 3</div>
				  <img src="images/pooja_nursing_home_gallery_02.png" style="width:100%">
				</div>

				<div class="mySlides">
				  <div class="numbertext">3 / 4</div>
				  <img src="images/pooja_nursing_home_gallery_03.png" style="width:100%">
				</div>
				
				<div class="mySlides">
				  <div class="numbertext">4 / 5</div>
				  <img src="images/pooja_nursing_home_gallery_04.png" style="width:100%">
				</div>
				
				<div class="mySlides">
				  <div class="numbertext">5 / 6</div>
				  <img src="images/pooja_nursing_home_gallery_05.png" style="width:100%">
				</div>
				<div class="mySlides">
				  <div class="numbertext">6 / 7</div>
				  <img src="images/pooja_nursing_home_gallery_06.png" style="width:100%">
				</div>
				<div class="mySlides">
				  <div class="numbertext">7 / 8</div>
				  <img src="images/pooja_nursing_home_gallery_07.png" style="width:100%">
				</div>
				<div class="mySlides">
				  <div class="numbertext">8 / 9</div>
				  <img src="images/pooja_nursing_home_gallery_08.png" style="width:100%">
				</div>
				
				<div class="mySlides">
				  <div class="numbertext">9 / 10</div>
				  <img src="images/pooja_nursing_home_gallery_09.png" style="width:100%">
				</div>
				<div class="mySlides">
				  <div class="numbertext">10 / 11</div>
				  <img src="images/pooja_nursing_home_gallery_10.png" style="width:100%">
				</div>
				<div class="mySlides">
				  <div class="numbertext">11 / 12</div>
				  <img src="images/pooja_nursing_home_gallery_11.png" style="width:100%">
				</div>
				<div class="mySlides">
				  <div class="numbertext">12</div>
				  <img src="images/pooja_nursing_home_gallery_12.png" style="width:100%">
				</div>
				
				
				<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
				<a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
			
			
	`;
		
                   
					
                    
                
	//my gallery validation		
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}				
//my gallery validation end

