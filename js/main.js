/* =========================================================
   main.js — shared code, loaded on every page after jQuery
   ========================================================= */

// Change these two values to your own name and group
const STUDENT = {
  name: "Your Full Name",
  group: "Your Group"
};

// Task 0: $(document).ready() runs the code after the HTML (DOM) is fully loaded
$(document).ready(function () {
  console.log("jQuery is ready!");

  // Student info in the footer
  $(".student-name").text(STUDENT.name);
  $(".student-group").text(STUDENT.group);

  // Mobile navbar: open / close the menu with a slide effect
  $(".nav-toggle").on("click", function () {
    $(".nav-links").slideToggle(200);
  });

  // When the window becomes wide again, remove the inline style left by slideToggle
  $(window).on("resize", function () {
    if ($(window).width() > 900) {
      $(".nav-links").removeAttr("style");
    }
  });

  // Smooth scroll for the task links at the top of each page
  $(".task-nav a").on("click", function (event) {
    event.preventDefault();
    const target = $(this).attr("href");          // e.g. "#task2"
    $("html, body").animate({ scrollTop: $(target).offset().top - 76 }, 500);
  });
});
