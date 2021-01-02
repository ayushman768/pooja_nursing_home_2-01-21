let article = document.createElement('article');
body.appendChild(article);
article.setAttribute('class', 'article01');
document.querySelector('.article01').innerHTML += '<div class="container"><div class="row text-center"><h5 class="pad-10">Our <span class="light_green">Services</span></h5></div></div>';

function myService(img, text) {
    this.img = img;
    this.text = text;
}
myService();
var myService01 = new myService("images/normal_delevery.jpg", "Normal Delivery");
var myService02 = new myService("images/Obstetrics-Gynecology.jpg", "Obstetrics-Gynecology");
var myService03 = new myService("images/high-risk-pregnancy-1.png", "High-Risk-Pregnancy");
var myService04 = new myService("images/Menstrual-Problems.jpg", "Menstrual-Problems");

var arrService = [myService01, myService02, myService03, myService04];

for (var i in arrService) {
    document.querySelector('.article01>.container>.row').innerHTML += `
    <div class="col-md-3">
        <div class="My_Service_home pad-10">
            <img src="${arrService[i].img}" class="img-responsive">
            <p>${arrService[i].text}</p>
        </div> 
    </div>   
`;

}

let article03 = document.createElement('article');
body.appendChild(article03);
article03.setAttribute('class', 'article03');
document.querySelector('.article03').innerHTML += '<div class="container"><div class="row text-center"><div class="col-md-12"><a href="service.html" class="myBtn">View More</a></div></div></div>';