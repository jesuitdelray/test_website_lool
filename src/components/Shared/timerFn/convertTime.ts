export function convertTime(time: any) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const min = minutes.toString().length > 1 ? minutes : `0${minutes}`;
  const sec = seconds.toString().length > 1 ? seconds : `0${seconds}`;
  return { min, sec };
}
