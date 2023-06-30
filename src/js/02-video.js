import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('iframe');
const player = new Player(vimeoPlayer);
const LOCAL_PLAYER_KEY = 'videoplayer-current-time';

let currentTime = localStorage.getItem(LOCAL_PLAYER_KEY) || 0;
player.setCurrentTime(currentTime);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(LOCAL_PLAYER_KEY, seconds);
    console.log(
      'current time seconds:',
      localStorage.getItem(LOCAL_PLAYER_KEY)
    );
  }, 1000)
);
