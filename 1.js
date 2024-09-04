  <script>
       
        document.addEventListener("DOMContentLoaded", function() {
            var video = document.getElementById("hack");
     
            video.play();

     
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) { // Safari
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE/Edge
                video.msRequestFullscreen();
            }
        });
    </script>
