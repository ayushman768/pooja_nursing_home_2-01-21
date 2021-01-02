var ad = function myadvice(list){
    this.list = list;
	
}
ad();

var arr = new ad('Bleeding per vagina or leaking per vagina.'); 
var arr01 = new ad('Labor pain.');
var arr02 =  new ad('Burning in Urine.');
var arr03 = new ad('Frequent Urine.');
var arr04 = new ad('Infertility Problems.');
var arr05  = new ad('Polycystic Ovarian Disease.');
var arr06 = new ad('Secondary Infertility.');
var ad01 = new ad('Breast Feeding is good for baby.');
var ad02 = new ad('Eat Balanced and Nutritous food.');
var ad03 = new ad('Take Contraceptive advice after first Baby.');
var ad04 = new ad('Get Regular Checkup of mother and Baby.');

var body =  document.getElementById('body');
var mySection = document.createElement('section');
var mySection01 = document.createElement('section');
body.appendChild(mySection);
body.appendChild(mySection01);
mySection.setAttribute('class','section_Advice');
mySection01.setAttribute('class','section_Advice01');

mySection.innerHTML +='<div class="container"><div class="row"><h6>Contact <span class="light_green">Your Doctor:</span></h6></div></div>';
mySection01.innerHTML +='<div class="container"><div class="row"><h6>Additional <span class="light_green">Advise</span></h6></div></div>';

var myArr = [arr,arr01,arr02,arr03,arr04,arr05,arr06]; 
for(var i in myArr){
	document.querySelector('.section_Advice>.container>.row').innerHTML +=`
		 <div class="col-md-6">
		     <div class="myAdvice pad-10">
			     <ul>
				     <li>${myArr[i].list}</li>
				 </ul>
			 </div>
		 </div>
	`;
}
var myArr01 = [ad01,ad02,ad03,ad03,ad04]; 
for(var i in myArr01){
	document.querySelector('.section_Advice01>.container>.row').innerHTML +=`
		 <div class="col-md-6">
		     <div class="myAdvice pad-10">
			     <ul>
				     <li>${myArr01[i].list}</li>
				 </ul>
			 </div>
		 </div>
	`;
}

v