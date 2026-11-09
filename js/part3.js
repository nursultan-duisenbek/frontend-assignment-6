/* =========================================================
   Part 3 — DOM: Task 5 (add/remove), Task 6 (attributes), Task 7 (form)
   ========================================================= */

$(document).ready(function () {

  // ---------- Task 5: append / prepend / remove ----------
  let counter = 3;   // used for default item names

  function createItem() {
    const text = $("#item-input").val().trim();
    counter++;
    // .text() is safer than .html(): what the user types is never run as HTML
    return $("<li></li>").text(text || "Item " + counter);
  }

  function updateCount() {
    $("#item-count").text($("#item-list li").length);
  }

  // append() — add to the END of the list
  $("#btn-append").on("click", function () {
    const $item = createItem().hide();
    $("#item-list").append($item);
    $item.fadeIn(300);
    $("#item-input").val("").focus();
    updateCount();
  });

  // prepend() — add to the START of the list
  $("#btn-prepend").on("click", function () {
    const $item = createItem().hide();
    $("#item-list").prepend($item);
    $item.fadeIn(300);
    $("#item-input").val("").focus();
    updateCount();
  });

  // remove() — delete the last item
  $("#btn-remove").on("click", function () {
    $("#item-list li").last().remove();
    updateCount();
  });

  // Press Enter in the input = "Add Item"
  $("#item-input").on("keydown", function (event) {
    if (event.key === "Enter") {
      $("#btn-append").click();
    }
  });

  // Event delegation: works also for <li> elements added later
  $("#item-list").on("click", "li", function () {
    $(this).fadeOut(200, function () {
      $(this).remove();
      updateCount();
    });
  });

  // ---------- Task 6: change src and href with .attr() ----------
  const images = [
    { src: "images/gallery/city-day.svg", alt: "City at day" },
    { src: "images/gallery/city-night.svg", alt: "City at night" }
  ];
  let imageIndex = 0;

  $("#current-src").text($("#swap-img").attr("src"));   // .attr("src") = read the value

  $("#btn-change-src").on("click", function () {
    imageIndex = (imageIndex + 1) % images.length;
    $("#swap-img").attr({                                // .attr({...}) = set the values
      src: images[imageIndex].src,
      alt: images[imageIndex].alt
    });
    $("#current-src").text(images[imageIndex].src);
  });

  const links = [
    { href: "https://jquery.com", text: "Go to jQuery" },
    { href: "https://api.jquery.com", text: "Go to jQuery API docs" },
    { href: "https://www.w3schools.com/jquery/", text: "Go to W3Schools jQuery" }
  ];
  let linkIndex = 0;

  $("#current-href").text($("#dyn-link").attr("href"));

  $("#btn-change-href").on("click", function () {
    linkIndex = (linkIndex + 1) % links.length;
    $("#dyn-link")
      .attr("href", links[linkIndex].href)
      .text(links[linkIndex].text);
    $("#current-href").text(links[linkIndex].href);
  });

  // ---------- Task 7: live form input with .val() and .text() ----------
  // The "input" event fires on every change of the field (typing, paste, delete)
  $("#name-input").on("input", function () {
    const name = $(this).val();
    $("#name-output").text(name || "—");
  });

  $("#email-input").on("input", function () {
    const email = $(this).val();
    $("#email-output").text(email || "—");

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    $(this)
      .toggleClass("valid", email !== "" && isValid)
      .toggleClass("invalid", email !== "" && !isValid);
    $("#email-check").text(email === "" ? "" : (isValid ? "✔ valid" : "✘ invalid"));
  });

  // Submit: do not reload the page, just show a message
  $("#user-form").on("submit", function (event) {
    event.preventDefault();
    const name = $("#name-input").val().trim();
    const email = $("#email-input").val().trim();

    if (name === "" || email === "") {
      $("#form-message").removeClass("ok").addClass("err").text("Please fill in both fields.");
    } else {
      $("#form-message").removeClass("err").addClass("ok").text("Thank you, " + name + "!");
    }
    $("#form-message").hide().fadeIn(300);
  });

  $("#btn-clear").on("click", function () {
    $("#name-input, #email-input").val("").removeClass("valid invalid");
    $("#name-output, #email-output").text("—");
    $("#email-check, #form-message").text("");
  });
});
