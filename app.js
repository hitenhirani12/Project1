let playBtn = document.getElementById("play");
let songname = document.getElementById("songname");
let slider = document.getElementById("slider");
let next = document.getElementById("next");
let back = document.getElementById("prev"); // Assuming "prev" is for backward functionality

let videoElement = document.getElementById("video"); // Assuming you have a video element
let holeDiv = document.getElementById("hole-div"); // Assuming you have a div with ID "hole-div" for video placement
songname.style.fontFamily = "brush script"; // Replace with your preferred web safe font
let songs = [
  {
    index: 0,
    name: "Apna banale piya",
    src: "song5.mp3",
    videoSrc: "video.mp4",
  },
  {
    index: 1,
    name: "Husn",
    src: "song6.mp3",
    videoSrc: "video2.mp4",
  },
  {
    index: 1,
    name: "Chahun Meh Yaah Naah ",
    src: "song8.mp3",
    videoSrc: "video7.mp4",
  },
];

let currIdx = 0;
let currSong = new Audio(); // No need to specify a default source initially
let totalTime = 0; // Variable to store total song duration

playBtn.addEventListener("click", () => {
  if (playBtn.classList.contains("fa-play")) {
    currSong.src = songs[currIdx].src;
    currSong.play();
    videoElement.src = songs[currIdx].videoSrc;
    videoElement.muted = true; // Optional: Mute the video
    videoElement.play(); // Start video playback immediately

    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
    songname.innerText = songs[currIdx].name;
    totalTime = currSong.duration;
    updateTimer();
  } else {
    currSong.pause();
    videoElement.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  }
});

currSong.addEventListener("timeupdate", () => {
  slider.value = (currSong.currentTime * 100) / currSong.duration;
});

slider.addEventListener("change", () => {
  currSong.currentTime = (slider.value * currSong.duration) / 100;
});

// Corrected "forward" functionality for next button
next.addEventListener("click", () => {
  currIdx++; // Move to the next song index
  if (currIdx === songs.length) {
    currIdx = 0; // Wrap around to the first song if at the end
  }
  currSong.src = songs[currIdx].src;
  currSong.play();
  videoElement.src = songs[currIdx].videoSrc;
  videoElement.muted = true;
  videoElement.play(); // Start video playback immediately after update

  songname.innerText = songs[currIdx].name;
  totalTime = currSong.duration;
  updateTimer();
});

// Backward functionality for back button
back.addEventListener("click", () => {
  currIdx--; // Move to the previous song index
  if (currIdx < 0) {
    currIdx = songs.length - 1; // Wrap around to the last song if at the beginning
  }
  currSong.src = songs[currIdx].src;
  currSong.play();
  videoElement.src = songs[currIdx].videoSrc;
  videoElement.muted = true;
  videoElement.play(); // Start video playback immediately after update

  songname.innerText = songs[currIdx].name;
  totalTime = currSong.duration;
  updateTimer();
});

function updateTimer() {
  // ... timer update logic
}

function formatTime(currentTime, totalTime) {
  // ... time formatting logic
}
// Function to search YouTube (avoiding direct embedding)
function searchYouTube(searchTerm) {
  // Inform the user that the search will open a new YouTube tab
  alert("Your search will open in a new YouTube tab.");
  window.open(`https://www.youtube.com/results?search_query=${searchTerm}`);
}

document.getElementById("search-btn").addEventListener("click", () => {
  const searchTerm = document.getElementById("search-bar").value;
  if (searchTerm) {
    searchYouTube(searchTerm);
  } else {
    alert("Please enter a search term.");
  }
});

const backBtn = document.getElementById('back');

backBtn.addEventListener('click', () => {
  window.location.href = 'index1.html'; // Navigate to index.html
});



// Select the like icon
const likeIcon = document.getElementById("like");

// Add a click event listener to the like icon
likeIcon.addEventListener("click", function() {
    // Toggle the appearance of the icon
    if (likeIcon.dataset.liked === "true") {
        likeIcon.classList.remove("fas", "text-danger"); // Remove filled heart icon and red color
        likeIcon.classList.add("far"); // Add outlined heart icon
        likeIcon.dataset.liked = "false"; // Update the data-liked attribute
    } else {
        likeIcon.classList.remove("far"); // Remove outlined heart icon
        likeIcon.classList.add("fas", "text-danger"); // Add filled heart icon and red color
        likeIcon.dataset.liked = "true"; // Update the data-liked attribute
        alert("Thank you for liking!"); // Show a message after liking
    }
});
document.addEventListener("DOMContentLoaded", function() {
  const volumeSlider = document.getElementById("volume");

  // Add change event listener to the volume slider
  volumeSlider.oninput =  function() {
      // Update the volume of the video element
      currSong.volume = volumeSlider.value / 100;
  };
});









