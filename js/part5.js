/* =========================================================
   Part 5 — Task 11: Mini project "Image Gallery"
   ========================================================= */

$(document).ready(function () {

  const $thumbs = $(".thumb");
  let currentFilter = "all";
  let currentIndex = 0;

  // ---------- 1. Fade in the thumbnails one by one ----------
  // .each() goes through every thumbnail, .delay() waits before the fadeIn
  $thumbs.hide().each(function (i) {
    $(this).delay(i * 150).fadeIn(500);
  });

  // ---------- 2. Filter: fade out the others, fade in the chosen category ----------
  $(".filter-btn").on("click", function () {
    currentFilter = $(this).data("filter");          // reads data-filter="..."

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    const $show = getVisibleList();
    const $hide = $thumbs.not($show);

    $thumbs.stop(true, true);                        // finish old animations first
    // .promise().done() waits until ALL fade-outs are finished
    $hide.fadeOut(250).promise().done(function () {
      $show.fadeIn(400);
    });
  });

  // Thumbnails of the current category
  function getVisibleList() {
    if (currentFilter === "all") return $thumbs;
    return $thumbs.filter('[data-category="' + currentFilter + '"]');
  }

  // ---------- 3. Click a thumbnail → enlarge it ----------
  $thumbs.on("click", function () {
    const index = getVisibleList().index(this);
    setImage(index);

    $("#lightbox").css("display", "flex").hide().fadeIn(300);

    // "Enlarge" effect: the picture starts small and grows to its full width
    const fullWidth = getFullWidth();
    $("#lb-img")
      .stop(true)
      .css({ width: fullWidth * 0.3, opacity: 0 })
      .animate({ width: fullWidth, opacity: 1 }, 450);
  });

  // Put picture number "index" of the current list into the lightbox
  function setImage(index) {
    const $list = getVisibleList();
    currentIndex = (index + $list.length) % $list.length;   // go around: last → first
    const $img = $list.eq(currentIndex).find("img");

    $("#lb-img").attr({ src: $img.attr("src"), alt: $img.attr("alt") });
    $("#lb-caption").text($img.attr("alt") + "  (" + (currentIndex + 1) + " / " + $list.length + ")");
  }

  // Width of the big picture: fits the window (images are 4:3)
  function getFullWidth() {
    const byWidth = $(window).width() * 0.85;
    const byHeight = $(window).height() * 0.7 * (4 / 3);
    return Math.min(byWidth, byHeight, 900);
  }

  // ---------- 4. Previous / next with a quick fade ----------
  function showNext(step) {
    $("#lb-img").stop(true, true).fadeOut(150, function () {
      setImage(currentIndex + step);
      $(this).css("width", getFullWidth()).fadeIn(150);
    });
  }

  $("#lb-next").on("click", function () { showNext(1); });
  $("#lb-prev").on("click", function () { showNext(-1); });

  // ---------- 5. Close the lightbox ----------
  function closeLightbox() {
    $("#lightbox").fadeOut(300);
  }

  $("#lb-close").on("click", closeLightbox);

  // Click on the dark background (not on the picture or buttons) closes it
  $("#lightbox").on("click", function (event) {
    if (event.target === this) closeLightbox();
  });

  // Keyboard: Esc, ← and →
  $(document).on("keydown", function (event) {
    if (!$("#lightbox").is(":visible")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showNext(1);
    if (event.key === "ArrowLeft") showNext(-1);
  });
});
