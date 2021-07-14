//NAV TAB FUNCTION
$(document).ready(function(){
    let moreBtn = $("nav .moreBtn");
    let tab = $("nav .tab");
    let nav = $("nav");
    let bgOpcaity = true;
    moreBtn.click(function(){
        tab.addClass('is_on');
        tab.slideToggle('slow');
        if(bgOpcaity){
            nav.css("background-color", "rgba(0,0,0,1)");
            bgOpcaity = false;
        }
        else{
            nav.css("background-color", "rgba(0,0,0,0.5)");
            bgOpcaity =true;
        }
    });

    let tabList = $("nav .tab li a");
    let selectedItem = null;
    tabList.click(function(){
        $(this).addClass("here");
        if(selectedItem !== null){
            selectedItem.removeClass("here");
        }
        selectedItem = $(this);
    });

    function SlideContent(pre,next,direction){
        let preContent = contentList.eq(pre);
        let nextContent = contentList.eq(next);

        if(direction == 1){
            preContent.animate({left: '-100%'},1000,function(){
                preContent.toggle();
                nextContent.css('left','100%');
                nextContent.toggle();
                nextContent.animate({left:'0%'},1000);
            });
        }
        else{
            preContent.animate({left: '100%'},1000,function(){
                preContent.toggle();
                nextContent.css('left','-100%');
                nextContent.toggle();
                nextContent.animate({left:'0%'},1000);
            });
        }

        
    }



    let contentList = jQuery(".collection .container .content");
    contentList.eq(0).css("display", "block");

    let currentSelected = 0;
    let buttonList = $(".collection .container > button");
    
    buttonList.eq(0).click(function(){
        let preSelected = currentSelected;
        currentSelected = (preSelected + 1)%3;
        SlideContent(preSelected,currentSelected,1);
    });

    buttonList.eq(1).click(function(){
        let preSelected = currentSelected;
        currentSelected = (preSelected + 1)%3;

        SlideContent(preSelected,currentSelected,0);
    });

    
});
