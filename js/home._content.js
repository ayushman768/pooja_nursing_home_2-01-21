function MyAbout() {

    let home_about = [{
        My_About_class: "my_about",
        heading01: "Welcome To Pooja Nursing</span><span class='light_green'> Home & Hospital</span>",
         about_content: "Welcome to <b>Pooja Nursing Home & Hospital</b>. We are from <b>Bilaspur Chhattisgarh</b> .<b>Dr. Pooja singh has done  M.B.B.S. , D.G.O., F.C.G.P</b>,She is also expert for <b>Obstetrics, Gynecology,infertility.</b>",
		 about_content01:"<b>Dr Prasanna Singh M.B.B.S. D.M.R.D. 15yr experience in obstetric and abdominal sonography colour doppler. X-ray and ct scan reporting. Our hospital </b>facilities -<b> X -ray facility,Sonography facility,E.C.G. facility,Echocardiogarhy facility,Blood & Urine test facilty,Clean hospital,Helpfull hospital staff</b>.<b>Our provided services are IUI facility, Painless delivery,infertility treatment, Cesarean delivery, High risk pragnancy management, Embryo Donattion</b> & <a href='service.html'><u><i>more</i></u></a>",
        about_image: "images/about_image1.png",

    }, {
        col_md_12: "col-md-12",
        col_md_6: "col-md-6",
        col_md_4: "col-md-4",
    }]
    let body = document.getElementById('body');
    let article = document.createElement('article');
    body.appendChild(article);
    article.innerHTML += '<div class="container"><div class="row"></div></div>';


    document.querySelector('article>.container>.row').innerHTML += `
    <div class="${home_about[1].col_md_12}">
        <div class="${home_about[0].My_About_class} ">
            <h2 class="text-center">${home_about[0].heading01}</h2>
            <p>${home_about[0].about_content}</p>
			<p>${home_about[0].about_content01}</p>
        </div>
    </div>
    <div class="${home_about[1].col_md_6}">
        <div class="about_img">
            <img src="${home_about[0].about_image}" class="img-responsive">
        </div>
    </div>
    <div class="coum">
       <div class="${home_about[1].col_md_6}">
       <div class="Service_list">
       <h3>Expert Care of <span class="light_green">the Elderly</span></h3>
       <ul></ul>
        </div>
        </div>
    </div>
    

</div>
`;


    var my_service = function myServiceList(service) {
        this.service = service;
    };
    my_service();
    var arr01 = new my_service("X-Ray Facility");
    var arr02 = new my_service("Sonography Facility");
    var arr03 = new my_service("E.C.G Facility");
    var arr04 = new my_service("Echocardiography Facility");
    var arr05 = new my_service("Blood Or Urine Test");

    var arr = [arr01, arr02, arr03, arr04, arr05];
    for (var i in arr) {
        document.querySelector('article>.container>.row>.coum>.col-md-6>.Service_list>ul').innerHTML += `
        <li><i class="fa fa-heart" style="font-size:20px;color:var(--color_green)"></i> ${arr[i].service}</li>
   `;
    }

}
MyAbout();

var article02 = document.createElement('article');

body.appendChild(article02);

article02.setAttribute('class', 'article02');

document.querySelector('.article02').innerHTML += '<div class="container"><div class="row text-center"><h4 class="pad-10">Available Facility <span class="light_green">Nursing Home</span></h4></div></div>';

var fun = function mysecService(tag) {
    this.tag = tag;

}
fun();


var mysec = new fun("24 Hours Emergency Operation");
var mysec01 = new fun("Treatment & Operation");
var mysec02 = new fun("Fully Air Condition Nursing Home");
var mysec03 = new fun("A/c Private Deluxe Ward");

var myarr = [
    mysec,
    mysec01,
    mysec02,
    mysec03

]
for (var i in myarr) {
    document.querySelector('.article02>.container>.row').innerHTML += `
      <div class="col-md-3">
          <div class="mysec">
              <p class="pad-10">${myarr[i].tag}</p>
          </div>
      </div>
    `;
}