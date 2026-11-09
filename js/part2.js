/* =========================================================
   Part 2 — Effects: Task 2 (visibility), Task 3 (fade), Task 4 (slide)
   ========================================================= */

$(document).ready(function () {

  // ---------- Task 2: hide / show / toggle ----------
  // The number is the duration in milliseconds. The function is a callback:
  // it runs when the effect is finished.
  $("#btn-hide").on("click", function () {
    $("#para").hide(400, updateState);
  });

  $("#btn-show").on("click", function () {
    $("#para").show(400, updateState);
  });

  $("#btn-toggle").on("click", function () {
    $("#para").toggle(400, updateState);
  });

  function updateState() {
    const visible = $("#para").is(":visible");
    $("#para-state")
      .text(visible ? "visible" : "hidden")
      .toggleClass("ok", visible)
      .toggleClass("err", !visible);
  }

  // ---------- Task 3: fadeIn / fadeOut / fadeToggle ----------
  $("#btn-fade-in").on("click", function () {
    $("#fade-img").fadeIn(600);
  });

  $("#btn-fade-out").on("click", function () {
    $("#fade-img").fadeOut(600);
  });

  $("#btn-fade-toggle").on("click", function () {
    $("#fade-img").fadeToggle("slow");   // "slow" = 600 ms, "fast" = 200 ms
  });

  // ---------- Task 4: slideUp / slideDown / slideToggle ----------
  $("#btn-slide-down").on("click", function () {
    $("#panel-body").slideDown(400);
    $("#panel-header").addClass("open");
  });

  $("#btn-slide-up").on("click", function () {
    $("#panel-body").slideUp(400);
    $("#panel-header").removeClass("open");
  });

  // The toggle button and a click on the header do the same thing
  $("#btn-slide-toggle, #panel-header").on("click", function () {
    $("#panel-body").slideToggle(400);
    $("#panel-header").toggleClass("open");
  });
});
