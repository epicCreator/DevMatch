document.getElementById("search-button").addEventListener("click", function() {
    var locationInput = document.getElementById("location-input").value.toLowerCase();
    var jobListings = document.querySelectorAll("ul li");
    
    for (var i = 0; i < jobListings.length; i++) {
      var jobLocation = jobListings[i].querySelector(".location").textContent.toLowerCase();
      if (jobLocation.indexOf(locationInput) > -1) {
        jobListings[i].style.display = "";
      } else {
        jobListings[i].style.display = "none";
      }
    }
  });
  
