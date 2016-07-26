(function() {
  $(document).ready(function() {

    var hashTagActive = "";
    $(".scroll").click(function (event) {
        if (hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 2000);
            hashTagActive = this.hash;
        }
    });

    $(".chevron .glyphicon-menu-down").click(function() {
      return $('html, body').animate({
        scrollTop: $("#about").offset().top
      }, 1500);
    });

    mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if ($("html").hasClass("cssanimations") && !mobile) {
      animate = function(animation) {
        return $(animation[0]).addClass("concealed").viewportChecker({
          classToAdd: "visible animated " + (animation[1].trim()),
          offset: 100
        });
      };
      items = [['#about p', 'fadeInUp'], ['.column', 'fadeInUp'], ['.item', 'fadeInDown'], ['.bar', 'fadeInRight'], ['#contact .fa-envelope-o', 'fadeIn']];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        animate(item);
      }
    }
    return $("#footer ul li").hover(function() {
      return $(this).find('p').stop(true, true).fadeIn(800);
    }, function() {
      return $(this).find('p').stop(true, true).fadeOut(800);
    });
  });

}).call(this);