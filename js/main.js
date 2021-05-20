jQuery(document).ready(function($) {
    $('.smothscroll').on('click', function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top - 62
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    $('.carousel').carousel({
        interval: 3500
    });

    var contentData = [{
            value: 60,
            color: "rgb(79, 92, 206)"
        },
        {
            value: 40,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("javascript").getContext("2d")).Content(contentData);


    var contentData = [{
            value: 70,
            color: "rgb(79, 92, 206)"
        },
        {
            value: 30,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("sql").getContext("2d")).Content(contentData);


    var contentData = [{
            value: 65,
            color: "rgb(79, 92, 206)"
        },
        {
            value: 35,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("java").getContext("2d")).Content(contentData);

    var contentData = [{
            value: 45,
            color: "rgb(79, 92, 206)"
        },
        {
            value: 55,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("html").getContext("2d")).Content(contentData);


    var contentData = [{
            value: 35,
            color: "rgb(79, 92, 206)"
        },
        {
            value: 65,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("php").getContext("2d")).Content(contentData);


    var contentData = [{
            value: 50,
            color: "rgb(79, 92, 206)"
        },
        {
            value: 50,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("python").getContext("2d")).Content(contentData);
});