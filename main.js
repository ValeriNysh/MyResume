// function toggleMenu() {
//   var menu = document.getElementById('menu');
//   menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
// }


// function calculateMenuPosition() {
//   const menuBtn = document.getElementById('manu-btn');
//   const menu = document.getElementById('menu');
//   const padding = parseFloat(getComputedStyle(body).paddingRight);

//   const menuWidth = parseFloat(getComputedStyle(menu).width);

//   const left = menuBtn.getBoundingClientRect().left - menuWidth - padding;
//   menu.style.left = '${left}px';
// }

// calculateMenuPosition();
// window.addEventListener('resize', calculateMenuPosition);


function updateEmailText() {      
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");

  if (window.innerWidth < 647) {
    email.textContent = "vani280301@gmail.com"
    phone.textContent = "+49 160 230 9896"
  }
  else if (window.innerWidth < 962) {
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
  if (window.innerWidth < 647)
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
  const footerSide = document.getElementById('footer-nav-side');
  const footerMain = document.getElementById('footer-nav-main');

  const myPhotoImg = document.getElementById('my-photo');
  const contacts = document.getElementById('contacts-section');
  const skills = document.getElementById('skills-section');
  const allDocuments = document.getElementById('documents-section');

  const experience = footerSide.querySelector('a[href="#experience-section"]');
  const education = document.querySelector('a[href="#education"]');
  const projects = document.querySelector('a[href="#projects-section"]');

  if (window.innerWidth < 647 && myPhoto && myPhotoImg.parentElement != myInfo) {        
    myPhoto.removeChild(myPhotoImg);
    myInfo.appendChild(myPhotoImg);

    while (sidebar.firstChild) {
      mainContent.appendChild(sidebar.firstChild);
    }
    while (footerMain.firstChild) {
      footerSide.appendChild(footerMain.firstChild);
    }
  }
  else if (window.innerWidth >= 647 && myInfo && myPhotoImg.parentElement != myPhoto ) {
    myInfo.removeChild(myPhotoImg);
    myPhoto.appendChild(myPhotoImg);

    mainContent.removeChild(contacts);
    sidebar.appendChild(contacts);
    mainContent.removeChild(skills);
    sidebar.appendChild(skills);      
    mainContent.removeChild(allDocuments);
    sidebar.appendChild(allDocuments);  

    footerSide.removeChild(experience);
    footerMain.appendChild(experience);
    footerSide.removeChild(education);
    footerMain.appendChild(education);
    footerSide.removeChild(projects);
    footerMain.appendChild(projects);
  }
}

changeElementsOrder();

window.addEventListener("resize", changeElementsOrder);
window.addEventListener("load", changeElementsOrder);

window.dispatchEvent(new Event('resize'));

