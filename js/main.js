// add and remove class active in navbar when you click and scrooll

let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    addRemoveAct(e, navLinks);
  });
});

window.addEventListener("scroll", () => {
  navLinks.forEach((navLink) => {
    if (
      window.scrollY >=
      document.querySelector(navLink.dataset.section).offsetTop - 200
    ) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      navLink.classList.add("active");
    }
  });
});

// add bar scrooling with you and count how much you down in page

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
let bar = document.querySelector(".bar");

window.addEventListener("scroll", () => {
  let scroll = document.documentElement.scrollTop;
  bar.style.width = `${(scroll / height) * 100}%`;
});

// target photo in page work

let lis = document.querySelectorAll(".work .type li");
let showMore = document.querySelector(".more button");
let divs = document.querySelectorAll(".work .row .all");
let active;

lis.forEach((li) => {
  li.addEventListener("click", (ev) => {
    showMore.classList.remove("true");
    showMore.innerHTML = "i  want more";
    addRemoveAct(ev, lis);
    divs.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelectorAll(ev.target.dataset.style).forEach((div) => {
      if (div.classList.contains("more") === false) {
        div.style.display = "block";
      }
    });
  });
});

// show and hide half photo with button

showMore.addEventListener("click", () => {
  active = document.querySelector(".work .type .active");
  showMore.classList.toggle("true");
  if (showMore.classList.contains("true")) {
    showMore.innerHTML = "i don't want more";
    document.querySelectorAll(active.dataset.style).forEach((div) => {
      div.style.display = "block";
    });
  } else {
    showMore.innerHTML = "i  want more";
    document.querySelectorAll(active.dataset.style).forEach((div) => {
      if (div.classList.contains("more")) {
        div.style.display = "none";
      }
    });
  }
});

/// show photo biger than left

let spans = document.querySelectorAll(".work .row .image span");
let flew = document.querySelector(".flew");
spans.forEach((span) => {
  span.onclick = () => {
    flew.classList.add("show");
    let head = document.createElement("h3");
    let textHead = document.createTextNode(span.textContent);
    head.className = "position-absolute text-white p-4 w-100 fs-1";
    head.appendChild(textHead);
    flew.appendChild(head);
    let img = document.createElement("img");
    img.src = span.dataset.src;
    img.className = "position-absolute rounded-3";
    flew.appendChild(img);
  };
});

document.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("flew")) {
    ev.target.classList.remove("show");
  }
});

// show and hide some stories

let addMore = document.querySelector(".blog button");
let stories = document.querySelectorAll(".blog .row > div");

addMore.addEventListener("click", () => {
  addMore.classList.toggle("true");
  if (addMore.classList.contains("true")) {
    addMore.innerHTML = "less stories";
    stories.forEach((story) => {
      if (story.classList.contains("hide")) {
        story.style.display = "block";
      }
    });
  } else {
    addMore.innerHTML = "more stories";
    stories.forEach((story) => {
      if (story.classList.contains("hide")) {
        story.style.display = "none";
      }
    });
  }
});

// add year in footer

let date = new Date();
let year = date.getUTCFullYear();

document.querySelector(
  ".capy "
).innerHTML = `Created By <span>Graphberry</span> &copy;
<span class="d-block">${year} - <span>Bondi Inc</span></span>
`;

// function

function addRemoveAct(e, parent) {
  parent.forEach((child) => {
    child.classList.remove("active");
  });
  e.target.classList.add("active");
}
