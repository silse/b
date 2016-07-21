$(function(){

    $('.second_nav').width($('.first_nav').width());
    var first_nav_li = $('.navWrap .first_nav li');
    if(first_nav_li.length == 9){
        first_nav_li.width(110);
    }

    $('.nav .leftF').hover(function(){
        $('#secondNav').toggle();
    });

    var cur;
    var lis_len = $('.first_nav li').length;
    var pos = $('.navWrap .second_nav');
    $(".first_nav li").hover(function() {

        cur = $(this).index();

        // if(cur == 0){
        //     $('#secondNav').css('visibility','hidden');
        // } else {
        //     $('#secondNav').css('visibility','visible');
        // }

        if(lis_len == 5){

            if(cur < 2){
                pos.css('text-align','left');

            } else if(cur == 2) {
                pos.css('text-align','center');

            } else if(cur > 2) {
                pos.css('text-align','right');
            }

        } else if(lis_len == 6){
            if(cur < 2){
                pos.css('text-align','left');

            } else if(cur >= 2 && cur <= 3) {
                pos.css('text-align','center');

            } else if(cur > 3) {
                pos.css('text-align','right');
            }

        } else if(lis_len == 7){
            if(cur < 2){
                pos.css('text-align','left');

            } else if(cur >= 2 && cur <= 4 ) {
                pos.css('text-align','center');

            } else if(cur > 4) {
                pos.css('text-align','right');
            }

        } else if(lis_len == 8){
            if(cur < 3){
                pos.css('text-align','left');

            } else if(cur >= 3 && cur <= 4) {
                pos.css('text-align','center');

            } else if(cur > 4) {
                pos.css('text-align','right');
            }

        } else if(lis_len == 9){
            if(cur < 3){
                pos.css('text-align','left');

            } else if(cur >= 3 && cur <= 5) {
                pos.css('text-align','center');

            } else if(cur > 5) {
                pos.css('text-align','right');
            }
        } 

        $("#secondNav ul").eq(cur).show().siblings().hide();

    }, function() {
        $("#secondNav ul").eq(cur).siblings().hide();
    });

});