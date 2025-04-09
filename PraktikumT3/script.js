const btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ 
    top: 0, 
    behavior:"smooth"  });
}