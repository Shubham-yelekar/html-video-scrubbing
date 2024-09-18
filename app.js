 const section = document.getElementById('video-container')
 const videoElement = document.getElementById('video')

 videoElement.pause()

 const scroll = () => {
  const distance  = window.scrollY - section.offsetTop;
  const total = section.clientHeight - window.innerHeight;
  if (total <= 0) return;
  let percentage = distance / total
  percentage = Math.max(0, percentage)
  percentage = Math.min(percentage, 1)

  if (videoElement.duration > 0){
    videoElement.currentTime = videoElement.duration * percentage
  }
 }

 scroll()
 window.addEventListener('scroll', scroll)