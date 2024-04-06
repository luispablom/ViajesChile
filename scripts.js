jQuery(document).ready(function ($) {
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    var nombre = $("#nombre-id").val().trim();
    var asunto = $("#asunto-id").val().trim();
    var mensaje = $("#exampleFormControlTextarea1").val().trim();

    if (nombre === "" || asunto === "" || mensaje === "") {
      $("#mensajeError").fadeIn();
    } else {
      $("#mensajeError").fadeOut();

      $("#mensajeEnviado").fadeIn();

      setTimeout(function () {
        $("#contactForm")[0].reset();
        $("#mensajeEnviado").fadeOut();
      }, 3000);
    }
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
