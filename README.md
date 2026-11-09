# Assignment #6. jQuery (Selectors, Effects, Animations)

**Student:** Your Full Name
**Group:** Your Group
**Live demo:** https://YOUR-USERNAME.github.io/assignment6-jquery/

## Description

A multi-page website that shows the main features of the **jQuery** library:
selectors, effects, DOM manipulation and animations. jQuery 3.7.1 is included from the CDN
(`code.jquery.com`). Every page has a navbar with links to all parts of the assignment.

## Pages and tasks

| Page | Tasks | jQuery methods |
|------|-------|----------------|
| `index.html` | Home page, jQuery status | `$(document).ready()` |
| `part1-selectors.html` | Task 0. Setup, Task 1. Selectors & CSS | `$("#id")`, `$(".class")`, `$("tag")`, `.text()`, `.html()`, `.css()` |
| `part2-effects.html` | Task 2. Visibility, Task 3. Fade, Task 4. Slide | `.hide()`, `.show()`, `.toggle()`, `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`, `.slideUp()`, `.slideDown()`, `.slideToggle()` |
| `part3-dom.html` | Task 5. Add & Remove, Task 6. Attributes, Task 7. Form | `.append()`, `.prepend()`, `.remove()`, `.attr()`, `.val()`, `.text()`, `.on("input")` |
| `part4-animations.html` | Task 8. Basic, Task 9. Sequential, Task 10. Combined | `.animate()`, `.stop()`, animation queue, easing |
| `part5-project.html` | Task 11. Mini project: **Image Gallery** | `.fadeIn()`, `.fadeOut()`, `.delay()`, `.each()`, `.filter()`, `.promise()`, `.animate()` |

## Project structure

```
assignment6-jquery/
├── index.html
├── part1-selectors.html
├── part2-effects.html
├── part3-dom.html
├── part4-animations.html
├── part5-project.html
├── css/
│   └── style.css
├── js/
│   ├── main.js      # shared code: document ready, navbar, footer
│   ├── part1.js
│   ├── part2.js
│   ├── part3.js
│   ├── part4.js
│   └── part5.js
└── images/
    └── gallery/     # SVG images
```

## How to run

1. Clone the repository:
   ```
   git clone https://github.com/YOUR-USERNAME/assignment6-jquery.git
   ```
2. Open `index.html` in a browser (internet is needed to load jQuery from the CDN).
3. Press **F12 → Console** to see the message `jQuery is ready!`.

## How to publish on GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. In **Source** choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and click **Save**.
4. After 1–2 minutes the site is available at `https://YOUR-USERNAME.github.io/assignment6-jquery/`.

## Technologies

- HTML5, CSS3
- JavaScript
- jQuery 3.7.1 (CDN)
