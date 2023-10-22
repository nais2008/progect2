duration = document.querySelector("#duration");
current = document.querySelector("#current");
playPause = document.querySelector("#playPause");

var timeCalculator = function(value){
    second = Math.floor(value % 60);
    minute = Math.floor((value / 60) % 60);

    if(second < 10){
        second = "0" + second;
    }

    return minute + "+" + second;
};

wavesurfer = WaveShaper.create({
    container: "#wave",
    waveColor: "#7d7d7d",
    progressColor: "#d5a216",
    height: 45,
    scrollParent: false
});

wavesurfer.load("/audio/overrated - We Could Be Together.mp3")