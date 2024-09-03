  document.addEventListener("DOMContentLoaded", function() {
            var video = document.getElementById("hack");
            // تشغيل الفيديو تلقائيًا عند التحميل
            video.play();

            // طلب وضع الشاشة الكاملة
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) { // Safari
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE/Edge
                video.msRequestFullscreen();
            }
        });
