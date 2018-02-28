$(function(){
    function windowSize(){
        if ($(window).width() <= '560'){
            if ( marker ) {
                count();
            }
           moveProgressBar();
        }
    }

    $(window).on('load resize',windowSize);

    $('.live').mouseenter(function(){

        // on page load...
        moveProgressBar();
        // on browser resize...
        $(window).resize(function() {
            moveProgressBar();
        });
        
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
      console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 1500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }

    var marker = true;

    function count() {
        document.getElementById('animation-to-click').beginElement();
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        marker = false;
    }

    $('.live').mouseenter(function(){
        if ( marker ) {
            count();
        }
    });


    $('#open-brief').click(function(){
        $('.brief-example').toggleClass('open');
    });

    var ckbox = $('#checkbox');

    $('input').on('click',function () {
        if (ckbox.is(':checked')) {
            $('.tooltip').css('display', 'block');
        } else {
            $('.tooltip').css('display', 'none');
        }
    });

    $('#open-form').click(function(event){
        event.preventDefault();
        $('.overflow-bg').css('display', 'block');
    });
    $('.close').click(function(){
        $('.overflow-bg').css('display', 'none');
    });

    
         
});

