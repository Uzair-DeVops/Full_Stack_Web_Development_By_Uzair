# What is a CSS Grid?

A grid can be defined as an intersecting set of vertical and horizontal lines. CSS Grid Layout separates a page into major sections. The **Grid property** offers a grid-based layout system with rows and columns, making web page design easier without relying on positioning and floating. The grid layout allows creating grid structures in CSS instead of HTML.

## Key Features:
- Similar to tables, it enables alignment of elements into rows and columns.
- Compared to tables, CSS Grid simplifies layout design.
- Define grid columns and rows using `grid-template-rows` and `grid-template-columns` properties.

## Creating a Grid Container
To create a grid container:
- Declare `display: grid` or `display: inline-grid` on an element.
- The grid container holds **grid items** (elements placed inside the rows and columns).

### Example:
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}














```
# CSS Grid Building with Rows & Columns

## HTML and CSS Code Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS Grid</title>
    <style type="text/css">
        body {
            font-family: Arial, Helvetica, sans-serif;
        }
        .container {
            background-color: #eee;
            width: 700px;
            height: 800px;
            margin: 70px 0 0 50px;
            display: grid;

            /* Grid Configuration Options */
            /* grid-template-columns: 100px auto 200px; */
            /* grid-template-rows: 150px 100px 100px; */

            /* grid-template-columns: 55% 100px auto; */
            /* grid-template-rows: 150px 100px 100px; */

            /* grid-template-columns: 1fr 3fr 1fr; */
            /* grid-template-rows: 150px 100px 100px; */

            /* grid-template-columns: 50% repeat(2, 150px); */
            /* grid-template-rows: 150px 100px 100px; */

            /* Active Grid Configuration */
            grid-template-columns: 50% repeat(2, 150px);
            grid-template-rows: 1fr 200px;
            grid-gap: 20px;
        }
        .items {
            color: white;
            padding: 20px;
        }
        .items1 { background: orangered; }
        .items2 { background: yellowgreen; }
        .items3 { background: slateblue; }
        .items4 { background: hotpink; }
        .items5 { background: royalblue; }
        .items6 { background: goldenrod; }
    </style>
</head>
<body>
    <h1>Yahoo Baba : CSS Grid</h1>

    <div class="container">
        <div class="items items1">First</div>
        <div class="items items2">Second</div>
        <div class="items items3">Third</div>
        <div class="items items4">Fourth</div>
        <div class="items items5">Fifth</div>
        <div class="items items6">Sixth</div>
    </div>
</body>
</html>
```









# CSS Grid-Gap

The `grid-gap` property sets the size of the gap between the rows and columns in a grid layout. It is a shorthand property for the following properties:

- `grid-column-gap` property
- `grid-row-gap` property

## Syntax:
```css
grid-gap: grid-row-gap grid-column-gap;
```

## Property Values:
- **`grid-row-gap`**: It sets the size of the gap between the rows in a grid layout. Its default value is `0`.
- **`grid-column-gap`**: It sets the size of the gap between the columns in a grid layout. Its default value is `0`.

## Example Code:

```html
<!DOCTYPE html>
<html>
<head>
	<title>CSS Grid Gap</title>
	<style type="text/css">
		body {
			font-family: Arial, Helvetica, sans-serif;
		}
		h1 {
			padding: 0 0 0 40px;
		}
		.container {
			background-color: #eee;
			width: 700px;
			margin: 50px 0 0 50px;

			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 100px 100px;

			/* grid-row-gap: 15px; */
			/* grid-column-gap: 20px; */

			grid-gap: 25px 50px;
		}
		.items1 { background: orangered; }
		.items2 { background: yellowgreen; }
		.items3 { background: slateblue; }
		.items4 { background: hotpink; }
		.items5 { background: royalblue; }
		.items6 { background: goldenrod; }
	</style>
</head>
<body>
	<h1>Yahoo Baba : CSS Grid Gap</h1>

	<div class="container">
		<div class="items items1">First</div>
		<div class="items items2">Second</div>
		<div class="items items3">Third</div>
		<div class="items items4">Fourth</div>
		<div class="items items5">Fifth</div>
		<div class="items items6">Sixth</div>
	</div>
</body>
</html>
```




# CSS Grid Items Positioning

Grid lines are essentially lines that represent the start of, the end of, or between column and row tracks. Each line, starting from the start of the track and in the direction of the grid, is numbered incrementally starting from 1.

```css
grid-row-start:    2;
grid-row-end:      3;
grid-column-start: 2;
grid-column-end:   3;
```

This 2-column by 3-row grid results in 3 column lines and 4 row lines. Item 1 was repositioned by row and column line numbers.

If an item spans only one row or column, `grid-row/column-end` is not necessary.

```css
grid-row:    2;
grid-column: 3 / 4;
```

- `grid-row` is shorthand for `grid-row-start` and `grid-row-end`.
- `grid-column` is shorthand for `grid-column-start` and `grid-column-end`.

If one value is provided, it specifies `grid-row/column-start`. If two values are specified, the first value corresponds to `grid-row/column-start` and the second `grid-row/column-end`, and must be separated by a forward slash `/`.

```css
grid-area: 2 / 2 / 3 / 3;
```

- `grid-area` is shorthand for `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end`.
- If four values are specified, the first corresponds to `grid-row-start`, the second `grid-column-start`, the third `grid-row-end`, and the fourth `grid-column-end`.

## Example Code:

```html
<!DOCTYPE html>
<html>
<head>
	<title>CSS Grid Items Positioning</title>
	<style type="text/css">
		body {
			font-family: Arial, Helvetica, sans-serif;
		}
		h1 {
			padding: 0 0 0 40px;
		}
		.container {
			background-color: #eee;
			width: 700px;
			margin: 50px 0 0 50px;

			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 150px 150px;
			grid-gap: 20px;
		}
		.items1 {
			background: orangered;
			/* grid-row-start: 2; */
			/* grid-row-end: 3; */
			/* grid-row: 2 / 3; */
			
			/* grid-column-start: 3; */
			/* grid-column-end: 4; */
			/* grid-column: 3 / 4; */

			grid-area: 2 / 3 / 3 / 4;
		}
		.items2 { background: yellowgreen; }
		.items3 { background: slateblue; }
		.items4 { background: hotpink; }
		.items5 { background: royalblue; }
		.items6 {
			background: goldenrod;
			grid-row-start: 1;
			grid-row-end: 2;
			grid-column-start: 1;
			grid-column-end: 2;
		}
		.items {
			color: #fff;
			font-size: 20px;
			font-weight: bold;
			padding: 10px;
		}
	</style>
</head>
<body>
	<h1>Yahoo Baba : CSS Grid Items Positioning</h1>

	<div class="container">
		<div class="items items1">First</div>
		<div class="items items2">Second</div>
		<div class="items items3">Third</div>
		<div class="items items4">Fourth</div>
		<div class="items items5">Fifth</div>
		<div class="items items6">Sixth</div>
	</div>
</body>
</html>
```















# CSS Grid Items Spanning

CSS Grid is a powerful tool for creating layouts in HTML and CSS. It allows you to create complex layouts with ease. When it comes to spanning items in CSS Grid, you can use the `grid-column` and `grid-row` properties to specify the start and end positions of an item. You can also use the `span` keyword to specify how many columns or rows an item should span.

For example, if you want an item to span three columns, you can use the following code:

```css
.item {
  grid-column: 1 / span 3;
}
```

This will make the item start at the first column and span three columns.

## Example Code

```html
<!DOCTYPE html>
<html>
<head>
	<title>CSS Spanning of Grid Items</title>
	<style type="text/css">
		body{
			font-family: arial, helvetica;
		}
		h1{
			padding: 0 0 0 40px;
		}
		.container{
			background-color: #eee;
			width: 700px;
			margin: 50px 0 0 50px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(4, 120px);
			grid-gap: 20px;
		}

		.items1{
			background: orangered;
			grid-row: 2 / 3;
			grid-column: 3 / 4;
			z-index: 1;
		}
		.items2{
			background: yellowgreen;
			/*grid-row: 2 / 4;*/
			grid-row: 2 / span 3;
		}
		.items3{
			background: slateblue;
			grid-column: 2 / -1;
		}
		.items4{
			background: hotpink;
			grid-column: 2 / 4;
			grid-row: 2 / 3;
		}
		.items5{
			background: royalblue;
		}
		.items6{
			background: goldenrod;
			grid-row: 1 / 2;
			/*grid-column: 1 / 3;*/
			/*grid-column: 1 / span 3;*/
			grid-column: 1 / -1;
		}
		.items{ 
			color: #fff;
			font-size: 20px;
			font-weight: bold;
			padding: 10px;  
		}
	</style>
</head>
<body>
	<h1>Yahoo Baba : CSS Spanning of Grid Items</h1>

	<div class="container">
		<div class="items items1">First</div>
		<div class="items items2">Second</div>
		<div class="items items3">Third</div>
		<div class="items items4">Fourth</div>
		<div class="items items5">Fifth</div>
		<div class="items items6">Sixth</div>
	</div>
</body>
</html>
```














# CSS Grid Lines Naming

You can assign some or all of the lines in your grid a name when you define your grid with the `grid-template-rows` and `grid-template-columns` properties. Naming lines is useful when creating a responsive design where you redefine the grid. You can ensure that the line is always named the same in your definitions. 

For example, you can declare a line using this notation:

```css
[my-line] 50px [my-second-line] 50px [my-third-line]
```

This will create three lines with names `my-line`, `my-second-line`, and `my-third-line`.

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid</title>
  <style>
    body{ font-family: arial, helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      width: 720px;
      margin: 45px auto 0;

      display: grid;
      grid-template-columns: repeat(3, [col-start] 1fr [col-end]);
      grid-template-rows: 
        [header-start] 120px [header-end menu-start] 60px 
        [menu-end box-start] 100px [box-end content-start] 400px 
        [content-end footer-start] 50px [footer-end];
      grid-gap: 15px;
    }

    .header{
      background: orangered;
      grid-row: header-start / header-end;
      grid-column: col-start 1 / col-end 3;
    }
    .menu{
      background: yellowgreen;
      grid-row: menu-start / menu-end;
      grid-column: col-start 1 / col-end 3;
    }
    .box1{
      background: mediumpurple;
    }
    .box2{
      background: hotpink;
    }
    .sidebar{
      background: royalblue;
      grid-row: box-start / content-end;
    }
    .content{
      background: #7DCEA0;
      grid-row: content-start / content-end;
      grid-column: col-start 1 / col-end 2;
    }
    .footer{
      background: goldenrod;
      grid-row: footer-start / footer-end;
      grid-column: 1 / -1;
    }
    .items{ 
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="items header">Header</div>
    <div class="items menu">Menu</div>
    <div class="items box1">Box 1</div>
    <div class="items box2">Box 2</div>
    <div class="items sidebar">Sidebar</div>
    <div class="items content">Content</div>
    <div class="items footer">Footer</div>
  </div>
</body>
</html>
```














# CSS Grid Area Naming

You can use the `grid-area` property to give an element a name that can be referenced in the grid template. According to CSS Grid Layout Module Level 1, all strings must be defined under the following tokens:

- **Named cell token:** This represents the named grid area in the grid. For instance, `head` is a named cell token.
- **Null cell token:** This represents the unnamed grid area in the grid container. For instance, an empty cell in the grid is a null cell token.

## Example of Named Grid Area

You can define a named grid area using the following code:

```css
.item {
  grid-area: my-area;
}
```

This will create a named grid area called `my-area`.

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid-Template-Area</title>
  <style>
    body{ font-family: arial, helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      width: 720px;
      margin: 45px auto 0;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 120px 60px 100px 400px 50px;
      grid-gap: 15px;

      grid-template-areas: "header header header"
                           "menu menu menu"
                           "box1 box2 sidebar"
                           "content content sidebar"
                           "footer footer footer";
    }

    .header{
      background: orangered;
      grid-area: header;
    }
    .menu{
      background: yellowgreen;
      grid-area: menu;
    }
    .box1{
      background: mediumpurple;
      grid-area: box1;
    }
    .box2{
      background: hotpink;
      grid-area: box2;
    }
    .sidebar{
      background: royalblue;
      grid-area: sidebar;
    }
    .content{
      background: #7DCEA0;
      grid-area: content;
    }
    .footer{
      background: goldenrod;
      grid-area: footer;
    }
    .items{ 
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="items header">Header</div>
    <div class="items menu">Menu</div>
    <div class="items box1">Box 1</div>
    <div class="items box2">Box 2</div>
    <div class="items sidebar">Sidebar</div>
    <div class="items content">Content</div>
    <div class="items footer">Footer</div>
  </div>
</body>
</html>
```



















# CSS Grid MinMax Function

The `minmax()` function is used to define a size range greater than or equal to the minimum and less than or equal to the maximum. It takes two arguments: the minimum size and the maximum size. The first argument is the minimum size, and the second argument is the maximum size.

For example, you can use the following code to define a grid column that has a minimum width of 100px and a maximum width of 1fr:

```css
grid-template-columns: minmax(100px, 1fr);
```

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid</title>
  <style>
    body { font-family: arial, helvetica; }
    h1 { padding: 0 0 0 40px; }

    .container {
      background: wheat;
      width: 80%;
      margin: 45px auto 0;

      display: grid;
      grid-template-columns: minmax(150px, 1fr) 1fr 1fr min-content;
      grid-template-rows: repeat(2, minmax(150px, min-content));
      grid-gap: 5px;
    }

    .item1 { background: orangered; }
    .item2 { background: yellowgreen; }
    .item3 { background: mediumpurple; }
    .item4 { background: hotpink; }
    .item5 { background: royalblue; }
    .item6 { background: orchid; }
    .item7 { background: goldenrod; }
    .item8 { background: #7DCEA0; }

    .items { 
      color: #fff; 
      font-size: 20px; 
      font-weight: bold; 
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Grid MinMax() Function</h1>
  <div class="container">
    <div class="items item1">One Lorem ipsum dolor sit amet.</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">
      Four Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Minima reprehenderit, explicabo similique voluptate nesciunt molestiae?
    </div>
    <div class="items item5">Five</div>
    <div class="items item6">
      Six Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Vero quas, ipsa commodi architecto fugiat officia ea odit praesentium incidunt, magni?
    </div>
    <div class="items item7">Seven</div>
    <div class="items item8">Eight</div>
  </div>
</body>
</html>
```




































# CSS Grid Implicit & Explicit Grid

CSS Grid Layout uses the concept of **implicit** and **explicit** grids. The grid container automatically generates the **implicit grid** when the grid items are positioned outside the **explicit grid**.

The **explicit grid** is defined by using the `grid-template-rows`, `grid-template-columns`, and `grid-template-areas` properties or the shorthand `grid` or `grid-template` properties. We can define a fixed number of lines and tracks that form a grid by using these properties.

**Tracks** are defined in the explicit grid by using the `grid-template-columns` and `grid-template-rows` properties or the shorthand `grid` or `grid-template` properties. Tracks are also created in the **implicit grid** by positioning a grid item outside of the tracks created in the explicit grid.

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid</title>
  <style>
    body { font-family: arial, helvetica; }
    h1 { padding: 0 0 0 40px; }

    .container {
      background: #eee;
      width: 650px;
      margin: 45px auto 0;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 120px);
      grid-gap: 15px;

      grid-auto-rows: 80px;
      grid-auto-flow: row;

      grid-auto-columns: .5fr;
    }

    .item1 { background: orangered; }
    .item2 { background: yellowgreen; }
    .item3 { background: mediumpurple; }
    .item4 { background: hotpink; }
    .item5 { background: royalblue; }
    .item6 { background: orchid; }
    .item7 { background: goldenrod; }
    .item8 { background: #7DCEA0; }

    .items { 
      color: #fff; 
      font-size: 20px; 
      font-weight: bold; 
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
    <div class="items item5">Five</div>
    <div class="items item6">Six</div>
    <div class="items item7">Seven</div>
    <div class="items item8">Eight</div>
  </div>
</body>
</html>
```










# CSS Grid Items Alignment

The **CSS `align-items` property** sets the `align-self` value on all direct children as a group. In Grid Layout, it controls the alignment of items on the **Block Axis** within their grid area.

You can use the following properties to position the grid itself within its container as well as grid items:

- `justify-items`
- `align-items`
- `justify-content`
- `align-content`
- `justify-self`
- `align-self`

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid</title>
  <style>
    body { font-family: arial, helvetica; }
    h1 { padding: 0 0 0 40px; }

    .container {
      background: #eee;
      width: 700px;
      margin: 45px auto 0;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 120px);
      grid-gap: 15px;
      grid-auto-rows: 70px;

      /* align-items: center; */
      /* justify-items: start; */

      place-items: center center;
    }

    .item1 { background: orangered; }
    
    .item2 { 
      background: yellowgreen;
      /* align-self: start;
         justify-self: end; */
      place-self: start end;
    }

    .item3 { 
      background: mediumpurple;
      grid-row: span 3; 
    }

    .item4 { background: hotpink; }
    .item5 { background: royalblue; }
    .item6 { background: orchid; }

    .item7 { 
      background: goldenrod;
      grid-column: span 2;
      justify-self: center;
    }

    .item8 { background: #7DCEA0; }
    
    .items { 
      color: #fff; 
      font-size: 20px; 
      font-weight: bold; 
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Grid Items Alignment</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
    <div class="items item5">Five</div>
    <div class="items item6">Six</div>
    <div class="items item7">Seven</div>
    <div class="items item8">Eight</div>
  </div>
</body>
</html>
```




















# CSS Grid Tracks Alignment

The **CSS Grid Layout** provides properties to control the alignment of grid tracks (rows and columns) within the grid container. This allows you to adjust how the entire grid is positioned inside its container.

You can use the following properties for grid track alignment:

- `justify-content`: Aligns the grid tracks along the inline (horizontal) axis.
- `align-content`: Aligns the grid tracks along the block (vertical) axis.

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid</title>
  <style>
    body { font-family: arial, helvetica; }
    h1 { padding: 0 0 0 40px; }

    .container {
      background: #eee;
      width: 700px;
      height: 700px;
      margin: 45px auto 0;

      display: grid;
      grid-template-columns: repeat(2, 150px);
      grid-template-rows: repeat(2, 100px);
      grid-gap: 15px;
      grid-auto-rows: 50px;
      grid-auto-flow: column dense;

      justify-content: space-evenly;
      align-content: space-evenly;
    }

    .item1 { background: orangered; }
    .item2 { background: yellowgreen; }

    .item3 { 
      background: mediumpurple;
      grid-row: span 3;
    }

    .item4 { background: hotpink; }
    .item5 { background: royalblue; }

    .item6 { 
      background: orchid;
      grid-column: span 2;
    }

    .item7 { background: goldenrod; }
    .item8 { background: #7DCEA0; }

    .items { 
      color: #fff; 
      font-size: 20px; 
      font-weight: bold; 
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Grid Tracks Alignment</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
    <div class="items item5">Five</div>
    <div class="items item6">Six</div>
    <div class="items item7">Seven</div>
    <div class="items item8">Eight</div>
    <div class="items item8">Eight</div>
  </div>
</body>
</html>
```

## Explanation of Key Properties

- **`justify-content: space-evenly;`**  
  - Distributes grid columns evenly across the available horizontal space.
  
- **`align-content: space-evenly;`**  
  - Distributes grid rows evenly across the available vertical space.

- **`grid-auto-flow: column dense;`**  
  - Fills grid items in a column-wise manner, attempting to minimize empty spaces.

## Additional Notes

- The `grid-row: span 3;` property in `.item3` makes it span across 3 rows.
- The `grid-column: span 2;` in `.item6` spans the item across 2 columns.

```


















```
# CSS Grid Auto-Fill & Auto-Fit

The **auto-fill** and **auto-fit** properties in CSS Grid help create responsive layouts by adjusting the number of columns dynamically based on available space.

---

## **Auto-Fill** 

- The `auto-fill` property fills the grid row with as many columns as possible, even if some columns remain empty.
- It ensures a consistent layout structure and is useful for designing responsive grids without the need for media queries.

### **Syntax:**
```css
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
```

**Key Behavior:**
- Empty tracks (columns) are still reserved in the grid layout.
- The grid structure remains intact, even if there are fewer items than available columns.

---

## **Auto-Fit** 

- The `auto-fit` property adjusts the grid items to fit the available space, resizing them accordingly.
- If there are no grid items, the space collapses to `0px`, making the layout more flexible.

### **Syntax:**
```css
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
```

**Key Behavior:**
- Items stretch to fill available space.
- If no items are present, the grid collapses.

---

## **Example Code**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid Auto-Fill & Auto-Fit</title>
  <style>
    body { font-family: arial, helvetica; }
    h1 { padding: 0 0 0 40px; }

    .container {
      background: lightgrey;
      width: 80%;
      margin: 50px auto 0;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-template-rows: repeat(2, 100px);
      grid-auto-rows: 80px; 
    }

    .item1 { background: orangered; }
    .item2 { background: yellowgreen; }
    .item3 { background: mediumpurple; }
    .item4 { background: hotpink; }
    .item5 { background: royalblue; }
    .item6 { background: goldenrod; }
    .item7 { background: orchid; }
    .item8 { background: #7DCEA0; }
    
    .items { 
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Grid Auto-fill and Auto-fit</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
  </div>
</body>
</html>
```

---

## **Explanation of Key Properties in the Example**

- `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`
  - Automatically adjusts the number of columns based on available space.
  - Each column is at least `150px` wide but can expand to fill available space.

- `grid-template-rows: repeat(2, 100px);`
  - Creates two rows of `100px` height.

- `grid-auto-rows: 80px;`
  - Any additional row will have a height of `80px`.

---

## **Difference Between Auto-Fill and Auto-Fit**

| Feature        | Auto-Fill                          | Auto-Fit                         |
|----------------|-----------------------------------|-----------------------------------|
| Empty Columns  | Keeps empty tracks                | Collapses empty tracks            |
| Grid Behavior  | Fills available space with gaps   | Fills and adjusts to fit content  |
| Use Case       | Maintaining consistent layout     | Flexible, adaptive layout         |

---






# CSS Grid Fit-Content

The `fit-content` function in CSS Grid is used to size an element based on the size of its content. It takes a single argument, which represents the maximum size that the element should be allowed to occupy.

---

## **How Fit-Content Works**

- The `fit-content()` function allows an element to grow only as much as needed to fit its content, but it will not exceed the specified maximum size.
- If the content is smaller than the given size, it will take up only the required space.
- If the content is larger than the specified size, it will take the maximum defined width.

### **Syntax:**
```css
grid-template-columns: fit-content(200px) fit-content(300px) 1fr;
```

---

## **Using Fit-Content with Minmax()**

In CSS Grid, you can combine `fit-content()` with the `minmax()` function to create a grid track that adjusts based on content.

**Example Syntax:**
```css
grid-template-columns: minmax(150px, fit-content(300px));
```
- The first argument `150px` ensures a minimum size.
- The second argument `fit-content(300px)` allows the content to grow but limits it to `300px`.

---

## **Example Code**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid Fit-Content</title>
  <style>
    body { font-family: arial, helvetica; }
    h1 { padding: 0 0 0 40px; }

    .container {
      background: lightgrey;
      width: 650px;
      margin: 50px auto 0;

      display: grid;
      grid-template-columns: fit-content(200px) fit-content(300px) 1fr;
      grid-template-rows: repeat(2, 100px, min-content);

      grid-auto-rows: 80px;
    }

    .item1 { background: orangered; }
    .item2 { background: yellowgreen; }
    .item3 { background: mediumpurple; }
    .item4 { background: hotpink; }
    .item5 { background: royalblue; }
    .item6 { background: goldenrod; }

    .items { 
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Grid Fit-Content</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
    <div class="items item5">Five</div>
    <div class="items item6">Six</div>
  </div>
</body>
</html>
```

---

## **Explanation of Key Properties in the Example**

- `grid-template-columns: fit-content(200px) fit-content(300px) 1fr;`
  - The first column fits content up to `200px`.
  - The second column fits content up to `300px`.
  - The third column takes up remaining free space.

- `grid-template-rows: repeat(2, 100px, min-content);`
  - Creates two rows, each with a height of `100px` and adjusts to fit content if needed.

- `grid-auto-rows: 80px;`
  - Any additional row will have a height of `80px`.

---

## **Advantages of Fit-Content**

1. **Flexible Layout:** Allows elements to take only the necessary space.
2. **Responsive Design:** Helps in designing adaptive layouts without breaking content.
3. **Content-Aware Sizing:** Ensures content is not cut off or overflowing unnecessarily.

---

## **Comparison Between Fit-Content and Other Sizing Methods**

| Sizing Method   | Description                                  | Use Case Example                      |
|----------------|----------------------------------------------|---------------------------------------|
| `auto`          | Adjusts to fit content, without limit       | Text blocks, flexible UI elements    |
| `fit-content()` | Grows based on content, within max limit    | Responsive grids, forms              |
| `minmax()`      | Sets min and max size for grid tracks       | Complex grid layouts                  |

---

























# CSS Grid Order Property

The `order` property is used to specify the order of a flexible item inside the flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: lightgrey;
      width:650px;
      margin: 50px auto 0;

      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
      grid-template-rows: repeat(2,150px);

      grid-auto-rows: 80px;
    }

    .item1{ background: orangered;order:2; }
    .item2{ background: yellowgreen;order:4; }
    .item3{ background: MEDIUMPURPLE;order:1; }
    .item4{ background: hotpink;order:5; }
    .item5{ background: royalblue; order:3;}
    .item6{ background: goldenrod;order:6;}

    .items{ color: #fff;font-size: 20px;font-weight: bold;padding: 10px;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Grid Order</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
    <div class="items item5">Five</div>
    <div class="items item6">Six</div>
  </div>
</body>
</html>
```

## Additional Data
- The `order` property in CSS is part of the CSS Flexbox and Grid layout systems. It defines the order in which items appear in the container. By default, all items have an order value of `0`. The items are visually rearranged according to their `order` values. The lower the value, the earlier the item appears.
- Official documentation for CSS Grid's `order` property:  
  [MDN Web Docs: order](https://developer.mozilla.org/en-US/docs/Web/CSS/order)













# CSS Grid - Nested Grids

A nested grid is where a grid item becomes a grid itself.  
Grid items can become grids themselves with CSS grid layout. You can then place grid items inside the grid item, therefore creating a nested grid. To create a nested grid, all you have to do is apply `display: grid` (or `display: inline-grid`) to the grid item, and it becomes a grid. You can also apply `display: subgrid` to create a subgrid.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: wheat;
      width:650px;
      margin: 50px auto 0;

      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: repeat(2,150px);
      grid-gap:10px;

    }

    .item1{ background: orangered; }
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE;
      display: grid;

      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
     }

     .item3 > div{
       background: #fff;
       color:red;
       padding: 10px;
     }

    .item4{ background: hotpink; }
    .item5{ background: royalblue;}
    .item6{ background: goldenrod;}

    .items{ color: #fff;font-size: 20px;font-weight: bold;padding: 10px;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Grid - Nested Grids</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">
      <div class="subitems1">A</div>
      <div class="subitems2">B</div>
      <div class="subitems3">C</div>
    </div>
    <div class="items item4">Four</div>

  </div>
</body>
</html>
```

## Additional Data
- To create a nested grid, simply apply `display: grid` to the desired grid item, which will turn it into a grid itself.
- You can also use `display: inline-grid` to create a nested grid that behaves like an inline element.  
- The `display: subgrid` property allows a grid item to inherit the grid lines of its parent, making it a "subgrid".
  
For more details, refer to the official documentation:  
[MDN Web Docs: Nested Grids](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)
























# CSS Grid - Overlapping Grid Items

In CSS Grid Layout, you can overlap grid items by using the `z-index` property.

The `z-index` property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Grid</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: lightgrey;
      width: 300px;
      margin: 50px auto 0;

      display: grid;
      grid-template-columns: repeat(2,150px);
      grid-template-rows: repeat(2,150px);
    }
    .items{
      max-width: 150px;
    }
    .item1{ background: orangered;
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
      align-self: start;
      z-index: 3
    }
    .item2{ background: yellowgreen;
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
      align-self: center;
      justify-self: center;
      z-index: 1;
    }
    .item3{ background: MEDIUMPURPLE;
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
      align-self: end;
      justify-self: end;
      z-index: 2;
    }

    .items{ color: #fff;font-size: 20px;font-weight: bold;text-align: center;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : Overlapping Grid Items</h1>

  <div class="container">
    <div class="items item1">One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, porro.</div>
    <div class="items item2">Two Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, doloribus.</div>
    <div class="items item3">Three Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, minus.</div>
  </div>
</body>
</html>
```

## Additional Data
- The `z-index` property in CSS controls the stacking order of elements. A higher value of `z-index` places an element in front of one with a lower value.
- The `z-index` only works on positioned elements (those with a position value of `relative`, `absolute`, `fixed`, or `sticky`).
- In this example, the items are stacked based on their `z-index` values, which determines which items appear in front of others.

For more details, refer to the official documentation:  
[MDN Web Docs: z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)