import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(localStorageKey, event.seconds);
  }, 1000)
);
const currentTime = localStorage.getItem(localStorageKey);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
