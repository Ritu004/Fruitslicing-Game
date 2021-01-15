var play = false;
var score;
var trailleft;
var fruits = ['Apple', 'banana', 'blueberry', 'grapes', 'mango', 'pear', 'pineapple', 'strawberry'];
var step;
var action;
$(function () {
    $("#reset").click(function () {
        // Click on start reset button 
        if (play == true) {
            location.reload();


        } else {
            play = true;
            score = 0;
            $("#scvalue").html(score);

            $("#trailleft").show();

            trailleft = 3;
            addHeart();
            $("#reset").html("Reset Game");
            startAction();
            $("#gameover").hide();
        }

    });


    /// if we are playing we reload the page
    ///else
    //trail left box show   
    //button to reset game
    // create a random fruit
    // move the fruit down by one sec and stsrt it  again in 30 sec
    //
    $("#fruit1").mouseover(function(){
        score++;
        $("#scvalue").html(score);
        document.getElementById("slicesound").play();
//        stopAction();
        clearInterval(action);
        
        $("#fruit1").hide("explode",500);
        setTimeout(startAction,500);
    });
    function addHeart() {
        $("#trailleft").empty();
        for (i = 0; i < trailleft; i++) {
            $("#trailleft").append('<img src="Imagesss/Dil.png" class="life">');
        }
    }

    function startAction() {
        $("#fruit1").show();
        chooseFruit();
        $("#fruit1").css({
            'left': Math.floor(550 * Math.random()),
            'top': -90
        });

        step = 1 + Math.floor(9 * Math.random());

        action = setInterval(function () {
            $("#fruit1").css('top', $("#fruit1").position().top + step);

            if ($("#fruit1").position().top > $("#fruitcontainer").height()) {
                if (trailleft > 1) {
                    $("#fruit1").show();
                    chooseFruit();
                    $("#fruit1").css({
                        'left': Math.floor(550 * Math.random()),
                        'top': -90
                    });

                    step = 1 + Math.floor(9 * Math.random());

                    trailleft--;

                    addHeart();
                } else {
                    play = false;
                    $("#reset").html("Start Game");
                    $("#gameover").show();
                    $("#gameover").html('<p>Game Over</p><p>Your Score is ' + score + '</p>');
                    $("#trailleft").hide();
                    stopAction();
                }

            }

        }, 10);
    }

    function chooseFruit() {
        $("#fruit1").attr('src', 'Imagesss/' + fruits[Math.floor(7 * Math
            .random())] + '.png');
    }

    function stopAction() {
        clearInterval(action);
        $("#fruit1").hide();
    }
});
