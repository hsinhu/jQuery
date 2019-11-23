$("#ch4form").submit(function(){
    var name = $("#fullname").val().length
    var address = $("#streetaddr").val().length
    if (name&&address) return true;
    if (!name) $("#nameerrormsg").css("display","block");
    else $("#nameerrormsg").css("display","none");
    if (!address) $("#addrerrormsg").css("display","block");
    else $("#addrerrormsg").css("display","none");
    event.preventDefault();



})