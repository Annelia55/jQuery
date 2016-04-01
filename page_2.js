/* Sortable books and authors */
$(document).ready(init);
function init(){
    $(function(){
        $("#authors").sortable();
    });
}
$(function(){
    $("#authors").sortable({
        containment: 'parent'
    });
});

/* Running man */
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('.run').animate({left: "-=10px"}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $('.run').animate({top:"-=10px"}, 'fast');
                break;
            // Right Arrow Pressed
            case 39:
                $('.run').animate({left:"+=10px"},'fast');
                break;
            // Down Arrow Pressed
            case 40:
                $('.run').animate({top:"+=10px"},'fast');
                break;
        }
    });
});