//////HEADER & NAV STRAT FUNCTION
var header = (function() {
    var header_Jason = [{
        container: "container-fluid",
        row: "row",
        col_6: "col-md-6",
        head_Data: "My_header"
    }, {
        logo: "<span class='dark_green' title='Pooja Nursing Home Bilaspur'>Pooja Nursing Home</span> <span class='light_green'>& Hospital</span>",
        Phone01: "07752-400130",
        Email: "poojanursing@gmail.com",
        Address: "Front of Old High Court,<br>beside of Canara Bank<br> Bilaspur (495001)",
        timing: "10:30am to 2:00pm<br> 6:00pm to 8:00pm"
    }, {

        nav_01: "index.html",
        nav_02: "about.html",
        nav_03: "service.html",
        nav_04: "gallery.html",
        nav_05: "contact_us.html",
        Button: "Get Appointment"
    }]


    var body = document.getElementById('body');
    var header = document.createElement('header');
    var nav = document.createElement('nav');
    body.appendChild(header);
    body.appendChild(nav);
    nav.setAttribute('id', 'my_nav')


    header.innerHTML += `<div class="${header_Jason[0].container}"><div class="${header_Jason[0].row}"></div></div>`;


    document.querySelector('header>.container-fluid>.row').innerHTML += `
    <div class="col-md-4">
    <div class="pooja_nursing_home_logo text-center">
      <h1><b>${header_Jason[1].logo}</b></h1>
    </div>
    </div> 
        <div class="col-md-8">
            <div class="${header_Jason[0].head_Data} text-center pad-10">
               <ul class="navbar-nav nav pull-right">
                  
              
                  
                   <li><i class="fa fa-mobile" style="font-size:22px"></i> <b>${header_Jason[1].Email}</b><br><b>${header_Jason[1].Phone01}</b></li>
                 
                   <li><i class='fas fa-map-marker' style='font-size:22px'></i><b>${header_Jason[1].Address}</b></li>
                   <li><i class="fa fa-clock-o" style="font-size:22px"></i><b>${header_Jason[1].timing}</b></li>
               </ul>
            </div>
        </div>
       
    `;
    nav.innerHTML += `<div class="${header_Jason[0].container}"><div class="${header_Jason[0].row}"></div></div>`;
    document.querySelector('nav>.container-fluid>.row').innerHTML += `
      
    <div class="col-md-8">
	<i class="fa fa-bars menu" style="font-size:24px" onclick="my_menu()"></i>
           <div class="navigation  text-center">
              <ul class="nav navbar-nav">
                  <li><a href="${header_Jason[2].nav_01}">Home</a></li>
                  <li><a href="${header_Jason[2].nav_02}">About</a></li>
                  <li><a href="${header_Jason[2].nav_03}">Services</a></li>
                 
                  <li><a href="${header_Jason[2].nav_04}">Gallery</a></li>
                  <li><a href="${header_Jason[2].nav_05}">Contact Us</a></li>
              </ul>
           </div>
        </div>
        <div class="col-md-4">
        <div class="navigation  text-center">
           
              <button class="myBtn" onclick="my_btn()">${header_Jason[2].Button}</button>
               
         
        </div>
		
		</div>
    `;

})();

//HEADER END FUNCTION