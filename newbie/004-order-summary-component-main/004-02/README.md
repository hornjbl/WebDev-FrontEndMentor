# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-	[NB Notes](#nb-notes)
-   [Overview](#overview)
    -   [To Do](#to-do)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## NB Notes

-	See [Why font-size must NEVER be in pixels](https://fedmentor.dev/posts/font-size-px/)
	-	Never set these properties with fixed units like pixels:
		-	font-size
		-	line-height
		-	letter-spacing
	-	Doing so overrides the system and browser settings for these properties.
	-	For font-sizes stick to using REMs.
	-	For line-height stick to using unit-less values like 1.5 (line-height-in-px / font-size-in-px = line-height, ex 24px/16px = 1.5).
	-	For letter-spacing stick to using EMs.
	-	Calculate the REM from PX by dividing the give PX value by 16.
-	See [Should I change the default HTML font-size to 62.5%?](https://fedmentor.dev/posts/rem-html-font-size-hack/)
-	See [How to plan your HTML (1): Product Preview Card](https://fedmentor.dev/posts/html-plan-product-preview/)
-	See [Recommended Frontend Mentor challenge order for junior devs](https://fedmentor.dev/posts/newbie-fm-challenge-order/)
-	See [Are You Making These CSS Height Mistakes?](https://www.youtube.com/watch?v=-sF5KsEo6gM)

## Overview

### To Do

-   [ ] View the optimal layout for the interface depending on their device's screen size
-   [ ] See hover and focus states for all interactive elements on the page
-   [x] **Bonus**: Use the local JSON data to dynamically populate the content
-	[ ] Width/height:
	-   [ ] Be careful when using fixed widths or heights. Give preference to min/max width/height. (I again used height instead of min-height on the main container. This causes issues when the content starts getting bigger. NOTE TO SELF!)
	-	[x] When specifying fixed or min/max sizing, give preference to relative units.
	-	[x] Use dvh instead of vh.
	-	[x] Do not set full width (100vw) because it is not necessary.
	-	[x] If you want it to take up all the remaining space of the container (vertically), set it to flex with column direction and flex-grow: 1.
-	[x] Fonts:
	-	[x] Figure out, if the design specifies a font-size, where this should be set.
	-	[x] Font-family import in HTML and not in CSS import.
	-	[x] Do not use fixed font-size units.
-	[x] Ensure the image fits the element correctly.
-	[x] Research and use a good standard reset.
	-	[x] See [CREATE A CSS RESET STYLESHEET](https://www.youtube.com/watch?v=5e0wuvhxLk4)
-	[ ] Test the final result on mobile device, both landscape and portrait.
-	[ ] Research and implement "landscapes".
	- 	[ ] See [Coding for Beginners: Using Aria Landmarks](https://www.youtube.com/watch?v=D3FpMIGGFXQ)
	-	[ ] See [HTML Landmark Roles Screen Reader Demo](https://www.youtube.com/watch?v=zmVyUrhRoU0)

### Screenshot

![Desktop](./design/desktop_screenshot.jpg)
![Mobile](./design/mobile_screenshot.jpg)

### Links

-   Challenge URL: [Order summary component](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj)
-   Repository URL: [Github Repo](https://github.com/hornjbl/WebDev-FrontEndMentor/tree/main/newbie/004-order-summary-component-main/004-02)
-   Live Site URL: [Live site URL](https://hornjbl.github.io/WebDev-FrontEndMentor/newbie/004-order-summary-component-main/004-02/index.html)


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

### Useful resources

## Author

-   Github - [hornjbl](https://github.com/hornjbl)
-   Frontend Mentor - [@hornjbl](https://www.frontendmentor.io/profile/hornjbl)

## Acknowledgments
