(function() {

    var body = document.getElementById('body');
    var footer = document.createElement('footer');
    body.appendChild(footer);
    footer.innerHTML += "<div class='layer'><div class='container'><div class='row'></div></div></div>";
    var Footer_Data = [{
            footer_nav01: "Home",
            footer_nav02: "About",
            footer_nav03: "Service",
            footer_nav04: "Gallery",
            footer_nav05: "Contact Us"
        },
        {
            footer_Service01: "24 Hours Emergency Operation",
            footer_Service02: "Treatment & Operation",
            footer_Service03: "Fully Air Condition Nursing Home",
			footer_Service04: "On call surgeon facility available for general surgey like hernia,appendix,kidney stone and gall stone operation",
        },
        {
            footer_adsress: "Front of Old High Court,beside of Canara Bank Bilaspur (495001)",
            footer_phone: "07752-400130",
            footer_phone01: "78288-07181",
			footer_email: "poojanursing@gmail.com"
        }
    ];
    document.querySelector('footer>.layer>.container>.row').innerHTML += `
     <div class="col-md-4">
     <div class="footer_nav">
     <p>My Navigation</p>
     <ul>
     <li><a href="index.html">${Footer_Data[0].footer_nav01}</a></li>
     <li><a href="about.html">${Footer_Data[0].footer_nav02}</a> </li>
     <li><a href="service.html">${Footer_Data[0].footer_nav03}</a>
     </li>
     <li><a href="gallery.html">${Footer_Data[0].footer_nav04}</a>
     </li>
     <li><a href="contact_us.html">${Footer_Data[0].footer_nav05}</a>
     </li>
     </ul>
     </div>
     </div>
     <div class="col-md-4">
     <div class="footer_nav">
     <p>Our facilities</p>
     <ul>
     <li><a href="">${Footer_Data[1].footer_Service01}</a>
     </li>
     <li><a href="">${Footer_Data[1].footer_Service02}</a>
     </li>
     <li><a href="">${Footer_Data[1].footer_Service03}</a>
     </li>
	 <li><a href="">${Footer_Data[1].footer_Service04}</a>
     </li>
     </ul>
     </div>
     </div>
     <div class="col-md-4">
     <div class="footer_nav">
     <p>Address</p>
     <ul>
     <li><a href="">${Footer_Data[2].footer_adsress}</a>
     </li>
     <li><a href="tel:${Footer_Data[2].footer_phone}">${Footer_Data[2].footer_phone}</a>
     </li>
	 <li><a href="tel:${Footer_Data[2].footer_phone01}">${Footer_Data[2].footer_phone01}</a>
     </li>
     <li><a href="mailto:${Footer_Data[2].footer_email}">${Footer_Data[2].footer_email}</a>
     </li>
     </ul>
     </div>

     </div>
     <div class="footer_bottom">
	 
<div class="sidefix">
        <a href="https://api.whatsapp.com/send?phone=7828807181&amp;text=Hi, I am visiting your website and I Want to Treatment by Pooja Nursing Home: www.rainbowhospitalbilaspur.in" target="_blank" class="social-icon whatsapp">
              <img src="images/PoojanursingHome_Whatsapp Number_Bilaspur_Chhattisgarh.png" alt="Pooja Nursing Home Whatsapp Number Bilaspur Chhattisgarh" class="whats-app">
			</a>

     </div>
	 </div>
     `;

})(); //footer function