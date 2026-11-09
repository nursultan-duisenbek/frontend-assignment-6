/* =========================================================
   Part 1 — Task 0 (Setup) and Task 1 (Selectors & CSS)
   ========================================================= */

$(document).ready(function () {

  // ---------- Task 0: Setup ----------
  // console.log("jQuery is ready!") is in js/main.js (it runs on every page).
  // Here we also show the status on the page. $.fn.jquery = jQuery version.
  $("#ready-status")
    .text("jQuery is ready! Version " + $.fn.jquery)
    .removeClass("err")
    .addClass("ok");

  // ---------- Task 1: Selectors & CSS ----------
  // Save the original HTML so the "Reset" button can restore it
  const originalHtml = $("#demo1").html();

  // 1) Select by ID and change the text with .text()
  $("#btn-by-id").on("click", function () {
    $("#main-title")
      .text("Changed by ID selector with .text()")
      .css("color", "#2563eb");
  });

  // 2) Select by class and change the content with .html() (HTML tags are rendered)
  $("#btn-by-class").on("click", function () {
    $(".info").html("Changed by <b>class</b> selector with <i>.html()</i>");
  });

  // 3) Select by tag and change the styles with .css() (an object = many properties at once)
  $("#btn-by-tag").on("click", function () {
    $("li").css({
      "color": "#ffffff",
      "background-color": "#16a34a",
      "padding": "4px 10px",
      "margin-bottom": "4px",
      "border-radius": "6px",
      "list-style": "none"
    });
  });

  // 4) Difference between .text() and .html()
  $("#btn-compare").on("click", function () {
    const code = "<b>Bold text</b>";
    $("#text-demo").text(code);   // shows the tags as plain text
    $("#html-demo").html(code);   // the browser renders the <b> tag
  });

  // 5) Random colors with .css()
  $("#btn-random").on("click", function () {
    $("#demo1").css({
      "background-color": randomColor(0.15),
      "border-color": randomColor(1)
    });
    $(".info").css("color", randomColor(1));
  });

  // 6) Reset everything back to the original state
  $("#btn-reset1").on("click", function () {
    $("#demo1").html(originalHtml).removeAttr("style");
  });

  function randomColor(alpha) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  }
});
