$(function() {
    
    $('#reg_switch').click(function(e){
         $("#login-form").fadeOut(100);
        $("#register-form").delay(100).fadeIn(500);
       
        $(this).addClass('active');
        e.preventDefault();
      
    });
     $('#log_switch').click(function(e){
         $("#register-form").fadeOut(100);
        $("#login-form").delay(100).fadeIn(500);
 		
      
		$(this).addClass('active');
        e.preventDefault();
        });
});