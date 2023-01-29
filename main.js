//Hamburger Function
function hamburger() {
  if (document.getElementById("head").className == "header-container")
    document.getElementById("head").className = "hamburger-menu";
  else document.getElementById("head").className = "header-container";

  if (document.getElementById("logo").className == "logo")
    document.getElementById("logo").className = "hamburge-logo";
  else document.getElementById("logo").className = "logo";

  if (document.getElementById("navbar").className == "navbar")
    document.getElementById("navbar").className = "hamburger-nav";
  else document.getElementById("navbar").className = "navbar";

  if (document.getElementById("header-cta").className == "header-cta")
    document.getElementById("header-cta").className = "hamburger-cta";
  else document.getElementById("header-cta").className = "header-cta";
}
