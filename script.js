
document.addEventListener('DOMContentLoaded', function() {
    var videos = ["video3.mp4", "video2.mp4","video4.mp4","Video1.mp4","video5.mp4"]; // Array of video sources
    var currentVideoIndex = 0;
    var heroVideo = document.getElementById('heroVideo');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', function() {
        if (currentVideoIndex > 0) {
            currentVideoIndex--;
        } else {
            currentVideoIndex = videos.length - 1; // Loop back to the last video
        }
        updateVideoSource();
    });

    nextButton.addEventListener('click', function() {
        if (currentVideoIndex < videos.length - 1) {
            currentVideoIndex++;
        } else {
            currentVideoIndex = 0; // Loop back to the first video
        }
        updateVideoSource();
    });

    function updateVideoSource() {
        heroVideo.src = videos[currentVideoIndex];
        heroVideo.load();
        heroVideo.play();
    }
});




document.addEventListener('DOMContentLoaded', function() {
    var images = ["anime1.jpeg", "anime2.jpeg", "anime3.jpeg"]; // Array of image sources
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


/*document.addEventListener('DOMContentLoaded', function() {
    var videos = ["Video1.mp4", "video2.mp4", "video3.mp4","video4.mp4"]; // Add your video file names here
    var currentVideoIndex = 0;
    var heroVideo = document.getElementById('heroVideo');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');

    // Load the initial video
    updateVideoSource();

    prevButton.addEventListener('click', function() {
        if (currentVideoIndex > 0) {
            currentVideoIndex--;
            updateVideoSource();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentVideoIndex < videos.length - 1) {
            currentVideoIndex++;
            updateVideoSource();
        }
    });

    function updateVideoSource() {
        heroVideo.src = videos[currentVideoIndex];
        heroVideo.load();
        heroVideo.play();
    }
}); */
