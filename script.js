// ===============================
// VAIDEHI AI/ML PORTFOLIO
// ===============================

// Skills Data

const skills = [
  {
    icon: "⌘",
    name: "Python",
    detail: "Programming Fundamentals"
  },
  {
    icon: "▤",
    name: "Data Analysis",
    detail: "Pandas and NumPy"
  },
  {
    icon: "✧",
    name: "Machine Learning",
    detail: "ML Fundamentals"
  },
  {
    icon: "◈",
    name: "Data Visualization",
    detail: "Matplotlib and Charts"
  },
  {
    icon: "⌁",
    name: "SQL",
    detail: "Database Management"
  },
  {
    icon: "▦",
    name: "HTML & CSS",
    detail: "Web Development"
  },
  {
    icon: "◎",
    name: "Statistics",
    detail: "Data and Probability"
  },
  {
    icon: "✦",
    name: "Problem Solving",
    detail: "Logical Thinking"
  }
];

const skillsGrid = document.getElementById("skillsGrid");

skills.forEach((skill) => {

  const card = document.createElement("div");

  card.className = "skill-card";

  card.innerHTML = `
    <div class="skill-icon">${skill.icon}</div>
    <h3>${skill.name}</h3>
    <p>${skill.detail}</p>
  `;

  skillsGrid.appendChild(card);

});


// ===============================
// ANIMATED NETWORK BACKGROUND
// ===============================

const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

let width;
let height;
let particles = [];

function resizeCanvas() {

  width = window.innerWidth;
  height = window.innerHeight;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  particles = [];

  for (let i = 0; i < 55; i++) {

    particles.push({

      x: Math.random() * width,
      y: Math.random() * height,

      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4

    });

  }

}

function animateNetwork() {

  ctx.clearRect(0, 0, width, height);

  particles.forEach((p, i) => {

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    ctx.beginPath();

    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);

    ctx.fillStyle = "#55d6ff";

    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {

      const q = particles[j];

      const dx = p.x - q.x;
      const dy = p.y - q.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {

        ctx.beginPath();

        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);

        ctx.strokeStyle =
          `rgba(167,139,250,${0.18 * (1 - distance / 120)})`;

        ctx.stroke();

      }

    }

  });

  requestAnimationFrame(animateNetwork);

}


// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});

navLinks.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});


// ===============================
// FOOTER YEAR
// ===============================

document.getElementById("year").textContent =
  new Date().getFullYear();


// START ANIMATION

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

animateNetwork();