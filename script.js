document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("background-video");
  video.playbackRate = 0.5;


  const contentArea = document.getElementById("content-area");

  window.loadContent = (page) => {
    fetch(`${page}.html`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        contentArea.innerHTML = data;
      })
      .catch((error) => {
        contentArea.innerHTML =
          "<p>Sorry, an error occurred while loading the content.</p>";
        console.error("Error loading content:", error);
      });
  };


  loadContent("home");

});
