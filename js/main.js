/*$(document).ready(function () {
  let $btn = $("#project-area .button-group button");

  $btn.click(function (e) {
    $("#project-area .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");

    $("#project-area .item-image").isotope({
      filter: selector,
    });

    return false;
  });
});*/

// Smooth Scrolling

$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

$(document).ready(function () {
  $("#project-area .button-group button").click(function () {
    let name = $(this).attr("data-filter");
    if (name == "all") {
      $(".item-image").show("2000");
    } else {
      $(".item-image")
        .not("." + name)
        .hide("2000");
      $(".item-image")
        .filter("." + name)
        .show("2000");
    }
  });
});

let map;

function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 52.55177, lng: 13.35944 },
    zoom: 8,
  });
}

// Animate on Scrroll

AOS.init();
