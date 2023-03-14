const animationSetvice = require('./modules/animate-service');
animationSetvice()

$('#slick1').slick({
    rows: 2,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

// accordion
$(document).ready(function(){
    $(".accordion-titel").click(function(){
        $(this).parent(".accordion-item").find(".accordion-contant").slideToggle();
        $(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp();
        $(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp();
    });
});



// select
$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
}, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


// select
function countryDropdown(seletor){
    var Selected = $(seletor);
    var Drop = $(seletor+'-drop');
    var DropItem = Drop.find('li');

    Selected.click(function(){
        Selected.toggleClass('open');
        Drop.toggle();
    });

    Drop.find('li').click(function(){
        Selected.removeClass('open');
        Drop.hide();

        var item = $(this);
        Selected.html(item.html());
    });

    DropItem.each(function(){
        var code = $(this).attr('data-code');

        if(code != undefined){
            var countryCode = code.toLowerCase();
            $(this).find('svg').addClass('flagstrap-'+countryCode);
        }
    });
}

countryDropdown('#country');
countryDropdown('#country-header');



// input eye

var parent = document.querySelector(".parent");

// password show/hide helper function
function showHide(input, showText) {
    if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
        showText.innerText = `hide`;
    } else {
        input.setAttribute("type", "password");
        showText.innerText = "show";
    }
}

// event delegation on event target match

if(parent) {
    parent.addEventListener("click", event => {
        if (event.target.matches("span")) {
            var spanElm = event.target;
            var inputElm = spanElm.previousElementSibling;
            showHide(inputElm, spanElm);
        }
    });

}


// *****BURGER********
let body = document.querySelector('body')
let burgerBtn = document.querySelector('.burger-menu');
let menuContent = document.querySelector('.dropdown-menu__mobile');


burgerBtn.addEventListener('click', function () {
    if (menuContent.classList.contains('flex') === false) {
        menuContent.classList.add('flex');
        burgerBtn.classList.add('burger-close');
        menuContent.classList.remove('hide');
        body.classList.add('hide')

    } else {
        menuContent.classList.remove('flex');
        burgerBtn.classList.remove('burger-close');
        menuContent.classList.add('hide');
        body.classList.remove('hide')

    }
})
