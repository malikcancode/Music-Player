const arr = [
  {
    title: "Shubh King",
    img: "/images/shubh.jpg",
    url: "/songs/Shubh - King Shit (Official Audio)_4.mp4",
    artist: "Shubh",
  },
  {
    title: "Nain Tery",
    img: "/images/Capture.PNG",
    url: "/songs/Nain Tere - Shubh New Song - ProLP Music - New Punjabi Songs.mp4",
    artist: "Shubh",
  },
  {
    title: "Parinda",
    img: "/images/prnda.PNG",
    url: "/songs/YouTube.mkv",
    artist: "Nikhil - Swapnil",
  },
];

var poster = document.querySelector("#left");
var songs = document.querySelector(".songs-list");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");
var selectedSong = 0;
var audio = new Audio();
function mainFunction() {
  var clutter = "";
  arr.forEach(function (item, index) {
    clutter += ` <div class="first-song"id="${index}">
    <div class="part-1">     
    <img src="${item.img}" alt="" />
    <h3>${item.title}</h3>
    <h4>${item.artist} <i class="ri-album-line"></i></h4>
    </div>    
    </div>
  `;
  });
  document.querySelector(".songs-list").innerHTML = clutter;
  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}
mainFunction();

songs.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  mainFunction();
  audio.play();
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  flag = 1;
  audio.play();
});

var flag = 0;
play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    mainFunction();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = 0.4;
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = 0.1;
  }
});
