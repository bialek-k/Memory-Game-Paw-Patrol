import { Howl, Howler } from "howler";
export const PlaySound = (src, volume, delay) => {
  const sound = new Howl({
    src: src,
  });
  Howler.volume(volume);
  setTimeout(() => {
    sound.play();
  }, delay);
};
