var service = (function() {
    var body = document.getElementById('body');
    var article04 = document.createElement('article');

    body.appendChild(article04);
    article04.setAttribute('class', "article04")
    article04.innerHTML += '<div class="container"><div class="row text-center"><h1>Our <span class="light_green">Services</span></h1></div></div>';

    var myService = function(img, text) {
        this.img = img;
        this.text = text;
    }
    var service_0 = new myService("images/normal_delevery.jpg", "Normal Delivery");
    var service_1 = new myService("images/Obstetrics-Gynecology.jpg", "Obstetrics-Gynecology");
    var service_2 = new myService("images/high-risk-pregnancy-1.png", "High-Risk-Pregnancy");
    var service_3 = new myService("images/Menstrual-Problems.jpg", "Menstrual-Problems");
   
    var service_5 = new myService("images/iui-process.jpg", "IUI Process");
    var service_6 = new myService("images/sonography_3d.jpg", "Sonography 3d");
    var service_7 = new myService("images/palystic_overy_tratment.jpg", "Polycystic Ovary Treatment");
	
	var service_9 = new myService("images/uterus.jpg", "Uterus Treatment");
	var service_10 = new myService("images/sperm_bank.jpg", "Sperm Banking");
	var service_11 = new myService("images/Stomach_and_abdomen.jpg", "Stomach and Abdomen Treatment");

    var main_arr = [service_0, service_1, service_2, service_3,  service_5, service_6, service_7,service_9,service_10,service_11];

   
    for (var i in main_arr) {
        document.querySelector('.article04>.container>.row').innerHTML += `
         <div class="col-md-3">
           <div class="My_Service_home">
               <img src="${main_arr[i].img}" alt="${main_arr[i].text}">
               <p>${main_arr[i].text}</p>
           </div>
           </div>
        `;
    }


   var article041 = document.createElement('article');

    body.appendChild(article041);
    article041.setAttribute('class', "article041")
    article041.innerHTML += '<div class="container"><div class="row text-center"><h1 class="pad-10">Our On call <span class="light_green">surgeon facility available</span></h1></div></div>';

    var myService01 = function(img, text) {
        this.img = img;
        this.text = text;
    }
    var service_0 = new myService01("images/hernia.jpg", "Hernia");
    var service_1 = new myService01("images/appendix.jpg", "Appendix");
    var service_2 = new myService01("images/kidney_stone.jpg", "kidney Stone");
    var service_3 = new myService01("images/gall_stone_operation.jpg", "Gall Stone Operation");
   

    var main_arr01 = [service_0, service_1, service_2, service_3];

   
    for (var i in main_arr01) {
        document.querySelector('.article041>.container>.row').innerHTML += `
         <div class="col-md-3">
           <div class="My_Service_home">
               <img src="${main_arr01[i].img}" alt="${main_arr01[i].text}">
               <p>${main_arr01[i].text}</p>
           </div>
           </div>
        `;
    }


})();