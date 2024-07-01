// const trailers = [
//     {
//         name: "Alive",
//         src: "Alive-Trailer.mp4"
//     },
//     {
//         name: "Badland Hunters",
//         src: "Badland Hunters _ Official Trailer _ Netflix.mp4"
//     }
// ]

const videoPlayer = document.querySelector(".video-player");
const vplayer = document.querySelector("#video");
const closeVideoPlayer = document.querySelector(".close-video-player");
const videoPlayerTitle = document.querySelector(".video-player-title");

closeVideoPlayer.addEventListener("click", (e) => {
  e.preventDefault();
  videoPlayer.style.display = "none";
  vplayer.src = "";
  videoPlayerTitle.innerText = "";
});

const playButtons = document.querySelectorAll(".play-trailer");

playButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const video = e.currentTarget.getAttribute("data-trailer");
    vplayer.src = video;
    videoPlayer.style.display = "flex";
    videoPlayerTitle.innerText = video.split(".")[0];
  });
});
