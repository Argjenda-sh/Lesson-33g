

function validation(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    var name_error = document.getElementById("name_error");
    var age_error = document.getElementById("age_error");

    var valid_name_regex = /^[A-Za-z]+$/;
    var valid_age_regex = /^[0-9]+$/;
    

    if (name.match(valid_name_regex)){
        name_error.style.display = "none"
          return true;
    }else {
        name_error.style.display = "block";
        return false;
    }
    
    if(!(name.match(valid_name_regex)) || !(age.match(valid_age_regex))){
       if(!(name.match(valid_name_regex))){
        name_error.style.display = "block";
       }else{
        name_error.style.display = "none";
       }

       return false;
    }else{
        
        return true;
    }
}