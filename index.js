const tag = document.createElement('script');
const playbtn = document.getElementById('play');
const pausebtn = document.getElementById('pause');
const forwardbtn = document.getElementById('forward');
const backbtn = document.getElementById('back');
const volumeInput = document.getElementById('volume');
const advanceInput = document.getElementById('advance');

//Insertando player
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: 'auto',
    width: '100%',
    videoId: 'CrqQ0keKn2U',
    playerVars: {
      controls: 0,
      rel: 0,
    },
    events: {
      onStateChange: advanceState,
    },
  });
}
//Eventos de inputs y buttons

playbtn.addEventListener('click', () => {
  player.playVideo();
});

pausebtn.addEventListener('click', () => {
  player.pauseVideo();
});

forwardbtn.addEventListener('click', () => {
  const time = player.getCurrentTime();
  player.seekTo(time + 10);
});

backbtn.addEventListener('click', () => {
  const time = player.getCurrentTime();
  player.seekTo(time - 10);
});

volumeInput.addEventListener('change', (e) => {
  player.setVolume(e.target.value);
});

advanceInput.addEventListener('change', (e) => {
  const goTo = (e.target.value * player.getDuration()) / 100;
  player.seekTo(goTo);
});

const advanceState = () => {
  setTimeout(estado, 1000);
};

function estado() {
  var total = (player.getCurrentTime() * 100) / player.getDuration();
  advance.value = total;
}
