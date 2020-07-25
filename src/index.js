import './sass/style.scss';
// If you need images optimized that are not referenced in you source code, uncomment the following line:
require.context("./images/", true, /\.(png|svg|jpg|gif)$/);
// ---------------------------------------

// pop-up open after time ---------------------
window.onload = function() {
    setTimeout(function() {
        $('#staticBackdrop').modal('show')
    }, 60000);
  }

// open pop-up w/ button
$('#staticBackdrop').on('shown.bs.modal', function () {
    $('#staticBackdrop').modal('show')
})

// search form ---------------------
let searchForm = document.getElementById("searchToggle");
let searchIcon = document.getElementById("searchIcon");
let searchInput = document.getElementById("search-input");

// search button click
searchIcon.addEventListener('click', function() { 
    searchForm.classList.toggle("show-search");
    
    if(searchInput.tabIndex == "-1"){
        searchInput.tabIndex="0"
        searchIcon.ariaExpanded = "true";
        
        // set focus to input field
        shiftFocusForward("search-input");

    } else{
        searchIcon.ariaExpanded = "false";

        setTimeout(function() {
            searchInput.tabIndex="-1"
        }, 1000);
    }
 }, false);


 // hamburger menu ---------------------
 let $burger = $(".hamburger");

 // add class for animation
 $($burger).on("click", function (e) {
    e.preventDefault();
 
    $($burger).toggleClass("is-active")

    // set focus to menu point in burger
    setTimeout(function() {
        shiftFocusForward("first-burger-item");
    }, 100);
});


// -------------
 // close on esc
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {

        // search ---
        if(searchInput.tabIndex == "0"){
            searchForm.classList.toggle("show-search");

            // set focus to icon
            setTimeout(function() {
                shiftFocusForward("searchIcon");
            }, 500);

            setTimeout(function() {
                searchInput.tabIndex="-1"
            }, 1000);

        // burger ---
        } else if(document.getElementById("navbarToggleExternalContent").classList == "collapse show") {
            setTimeout(function() {
                $burger.toggleClass("is-active");
                $("#navbarToggleExternalContent").toggleClass("show");
            }, 500);
            
            // set focus to icon
            shiftFocusForward("hamburger-icon");
        }
    }
})

// -------------
// tab key focus
function shiftFocusForward(modalID) {  

    var modal = document.getElementById(modalID);
    modal.focus();  
}
