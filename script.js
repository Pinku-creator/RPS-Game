document.getElementById("nextPage").addEventListener("click", function() {
  // Set a timeout to delay the redirection
  setTimeout(function() {
      // Redirect to the next page after 1000 milliseconds (1 second)
      window.location.href = "game.html"; 
  }, 1000);
});

