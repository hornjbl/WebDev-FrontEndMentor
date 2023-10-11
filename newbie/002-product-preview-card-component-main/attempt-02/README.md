## TODO

-   [ ] Read [How to get the most out of Frontend Mentor](https://medium.com/frontend-mentor/how-to-get-the-most-out-of-frontend-mentor-bdd6fdc25cb8)
-   [ ] Watch [walkthrough video](https://youtu.be/B2WL6KkqhLQ?t=3405) for tips/improvements
    -   [x] How to update the product image using a media query.
        -   Enclose the `img` element with a `picture` element.
        -   Add a `picture -> source` element
        -   Add a `srcset` property in the `picture -> source` element
        -   Add a `media` property in the `picture -> source` element and specify the media query
    -   [ ] Design:
        -   Even though mobile-first is the best way to style, when writing the HTML, start by looking at the desktop design.
        -   Once the content and HTML structure is in place by keeping the desktop design in mind, then you can switch to mobile view and style it mobile-first.
    -   [ ] Layout:
        -   Kevin uses grid to center the card on screen:
            ```
            display: grid;
            place-content: center;
            ```
        -   Kevin also used grid display on the product-details container to 1) cause the button to fill the entire width, and 2) be able to use the `gap` property to evenly space all the elements inside it.
        -   He created one flex-group class that makes an element a flexbox and then center the things in it.
-   [ ] Watch [youtube video](https://www.youtube.com/watch?v=N5wpD9Ov_To) on how to pick the correct CSS units for measuring.
-   [x] Always put an `alt=""` property for all image elements, even if they are left empty on purpose.
-   [ ] Investigate: All page content should be contained by landmarks [link](https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI).
-   [ ] Use semantic HTML instead of only divs.
    -   [ ] Use article inside of `body`.
-   [ ] Style the button to give it a pointer icon, and change the color on hover.
-   [ ] Shopping Cart Icon:
    -   [ ] Add the icon using css instead of in the HTML.
-   [ ] The two sections of the card do not share 50% of the total card width in the desktop display. Need to figure out how to achieve this without introducing hard-coded widths.
    -   After inspecting the elements, it seems to be the padding that I've added to the .product-details container that's causing that element to take up more than 50% of the horizontal space. Need to figure out how to counter this.
    -   [ ] Kevin uses `display: grid;` in the card container, and then sets it to `grid-template-columns: 1fr 1fr;` in the media query.
-   [ ] Increase padding size and adjust font-sizes.
