// Active state for navigation links
const onPage = window.location.pathname;  
const navLinks = document.querySelectorAll('a').  
forEach(link => {
  if(link.href.includes(`${onPage}`)){
    link.classList.add('active');
  }
})


// Back to top button
/***************************************************************************************
*    Title: <How TO - Scroll Back To Top Button>
*    Author: <W3Schools>
*    Date: <Unknown>
*    Availability: <https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top>
*
***************************************************************************************/

mybutton = document.getElementById("btntoTop"); 

window.onscroll = function() {scrollFunction()};

function scrollFunction() { 
  if (document.documentElement.scrollTop > 100) { 
    mybutton.style.display = "block"; 
  } else {
    mybutton.style.display = "none"; 
  }
}

function toTop() {
  document.documentElement.scrollTop = 0; 
}
