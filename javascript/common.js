//COMMON HEADER
const headerContainer = document.createElement("header");
headerContainer.innerHTML = `<nav class="navbar">
        <div class="maxwidth">
            <div class="logo"><a href="#"><img src="/images/ilearnar-logo.png" alt="
                ilearnar"></a></div>
            <ul class="menu" id="menu">
                <li><a href="/index.html" class="menu-btn">Home</a></li>
                <li><a href="/navigation/classes.html" class="menu-btn">Classes</a></li>
                <li><a href="https://ilearnar.wordpress.com" class="menu-btn">Free courses</a></li>
                
                <li class="dropdown"><a href="#" class="menu-btn">tutors</a>
                <ul class="submenu">
                    <li><a href="/navigation/register.html">Find a tutor</a></li>
                    <li><a href="/navigation/apply.html">Become a tutor</a></li>
                </ul>
                </li>
                <li><a href="/navigation/about.html" class="menu-btn">About</a></li>
                <li><a href="/index.html#contact" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-icon">
               <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <div class="scroll-up-btn">
    <i class="fas fa-angle-up"></i>
</div>
`;
document.body.prepend(headerContainer);

//ACTIVE LINKLINK APPEARANCE
document.addEventListener("DOMContentLoaded", function(){
    const menuLinks = document.querySelectorAll(".menu-btn,submenu li a");
    
    menuLinks.forEach(function(link){
        link.addEventListener("click", function(event){

            menuLinks.forEach(function(menuLink){
                menuLink.classList.remove("active");
            });

            link.classList.add("active");
        });

        if (window.location.href.includes(link.getAttribute("href"))){
            link.classList.add("active");
        }
    });
});

//STICKY BAR toggle

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
  
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });
  
    // ---------move to top script ------------
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })
  
  // ------------ toggle menu script ------------
  
  $('.menu-icon i').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-icon i').toggleClass("active");
  })
  
  });


//COMMON FOOTER
const footerContainer = document.createElement("footer");
footerContainer.innerHTML = `<div class="footer">
<div class="footer-links">
    <h2>Useful links</h2>
    <li> <a href="https://ilearnar.wordpress.com">Free courses</a> </li>
    <li> <a href="#">Books store</a> </li>
    <li> <a href="https://ilearnar.wordpress.com/blog">Blog</a> </li>
    <li> <a href="#">Events</a> </li>
    <li> <a href="#">Partnership</a> </li>
    <li> <a href="#">Teachers training</a> </li>
    <li> <a href="/navigation/register.html">Connect with a tutor</a> </li>
    <li> <a href="/navigation/apply.html">Become a tutor</a></li>
    </div>
    <div class="icon-content">
    <div class="socials">  CONNECT WITH US</div>
    <div class="icon-links">
    <a href="https://www.facebook.com/ilearnarpage/"><i class="fab fa-facebook-f">
        </i></a>
    <a href="#"><i class="fab fa-linkedin-in">
        </i></a>
    <a href="https://www.instagram.com/ilearnar_official"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="footer-line"></div>
    <div class="copyright">
        <p> &copy; Ilearnar 2023</p>
    </div>
</div>
`;

document.body.appendChild(footerContainer);
