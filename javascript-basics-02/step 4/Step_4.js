function form_reset() {

    var reset = confirm("Are you sure you want to clear the form");

    if(reset) {
    
        var name = document.getElementById("name").value='';
        var surname =  document.getElementById("surname").value='';
        var city =  document.getElementById("city").value='';
        
    }else {
        return;
    }
  



}