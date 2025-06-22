const allScreens = document.querySelectorAll('.proposal-screen');
const music = document.getElementById("bg-music");

// 👇 Get name from URL query (?name=YourName)
const params = new URLSearchParams(window.location.search);
const loverName = params.get("name") || "My Love";

// Set name on page
document.getElementById("JSOrganization-placeholder").textContent = loverName;
document.getElementById("JSOrganization-placeholder-5").textContent = loverName;

function showProposal(id) {
  allScreens.forEach(screen => screen.classList.remove('active'));
  const screen = document.getElementById(id);
  screen.classList.add('active');

  if (id === 'proposal-yes') {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
}

// Start at first screen
showProposal('proposal-1');

// No button runs away 🏃‍♀️
const moveBtn = document.getElementById("move-random");
moveBtn.addEventListener("mouseover", () => {
  moveBtn.style.position = 'absolute';
  moveBtn.style.top = Math.random() * 80 + '%';
  moveBtn.style.left = Math.random() * 80 + '%';
});

// Toggle music
function toggleMusic() {
  if (music.paused) music.play();
  else music.pause();
}
