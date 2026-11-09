/* =========================================================
   Part 4 — Animations: Task 8 (basic), Task 9 (sequential), Task 10 (combined)
   Note: .animate() works with numeric CSS properties
   (width, height, left, top, opacity, ...). The box has position: absolute,
   so left/top move it inside the .stage block.
   ========================================================= */

$(document).ready(function () {

  // Start position and size of every box (same as in style.css)
  const START = { left: "20px", top: "20px", width: "60px", height: "60px", opacity: 1 };

  // ---------- Task 8: Basic animation ----------
  $("#btn-animate8").on("click", function () {
    // Do not move the box out of the stage on small screens
    const left = Math.min(250, $("#stage8").width() - 140);

    $("#box8").stop(true).animate({
      width: "120px",
      height: "120px",
      left: left + "px",
      top: "100px"
    }, 800);
  });

  $("#btn-reset8").on("click", function () {
    $("#box8").stop(true).animate(START, 500);
  });

  // ---------- Task 9: Sequential animations ----------
  $("#btn-animate9").on("click", function () {
    const $box = $("#box9");
    if ($box.is(":animated")) return;   // ignore clicks while the animation is running

    const right = $("#stage9").width() - 60 - 20;   // stage width - box width - margin

    $("#step9").text("1. move right");
    $box
      .animate({ left: right + "px" }, 800, function () {
        $("#step9").text("2. move down");
      })
      .animate({ top: "180px" }, 800, function () {
        $("#step9").text("3. shrink");
      })
      .animate({ width: "30px", height: "30px" }, 600, function () {
        $("#step9").text("4. return to original");
      })
      .animate(START, 1000, function () {
        $("#step9").text("done ✔");
      });
  });

  // .stop(true) clears the queue, so the next steps do not run
  $("#btn-stop9").on("click", function () {
    $("#box9").stop(true).animate(START, 400);
    $("#step9").text("stopped");
  });

  // ---------- Task 10: Combined animation ----------
  $("#btn-animate10").on("click", function () {
    const easing = $("#easing10").val();
    const left = Math.min(300, $("#stage10").width() - 160);

    // opacity + size + movement in ONE .animate() call
    $("#box10").stop(true).animate({
      opacity: 0.4,
      width: "140px",
      height: "140px",
      left: left + "px",
      top: "100px"
    }, 1200, easing);
  });

  $("#btn-reset10").on("click", function () {
    $("#box10").stop(true).animate(START, 600, $("#easing10").val());
  });
});
