    var beijing = document.querySelector('.beijing');
    var beijingNav = document.querySelector('nav a:nth-of-type(10)');
    var myjd = document.querySelector('.myjd');
    var myjdNav = document.querySelector('nav a:nth-of-type(6)');
    var comshop = document.querySelector('.comshop');
    var comshopNav = document.querySelector('nav a:nth-of-type(4)');
    var elec = document.querySelector('.elec');
    var elecNav = document.querySelector('slide_nav a:nth-of-type(1)');
    var slideNavshow = document.querySelector('.slide_nav_show');
    var slide_nav = document.querySelector('.slide_nav');
    var boardul1 = document.querySelector('.board ul:first-of-type');
    var boardul2 = document.querySelector('.board ul:nth-of-type(2)');
    var lunbo1 = document.querySelector(".lunbo1");
    var lunbo2 = document.querySelector(".lunbo2");
    var lunbo3 = document.querySelector(".lunbo3");
    var lunbo = [lunbo1, lunbo2, lunbo3];
    var lunbo_circle1 = document.querySelector(".lunbo_circle1");
    var lunbo_circle2 = document.querySelector(".lunbo_circle2");
    var lunbo_circle3 = document.querySelector(".lunbo_circle3");

    var lunbo_circle = [lunbo_circle1, lunbo_circle2, lunbo_circle3];
    var lunbo_npPre = document.querySelector(".lunbo_np .pre");
    var lunbo_npNext = document.querySelector(".lunbo_np .next");


    slide_nav.onmouseover = function() {
        slideNavshow.style.display = "block";
    }
    slideNavshow.onmouseover = function() {
        slideNavshow.style.display = "block";
    }
    slide_nav.onmouseout = function() {
        slideNavshow.style.display = "none";

    }
    slideNavshow.onmouseout = function() {
        slideNavshow.style.display = "none";

    }

    function showHideUl(show, hide) {
        show.style.display = 'block';
        hide.style.display = 'none';

    }

    function showNav(param, showparam) {
        param.style.display = 'block';
        showparam.style.backgroundColor = "white";

    }

    function hideNav(param, showparam) {
        param.style.display = 'none';
        showparam.style.backgroundColor = "";
    }
    window.onload = function() {

        var lunboArea = document.querySelector(".lunbo");
        lunboArea.onmouseover = function() {
            clearInterval(timer);
        }
        lunboArea.onmouseout = function() {
            timer = setInterval(move, 3000);
        }
        var timer = null;
        clearInterval(timer);
        var index = 0;
        timer = setInterval(move, 3000);
        for (var i = 0; i < lunbo_circle.length; i++) {
            (
                function(j) {
                    lunbo_circle[j].onmouseover = function() {
                        index = j;

                        console.log("鼠标经过" + index);
                        initLunbo();
                        lunbo[index].style.display = "block";
                        lunbo_circle[index].className = "fa fa-circle lunbo_circle" + (index + 1);
                    }
                }(i)
            )
        }
        lunbo_npPre.onclick = function() {
            index--;
            if (index == 3) {
                index = 0;
            }
            if (index == -1) {
                index = 2;
            }
            initLunbo();
            lunbo[index].style.display = "block";
            lunbo_circle[index].className = "fa fa-circle lunbo_circle" + (index + 1);

            console.log(index);
        }
        lunbo_npNext.onclick = function() {

            index++;
            if (index == 3) {
                index = 0;
            }
            if (index == -1) {
                index = 2;
            }
            initLunbo();
            lunbo[index].style.display = "block";
            lunbo_circle[index].className = "fa fa-circle lunbo_circle" + (index + 1);
            console.log(index);
        }


        function initLunbo() {
            for (var i = 0; i < 3; i++) {
                lunbo[i].style.display = "none";
                lunbo_circle[i].className = "fa fa-circle-o lunbo_circle" + (i + 1);
                //console.log(lunbo_circle[i].className);
            }
        }

        function move() {


            //   fa fa-circle-o lunbo_circle3


            //lunbo_circle1.onmouseover=function(){
            //    index=0;
            //    initLunbo();
            //    lunbo[index].style.display="block";
            //    lunbo_circle[index].className="fa fa-circle //lunbo_circle"+(index+1);  
            // }
            /*   for (var i = 0; i < lunbo_circle.length; i++) {
                   (
                       function(j) {
                           lunbo_circle[j].onmouseover = function() {
                               index = j;

                               console.log("鼠标经过" + index);
                               initLunbo();
                               lunbo[index].style.display = "block";
                               lunbo_circle[index].className = "fa fa-circle lunbo_circle" + (index + 1);
                           }
                       }(i)
                   )
               }*/

            initLunbo();



            index++;
            if (index == 3) {
                index = 0;
            }
            lunbo[index].style.display = "block";
            lunbo_circle[index].className = "fa fa-circle lunbo_circle" + (index + 1);

            console.log(index);

        }
    }