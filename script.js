document.querySelectorAll(".view-details").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const title = this.getAttribute("data-title");
    const description = this.getAttribute("data-description");
    const fullDescription = this.getAttribute("data-full-description");

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalFullDescription").innerText = fullDescription;

    document.getElementById("projectModal").style.display = "block";
  });
});

// Close modal when the close button is clicked
document.querySelector(".close-button").addEventListener("click", function () {
  document.getElementById("projectModal").style.display = "none";
});

// Close modal when clicking outside the
