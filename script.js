function fallback(video)
    {
      const img = video.querySelector('fallback-img');
      if (img)
        video.parentNode.replaceChild(img, video);
    }
    const video = document.getElementById('bg-video')
    video.muted = true
    video.addEventListener('loadeddata', function (){
      video.play()
    });
