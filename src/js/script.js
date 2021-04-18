$(document).ready(function() {
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Obrigado! Agora é só aguardar no seu e-mail para acompanhar novidades.";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! Houve algum problema no envio do e-mail."
      });
    }
    
    form.addEventListener("submit", handleSubmit);
    
    var form02 = document.getElementById("my-form-02");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form02.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Obrigado! Agora é só aguardar no seu e-mail para acompanhar novidades.";
        form02.reset()
      }).catch(error => {
        status.innerHTML = "Oops! Houve algum problema no envio do e-mail."
      });
    }

    form02.addEventListener("submit", handleSubmit)

    if( localStorage.getItem('modal-newsletter') ) {
        $('.modal-newsletter').hide();
    }
    
    if( localStorage.getItem('footer-privacy-policy') ) {
        $('.footer-privacy-policy').hide();
    }

    $(".modal-newsletter .btn-close, .modal-newsletter .btn-subscribe").click(function() {
        localStorage.setItem('modal-newsletter', true);

        $(this).parents('.modal-newsletter').hide();
    });

    $(".btn-accepted").click(function(e) {
        localStorage.setItem('footer-privacy-policy', true);

        $(this).parents('.footer-privacy-policy').hide();
    });

    $(".btn-privacy-policy").click(function(e) {
        e.preventDefault();

        $(".modal-privacy-policy").removeClass('hide');
    });

    $(".modal-privacy-policy .btn-close").click(function() {
        $(this).parents('.modal-privacy-policy').hide();
    })

    $(".carousel-01").owlCarousel({
        loop: true,
        nav:true,
        margin: 10,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 1,
                nav: true
            },
            1000:{
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    $(".carousel-02").owlCarousel({
        loop: true,
        nav:true,
        margin: 10,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 3,
                nav:false
            },
            1000:{
                items: 4,
                nav: true,
                loop: false
            }
        }
    });

    $(".menu-hamburguer").click(function() {
        $(".menu-mobile").removeClass('hide');
    });
    
    $(".menu-mobile .icon-close").click(function() {
        $(".menu-mobile").addClass('hide');
    });
    
    $(".menu-mobile .wrapper-links .container-link").click(function() {
        $(".menu-mobile").addClass('hide');
    });

    $(".wrapper-read-more").each(function() {
        $(".button-read-more").click(function() {
            $(this).toggleClass('invert-icon');
            $(this).parents(".wrapper-read-more").find('.hidding').toggle();
        })
    });

    $(".link").click(function(e) {
        e.preventDefault();

        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top,
            menuHeight = $(this).data('offset-top');

        $('html, body').animate({
            scrollTop: targetOffset - menuHeight
        }, 500);
    })
});