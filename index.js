const audio = document.querySelector(".QuranAudio");
const error = document.querySelector(".error");

document.addEventListener("input", (e) => {
  let enteredSurah = document.querySelector("#surahNumber").value;
  if (enteredSurah <= 114) {
    if (enteredSurah.length == 1) {
      audio.src =
        `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/00` +
        enteredSurah +
        `.mp3`;
    } else if (enteredSurah.length == 2) {
      audio.src =
        `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/0` +
        enteredSurah +
        `.mp3`;
    } else if (enteredSurah.length == 3) {
      audio.src =
        `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/` +
        enteredSurah +
        `.mp3`;
    }
  } else {
    error.textContent = "Not valid! enter less than 114 ";
  }
});
