// Sticky Navbar by https://www.w3schools.com/howto/howto_js_navbar_sticky.asp


  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {stickyNav()};

  // Get the navbar
    var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
    var sticky = navbar.offsetTop;


    function stickyNav() {
      // Sticky Navbar by https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
            }
          else {
            navbar.classList.remove("sticky");
            }

      // Scroll Back To Top Button by https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
        // When the user scrolls down 20px from the top of the document, show the button
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
            }

          else {
              mybutton.style.display = "none";
            }
      }


// Side Navigation by https://www.w3schools.com/howto/howto_js_sidenav.asp //
    /* Open the sidenav */
      function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        }

    /* Close/hide the sidenav */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        }


// Scroll Back To Top Button by https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
  //Get the button:
  mybutton = document.getElementById("myBtn");

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


// Countdown Timer by https://www.w3schools.com/howto/howto_js_countdown.asp
  // Set the date we're counting down to
    var cdDate = new Date("Mar 22, 2023 23:59:59").getTime();

  // Update the count down every 1 second
    var cdX = setInterval(function() {

    // Get today's date and time
      var cdNow = new Date().getTime();

    // Find the distance between now and the count down date
      var cdDistance = cdDate - cdNow;

    // Time calculations for days, hours, minutes and seconds
      var cdDays = Math.floor(cdDistance / (1000 * 60 * 60 * 24));
      var cdHours = Math.floor((cdDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var cdMinutes = Math.floor((cdDistance % (1000 * 60 * 60)) / (1000 * 60));
      var cdSeconds = Math.floor((cdDistance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML = cdDays + "d " + cdHours + "h " + cdMinutes + "m " + cdSeconds + "s ";

    // If the count down is finished, write some text
      if (cdDistance < 0) {
        clearInterval(cdX);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

    var clock = document.getElementById('clock');

setInterval(function(){
  clock.innerHTML = getCurrentTime();
}, 1);

var clock = document.getElementById('time');

function getCurrentTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
  hours === 0 ? hours = 12 : hours = hours;
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds();
  var currentTime = hours + ':' + minutes + ':' + seconds;
  return currentTime;
}
