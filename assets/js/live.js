var sourceElement = document.querySelector('source');
var originalSourceUrl = sourceElement.getAttribute('src');
var audioElement = document.querySelector('audio');

function pause() {
    sourceElement.setAttribute('src', '');
    audioElement.pause();
    // settimeout, otherwise pause event is not raised normally
    setTimeout(function () { 
        audioElement.load(); // This stops the stream from downloading
    });
}

function play() {
    if (!sourceElement.getAttribute('src')) {
        sourceElement.setAttribute('src', originalSourceUrl);
        audioElement.load(); // This restarts the stream download
    }
    audioElement.play();
}