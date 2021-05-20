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
            value: 70,
            color: "#1abc9c"
        },
        {
            value: 30,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("javascript").getContext("2d")).Content(contentData);


    var contentData = [{
            value: 90,
            color: "#1abc9c"
        },
        {
            value: 10,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("bootstrap").getContext("2d")).Content(contentData);


    var contentData = [{
            value: 65,
            color: "#1abc9c"
        },
        {
            value: 35,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("java").getContext("2d")).Content(contentData);

    var contentData = [{
            value: 80,
            color: "#1abc9c"
        },
        {
            value: 20,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("html").getContext("2d")).Content(contentData);


    var contentData = [{
            value: 70,
            color: "#1abc9c"
        },
        {
            value: 30,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("php").getContext("2d")).Content(contentData);


    var contentData = [{
            value: 50,
            color: "#1abc9c"
        },
        {
            value: 50,
            color: "#ecf0f1"
        }
    ];
    var mycontent = new Chart(document.getElementById("python").getContext("2d")).Content(contentData);
});