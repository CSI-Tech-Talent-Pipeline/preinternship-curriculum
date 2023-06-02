# HTML/CSS: Grid, Flexbox, and Bootstrap

## Students Will Be Able To (SWBAT)

By the end of this lesson, students will be able to:

1. Understand the basic structure and elements of HTML.
2. Apply CSS styles to HTML elements.
3. Understand the concept of CSS box model.
4. Use CSS Grid to create layout.
5. Use CSS Flexbox to manage items within a container.
6. Utilize Bootstrap as a CSS framework to build responsive, mobile-first projects.

## HTML/CSS Basics

### Task List:

1. Create a basic HTML page with `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` elements.
2. Add various HTML elements such as `<h1>`, `<p>`, `<div>`, `<span>`, `<a>`, `<img>`, etc.
3. Apply CSS styles using inline CSS, internal CSS, and external CSS.
4. Understand and use the CSS box model: `margin`, `border`, `padding`, `content`.

#### 1. Creating an HTML Page

- Create a file called: `index.html`
- use the `!` snippet in VS Code to create the skeleton.
- Note the `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` elements
- within the `title` element replace the contents with: `HTML, CSS, Grid, Flexbox and Bootstrap`

#### Validation:

- Use the VS Code [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to open the index.html file in the browser. After the extension is installed:
  - right click on your index.html file
  - select 'Open with Live Server'
  - the file should open in the browser and you should see our new title labeling the browser tab.

#### 2. Add elements to the page

- Create an `<h1>` tag containing `Job Application Tracker`
- Create a `<section>` tag containing 3 `<div>` tags. Each `<div>` should have a class of `j-desc` Inside each div, add:
  - an `<img>` tag with a class of `j-desc__company-image`
  - an `<h2>` tag with a class of `j-desc__job-title`
  - a `<p>` tag with a class of `j-desc__company`
  - a `<ul>` tag with a class of `j-desc__details` 3 `<li>` tags as children:
    - first should have a class of `j-desc__location`
    - next: `j-desc__salary`
    - then: `j-desc__posting_date`

- Look for some [jobs on LinkedIn](https://www.linkedin.com/jobs/collections/recommended/)
- Right click on a posting image and select "copy image address", paste the image into the `src` attribute of the first `<img>`, fill the `alt` attribute with the name of the company. The `alt` text is displayed if the image can't be displayed for some reason and is important for accessibility as screen readers will use it.
- Fill in the `<h2>` tag with the Job title
- Fill in the `<p>` tag with the company
- Fill in the first `<li>` with the location
- Fill in the second `<li>` with the salary range
- Fill in the third `<li>` with the posting date

#### Validation:

- Verify in the browser that the content you've added is displaying on the html page. The Live Server extension should have already reloaded the page whenever you changed the code in your editor.

### 3. Apply CSS styles

- make the `<h1>` red by using inline styles
- add a `style` tag to the `<head>` of the document and add a css selector: `.red` to apply the red color.
- remove the inline styles on the `h1` and use the class to make the header red.
- add another selector `.blue` to apply the blue color.
- change the header to blue by changing its class.
- create a file in the same directory as `index.html` called `styles.css`
- add a `<link>` tag to the `<head>` of the document and set its href to `"styles.css"`
- cut the contents of the `<style>` tag in the head and paste them into the `styles.css` file.
- Confirm in the browser that the header is still blue.

#### Validation:

- Check the browser after every change you make to the CSS to see that the desired effect is occurring.

### 4. CSS box model
- Visit [Interactive box-model Demo](https://codepen.io/psande/full/nKOJyX)
  - Discuss Box Sizing, Margin, Border, Padding and Content.
  - Discuss interactions between Box sizing and content size
- Demonstrate the box model in action within our Job Application Tracker html file.
- note that the `<span>` tags content all appears on a single line (inline), while the `<h2>` and `<p>` are displayed on separate lines (block).
- margin, padding, width and height cannot be applied to inline elements like `<span>` tags. If we set the `display` property for `<span>` tags to `inline-block` or `block` margin, padding, width and height may be applied.
- create a `.btn` class and apply it to a `<button class="btn">Click Me</button>` that we add right below the header.
- demonstrate the use of margin, padding, border, width and height to build the button.
  - Try using a width of 80px and a height of 40px. See that it looks all right, but then change the button text to `Click Me Again` and note that it gets cut off. 
  - Demonstrate using Padding here as a preferable way of styling the button so that it continues to work with different text content and can therefore be reused for different buttons throughout the application.
  - Try to center the button in the page using `text-align: center` and see that it doesn't work (because buttons are inline-block elements and we'd need to apply the text align center to their parent element to have it actually work). 
  

  ```html
      <div class="text-center">
        <button class="btn">Click Me Again</button>
      </div>
      // css
      .text-center {
        text-align: center;
      }
    ```
  - Demonstrate centering a block element with `display: block; margin: 0 auto;`



#### Validation:

- Watch the button in the browser as you adjust the border and padding properties.


### CSS Grid

1. Understand the CSS Grid layout and basic terminology.
2. Create a CSS Grid layout with rows and columns.
3. Position items in the grid cells.
4. Position the grid itself.
5. Control the size of rows and columns.
6. Customizing the positioning of individual items within their grid cell.

#### 1. Understand CSS Grid Basic Layout and terminology

- Grid is a display property that is applied to the grid container. 
- All children of the grid container are grid items. 
- A Grid is composed of rows and columns, and we can specify how much space they should take up in various ways
- CSS Grid allows us to create a 2 dimensional layout by specifying a number of rows and columns

Here's some starter html and css to add so we can see the grid styles in action.

```html
<div class="container">
  <div class="grid-item item-1">Item 1</div>
  <div class="grid-item item-2">Item 2</div>
  <div class="grid-item item-3">Item 3</div>
  <div class="grid-item item-4">Item 4</div>
  <div class="grid-item item-5">Item 5</div>
  <div class="grid-item item-6">Item 6</div>
  <div class="grid-item item-7">Item 7</div>
  <div class="grid-item item-8">Item 8</div>
  <div class="grid-item item-9">Item 9</div>
</div>
```

```css
.container {
  border: 6px solid black;
  display: grid;
}
.grid-item {
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
}
.item-1 {
  background-color: #b4bf35;
}
.item-2 {
  background-color: #b95f21;
}
.item-3 {
  background-color: #1c4c56;
}
.item-4 {
  background-color: #cfb276;
}
.item-5 {
  background-color: #6b0803;
}
.item-6 {
  background-color: #cfb276;
}
.item-7 {
  background-color: #b95f21;
}
.item-8 {
  background-color: #01243a;
}
.item-9 {
  background-color: #aad041;
}
```

- Add the following to the `.container` declaration to make it a grid container:

```css
display: grid;

```

#### 2. Create a CSS Grid layout with rows and columns.

```css
grid-template-columns: 100px 200px 300px;
```

```css
grid-template-columns: 25% 50% 25%;
```

Use the `fr` property to set a row/column to a fraction of the available space.

```css
grid-template-columns: 1fr 2fr 1fr;
```

Use the minmax property to specify an acceptable range of values for a dimension:

```css
grid-template-columns: repeat(3, minmax(200px, 1fr))
```

or

```css
grid-template-columns: repeat(3, minmax(auto, 200px))
```

For rows, a similar syntax applies:

```css
grid-template-rows: 100px 150px 200px;
```

Using height with rows:

```css
height: 400px;
grid-template-rows: repeat(3, 1fr);
```

You can also use the shorthand property that combines both `grid-template-rows` and `grid-template-columns` together:

```css
grid-template: repeat(3, 1fr) / repeat(3, 1fr)
```

Adding gaps between rows and columns:

```css
row-gap: 30px;
column-gap: 20px;
```

or if we want the shorthand for declaring both at once:

```css
gap: 30px 20px;
```

or set them both to the same:

```css
gap: 30px;
```

#### 3. Positioning Items

The `justify-items` property aligns the content of the grid items along the row axis (generally left to right).
```css
justify-items: start;
```

```css
justify-items: end;
```

```css
justify-items: center;
```
While the `align-items` property aligns the content of the grid items along the column axis (generally up to down)

```css
align-items: start;
```

```css
align-items: end;
```

```css
align-items: center;
```

Or you can use the shorthand property `place-items` to combine them both:

```css
place-items: start center; /* equivalent to justify start and align center*/
```

```css
place-items: center /* equivalent to place-itmes: center center; or justify-items: center; align-items: center; */
```

#### 4. Aligning the Grid itself

The [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) property adjust the positioning of the entire grid across its inline axis (left and right).
```css
/* Positional alignment */
justify-content: center; /* Pack items around the center */
justify-content: start; /* Pack items from the start */
justify-content: end; /* Pack items from the end */
justify-content: flex-start; /* Pack flex items from the start */
justify-content: flex-end; /* Pack flex items from the end */
justify-content: left; /* Pack items from the left */
justify-content: right; /* Pack items from the right */

/* Baseline alignment */
/* justify-content does not take baseline values */

/* Normal alignment */
justify-content: normal;

/* Distributed alignment */
justify-content: space-between; /* Distribute items evenly
                                   The first item is flush with the start,
                                   the last is flush with the end */
justify-content: space-around; /* Distribute items evenly
                                   Items have a half-size space
                                   on either end */
justify-content: space-evenly; /* Distribute items evenly
                                   Items have equal space around them */
justify-content: stretch; /* Distribute items evenly
                                   Stretch 'auto'-sized items to fit
                                   the container */
```

The [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) property aligns contents of the grid container with respect to its block axis (up and down)

```css
/* Basic positional alignment */
/* align-content does not take left and right values */
align-content: center; /* Pack items around the center */
align-content: start; /* Pack items from the start */
align-content: end; /* Pack items from the end */
align-content: flex-start; /* Pack flex items from the start */
align-content: flex-end; /* Pack flex items from the end */

/* Normal alignment */
align-content: normal;

/* Baseline alignment */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* Distributed alignment */
align-content: space-between; /* Distribute items evenly
                                 The first item is flush with the start,
                                 the last is flush with the end */
align-content: space-around; /* Distribute items evenly
                                 Items have a half-size space
                                 on either end */
align-content: space-evenly; /* Distribute items evenly
                                 Items have equal space around them */
align-content: stretch; /* Distribute items evenly
                                 Stretch 'auto'-sized items to fit
                                 the container */
```

And, again, there's a shorthand [`place-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content) that you can use to combine the two properties in one declaration.

```css
place-content: center;
```

#### 5. Control the size of rows and columns.

`grid-column-start` and `grid-column-end` allows you to specify that a certain grid item should take up more than a single column.

For rows, `grid-row-start` and `grid-row-end` perform the same task.

```css
.item-1 {
  background-color: #b4bf35;
  grid-row-start: 1;
  grid-row-end: 3
}
```

See that the first item now spans 2 rows and the rest only span 1.

```css
.item-1 {
  background-color: #b4bf35;
  grid-column-start: 1;
  grid-column-end: 3;
}
```

You can also use span to specify how many grid columns or rows the item should occupy.

```css
.item-1 {
  background-color: #b4bf35;
  grid-column-start: 1;
  grid-column-end: span 3;
}
```

#### 6. Positioning items within their grid space.

Use `justify-self` to position the content within the inline grid access (normally left and right)

```css
.item-1 {
  background-color: #b4bf35;
  grid-column-start: 1;
  grid-column-end: span 3;
  justify-self: start; /* try end and center as well */
}
```

Use `align-self` to position the content within the block axis (normally up and down)

```css
.item-1 {
  background-color: #b4bf35;
  grid-column-start: 1;
  grid-column-end: span 3;
  align-self: start; /* try end and center as well */
}
```

## CSS Flexbox

### Task List:

1. Understand the CSS Flexbox model and basic terminology.
2. Create a flex container.
3. Control the direction, wrapping, alignment, and distribution of items within the flex container.

#### 1. Flexbox model and basic terminology

- Similar to CSS Grid's grid container and grid items, Flexbox works with a flex container and flex items
- Flexbox containers only manage content flow in a single direction, however, which is inline by default (left to right)
- We can set a flexbox container to wrap and then items that don't fit into the container will wrap to the next line.
- To apply flexbox to a container, give it the display property of `flex`




#### 2. Create a flex container

- Take one of the `<div class="j-desc>`s we added earlier and add `display: flex` to its CSS selector

```css
.j-desc {
  display: flex;
}
```

Notice now that the content is flowing left to right instead of top to bottom like before. This is good for the image, but we still want the text content to stack. 

**IMPORTANT CONCEPT** Both Grid and Flex containers affect the display of *direct* children only. So, if we want to remove the affects of flex on certain children, we can wrap them in another element.

This is better, but you may notice that the `<span>` tags are all still displayed inline instead of stacked on top of one another. To fix this, we can create a flex container to wrap the span tags and set the `flex-direction` property to `column`.

```css
.flex-col {
  display: flex;
  flex-direction: column;
}
```

### How to Implement:

[Details about each step]

### Validation:

[How to verify that the steps have been implemented correctly]

## Bootstrap

### Task List:

1. Understand what a CSS Framework is.
2. Understand the benefits of using Bootstrap.
3. Include the Bootstrap library in your project.
4. Use Bootstrap's predefined classes to create a responsive design.

### How to Implement:

[Details about each step]

### Validation:

[How to verify that the steps have been implemented correctly]


## Resources

- [Interactive box-model Demo](https://codepen.io/psande/full/nKOJyX)
- [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [CSS Grid Crash Course](https://www.youtube.com/watch?v=p4Ith5qRM1g)
