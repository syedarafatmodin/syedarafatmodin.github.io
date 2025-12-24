fetch("config/content.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("about").innerHTML =
      `<h2>About Me</h2><p>${data.about}</p>`;

    document.getElementById("interests").innerHTML =
      `<h2>Interests</h2><ul>${data.interests.map(i => `<li>${i}</li>`).join("")}</ul>`;

    document.getElementById("achievements").innerHTML =
      `<h2>Achievements</h2><ul>${data.achievements.map(a => `<li>${a}</li>`).join("")}</ul>`;
  });
