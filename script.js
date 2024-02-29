
document.addEventListener('DOMContentLoaded', function() {
    var videos = ["Video1.mp4", "video2.mp4", "video3.mp4","video4.mp4"]; // Add your video file names here
    var currentVideoIndex = 0;
    var heroVideo = document.getElementById('heroVideo');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');

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
});
