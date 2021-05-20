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

    let competences = [{
        id: "javascript",
        value: 30,
        label: "Javascript"
    }, {
        id: "sql",
        value: 30,
        label: "Sql"
    }, {
        id: "java",
        value: 30,
        label: "Java"
    }, {
        id: "html",
        value: 40,
        label: "HTML & CSS"
    }, {
        id: "php",
        value: 60,
        label: "PHP"
    }, {
        id: "python",
        value: 50,
        label: "Python"
    }];

    competences.forEach(element => {
        let contentData = [{
                value: 100 - element.value,
                color: "rgb(24, 23, 23)"
            },
            {
                value: element.value,
                color: "#ecf0f1"
            }
        ];
        new Chart(document.querySelector("#" + element.id + ">canvas").getContext("2d")).Content(contentData);
        document.querySelector("#" + element.id + ">p").innerHTML = element.label + " " + element.value + "%"
    });
});