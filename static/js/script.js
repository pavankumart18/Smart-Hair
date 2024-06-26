document.getElementById("beginButton").addEventListener("click", function() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
});

document.getElementById("quizForm").addEventListener("submit", function(e)