import { Howl, Howler } from "howler";
export const PlaySound = (src, volume, delay) => {
  const sound = new Howl({
    src: src,
    loop: false,
  });
  Howler.volume(volume);
  setTimeout(() => {
    sound.play();
  }, delay);
};
