function total()  {

    var shoe_size = document.getElementById("shoe_size").value;
   var  year_of_brith = document.getElementById("year").value;

    var answer = (((shoe_size * 2 + 5 ) * 50)  - (year_of_brith )) + (1766);
    
    alert(answer);

}