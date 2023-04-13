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


$(".slick-carousel").slick({
    slidesToShow: 3,
    speed: 3000,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: false,

    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$(".slick-carousel-left").slick({
    slidesToShow: 3,
    speed: 3000,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: false,

    focusOnSelect: true,
    rtl: true,
    responsive: [
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


// accordion
$(document).ready(function () {
    $(".accordion-titel").click(function () {
        $(this).parent(".accordion-item").addClass('active').find(".accordion-contant").slideToggle();
        $(this).parent(".accordion-item").prevAll(".accordion-item").removeClass('active').find(".accordion-contant").slideUp();
        $(this).parent(".accordion-item").nextAll(".accordion-item").removeClass('active').find(".accordion-contant").slideUp();
    });
});


// select
$(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
    $(this).parents(".custom-options").addClass("option-hover");
}, function () {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
    $('html').one('click', function () {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function () {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


// select
function countryDropdown(seletor) {
    var Selected = $(seletor);
    var Drop = $(seletor + '-drop');
    var DropItem = Drop.find('li');

    Selected.click(function () {
        Selected.toggleClass('open');
        Drop.toggle();
    });

    Drop.find('li').click(function () {
        Selected.removeClass('open');
        Drop.hide();

        var item = $(this);
        Selected.html(item.html());
    });

    DropItem.each(function () {
        var code = $(this).attr('data-code');

        if (code != undefined) {
            var countryCode = code.toLowerCase();
            $(this).find('svg').addClass('flagstrap-' + countryCode);
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
        showText.classList.add("open")
        showText.classList.remove("hide")
    } else {
        input.setAttribute("type", "password");
        showText.innerText = "show";

        showText.classList.remove("open")
        showText.classList.add("hide")
    }
}

// event delegation on event target match

if (parent) {
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

// tabs

const tabs = document.querySelectorAll(".tabs-wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");


tabs.forEach(tabsItem => {
    tabsItem.onclick = e => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("active");
                if (btn.tagName === 'path') {
                    btn.nextElementSibling.classList.remove("white-text")
                    btn.nextElementSibling.style.fill = "#E5876C"
                }

            });
            if (e.target.tagName === 'path') {
                console.log(e.target)
                e.target.classList.add("active");
                if (e.target.classList.contains('active')) {
                    e.target.nextElementSibling.classList.add("white-text");
                }
            } else {
                e.target.classList.add("active");
            }


            contents.forEach(content => {
                content.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    }
})


// document.getElementById('autoplay').play();


//gsap

AOS.init();

if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    let scrollItem1 = document.querySelector('.pay-img-animate .pay-animate-item:nth-child(2)'),
        scrollItem2 = document.querySelector('.pay-img-animate .pay-animate-item:nth-child(3)'),
        scrollItem3 = document.querySelector('.pay-img-animate .pay-animate-item:nth-child(4)'),
        scrollItem4 = document.querySelector('.pay-img-animate .pay-animate-item:nth-child(5)'),
        scrollItem5 = document.querySelector('.pay-img-animate .pay-animate-item:nth-child(6)'),
        scrollItem6 = document.querySelector('.pay-img-animate .pay-animate-item:nth-child(7)'),
        scrollItem7 = document.querySelector('.statistics-el1'),
        scrollItem8 = document.querySelector('.statistics-el2'),
        scrollItem9 = document.querySelector('.statistics-el3'),
        scrollItem10 = document.querySelector('.transfer-el'),
        scrollItem11 = document.querySelector('.application-img');


    gsap
        .timeline({
            scrollTrigger: {
                trigger: "section.pay",
                start: "top 40%",
                end: "bottom 10%",
                scrub: 1.5,
            }
        })
        .to(scrollItem1, {y: '-=50px', duration: 0.5}, 0)
        .to(scrollItem2, {y: '+=50px', duration: 0.5}, 0)
        .to(scrollItem3, {x: '-=50px', duration: 0.5}, 0)
        .to(scrollItem4, {y: '-=50px', duration: 0.5}, 0)
        .to(scrollItem5, {x: '+=50px', duration: 0.5}, 0)
        .to(scrollItem6, {y: '+=70px', duration: 0.5}, 0)
        .to(scrollItem7, {y: '-=70px', duration: 0.5}, 0)
        .to(scrollItem8, {y: '-=70px', duration: 0.5}, 0)
        .to(scrollItem9, {y: '-=70px', duration: 0.5}, 0)


    gsap
        .timeline({
            scrollTrigger: {
                trigger: "",
                start: "top 10%",
                end: "bottom 0%",
                scrub: 0.5,
            }
        })
        .to(scrollItem10, {y: '-=150px', duration: 0.5}, 0)

    gsap
        .timeline({
            scrollTrigger: {
                trigger: "application",
                start: "top 40%",
                end: "bottom 0%",
                scrub: 0.5,
            }
        })
        .to(scrollItem11, {x: '+=70px', duration: 0.5}, 0)

}

// }

//infinite scrolling text

const rows = document.querySelectorAll(".cb-tagreel-row");

rows.forEach(function (e, i) {
    let row_width = e.getBoundingClientRect().width;
    let row_item_width = e.children[0].getBoundingClientRect().width;
    let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
    let x_translation = initial_offset * -1;
    // console.log(e.children[0].clientWidth);
    console.log(x_translation);

    gsap.set(e, {
        xPercent: `${initial_offset}`
    });

    // let duration = 5 * (i + 1);

    var tl = gsap.timeline();

    tl.to(e, {
        ease:'Expo.easeIn',
        duration: 5,
        xPercent: 0,
        overwrite: true,

    });


});
