function updateEmailText() {      
    if (window.innerWidth <= 528) {
        document.getElementById("email").textContent = "vani280301@gmail.com"
        document.getElementById("phone").textContent = "+49 160 230 9896"
    }
    else if (window.innerWidth <= 612) {
      document.getElementById("email").textContent = "vani280301@ ..."
      document.getElementById("phone").textContent = "+491602309896"
    }
    else if (window.innerWidth <= 772) {
      document.getElementById("email").textContent = "vani280301@gmail ...";
      document.getElementById("phone").textContent = "+49 160 230 9896"
    }
    else {
      document.getElementById("email").textContent = "vani280301@gmail.com";
      document.getElementById("phone").textContent = "+49 160 230 9896"
    }
    }

    updateEmailText();

    window.addEventListener("resize", updateEmailText);

    // function changeElementsLocation(element, from, to) {
    //   from.removeChild(element);
    //   to.appendChild(element);
    // }

    function changeElementsOrder() {
      const mainContent = document.querySelector('.main-content');
      const sidebar = document.querySelector('.sidebar');
      
      const myPhoto = document.getElementById('my-photo');
      const contacts = document.getElementById('contacts-section');
      
      if (window.innerWidth <= 528) {        
        // while (sidebar.firstChild) {
        //   mainContent.appendChild(sidebar.firstChild);
        // }              
        // changeElementsLocation(myPhoto, mainContent, sidebar);
        
        sidebar.removeChild(myPhoto);
        mainContent.appendChild(myPhoto);

        sidebar.removeChild(contacts);
        mainContent.appendChild(contacts);
      }
      else {
        // while (mainContent.firstChild) {
        //   sidebar.appendChild(mainContent.firstChild);
        // }
        // changeElementsLocation(myPhoto, sidebar, mainContent);
        
        mainContent.removeChild(myPhoto);
        sidebar.appendChild(myPhoto);

        mainContent.removeChild(contacts);
        sidebar.appendChild(contacts);
      }

    }

    window.addEventListener("resize", changeElementsOrder);
    window.addEventListener("load", changeElementsOrder);

    window.dispatchEvent(new Event('resize'));

