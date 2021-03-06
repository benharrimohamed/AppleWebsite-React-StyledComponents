const videoCam = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
  faceapi.nets.faceExpressionNet.loadFromUri('/weights'),
  faceapi.nets.ageGengerNet.loadFromUri('/weights')
]).then(OpenWebCam)



function OpenWebCam ()
{
   navigator.getUserMedia (
     {video : {}},
     stream => videoCam.srcObject = stream,
     err => console.error(err)
      )

}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = 
    await faceapi.detectAllFaces(video, new faceapi.
      TinyFaceDetectorOptions()).
        withFaceLandmarks().
        withFaceExpressions().
        withAgeAndGender()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    faceapi.draw.drawAgeAndGender(canvas, resizedDetections)
  }, 100)
})