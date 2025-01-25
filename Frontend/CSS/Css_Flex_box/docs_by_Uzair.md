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