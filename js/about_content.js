var about = (function() {

    var body = document.getElementById('body');
  
		
		var article_achive  = document.createElement('article');
		body.appendChild(article_achive);
		article_achive.setAttribute('class','my_achivement');
		
		var my_achivement = [{
			img01 :"images/pooja_nursing_home_achivments01.jpg",
			img02:"images/pooja_nursing_home_achivments02.jpg",
			
		}];
		document.querySelector('.my_achivement').innerHTML +='<div class="container"><div class="row text-center "><h1 class="pad-10">Our <span class="light_green">Achievements</span></h1></div></div>';
		
		document.querySelector('.my_achivement>.container>.row').innerHTML +=`
		<div class="col-md-6">
		     <div class="my_img_1 pad-10">
			     <img src="${my_achivement[0].img01}" class="img-responsive">
			 </div>

		</div>
		<div class="col-md-6">
		     <div class="my_img_1 pad-10">
			     <img src="${my_achivement[0].img02}" class="img-responsive">
			 </div>

		</div>`;

})();