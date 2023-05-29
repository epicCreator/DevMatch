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
  
// Add event listener for the sorting button
document.getElementById("sort-button").addEventListener("click", function() {
  // Sorting logic for job listings by location
  var jobListings = document.getElementById("job-listings");
  var listingsArray = Array.from(jobListings.children);

  listingsArray.sort(function(a, b) {
    var locationA = a.querySelector(".location").textContent.toLowerCase();
    var locationB = b.querySelector(".location").textContent.toLowerCase();
    if (locationA < locationB) {
      return -1;
    } else if (locationA > locationB) {
      return 1;
    }
    return 0;
  });

  listingsArray.forEach(function(listing) {
    jobListings.appendChild(listing);
  });

  // Additional code for your existing functionality...
});

// Continue with your existing JavaScript code...
