const aboutContents = document.querySelectorAll(".about__contents");
const aboutLinks = document.querySelectorAll(".about__links");
const arrayLinks = [...aboutLinks];
arrayLinks.forEach((link) => {
  link.addEventListener("click", openTab);
});
function openTab() {
  for (let aboutLink of aboutLinks) {
    aboutLink.classList.remove("about__links-active");
  }
  for (let aboutContent of aboutContents) {
    aboutContent.classList.remove("about__contents-active");
  }
  this.classList.add("about__links-active");
  document.getElementById(this.title).classList.add("about__contents-active");
}
