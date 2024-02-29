document.addEventListener('DOMContentLoaded', function() {
    var images = ["anime4.jpg", "anime2.jpg", "anime3.jpg", "anime1.jpg"]; // Array of image sources
    var currentImageIndex = 0;
    var heroImage = document.getElementById('heroImage');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
        } else {
            currentImageIndex = images.length - 1; // Loop back to the last image
        }
        updateImageSource();
    });

    nextButton.addEventListener('click', function() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0; // Loop back to the first image
        }
        updateImageSource();
    });

    function updateImageSource() {
        heroImage.src = images[currentImageIndex];
    }

    updateImageSource(); // Load the initial image when the page loads
});
