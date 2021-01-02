//Contact Start 

var Contact = function() {
    var myCon = [{
        address: "Front of Old High Court,beside of Canara Bank Bilaspur(495001)",
        Phone: "07752-400130",
		Phone01: "78288-07181",
        Email: " poojanursing@gmail.com"
    }]

    var body = document.getElementById('body');
    var article05 = document.createElement('article');
    body.appendChild(article05);
    article05.setAttribute('class', 'article05');

    document.querySelector('.article05').innerHTML += `
       <div class="container">
           <div class="row">
              <div class="col-md-6">
                  <div class="My_form pad-10">
                      <h1>Our Contact<span class="light_green"> Form</span></h1>
                      <form action="#" method="post">
                          <div class="form-group">
                              <input type="text" value ="" placeholder="Name" required="" class="form-control">
                          </div>
                          <div class="form-group">
                              <input type="email" value ="" placeholder="Email" required="" class="form-control">
                          </div>
                          <div class="form-group">
                             <textarea placeholder="Type A Msg" class="form-control"></textarea>
                          </div>
                          <input type="button" value="Submit" class="pad-10 myBtn">
                      </form>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="My_Address pad-10">
                      <h1>Our<span class="light_green"> Address</span></h1>
                        <ul>
                            <li>
                            <i class='fas fa-map-marker' style='font-size:22px'></i> &nbsp;&nbsp;${myCon[0].address}    
                            <li>
                            <li><i class="fa fa-mobile" style="font-size:22px"></i>&nbsp;&nbsp;<a href="tel:${myCon[0].Phone}">${myCon[0].Phone}</a></li>
							<li><i class="fa fa-mobile" style="font-size:22px"></i>&nbsp;&nbsp;<a href="tel:${myCon[0].Phone01}">${myCon[0].Phone01}</a></li>
                            <li><i class="fa fa-envelope" style="font-size:22px" aria-hidden="true"></i> &nbsp;&nbsp;<a href="mailto:${myCon[0].Email}">${myCon[0].Email}</a><li>
                        </ul>
                  </div>
              </div>
           </div>
       </div>    `;
}
Contact();