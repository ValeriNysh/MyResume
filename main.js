function updateEmailText() {      
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");

  if (window.innerWidth <= 640) {
    email.textContent = "vani280301@gmail.com"
    phone.textContent = "+49 160 230 9896"
  }
  else if (window.innerWidth <= 962) {
    email.textContent = "vani280301@ ..."
    phone.textContent = "+491602309896"
  }
  else if (window.innerWidth <= 1070) {
    email.textContent = "vani280301@gmail ...";
    phone.textContent = "+49 160 230 9896"
  }
  else {
    email.textContent = "vani280301@gmail.com";
    phone.textContent = "+49 160 230 9896"
  }
}
updateEmailText();
window.addEventListener("resize", updateEmailText);


function removeContactTitle() {
  if (window.innerWidth <= 640)
    document.getElementById("contact-title").textContent = "";
  else
    document.getElementById("contact-title").textContent = "Contacts";
}
removeContactTitle();
window.addEventListener("resize", removeContactTitle);


function changeElementsOrder() {
  const header = document.querySelector('header');
  const mainContent = document.querySelector('.main-content');
  const sidebar = document.querySelector('.sidebar');
  const myPhoto = document.querySelector('.my-photo');
  const myInfo = document.querySelector('.my-info');

  const myPhotoImg = document.getElementById('my-photo');
  const contacts = document.getElementById('contacts-section');
  const skills = document.getElementById('skills-section');

  if (window.innerWidth <= 640 && myPhoto && myPhotoImg.parentElement != myInfo) {        
    myPhoto.removeChild(myPhotoImg);
    myInfo.appendChild(myPhotoImg);

    while (sidebar.firstChild) {
      mainContent.appendChild(sidebar.firstChild);
    }
  }
  else if (window.innerWidth > 640 && myInfo && myPhotoImg.parentElement != myPhoto ) {
    myInfo.removeChild(myPhotoImg);
    myPhoto.appendChild(myPhotoImg);

    mainContent.removeChild(contacts);
    sidebar.appendChild(contacts);
    mainContent.removeChild(skills);
    sidebar.appendChild(skills);        
  }
}

changeElementsOrder();

window.addEventListener("resize", changeElementsOrder);
window.addEventListener("load", changeElementsOrder);

window.dispatchEvent(new Event('resize'));

