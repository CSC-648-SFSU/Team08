// Edit this list to fill in each person's info.
// photo: path to an image, e.g. "Team_images/priyanshu.heic" (leave "" to show the placeholder)
const TEAM = [
  {
    name: "Erick",
    role: "",
    photo: "", // insert the path of your profile photo
    thumb: "",                          // card thumbnail; inset the image of your favourite star
    details:
      "",
  },
  {
    name: "Priyanshu",
    role: "Front-end Lead",
    photo: "Team_images/priyanshu.jpg", // popup photo
    thumb: "Team_images/Pri_profile.jpg",                          // card thumbnail; leave "" to keep the red card
    details:
      "Hey, I\u2019m Priyanshu, an international student from India. Outside of school " +
      "and projects, I love playing tennis, watching Formula 1, and binge-watching " +
      "Netflix shows. I\u2019m always up for a good match, an exciting race, or a great series!",
  },
  {
    name: "Erwan",
    role: "",
    photo: "Team_images/erwan.jpg", // insert the path of your profile photo
    thumb: "Team_images/erwan_profile.jpg",                          // card thumbnail; inset the image of your favourite star
    details:
      "Hey, I\u2019m Erwan. I\u2029m an international student from Epita, France. I love" +
      "video games of all kind, musical theater and swimming. I\u2029m hard-working " +
      "when need be and lazy when possible.",
  },
  {
    name: "Diya",
    role: "",
    photo: "", // insert the path of your profile photo
    thumb: "",                          // card thumbnail; inset the image of your favourite star
    details:
      "",
  },
  {
    name: "Vedant",
    role: "",
    photo: "", // insert the path of your profile photo
    thumb: "",                          // card thumbnail; inset the image of your favourite star
    details:
      "",
  },
  {
    name: "Ibrahim",
    role: "Front-End Developer",
    photo: "Team_images/Ibrahimshuman.jpg", // insert the path of your profile photo
    thumb: "Team_images/Ibrahim_profile.jpg",                          // card thumbnail; inset the image of your favourite star
    details:
      "Hello, I'm Ibrahim Shuman. I am a computer science student at San Francisco State University with an interest in software development and front-end development. I enjoy building websites and working with others on projects.",
  },
  {
    name: "Pralhad",
    role: "",
    photo: "", // insert the path of your profile photo
    thumb: "",                          // card thumbnail; inset the image of your favourite star
    details:
      "",
  },
];

const views = {
  home: document.getElementById("home"),
  team: document.getElementById("team"),
};
const grid = document.getElementById("team-grid");
const dialog = document.getElementById("profile");

// ---------- Build the team cards ----------
TEAM.forEach((member, index) => {
  const li = document.createElement("li");
  li.className = "member";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "member__button";
  button.addEventListener("click", () => openProfile(index));

  const photo = member.photo ? document.createElement("img") : document.createElement("div");
  photo.className = "member__photo";
  if (member.thumb) {
    photo.src = member.thumb;
    photo.alt = "";
  }

  const name = document.createElement("span");
  name.className = "member__name";
  name.textContent = member.name;

  button.append(photo, name);
  li.append(button);
  grid.append(li);
});

// ---------- Simple hash routing: "#team" shows the team page ----------
function showView() {
  const target = location.hash === "#team" ? "team" : "home";
  views.home.hidden = target !== "home";
  views.team.hidden = target !== "team";
  if (dialog.open) dialog.close();
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", showView);
showView();

// ---------- Profile popup ----------
function openProfile(index) {
  const member = TEAM[index];

  document.getElementById("profile-name").textContent = member.name;
  document.getElementById("profile-role").textContent = member.role;
  document.getElementById("profile-details").textContent = member.details;

  const pic = document.getElementById("profile-pic");
  pic.replaceChildren();
  if (member.photo) {
    const img = document.createElement("img");
    img.src = member.photo;
    img.alt = `Photo of ${member.name}`;
    pic.append(img);
  } else {
    pic.textContent = "Pic";
  }

  dialog.showModal();
  dialog.focus();
  pic.classList.toggle("profile__pic--photo", Boolean(member.photo));
}

dialog.querySelector(".profile__close").addEventListener("click", () => dialog.close());

// Click outside the popup to close it
dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const inside =
    event.clientX >= rect.left && event.clientX <= rect.right &&
    event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) dialog.close();
});
