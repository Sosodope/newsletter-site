var changeButton = function(){
  var currentClass = document.getElementById("form-bg").className;
  
  if(currentClass == 'background'){
    document.getElementById("form-bg").className = 'background new';
  } else{
    document.getElementById("form-bg").className = 'background';
  }
};

