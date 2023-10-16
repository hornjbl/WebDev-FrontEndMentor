# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page
-   **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./screenshot.jpg)

### Links

-   Challenge URL: [Add challenge URL here](htts://challenge-url.com)
-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   Javascript

### What I learned

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
    color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
    console.log("🎉");
};
```

### Continued development

-   TODO:

    -   [ ] Add responsiveness to the component for larger screens.
    -   [ ] Redevelop the javascript component of the solution manually, and repeat until comfortable.
    -   [x] Learn about CSS measurement units (CSS)
        -   [x] [Are you using the right CSS units?](https://www.youtube.com/watch?v=N5wpD9Ov_To)
            -   Setting Font Sizes:
                -   Use the REM unit.
                -   REMs are relevant to the font size of the root element.
                -   Using REM units for fonts causes the fonts you specify with REMs to adapt to the user's system and browser preferences.
                -   The default font size of the root element is usually 16px.
                -   You can change this by setting the font-size on the html element to 62.5%, which changes the default font-size to 10px;
                -   You can then use `font-size: 2.1rem` to set the font size to 21px, `font-size: 1.6rem` to set it to 16px, etc (this makes the math simpler);
                -   Avoid using EMs for font-sizes.
            -   Setting widths:
                -   Best to use percentage.
                -   This can be coupled with a max-width.
                -   Viewport widths (VW) can also be used with caution (can cause issues).
                -   CH unit -> roughly equal to the width of the number 'o' on any given font.
                -   45ch is roughtly 45 characters wide.
            -   Setting heights:
                -   First, think about if you really need to set a height.
                -   If the height needs to be set, preferrably use a min-height instead of an absolute height.
                -   Then, use percentage, REM or VH - Viewport Height (may cause issues).
            -   Setting padding or margin:
                -   EM or REM.
            -   Media queries:
                -   Use EM (for consistency across all browsers).
            -   Pixels:
                -   Use them basically only when you need something really small.
                -   Otherwise avoid using pixels.
    -   [ ] Learn about promises (JS).
        -   [ ] [JavaScript Promises In 10 Minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E)
        -   [ ] [JavaScript Promises -- Tutorial for Beginners](https://www.youtube.com/watch?v=TnhCX0KkPqs)
    -   [ ] Learn about async await (JS).
        -   [ ] [JavaScript Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
    -   [ ] Learn about arrow functions (JS).

        -   [x] [JavaScript ES6 Arrow Functions Tutorial](https://www.youtube.com/watch?v=h33Srr5J9nY)

            -   See [arrow-func.js]("......\000-playground\arrow-func\arrow-func.js")
            -   ```js
                // ========================
                // Ex. 01
                // ========================

                function sum(a, b) {
                    return a + b;
                }

                console.log("Normal sum(2, 4) function:");
                console.log(sum(2, 4));

                // Is the equivalent of the arow function below:
                let sumResult1 = (a, b) => {
                    return a + b;
                };

                console.log("Arrow func sumResult1(3, 3):");
                console.log(sumResult1(3, 3));

                // And is also the equivalent of the simplified arrow function below:
                let sumResult2 = (a, b) => a + b;

                console.log("Arrow func sumResult2(4, 3):");
                console.log(sumResult2(4, 3));

                // ==============
                // Ex. 02
                // ==============

                function isPositive(number) {
                    return number > 0;
                }

                console.log("Normal isPositive(-6) function:");
                console.log(isPositive(-6));

                // Is the same as the arrow func:
                let positiveResult1 = (number) => {
                    return number > 0;
                };

                console.log("Arrow func positiveResult1(8):");
                console.log(positiveResult1(8));

                // Is the same as the simplified arrow func:
                let positiveResult2 = (number) => number > 0;

                console.log("Arrow func positiveResult2(8):");
                console.log(positiveResult2(8));

                console.log("Arrow func positiveResult2(-8):");
                console.log(positiveResult2(-8));

                // ==============
                // Ex. 03
                // ==============

                function randomNumber1To10() {
                    return Math.ceil(Math.random() * 10);
                }

                console.log("Normal randomNumber1To10() function:");
                console.log(randomNumber1To10());

                // Is the same as the arrow func:
                let randomNumberResult1 = () => {
                    return Math.ceil(Math.random() * 10);
                };

                console.log("Arrow func randomNumberResult1:");
                console.log(randomNumberResult1());

                // Is the same as the simplified arrow func:

                let randomNumberResult2 = () => Math.ceil(Math.random() * 10);

                console.log("Arrow func randomNumberResult2:");
                console.log(randomNumberResult2());

                // ==============
                // Ex. 04
                // ==============

                document.addEventListener("click", function () {
                    console.log("Clickety click click from the FIRST ex 04 function...");
                });

                // Is the same as the arrow func:

                document.addEventListener("click", () => {
                    console.log("Clickety click click from the SECOND ex 04 function");
                });

                // Is the same as the simplified arrow func:
                document.addEventListener("click", () => console.log("Clickety click click from the THIRD ex 04 function"));
                ```

        -   [ ] [Arrow Functions JavaScript Tutorial - What NOT to do!!!](https://www.youtube.com/watch?v=ajTvmGxWQF8)

### Useful resources

## Author

-   Github - [hornjbl](https://github.com/hornjbl)
-   Frontend Mentor - [@hornjbl](https://www.frontendmentor.io/profile/hornjbl)

## Acknowledgments
