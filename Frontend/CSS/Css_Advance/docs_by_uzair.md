
# CSS Variables - var()

The `var()` function is used to insert the value of a CSS variable.  
CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries.

A good way to use CSS variables is when it comes to the colors of your design. Instead of copy and pasting the same colors over and over again, you can place them in variables.

## Syntax

```css
var( --custom-name, value )
```

## Parameters

The `var()` function only allows two arguments that are defined as follows:

- `--custom-name`: This parameter accepts the name of the custom property. It must begin with the two dashes (`--`). It is the required parameter.
  
- `value`: It is an optional parameter and accepts the fallback value. It is used as the substitution when the custom property is invalid.

Fallback values are not used to fix the compatibility of the browser. The fallback value will not be useful when any browser does not support the custom properties. The fallback value works as the substitution for the browser that supports the CSS custom properties for choosing a different value if the variable has an invalid value or if the variable is not defined.

## Example

```html
<html>
 <head>
  <title>Basic Layout</title>  
  <style> 
   :root{
    --main-color: brown;
    --head-font: impact;
    --p-font: verdana;
   }   
   body{
    font-family: var(--p-font);
    background: slategrey;
    margin: 0;
    padding: 0;
   }
   #wrapper{
    border: 0px solid black;
    width: 1000px;
    background: white;
    margin: 0 auto;
   }
   #header{
    background: var(--main-color);
    color: white;
    height: 100px;
    font-family: var(--head-font);
   }
   #header h1{
    padding: 30px 0 0 20px;
   }
   #menu{
    background: lightsalmon;
   }
   #menu ul{
    padding: 0;
    margin: 0;
   }
   #menu li{
    display: inline-block;
   }
   #menu li a{
    color: black;
    display: block;
    padding: 10px 13px;
    text-decoration: none;
   }
   #menu li a:hover{
    background: var(--main-color);
    color: white;
   }
   #content{
    width: 800px;
    min-height: 500px;
    padding: 15px;
    float: left;
    box-sizing: border-box;
    --m-color: red;
    color: var(--m-color);
   }
   #content h2{
    color: var(--main-color);
    font-family: var(--head-font);
   }
   #content a{
    color: var(--m-color);
   }
   #sidebar{
    background: lightblue;
    width: 200px;
    min-height: 500px;
    float: right;
   }
   
   #sidebar a{
    color: black;
    text-decoration: none;
   }
   #footer{
    color: white;
    background: var(--main-color);
    clear: both;
    text-align: right;
    padding: 5px 10px;
   }
   @media screen and (max-width: 1020px){
    #wrapper{
     width: 800px;
    }
    #content{
     width: 80%;
    }
    #sidebar{
     width: 18%;
    }
   }
   @media screen and (max-width: 810px){
    #wrapper{
     width: 500px;
    }
    #content{
     width: 65%;
    }
    #sidebar{
     width: 34%;
    }
   }
   @media screen and (max-width: 510px){
    #wrapper{
     width: auto;
    }
    #content{
     width: 100%;
     float: none;
    }
    #sidebar{
     width: 100%;
     float: none;
    }
    #header h1{
     padding: 30px 0 0 0;
     text-align: center;
    }
   }
  </style>
 </head>
 
 <body>
  <div id="wrapper">
   <div id="header">
    <h1>Yahoo Baba</h1>
   </div>
   <div id="menu">
    <ul>
     <li><a href="">Home</a></li>
     <li><a href="">About Us</a></li>
     <li><a href="">Gallery</a></li>
     <li><a href="">Contact us</a></li>
    </ul>
   </div>
   <div id="content">
    <h2>Design Basic Layout</h2>
    <a href="">Hello World</a>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc cursus vitae turpis.Curabitur aliquam tempus vel, cursus vitae turpis.Curabitur aliquam commodo dolor vulputate porttitor.Vivamus ut sodales lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc elit dolor, ornare in tempus vel, cursus vitae turpis.Curabitur aliquam commodo dolor vulputate porttitor.Vivamus ut sodales lacus, in semper libero. Phasellus malesuada tincidunt elit vitae feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc elit dolor, ornare in tempus vel, cursus vitae turpis.Curabitur aliquam commodo dolor vulputate porttitor.Vivamus ut sodales lacus, in semper libero. Phasellus malesuada tincidunt elit vitae feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc elit dolor, ornare in tempus vel, cursus vitae turpis.Curabitur aliquam commodo dolor vulputate porttitor.Vivamus ut sodales lacus, in semper libero. Phasellus malesuada tincidunt elit vitae feugiat.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc cursus vitae turpis.Curabitur aliquam ornare in tempus vel, cursus vitae turpis.Curabitur aliquam commodo dolor vulputate porttitor.Vivamus ut sodales lacus, in semper libero. Phasellus malesuada tincidunt elit vitae feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc elit dolor, ornare in tempus vel, cursus vitae turpis.Curabitur aliquam commodo dolor vulputate porttitor.Vivamus ut sodales lacus, in semper libero. Phasellus malesuada tincidunt elit vitae feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc elit dolor, ornare in tempus vel, cursus vitae turpis.Curabitur aliquam commodo dolor vulputate porttitor.Vivamus ut sodales lacus, in semper libero. Phasellus malesuada tincidunt elit vitae feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc elit dolor, ornare in tempus vel, cursus vitae turpis.Curabitur aliquam commodo dolor vulputate porttitor.Vivamus ut sodales lacus, in semper libero. Phasellus malesuada tincidunt elit vitae feugiat.</p>
   </div>
   <div id="sidebar">
    <ul>
     <li><a href="">Home</a></li>
     <li><a href="">About Us</a></li>
     <li><a href="">Gallery</a></li>
     <li><a href="">Contact us</a></li>
    </ul>
   </div>
   <div id="footer">
    yahoobaba@copyright 2021.
   </div>
  </div>  
 </body> 
</html>
```

# CSS Calc() Function

The `calc()` function is an inbuilt CSS function that allows us to perform calculations. It can be used to calculate lengths, percentages, time, numbers, integer frequency, or angles. This function supports four simple arithmetic operators: addition (`+`), multiplication (`*`), subtraction (`-`), and division (`/`).

The `calc()` function is powerful because it lets us mix different units, such as percentage and pixels.

### Syntax

```css
calc( Expression );
```

### Values

The `calc()` function accepts a single parameter, `expression`, and uses the result of the mathematical operation as the value. The expression can contain any simple arithmetic operation using the four operators (`+`, `-`, `*`, `/`). The expression is mandatory.

### Example

```html
<html>
  <head>
    <title>CSS Units</title>  
    <style>     
      body {
        font-family: arial, helvetica;
        margin: 0;
      }
      
      #header {
        border: 0px solid black;
        background: papayawhip;
        width: 100%;
        height: 100px;
      }

      #content {
        border: 0px solid black;
        background: pink;
        width: 100%;
        height: calc(100vh - 200px);     
      }

      #footer {
        border: 0px solid black;
        background: green;
        width: 100%;
        height: 100px;
      }
    </style>
  </head>
 
  <body>
    <div id="header">header</div>
    <div id="content">content</div>
    <div id="footer">footer</div>
  </body> 
</html>
```

### Additional Data

- The `calc()` function can also be used to adjust the layout dynamically, which is especially helpful for responsive design.
- When combining units, ensure that the calculation makes sense. For example, mixing `px` and `%` works, but combining `em` with `px` might require a little more attention to detail for correct scaling.
- The `calc()` function is supported by modern browsers, but it's always a good practice to check compatibility when using more complex expressions.

# CSS Clip-Path

The `clip-path` CSS property is used to create a clipping region and specify which area of an element should be visible. The area inside the clipping region will be shown, while the outside area is hidden. This property allows clipping of not just content but also borders, text shadows, and other elements outside the region.

The `clip-path` property allows us to define a specific area of an element to display instead of showing the entire area. It supports basic shapes such as `circle`, `ellipse`, `polygon`, or `inset`.

### Syntax

```css
clip-path: <clip-source> | [ <basic-shape> || <geometry-box> || none ];
```

### Property Values

| Value           | Description |
|-----------------|-------------|
| `clip-source`   | Defines a URL to an SVG `<clipPath>` element. |
| `basic-shape`   | Clips an element to a basic shape: `circle`, `ellipse`, `polygon`, or `inset`. |
| `margin-box`    | Uses the margin box as the reference box. |
| `border-box`    | Uses the border box as the reference box. |
| `padding-box`   | Uses the padding box as the reference box. |
| `content-box`   | Uses the content box as the reference box. |
| `fill-box`      | Uses the object bounding box as the reference box. |
| `stroke-box`    | Uses the stroke bounding box as the reference box. |
| `view-box`      | Uses the SVG viewport as the reference box. |
| `none`          | This is the default value. No clipping is applied. |

### Example

```html
<html>
  <head>
    <title>CSS Clip-Path</title>  
    <style>     
      body {
        font-family: arial, helvetica;
      }
      
      img {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      }

      #box {
        background-color: brown;
        width: 800px;
        height: 700px;
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      }
    </style>
  </head>
  
  <body>
    <h1>Yahoo Baba : CSS Clip-path</h1>  
    
    <img src="IMAGE_PATH" alt="">
    <div id="box"></div>
  </body> 
</html>
```

### Additional Data

- The `clip-path` property is often used to create creative shapes and visual effects on elements, making it a powerful tool in modern web design.
- It can be used with various shapes, including `circle()`, `ellipse()`, and `polygon()`, allowing for complex and visually appealing designs.
- The use of `clip-path` with images or background elements can help in creating unique designs such as custom-shaped images and borders.
- While `clip-path` is widely supported in modern browsers, always check for compatibility when using it in production.

# CSS Shape-Outside

The `shape-outside` CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.

### Syntax

```css
shape-outside: <basic-shape> | <shape-box> | <image> | none | initial | inherit
```

### Property Values

- **basic-shape**: It is used to define the shape that should be used to calculate the float area. The shape can be created using one of the supported functions:
  - `circle()`: It is used to make circular shapes.
  - `ellipse()`: It is used to make elliptical shapes.
  - `inset()`: It is used to make rectangular shapes.
  - `polygon()`: It is used to make shapes that have more than 3 vertices.
  - `path()`: It is used to create shapes which have lines, arcs or curves.

- **shape-box**: It is used to define which one of the box model is used for positioning inside the shape. These values are used after the shape value is defined. There are 4 values that can be used:
  - `margin-box`: It is used to define the shape that is enclosed by the outside margin edge. The corner radii is determined based on the border-radius and margin values. This is the default value that would be used.
  - `border-box`: It is used to define the shape that is enclosed by the outside margin edge. The default border radius shaping rules are followed.
  - `padding-box`: It is used to define the shape that is enclosed by the outside padding edge. The default border radius shaping rules are followed.
  - `content-box`: It is used to define the shape that is enclosed by the outside content edge.

- **image**: It is used to specify the image of which the alpha value would be extracted to compute the float area. The `url()` function can be used to define the image. A gradient can also be used in place of the image.

- **none**: It is used to set the property to have no float area. The inline content wraps around the margin-box as default.

- **initial**: It is used to set the property to its default value.

- **inherit**: It is used to set the property to inherit from its parent.

### HTML Example

```html
<html>
<head>
 <title>CSS Shape-outside</title>
 <style>
  body {
   font-family: arial, helvetica;
  }

  img {
   float: left;
   clip-path: inset(34% 30% 15% 10%);
   shape-outside: inset(34% 30% 15% 10%);
   shape-margin: 20px;
  }
 </style>
</head>

<body>
 <h1>Yahoo Baba : CSS Shape-outside</h1>

 <img src="IMAGE_PATH" alt="">

 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, deserunt, quidem, perferendis soluta quod mollitia labore sed explicabo veritatis nemo doloremque porro. Totam, delectus, similique, tempora provident eveniet magni culpa vel dolorum quidem doloribus ipsam repellat quae error voluptatibus animi excepturi ducimus eligendi nihil at neque odit eum veritatis fuga? Nihil, labore velit corporis ex consectetur alias unde voluptate deserunt necessitatibus possimus? Consectetur, consequuntur deleniti dicta? Vel, quo, officiis, voluptates, repellendus facere quis ullam fugiat beatae saepe quia inventore amet iusto soluta obcaecati nobis aliquam suscipit id quibusdam in nam. Voluptatibus, laudantium, nisi, iusto illo sunt incidunt eius eos debitis blanditiis fuga numquam animi maxime sapiente ut eligendi quaerat neque et totam illum quod dicta amet necessitatibus. Repellendus, numquam, illum ipsum necessitatibus excepturi fuga temporibus corrupti libero commodi consequatur quasi dolores rerum dolorum laborum nesciunt omnis porro ex officiis facere eaque rem quo veritatis accusantium. Praesentium, iste porro neque alias consectetur accusantium atque molestiae ipsa autem fugit asperiores non harum ducimus nulla facilis repellendus numquam quis ratione fugiat nemo quae vel debitis fuga corrupti dolorum maxime id quod itaque recusandae nesciunt veniam nihil labore eos. Natus, unde, dolorem, rem, reprehenderit suscipit quaerat tenetur id reiciendis similique quia necessitatibus officiis! Similique, necessitatibus, eum, minima corrupti ipsam ducimus aperiam rerum tenetur repudiandae nesciunt pariatur ex et distinctio blanditiis quibusdam reprehenderit inventore quaerat officia optio est omnis sapiente error eius fugit dicta tempore placeat quam. Minus, itaque, dolorem alias eius nostrum dicta voluptatem quod sunt aliquam repellat quo sed optio assumenda voluptate cumque officia iusto illum. Dolores, quia voluptates ipsa iste optio consequatur pariatur quis amet modi qui neque iure consequuntur laboriosam hic deleniti. Quam, voluptatibus necessitatibus explicabo ducimus ex ullam corporis nesciunt ipsam animi facere. Quisquam, perspiciatis, at, quae, ipsa neque nulla commodi voluptatum facilis illo harum rem quas maiores placeat cum atque aspernatur deserunt voluptas iste culpa non accusantium repellendus fuga minus. In, cumque, omnis, eos, architecto ratione vel voluptatibus dicta eum incidunt quisquam facilis modi tenetur distinctio odio aspernatur autem praesentium sit vero iste quos error placeat nihil consequuntur voluptate voluptas qui nemo dolorum illo impedit? Eveniet, incidunt, dignissimos, doloremque numquam reprehenderit corrupti debitis sequi consequuntur accusamus quod quae facilis facere dolorem in laudantium maiores ipsum voluptatem molestias voluptate illo expedita possimus quidem sint harum! Ullam deserunt ducimus facere nostrum veritatis illo at esse possimus explicabo omnis. Esse, dolores nam architecto unde sed vel voluptatibus? Id, placeat, sequi, corporis magni maiores necessitatibus voluptatibus tenetur labore sed quidem odit reprehenderit recusandae officia sint adipisci! Fugiat, aliquam reprehenderit officia alias natus reiciendis quas dolor maxime nulla nam amet ipsam architecto voluptates hic id! Fuga, numquam, dolore, unde doloribus odio tenetur labore tempore ducimus magnam sequi deleniti recusandae eaque pariatur dolor quis ea facere! Sunt, minus, blanditiis velit accusantium tempore maiores incidunt labore adipisci repudiandae laborum facere necessitatibus voluptatem? Nihil, enim, unde exercitationem dolores facere facilis eligendi pariatur et hic a nesciunt voluptas doloribus esse illum similique cum repellendus commodi mollitia earum molestias fugit aperiam deserunt illo quas expedita culpa maiores est voluptates odit ut officiis tempora quod architecto. Unde, suscipit, animi, necessitatibus consectetur voluptatum molestias doloremque dolores vitae nesciunt alias aliquam nostrum commodi cumque tempora enim sunt laudantium ipsum velit sint illum accusantium quaerat corrupti aspernatur assumenda ducimus architecto nam temporibus expedita officiis laboriosam culpa veniam et doloribus dolorem odit corporis voluptates. Quos, veniam, deserunt, ducimus, repud...
</body>
</html>
```

This Markdown includes all necessary details as per your request.
