
$("#b1").click(function(){
    $("#para").css("font-weight","bold")
});
$("#b5").click(function(){
    $("#para").css("font-weight","normal")
});
$("#b2").click(function(){
    $("#para").css("font-style","italic")
});
$("#b4").click(function(){
    $("#para").css("font-style","normal")
});
$("#b3").click(function(){
    $("#para").css("text-decoration","underline")
});
$("#b6").click(function(){
    $("#para").css("text-decoration","none")
});
$("#mylist").click(function(){
    var y=$("#mylist").val();
$("#para").css ("font-size",y+"px")
});
$("#mylist2").click(function(){
    var x=$("#mylist2").val();
$("#para").css ("font-family",x)
});