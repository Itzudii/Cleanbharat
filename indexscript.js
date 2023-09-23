document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('block');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
      }   
});
function menu(){
      let block = document.getElementById("menu-id").style.display;
      if (block == "none") {
            document.getElementById("menu-id").style.display = "block";
      } else {
            document.getElementById("menu-id").style.display = "none";
      }
}
function search(){
      let block = document.getElementById("search-bar").style.display;
      if (block == "none") {
            document.getElementById("search-bar").style.display = "block";
      } else {
            document.getElementById("search-bar").style.display = "none";
      }
}
function sidemenu(){
      
           let block = document.getElementById("second-body").style.width;
           if (block == "0%") {
                  document.getElementById("second-body").style.display = "block";
                 document.getElementById("second-body").style.width = "20%";
                 document.getElementById("background").style.width = "80%";
                 document.getElementById("background").style.left = "20%";
                 document.getElementById("background").style.opacity = "0.5";
                 
            } else {
                document.getElementById("second-body").style.display = "none";
                document.getElementById("background").style.opacity = "1";
                 document.getElementById("second-body").style.width = "0%";
                 document.getElementById("background").style.width = "100%";
                 document.getElementById("background").style.left = "0%";
           }
}
    
