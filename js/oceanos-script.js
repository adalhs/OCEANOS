///////////////////////////////////////
// Make mobile navigation work
const btnNavElement = document.querySelector(".btn-mobile-nav");
const mainHeaderElement = document.querySelector(".main-header");

btnNavElement.addEventListener("click", function () {
  mainHeaderElement.classList.toggle("nav-open"); //Without the dot because this will be added to the element in HTML
});

//////////////////////////////////////////////////
// Close mobile navigation after a main-nav-link link is clicked
const mobileNavLink = document.querySelectorAll(".main-nav-link:link");

mobileNavLink.forEach((i) => {
  i.addEventListener("click", function () {
    mainHeaderElement.classList.toggle("nav-open");
  });
});

//////////////////////////////////////////////////
// Close mobile navigation after a main-nav-sublink link is clicked
const mobileNavSublink = document.querySelectorAll(".main-nav-sublink:link");

mobileNavSublink.forEach((i) => {
  i.addEventListener("click", function () {
    mainHeaderElement.classList.toggle("nav-open");
  });
});

// Sticky navigation
const sectionHeaderElement = document.querySelector(".for-sticky");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeaderElement);

/////////////////////////////////////////
// FOR CAROUSEL
/*
    Carousel
*/
$("#carousel-example").on("slide.bs.carousel", function (e) {
  /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item").eq(i).appendTo(".carousel-inner");
      } else {
        $(".carousel-item").eq(0).appendTo(".carousel-inner");
      }
    }
  }
});
