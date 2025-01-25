# CSS Flexbox Introduction

The `flexbox` or flexible box model in CSS is a one-dimensional layout model that provides flexible and efficient layouts. It distributes space among items in a container to control their alignment structure. Flexbox simplifies the process of arranging items, making it responsive and mobile-friendly.

### Features of Flexbox:
- Provides a lot of flexibility.
- Allows easy arrangement and alignment of items.
- Controls proper spacing between items.
- Facilitates ordering and sequencing of items.
- Bootstrap 4 is built on top of the flex layout.

Flexbox specifies how items are placed inside a container, aligning them along a flex line. By default, there is only one flex line per container. Everything outside a flex container and inside a flex item follows the usual flow.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px;
      padding: 10px;
      border: 3px solid #000;
      display: flex;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding:10px;
    }
    .item1{ background: orangered;}
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE;}
    .item4{ background: hotpink;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
  </div>
</body>
</html>
```
This example demonstrates how to use flexbox to align and arrange items inside a container.
```




















```
# CSS Flexbox Flex-Direction

The `flex-direction` property specifies the direction in which the flexible items will be arranged within the flex container.

### Syntax
```css
flex-direction: row | row-reverse | column | column-reverse | initial | inherit;
```

### Property Values

- **row**: Default value. The flexible items are displayed horizontally, in a row.
- **row-reverse**: Similar to `row`, but the items are displayed in reverse order.
- **column**: The flexible items are displayed vertically, in a column.
- **column-reverse**: Similar to `column`, but the items are displayed in reverse order.
- **initial**: Sets the property to its default value.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      width: 600px;
      margin: 50px auto 0;
      padding: 10px;
      border: 3px solid #000;
      display: flex;
      /*flex-direction: row;*/
      /*flex-direction: row-reverse;*/
      flex-direction: column;
      /*flex-direction: column-reverse;*/
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding:10px;
    }
    .item1{ background: orangered;}
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE;}
    .item4{ background: hotpink;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
  </div>
</body>
</html>
```
In this example, the items are displayed in a column due to `flex-direction: column;`. You can switch between the other values (`row`, `row-reverse`, `column-reverse`) to observe different layouts.
```













```
# CSS Flex-Wrap & Flex-Flow

## flex-flow
The `flex-flow` property is a shorthand for the `flex-direction` and `flex-wrap` properties in the flexible box layout module. It defines the direction of the flexible items and how they should wrap within the container.

### Syntax:
```css
flex-flow: flex-direction flex-wrap;
```

### flex-direction:
The `flex-direction` property establishes the main axis for the flexible items. This axis determines whether the items are arranged horizontally or vertically.

#### Syntax:
```css
flex-direction: row | row-reverse | column | column-reverse;
```

#### Property Values:
- **row**: Default value. Items are displayed horizontally, in a row.
- **row-reverse**: Items are displayed in reverse order of `row`.
- **column**: Items are displayed vertically, in a column.
- **column-reverse**: Items are displayed in reverse order of `column`.
- **initial**: Sets the property to its default value.
- **inherit**: Inherits the property from its parent element.

### flex-wrap:
The `flex-wrap` property specifies whether the flex items should be forced into a single line or wrapped onto multiple lines. It controls the direction in which the lines are stacked.

#### Syntax:
```css
flex-wrap: nowrap | wrap | wrap-reverse | initial;
```

#### Property Values:
- **nowrap**: Default value. Items will not wrap.
- **wrap**: Items will wrap if necessary.
- **wrap-reverse**: Items will wrap in reverse order if necessary.
- **initial**: Sets the property to its default value.
- **inherit**: Inherits the property from its parent element.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px auto 0;
      padding: 10px;
      border: 3px solid #000;
      height: 300px;
      display: flex;
      /*flex-direction: column;*/
      /*flex-wrap: wrap;*/
      /*flex-wrap: wrap-reverse;*/
      flex-flow: column wrap;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding: 10px;
      margin: 5px;
    }
    .item1{ background: orangered;}
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE;}
    .item4{ background: hotpink;}
    .item5{ background: royalblue;}
    .item6{ background: ORCHID;}
    .item7{ background: goldenrod;}
    .item8{ background: #7DCEA0;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

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

In this example, the `flex-flow: column wrap;` property is applied, which arranges the items in a column and allows them to wrap onto multiple lines if necessary.
```


















```
# CSS Flexbox Justify-Content

The `justify-content` property in CSS defines how the browser distributes space between and around content items along the main axis of a flex container. It helps distribute the leftover space when either all the flex items on a line are inflexible or are flexible but have reached their maximum size.

### Property Values:
- **flex-start**: Items align to the left side of the container.
- **center**: Items align at the center of the container.
- **flex-end**: Items align to the right side of the container.
- **space-between**: Items display with equal spacing between them.
- **space-around**: Items display with equal spacing around them.
- **space-evenly**: Items display with equal spacing around them and between them.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px auto 0;
      padding: 0px;
      border: 3px solid #000;
      display: flex;
      /*justify-content: center;*/
      /*justify-content: space-between;*/
      /*justify-content: space-around;*/
      justify-content: space-evenly;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding:10px;
      margin: 0px;
    }
    .item1{ background: orangered;}
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE;}
    .item4{ background: hotpink;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
  </div>
</body>
</html>
```

In this example, the `justify-content: space-evenly;` property distributes the items evenly across the flex container, with equal spacing around and between them.
```

















```
# CSS Flexbox Align-Items

The `align-items` property in CSS sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the cross axis (perpendicular to the main axis). 

### Property Values:
- **stretch**: The default value. Items are stretched to fit the container.
- **flex-start**: Items align to the top of the container.
- **flex-end**: Items align to the bottom of the container.
- **center**: Items align at the vertical center of the container.
- **baseline**: Items align at the baseline of the container.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px auto 0;
      padding: 10px;
      border: 3px solid #000;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /*align-items: stretch;*/
      /*align-items: flex-start;*/
      align-items: flex-end;
      /*align-items: center;*/
      /*align-items: baseline;*/
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding:10px;
      margin: 5px;
    }
    .item1{ background: orangered;}
    .item2{ background: yellowgreen; height: 100px; font-size: 35px; }
    .item3{ background: MEDIUMPURPLE;}
    .item4{ background: hotpink; font-size: 11px; }
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
  </div>
</body>
</html>
```

In this example, the `align-items: flex-end;` property aligns all items to the bottom of the flex container.
```



























```
# CSS Flexbox Align-Content

The `align-content` property in CSS sets the distribution of space between and around content items along a flexbox’s cross-axis (perpendicular to the main axis). This property works when there is more than one line of items in the flex container (i.e., when `flex-wrap` is used).

### Property Values:
- **flex-start**: Lines are packed at the top of the container.
- **flex-end**: Lines are packed at the bottom of the container.
- **center**: Lines are packed at the vertical center of the container.
- **space-between**: Lines display with equal spacing between them.
- **space-around**: Lines display with equal spacing around them.
- **stretch**: Lines are stretched to fit the container.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px auto 0;
      padding: 10px;
      border: 3px solid #000;
      width: 400px;
      height: 400px;
      display: flex;
      flex-wrap: wrap;
      /*align-content: stretch;*/
      /*align-content: flex-start;*/
      /*align-content: flex-end;*/
      /*align-content: center;*/
      /*align-content: space-between;*/
      /*align-content: space-around;*/
      align-content: space-evenly;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding:10px;
      margin: 5px;
    }
    .item1{ background: orangered;}
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE;}
    .item4{ background: hotpink;}
    .item5{ background: royalblue;}
    .item6{ background: ORCHID;}
    .item7{ background: goldenrod;}
    .item8{ background: #7DCEA0;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
    <div class="items item5">Five</div>
    <!--<div class="items item6">Six</div>
    <div class="items item7">Seven</div>
    <div class="items item8">Eight</div>-->
  </div>
</body>
</html>
```

In this example, the `align-content: space-evenly;` property distributes space evenly between the lines and around them in the flex container.
```














```
# CSS Flexbox Align-Self

The `align-self` property in CSS allows an individual item to override the `align-items` property set on the container, aligning the item itself differently within its container along the cross-axis. This property is useful when you need to align one or more specific items differently from others in the flex container.

### Property Values:
- **auto**: The default value. The element inherits its parent container’s `align-items` property.
- **stretch**: The element is stretched to fit the container.
- **flex-start**: The element is aligned to the top of the container.
- **flex-end**: The element is aligned to the bottom of the container.
- **center**: The element is aligned at the vertical center of the container.
- **baseline**: The element is aligned at the baseline of the container.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px auto 0;
      padding: 10px;
      border: 3px solid #000;
      height: 400px;
      display: flex;
      align-items: center;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding:10px;
      margin: 5px;
    }
    .item1{ background: orangered;
        /*align-self: flex-start;*/
        /*align-self: flex-end;*/
        /*align-self: center;*/
        align-self: stretch;
        /*align-self: auto;*/
    }
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE;}
    .item4{ background: hotpink;
        align-self: flex-end;
    }
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
    <!--<div class="items item5">Five</div>
    <div class="items item6">Six</div>
    <div class="items item7">Seven</div>
    <div class="items item8">Eight</div>-->
  </div>
</body>
</html>
```

In this example, `align-self: stretch;` is applied to the first item, which causes it to stretch and fill the available height of the container. The fourth item has `align-self: flex-end;`, which aligns it to the bottom of the container.
```










```
# CSS Flexbox Order

The `order` property in CSS Flexbox specifies the order of items in a flex container. This property allows you to visually reorder the items without changing their HTML structure. The default value of `order` is `0`. Items with a lower order value will appear before items with a higher order value.

### Property Values:
- **A positive integer**: The item will be displayed after items with lower order values.
- **A negative integer**: The item will be displayed before items with lower order values.
- **0**: The item will be displayed in its default order.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px auto 0;
      padding: 10px;
      border: 3px solid #000;
      height: 150px;
      
      display: flex;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding:10px;
      margin: 5px;
    }
    .item1{ background: orangered; order: 1;}
    .item2{ background: yellowgreen; order: -2;}
    .item3{ background: MEDIUMPURPLE; order: 2;}
    .item4{ background: hotpink; order: -1;}
    .item5{ background: royalblue;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
    <div class="items item5">Five</div>
  </div>
</body>
</html>
```

In this example, `order: 1` is applied to the first item, `order: -2` to the second, `order: 2` to the third, and `order: -1` to the fourth. This causes the items to be displayed in the following order: `Two, Four, One, Five, Three`.
```









```
# CSS Flexbox Flex-Grow

The `flex-grow` property in CSS Flexbox defines how much a flex item should grow relative to the other items in the container. It determines how extra space in the container is distributed among the flex items.

### Property Values:
- **A positive integer**: The item will grow relative to the other items. The higher the number, the more it will grow.
- **0**: The item will not grow, and it will stay at its original size.
- **Negative values**: Invalid.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px auto 0;
      padding: 10px;
      border: 3px solid #000;
      
      display: flex;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding:10px;
      margin: 0px;
      flex-grow: 1;
    }
    .item1{ background: orangered; flex-grow: 3;}
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE; flex-grow: 2;}
    .item4{ background: hotpink;}
    .item5{ background: royalblue;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
    <div class="items item5">Five</div>
  </div>
</body>
</html>
```

In this example:
- The first item (`item1`) has `flex-grow: 3`, so it will take up more space than the others.
- The second item (`item2`) has the default `flex-grow: 1`, so it will grow, but less than `item1`.
- The third item (`item3`) has `flex-grow: 2`, so it grows more than `item2` but less than `item1`.
- The other items (`item4` and `item5`) don't have a specified `flex-grow`, so they grow equally with the default value of `1`.
```

























```
# CSS Flexbox Flex-Basis

The `flex-basis` property in CSS Flexbox defines the initial length of a flex item before any space distribution occurs. It establishes the starting size of the item based on the available space in the container.

### Property Values:
- **auto**: The default value. The size of the item is based on its content.
- **A length value**: Specifies a fixed length for the item (e.g., `100px`, `20%`).

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px;
      padding: 0px;
      border: 3px solid #000;
      
      display: flex;
      flex-wrap: wrap;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding: 0px;
      margin: 0px;
      height: 60px;
      /*flex-basis: 100px;*/
      /*flex-grow: 1;*/
    }
    .item1{ background: orangered; flex-basis: 20%;}
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE;}
    .item4{ background: hotpink;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
  </div>
</body>
</html>
```

In this example:
- The first item (`item1`) has `flex-basis: 20%`, which means it will take up 20% of the container's width.
- The other items (`item2`, `item3`, and `item4`) don't have a specified `flex-basis`, so they will use the default value of `auto`, and their size will depend on their content.















# CSS Flexbox Flex-Shrink

The `flex-shrink` property in CSS Flexbox specifies the shrink factor of a flex item. If the total size of all flex items exceeds the container size, the items will shrink to fit, and this behavior is determined by the `flex-shrink` value.

### Property Values:
- **A positive integer (default: 1)**: The item can shrink relative to others to fit the container.
- **0**: The item will not shrink at all.
- **Negative values**: Not allowed.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px;
      padding: 0px;
      border: 3px solid #000;
      /*width: 600px;*/
      display: flex;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding: 0px;
      margin: 0px;
      height: 60px;
      width: 200px;
    }
    .item1{ background: orangered;
      /*flex-basis: 200px;*/
      /*flex-shrink: 0;*/
      flex: 0 1 200px;
    }
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE;}
    .item4{ background: hotpink; flex-grow: 1;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
  </div>
</body>
</html>
```

In this example:
- The first item (`item1`) has a `flex` shorthand with `0 1 200px`, meaning it will not grow (`0`), can shrink (`1`), and its base width is `200px`.
- The last item (`item4`) is set to grow (`flex-grow: 1`), so it will take up remaining space, while the other items may shrink to fit within the container.

This allows the container to adjust dynamically if its size is limited, with some items shrinking according to the defined properties.















# CSS Flexbox with Margin Auto

Using `auto` margins with Flexbox allows for great flexibility without disrupting the normal flow of the document, unlike floats. You can apply it both horizontally and vertically. This technique gives you more control over the flex items along the main axis and helps override the default alignment set by `justify-content` on individual flex items.

### Example 1: Vertical and Horizontal Centering Using Margin Auto
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox & Margin Auto</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px;
      padding: 0px;
      border: 4px solid #000;
      height: 400px;
      display: flex;
    }

    .item{
      background: orangered;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      padding:10px;
      /*margin: auto;*/
      margin-top: auto;
      margin-left: auto;
    }

  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="item">One</div>
  </div>
</body>
</html>
```

In this example, the item is aligned both vertically and horizontally using `margin-top: auto;` and `margin-left: auto;`.

### Example 2: Aligning Items with Margin Auto on One Item
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px;
      padding: 0px;
      border: 3px solid #000;
      /*width: 600px;*/
      display: flex;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding: 0px;
      height: 100px;
      width: 100px;
    }
    .item1{ background: orangered;}
    .item2{ background: yellowgreen;}
    .item3{ background: MEDIUMPURPLE;}
    .item4{ background: hotpink; margin-left: auto;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : CSS Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">Two</div>
    <div class="items item3">Three</div>
    <div class="items item4">Four</div>
  </div>
</body>
</html>
```

Here, the fourth item (`item4`) is pushed to the far right of the container using `margin-left: auto;`, while the other items remain aligned to the left by default.

Using `auto` margins with Flexbox is a powerful way to align and space elements dynamically within the container, making layout management more intuitive and flexible.










# CSS Flexbox - Nested Flex

You can create two-dimensional layouts by nesting a flex container inside another one. While Flexbox is inherently a one-dimensional layout model, by nesting flex containers, you can achieve complex layouts with both horizontal and vertical arrangements.

### Example: Nested Flexbox for Two-Dimensional Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    .container{
      background: #eee;
      margin: 50px;
      padding: 0px;
      border: 3px solid #000;
      display: flex;
      flex-direction: column;
    }

    .items{
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      padding:0px;
      height: 100px;
    }
    .item1{ background: orangered;}
    .item2{ background: MEDIUMPURPLE;
      display: flex;
    }
    .item2 > .subitem{
      background: wheat;
      color:MEDIUMPURPLE;
      flex-grow: 1;
      margin: 5px;
    }
    .item3{ background: hotpink;}
  </style>
</head>
<body>
  <h1>Yahoo Baba : Nested Flexbox</h1>

  <div class="container">
    <div class="items item1">One</div>
    <div class="items item2">
      <div class="subitem subitem1">A</div>
      <div class="subitem subitem2">B</div>
      <div class="subitem subitem3">C</div>
    </div>
    <div class="items item3">Three</div>
  </div>
</body>
</html>
```

In this example:
- The `.container` is a flex container set to a column layout using `flex-direction: column;`.
- The second item (`.item2`) is itself a flex container that lays out its child `.subitem` elements horizontally.
- The nested `.subitem` elements use `flex-grow: 1;` to distribute space evenly between them.

This allows you to create complex layouts by nesting flex containers, making it easier to manage both horizontal and vertical content alignments within a single layout.









# CSS Flexbox - Align Form Elements

You can align form elements using CSS Flexbox by setting the `align-items` property to `center`. This will center the form elements vertically within the container. To center them horizontally as well, set the `justify-content` property to `center`.

### Example: Align Form Elements with Flexbox

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>CSS Flexbox</title>
  <style>
    body{ font-family: arial,helvetica; }
    h1{ padding: 0 0 0 40px; }

    #wrapper{
      background: #eee;
      list-style: none;
      margin: 50px;
      padding: 20px;
    }
    #wrapper li{
      display: flex;
      justify-content: flex-end;
      padding: 5px 0;
    }
    #wrapper li label{
      flex: 1;
    }

    @media screen and (min-width:300px) and (max-width:499px) {
      #wrapper li{
        flex-direction: column;
      }
      #wrapper li input{
        flex: 3;
      }
    }
    @media screen and (min-width:500px) {
      #wrapper li input{
        flex: 3;
      }
    }
    @media screen and (min-width:768px) {
      #wrapper li input{
        flex: 4;
      }
    }
    @media screen and (min-width:992px) {
      #wrapper li input{
        flex: 6;
      }
    }
    @media screen and (min-width:1200px) {
      #wrapper li input{
        flex: 8;
      }
    }
  </style>
</head>
<body>
  <h1>Yahoo Baba : Align Form with Flexbox</h1>

  <form action="">
    <ul id="wrapper">
      <li>
        <label for="">Name</label>
        <input type="text">
      </li>
      <li>
        <label for="">Class Name</label>
        <input type="text">
      </li>
      <li>
        <label for="">Email Address</label>
        <input type="email">
      </li>
      <li>
        <button type="submit">Save</button>
      </li>
    </ul>
  </form>
</body>
</html>
```

In this example:
- The `#wrapper` container uses Flexbox to align form elements.
- The `justify-content: flex-end;` ensures labels align to the right.
- The form adjusts responsively, with different `flex` values for inputs based on the screen width, ensuring the form looks good on various devices.
- The form is neatly arranged, with labels and inputs aligned and centered.










# Create Website Layout with CSS Flexbox

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Flexbox layout</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/brands.css" integrity="sha384-nT8r1Kzllf71iZl81CdFzObMsaLOhqBU1JD2+XoAALbdtWaXDOlWOZTR4v1ktjPE" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css" integrity="sha384-HbmWTHay9psM8qyzEKPc8odH4DsOuzdejtnr+OFtDmOcIVnhgReQ4GZBH7uwcjf6" crossorigin="anonymous">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<header>
  <nav id="menu">
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About Us</a></li>
      <li><a href="">Contact</a></li>
    </ul>
  </nav>
  <div id="logo">
    <a href="">Yahoo Baba</a>
  </div>
  <nav id="social-links">
    <ul>
      <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
      <li><a href=""><i class="fab fa-twitter"></i></a></li>
      <li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
    </ul>
  </nav>
</header>
<div id="main">
  <aside class="">
    <ul>
      <li><a href="">Some Link</a></li>
      <li><a href="">Some Link</a></li>
      <li><a href="">Some Link</a></li>
      <li><a href="">Some Link</a></li>
      <li><a href="">Some Link</a></li>
    </ul>
    <img src="images/aside-ad.jpg" alt="">
  </aside>
  <article class="">
    <h2>Welcome to our Website</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto omnis quidem facilis perferendis, dolore dolorum ratione sit, quod! Aspernatur eaque, doloremque! Itaque in, ex maxime. Reiciendis temporibus fuga, impedit dolores atque mollitia dignissimos blanditiis, ullam facilis unde. Magnam magni in praesentium quia enim possimus modi omnis, doloribus nisi vel molestias consequatur ut beatae eligendi est voluptates, ducimus sit dignissimos quasi? Non quis voluptatum vel animi numquam ab eos ipsam veritatis, nesciunt magni veniam, error omnis quos, nobis iure maxime, expedita ea rerum accusamus! Recusandae saepe, nostrum enim, provident voluptates maxime, debitis blanditiis quos magnam consequuntur libero eum ad quaerat magni?</p>

    <h2>Our Services</h2>
    <div class="services-container">
      <div class="service-box">
        <div class="service-img">
          <img src="images/webdesign.jpg" alt="">
        </div>
        <div class="service-title">
          <h3>Web Designing</h3>
        </div>
        <div class="service-desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quisquam sint nam excepturi aut harum maxime, dolorum est ipsum, laudantium.</p>
        </div>
        <div class="call-to-action">
          <a href="">Read more</a>
        </div>
      </div>

      <div class="service-box">
        <div class="service-img">
          <img src="images/web-dev.jpg" alt="">
        </div>
        <div class="service-title">
          <h3>Web Development</h3>
        </div>
        <div class="service-desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, hic.</p>
        </div>
        <div class="call-to-action">
          <a href="">Read more</a>
        </div>
      </div>

      <div class="service-box">
        <div class="service-img">
          <img src="images/mobile-dev.jpg" alt="">
        </div>
        <div class="service-title">
          <h3>Mobile App Development</h3>
        </div>
        <div class="service-desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, hic.</p>
        </div>
        <div class="call-to-action">
          <a href="">Read more</a>
        </div>
      </div>
    </div>
  </article>

</div>
<footer>
  Made by YahooBaba
</footer>
</body>
</html>
```

## style.css

```css
*{
  box-sizing: border-box;
}
body{
  font-family: arial;
  display: flex;
  flex-direction: column;
  margin: 0;
}
a{
  text-decoration: none;
}
header{
  background: #566c2b;
  display: flex;
  align-items: center;
  padding: 15px 0;
}
header ul{
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}
header a{
  color: #fff;
}
#logo{
  margin: 0 auto;
  font-size: 30px;
}
#menu li{
  padding: 10px
}
#social-links li{
  padding: 10px
}
#main{
  display: flex;
}
aside{
  padding: 15px;
  flex: 0 0 20vw;
  background: beige;
}
aside ul{
  list-style: none;
  padding: 0;
}
aside ul a {
  color:  #566c2b;
  padding: 10px;
  display: block;
  border-bottom: 1px solid grey
}
aside img{
  width: 100%;
}
article{
    padding: 15px;
}
.services-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.service-box{
  border: 1px solid #eee;
  flex-basis: 32%;
  max-width: 370px;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
.service-box img{
  width: 100%;
}
.service-box h3{
  margin: 5px 0 10px;
}
.service-box p{
  margin: 0 0 10px;
}
.call-to-action{
  align-self: flex-start;
  margin-top: auto;
}
.call-to-action a{
  background: grey;
  border: 2px solid transparent;
  color: #fff;
  padding: 8px 13px;
  display: block;
}
.call-to-action a:hover{
  color: grey;
  background: transparent;
  border: 2px solid grey;
}
footer{
  background: #566c2b;
  color: #fff;
  text-align: center;
  padding: 15px 0;
}

@media screen and (max-width:850px){
  .service-box{
    flex-basis: 48%;
  }
  aside{
    flex: 0 0 30vw;
  }
}
@media screen and (max-width:600px){
  header{
    flex-direction: column;
  }
  #logo{
    order: -1;
  }
  #main{
    flex-direction: column;
  }
  article{
    order:-1;
  }
  .services-container{
    flex-direction: column;
    align-items: center;
  }
  h2{
    text-align: center;
  }
}
```