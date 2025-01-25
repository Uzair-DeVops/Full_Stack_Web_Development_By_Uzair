
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

# CSS Filter

CSS filters are used to set visual effects to text, images, and other aspects of a webpage. The CSS `filter` property allows us to access effects such as color or blur, shifting on the rendering of an element before the element gets displayed.

## Syntax

The syntax of the CSS `filter` property is given below:

```css
filter: none | invert() | drop-shadow() | brightness() 
| saturate() | blur() | hue-rotate() | contrast() | opacity() 
| grayscale() | sepia() | url();
```

## Filter Properties

### `brightness()`
As its name implies, it is used to set the brightness of an element. If the brightness is 0%, then it represents completely black, whereas 100% brightness represents the original one. It can also accept values above 100% that provide brighter results.

### `blur()`
It is used to apply the blur effect to the element. If the blur value is not specified, then the value `0` is used as a default. The parameter in the `blur()` property does not accept percentage values. A larger value creates more blur.

### `invert()`
It is used to invert the samples in the input image. Its 100% value represents a completely inverted image, and 0% leaves the input unchanged. Negative values are not allowed.

### `saturate()`
It sets the saturation of an element. The 0% saturation represents a completely unsaturated element, whereas the 100% saturation represents the original one. Values greater than 100% provide super-saturated results. Negative values are not allowed.

### `drop-shadow()`
It applies the drop-shadow effect to the input image. The values it accepts are:

- h-shadow  
- v-shadow  
- blur  
- spread  
- color  

### `contrast()`
It adjusts the contrast of the input. A 0% value will create a completely black image, whereas a 100% value leaves the input unchanged, representing the original. Values greater than 100% provide results with higher contrast.

### `opacity()`
It is used to apply transparency to the input image. A 0% value indicates complete transparency, whereas a 100% value represents the original, fully opaque image.

### `hue-rotate()`
It applies a hue-rotation to the input image. The value defines the number of degrees around the color circle by which the image will be adjusted. The default value is `0deg`, representing the original image. The maximum value is `360deg`.

### `grayscale()`
It converts the input image into black and white. A 0% grayscale represents the original image, whereas 100% represents a completely grayscale version, converting object colors into 256 shades of gray.

### `sepia()`
It is used to transform the image into a sepia tone. A 0% value represents the original image, whereas a 100% value indicates a completely sepia-toned image.

---

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Filter Example</title>        
    <style>                    
        body {
            font-family: Arial, Helvetica, sans-serif;
        }
        
        img {
            filter: blur(2px) hue-rotate(100deg) saturate(200%);
        }
    </style>
</head>
<body>
    <h1>Yahoo Baba : CSS Filter</h1>        
    <img src="IMAGE_PATH" alt="Filtered Image">
</body>    
</html>































```
# CSS Transition

Transitions in CSS allow us to control the way in which a transition takes place between the two states of an element. For example, when hovering your mouse over a button, you can change the background color of the element with the help of a CSS selector and pseudo-class. 

We can change any other property or a combination of properties. The transition property allows us to determine how the change in properties occurs. Using transitions, we can animate the changes, making them visually appealing to the user, improving the user experience, and enhancing interactivity.

## Syntax

The syntax of the CSS `transition` property is:

```css
transition: (property name) | (duration) | (timing function) | (delay);
```

---

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transition Example</title>        
    <style>                    
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        img {
            filter: blur(2px) hue-rotate(100deg) saturate(200%);
        }

        /* Transition Example 1 - Width Change on Hover */
        #box {
            width: 150px;
            height: 80px;
            background: pink;
            margin-bottom: 50px;
            transition: width 2s;
        }
        #box:hover {
            width: 300px;
        }

        /* Transition Example 2 - Border Radius Change on Hover */
        #box2 {
            width: 200px;
            height: 200px;
            background: tomato;
            border-radius: 0;
            transition: border-radius 2s;
        }
        #box2:hover {
            border-radius: 50%;
        }

        /* Transition Example 3 - Content Sliding Effect */
        #box3 {
            width: 300px;
            height: 300px;
            background: url(IMAGE_PATH);
            background-size: 300px;
            margin-top: 40px;
            position: relative;
            overflow: hidden;
        }
        #box3 .box-content {
            transition: top 2s;
            position: absolute;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            background: rgba(255, 99, 71, 0.8);
            color: #fff;
            padding: 10px 40px;
            top: -100%;                
        }
        #box3:hover .box-content {
            top: 0%;    
        }
    </style>
</head>
<body>
    <h1>Yahoo Baba : CSS Transition</h1>        
        
    <div id="box"></div>
    <div id="box2"></div>
    
    <div id="box3">
        <div class="box-content">
            <h2>Yahoo Baba</h2>
        </div>
    </div>
</body>    
</html>
```

# CSS Transform 2D

CSS3 supports the `transform` property. This transform property facilitates you to translate, rotate, scale, and skew elements.

Transformation is an effect that is used to change shape, size, and position.

There are two types of transformations, i.e., 2D and 3D transformations, supported in CSS3.

There are six main types of transformations which are listed below:

- **translate()**  
- **rotate()**  
- **scale()**  
- **skewX()**  
- **skewY()**  
- **matrix()**  

### Explanation of Transform Methods

- **translate() Method:**  
  The `translate()` method is used to move the element from its actual position along the X-axis and Y-axis.

- **rotate() Method:**  
  The `rotate()` method rotates an element clockwise or counter-clockwise according to a given degree. The degree is given in the parenthesis.

- **scale() Method:**  
  It is used to increase or decrease the size of an element according to the parameter given for the width and height.

- **skewX() Method:**  
  This method is used to skew an element at a given angle along the X-axis.

- **skewY() Method:**  
  This method is used to skew an element at a given angle along the Y-axis.

- **skew() Method:**  
  This method skews an element at a given angle along the X-axis and the Y-axis.  
  Example: `skew(20deg, 10deg);`  

- **matrix() Method:**  
  This method combines all the 2D transform properties into a single property.  
  The `matrix` transform property accepts six parameters as follows:  
  ```css
  matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY());
  ```

---

### Example Code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transform</title>
    <style>                    
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        #box {
            width: 250px;
            height: 150px;
            background: tomato;
            transform: rotate(0deg) scale(1);
            transition: transform 1s;
        }

        #box:hover {
            transform: rotate(30deg) scale(2);
        }
    </style>
</head>
<body>
    <h1>Yahoo Baba: CSS Transform</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, voluptatem, asperiores reprehenderit fugit atque eos ipsa doloremque alias illum sunt culpa explicabo ducimus distinctio numquam assumenda totam!</p>
    <div id="box">Yahoo Baba</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, non quos ex dicta voluptatem maxime quod quisquam architecto sunt cupiditate!</p>
</body>    
</html>
```

# CSS Transform 3D

CSS Transform 3D allows changing elements using 3D transformations. In 3D transformation, the elements are rotated along X-axis, Y-axis, and Z-axis. There are three main types of transformation which are listed below:

- **rotateX()**
- **rotateY()**
- **rotateZ()**

## The rotateX() Method
This rotation is used to rotate an element around X-axis at a given degree.

## The rotateY() Method
This method is used to rotate an element around Y-axis at given degrees.

## The rotateZ() Method
This method is used to rotate an element around Z-axis at a given degree.

```html
<html>
 <head>
  <title>Transform Example</title>  
  <style>     
   body{
    font-family:arial,helvetica;
   }
   div{
    font-size:20px;
    text-align:center;
    box-sizing:border-box;
   }
   div div{
    padding-top: 20px;
   }
   .no-presBox{
    width: 200px;
    height: 150px;
    margin :0 0 70px 100px;
    background: grey;
   }
   .presBox{
    width: 200px;
    height: 150px;
    margin :0 0 70px 100px;
    background: grey;
   }
   #box{
    width: 200px;
    height: 150px;
    background: pink;
    transform: rotateX(0deg);
    transition:transform 1s;
   }
   #box:hover{
    transform: rotateX(180deg);
   }
   #boxi{
    width: 200px;
    height: 150px;
    background: pink;
    transform:perspective(800px) rotateX(0deg);
    transition:transform 1s;
   }
   #boxi:hover{
    transform:perspective(800px) rotateX(180deg);
   }
   #box2{
    width: 200px;
    height: 150px;
    background: tomato;
    transform: rotateY(0deg);
    transition:transform 1s;
   }
   #box2:hover{
    transform:rotateY(180deg);
   }
   #box2i{
    width: 200px;
    height: 150px;
    background: tomato;
    transform:perspective(800px)  rotateY(0deg);
    transition:transform 1s;
   }
   #box2i:hover{
    transform:perspective(800px)  rotateY(180deg);
   }
   #box3{
    width: 200px;
    height: 150px;
    background: yellowgreen;
    transform: rotateZ(0deg);
    transition:transform 1s;    
   }
   #box3:hover{
    transform: rotateZ(180deg);
   }
   #box4{
    width: 200px;
    height: 150px;
    background: lightblue; 
    transform:rotateY(60deg) translateZ(0px);
    transition:transform 1s;  
   }
   #box4:hover{
    transform:  rotateY(60deg) translateZ(200px);
   }
   #box4i{
    width: 200px;
    height: 150px;
    background: lightblue; 
    transform: perspective(800px) rotateY(60deg) translateZ(0px);
    transition:transform 1s;  
   }
   #box4i:hover{
    transform: perspective(800px)  rotateY(60deg) translateZ(200px);
   }
   #box42{
    width: 200px;
    height: 150px;
    background: lightblue; 
    transform: perspective(800px) rotateY(60deg) translateX(0px);
    transition:transform 1s;  
   }
   #box42:hover{
    transform: perspective(800px)  rotateY(60deg) translateX(200px);
   }
   #box5{
    width: 200px;
    height: 150px;
    background: lightgreen; 
    transform:scaleZ(1)  rotateX(60deg);
    transition:transform 1s;  
   }
   #box5:hover{
    transform: scaleZ(3)  rotateX(60deg);
   }
   #box5i{
    width: 200px;
    height: 150px;
    background: lightgreen; 
    transform:perspective(800px) scaleZ(1)  rotateX(60deg);
    transition:transform 1s;  
   }
   #box5i:hover{
    transform:perspective(800px) scaleZ(3)  rotateX(60deg);
   }
   #box52{
    width: 200px;
    height: 150px;
    background: lightgreen; 
    transform:perspective(800px) scaleZ(1)  rotateX(60deg);
    transition:transform 1s;  
   }
   #box52:hover{
    transform:perspective(800px) scaleZ(6)  rotateX(60deg);
   }
  </style>
 </head>
 <body>
  <h1 style="margin-bottom: 50px;">Yahoo Baba : CSS Transform 3D Examples</h1>  
  <table>
   <tr>
    <td valign="top" width="400px">
     <div class="no-presBox"><div id="box">Rotate X</div></div>
    </td>
    <td valign="top" width="400px">
     <div class="presBox"><div id="boxi">Rotate X <br> & <br>Perspective</div></div>
    </td>
   </tr>
   <tr>
    <td>
     <div class="no-presBox"><div id="box2">Rotate Y</div></div>
    </td>
    <td>
     <div class="presBox"><div id="box2i">Rotate Y <br> & <br>Perspective</div></div>
    </td>
   </tr>
   <tr>
    <td>
     <div class="no-presBox"><div id="box3">Rotate Z</div></div>
    </td>
    <td></td>
   </tr>
   <tr>
    <td>
     <div class="no-presBox"><div id="box4">Translate Z</div></div>
    </td>
    <td>
     <div class="presBox"><div id="box4i">Translate Z <br> & <br>Perspective</div></div>
    </td>
    <td>
     <div class="presBox"><div id="box42">Translate X</div></div>
    </td>
   </tr>
   <tr>
    <td>
     <div class="no-presBox"><div id="box5">Scale Z</div></div>
    </td>
    <td>
     <div class="presBox"><div id="box5i">Scale Z <br> & <br>Perspective</div></div>
    </td>
    <td>
     <div class="presBox"><div id="box52">Scale Z <br> & <br>Perspective</div></div>
    </td>
   </tr>
  </table>
 </body> 
</html>
```






















# CSS Perspective

The `perspective` property is used to give a 3D-positioned element some perspective.  
It defines how far the object is away from the user. A lower value results in a more intensive 3D effect than a higher value.  
When defining the `perspective` property for an element, **it is the CHILD elements** that get the perspective view, **NOT** the element itself.

## Syntax

```css
perspective: length | none | initial | inherit;
```

## Property Values

All the properties are described well with the example below.

### 1. `length`  
The `length` property sets the distance of the child element from the viewer to the Z plane. A smaller value results in a more pronounced 3D effect.

**Syntax:**  

```css
perspective: length;
```

### 2. `none`  
It is the default value. It indicates no perspective is set. `none` is equivalent to `0px`.

**Syntax:**  

```css
perspective: none;
```

### 3. `initial`  
It sets an element’s CSS property to its default value. No perspective is set.

**Syntax:**  

```css
perspective: initial;
```

### 4. `inherit`  
It inherits the property from the parent element. When used with the root element, the initial property will be applied.

**Syntax:**  

```css
perspective: inherit;
```

---

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perspective</title>		
    <style>					
        body {
            font-family: Arial, Helvetica, sans-serif;
        }
                
        .base {
            width: 350px;
            height: 250px;
            background: grey;
            font-size: 18px;
            text-align: center;
            margin: 100px 0 0 100px;
            perspective: 800px;
            perspective-origin: 20% 50%;
        }
        
        #box {
            width: 350px;
            height: 250px;
            background: tomato;	
            transform: rotateY(60deg);
        }			
    </style>
</head>

<body>
    <h1>Yahoo Baba : CSS Perspective</h1>		
    <div class="base">
        <div id="box">Yahoo Baba</div>
    </div>
</body>	
</html>
```













# CSS Transform-Style

The `transform-style` property is used to specify whether the children of an element are positioned in 3D space or flattened with respect to the plane of the element.

## Syntax

```css
transform-style: flat | preserve-3d | initial | inherit;
```

## Property Values

### 1. `flat`  
This value places the child elements in the same plane as the parent. It does not preserve the 3D position. It is the default value.  

### 2. `preserve-3d`  
This value enables the child elements to preserve their 3D position.

### 3. `initial`  
This is used to set the property to its default value.

### 4. `inherit`  
It is used to inherit the property from its parent element.

---

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transform-Style</title>		
    <style>					
        body {
            font-family: Arial, Helvetica, sans-serif;				
        }
        div {
            font-size: 20px;				
            text-align: center;
            box-sizing: border-box;
        }
    
        .parent {
            width: 400px;
            height: 250px;
            margin: 0 0 70px 100px;
            background: grey;
            perspective: 800px;
            transform: rotateY(50deg);
            transform-style: preserve-3d;
        }
        
        #box {
            width: 400px;
            height: 250px;
            background: pink;
            padding-top: 20px;
            transform: rotateX(60deg);	
            transform-origin: bottom;
        }		
    </style>
</head>

<body>
    <h1 style="margin-bottom: 50px;">Yahoo Baba : CSS Transform-Style</h1>		
                
    <div class="parent">
        <div id="box">Yahoo Baba</div>
    </div>

</body>	
</html>
```















# CSS Backface-Visibility

The `backface-visibility` property determines whether or not the back face of an element should be visible when facing the user. The back face of an element is a mirror image of the front face being displayed. 

This property is useful when an element is rotated. It lets you choose if the user should see the back face or not.

The `backface-visibility` property is one of the CSS3 properties.  

- The **`visible`** value makes the back face visible to the user.
- The **`hidden`** value makes the back face hidden effectively.

---

## Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backface-Visibility</title>		
    <style>		
        body {
            font-family: Arial, Helvetica, sans-serif;
            background: #eee;				
        }

        .card {
            width: 300px;
            height: 300px;
            border: 0px solid black;
            position: absolute;
            left: 50%;
            top: 50%;
            margin: -150px;
            perspective: 500px;
        }	

        .content {
            width: 100%;
            height: 100%;
            position: absolute;
            transition: transform 1s;
            transform-style: preserve-3d;
        }

        .card:hover .content {
            transform: rotateY(180deg);
        }

        .front,
        .back {
            width: 100%;
            height: 100%;
            position: absolute;
            background: #fff;
            color: tomato;
            font-size: 60px;
            text-align: center;
            line-height: 300px;
            border-radius: 5px;
            backface-visibility: hidden;
        }

        .back {
            background: tomato;
            color: #fff;
            transform: rotateY(180deg);
        }
    </style>
</head>

<body>
    <h1 style="margin-bottom: 50px;">Yahoo Baba : CSS Backface-Visibility</h1>		
                
    <div class="card">
        <div class="content">
            <div class="front">Front</div>
            <div class="back">Back!</div>
        </div>
    </div>
</body>	
</html>
```





# CSS Animation

CSS Animations is a technique to change the appearance and behavior of various elements in web pages. It is used to control the elements by changing their motions or display. It has two parts, one contains the CSS properties which describe the animation of the elements and the other contains certain keyframes which indicate the animation properties of the element and the specific time intervals at which those have to occur. 

## What is a Keyframe?
Keyframes are the foundations with the help of which CSS Animations work. They define the display of the animation at the respective stages of its whole duration. For example: In the first example code, the paragraph changes its color with time. At 0% completion, it is red, at 50% completion it is of orange color and at full completion i.e. at 100%, it is brown. 

### Syntax:
```css
/*property-name*/: /*value*/;
```

### Animation Properties:
There are certain animation properties given below:

- **animation-name**: It is used to specify the name of the `@keyframes` describing the animation.
- **animation-duration**: It is used to specify the time duration it takes animation to complete one cycle.
- **animation-timing-function**: It specifies how animations make transitions through keyframes. There are several presets available in CSS which are used as the value for the animation-timing-function like `linear`, `ease`, `ease-in`, `ease-out`, and `ease-in-out`.
- **animation-delay**: It specifies the delay of the start of an animation.
- **animation-iteration-count**: This specifies the number of times the animation will be repeated.
- **animation-direction**: It defines the direction of the animation. Animation direction can be `normal`, `reverse`, `alternate`, and `alternate-reverse`.
- **animation-fill-mode**: It defines how styles are applied before and after animation. The animation fill mode can be `none`, `forwards`, `backwards`, or `both`.
- **animation-play-state**: This property specifies whether the animation is running or paused.

### Example:

```html
<html>
  <head>
    <title>Animation</title>
    <style>
      body{
        font-family: arial, helvetica;
        background: #eee;
      }

      .card {
        width: 300px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        line-height: 300px;
        margin: -150px;
        background: white;
        color: #03446A;
        text-align: center;
        font-size: 40px;
        box-shadow: 0 0 15px rgba(0,0,0,0.1);

        animation: sample 2s cubic-bezier(0.6,0.1,1.0,0.1) 1s infinite alternate;
      }
      
      @keyframes sample{
        0% { border-radius: 0%; }
        25% { background-color: green; }
        50% { background-color: yellow; }
        100% { border-radius: 50%; background-color: tomato; color: white; }
      }
    </style>
  </head>
  <body>
    <h1 style="margin-bottom: 50px;">Yahoo Baba : CSS Animation</h1>
    <div class="card">Yahoo Baba</div>
  </body>
</html>
```

---

## Additional Data:

### More Animation Properties:

- **animation-timing-function**: This defines the speed curve of the animation. You can use:
  - `linear`: The animation has the same speed from start to finish.
  - `ease`: The animation starts slowly, accelerates in the middle, and then slows down again.
  - `ease-in`: The animation starts slowly and then speeds up.
  - `ease-out`: The animation starts fast and then slows down.
  - `ease-in-out`: The animation starts and ends slowly, but speeds up in the middle.

### More Keyframe Example:
Here is another example of `@keyframes` in use:

```css
@keyframes slide {
  0% {
    left: -100%;
  }
  50% {
    left: 50%;
  }
  100% {
    left: 100%;
  }
}
```
This keyframe animates an element moving from left to right. You can apply this with `animation-name: slide;` to an element to make it slide across the screen.

---

For more details, you can check out the official [CSS Animation documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations).
 




















# CSS Animation-Fill-Mode

The CSS `animation-fill-mode` property allows you to define what values are applied by the animation outside the time it is executing. This can be before the animation has been applied, or after it has finished running.

### Syntax:
```css
animation-fill-mode: [ none | forwards | backwards | both ] 
[, [ none | forwards | backwards | both ] ]*
```

### Property Value:
The `animation-fill-mode` property contains many values which are listed below:

- **none**: It is the default value. The animation properties will not apply to any element before or after it is executed.
- **forwards**: The element will retain the same animation properties of the last keyframe after the animation completes.
- **backwards**: This property value is used to set the element to the first keyframe value before starting the animation.
- **both**: This property is used to follow the rules for both forwards and backward.
- **initial**: This property is used to set the property to its default value.
- **inherit**: This property is used to inherit this property from its parent element.

### Example:

```html
<html>
  <head>
    <title>Animation-Play-State</title>		
    <style>
      body{
        font-family: arial, helvetica;
      }

      .box {
        width: 150px;
        height: 150px;				
        background: black;			  
        margin-left: 20px;
        animation: sample 2s 1s forwards;
        animation-play-state: paused;
      }

      .box:hover {
        animation-play-state: running;
      }

      @keyframes sample {
        0% { background: yellow; width: 250px; }
        50% { background: green; width: 350px; }
        100% { background: red; width: 450px; }
      }
    </style>
  </head>
  <body>
    <h1 style="margin-bottom: 50px;">Yahoo Baba : CSS Animation-Play-State</h1>
    <div class="box"></div>
  </body>
</html>
```

---

## Additional Data:

### How the `animation-play-state` Property Works:
The `animation-play-state` property controls whether the animation is running or paused. This is useful when you want the animation to stop at a certain point or resume when triggered, such as when hovering over an element.

- **running**: The animation is running.
- **paused**: The animation is paused.

### More Example with `animation-fill-mode`:
Here is another example of using `animation-fill-mode` with the `forwards` value to maintain the last keyframe's styles after the animation ends:

```css
@keyframes grow {
  0% { transform: scale(1); }
  100% { transform: scale(2); }
}

.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation: grow 3s forwards;
}
```

In this case, the `.box` element will scale up to twice its size during the animation and then retain the scaled-up state after the animation completes.

---

For more details, you can check out the official [CSS Animation documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode).
``` 




















```
# CSS Object-Fit

This CSS property specifies how a video or an image is resized to fit its content box. It defines how an element fits into the container with an established width and height.

It is generally applied to images or videos. This property specifies how an element reacts to the width and height of its container.

### Syntax:
```css
object-fit: fill | contain | cover | none | scale-down | initial | inherit;
```

### Values:
The property can take the following values:

- **fill**: It is the default value. Using this value, the entire object fills in the container. The replaced content is sized to fill the content box. If the aspect ratio of the object doesn't match the aspect ratio of the box, the object will be squished or stretched to fit in the box. The image will fill the area; even if its aspect ratio is not matched.
  
- **contain**: It resizes the content of an element to stay contained inside the container. It fits the image in the width and height of the box while maintaining the aspect ratio of the image. The replaced content is scaled to maintain the aspect ratio while fitting within the content box of the element.
  
- **cover**: It resizes the content of an element to cover its container. It fills the entire box with the image. If the aspect ratio of the object is not matched with the aspect ratio of the box, it clips the object to fit.

- **none**: It does not resize the replaced content. The image retains its original size and ignores the height and width of the parent.
  
- **scale-down**: It sizes the content as `none` or as `contain`. It results in the smallest object size. It finds the smallest concrete object size by comparing the `none` and `contain` values.
  
- **initial**: It sets the property to its default value, i.e., the image is stretched to fit in the container because the default value is `fill`.
  
- **inherit**: It inherits the value from its parent element.

### Example:

```html
<html>
  <head>
    <title>Object-fit</title>		
    <style>
      body {
        font-family: arial, helvetica;
      }

      .container {
        width: 70%;
        margin: 0 auto;
      }

      .clearfix {
        clear: both;
      }

      .box {
        width: 32%;
        border: 2px solid red;
        float: left;
        box-sizing: border-box;
        padding: 10px;
        margin-right: 2%;
        margin-bottom: 13px;
      }

      .box img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: 30px 50px;
      }

      .last {
        margin-right: 0;
      }

      @media screen and (max-width: 950px) {
        .box {
          width: 48%;
        }
      }

      @media screen and (max-width: 800px) {
        .box {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <h1 style="margin-bottom: 30px;">Yahoo Baba : CSS Object-fit</h1>		
    <div class="container">
      <div class="box">
        <img src="https://picsum.photos/300/400" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, veritatis eligendi nemo fugiat similique dolorem!</p>
      </div>
      <div class="box">
        <img src="https://picsum.photos/400/500" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, veritatis eligendi nemo fugiat similique dolorem!</p>
      </div>
      <div class="box last">
        <img src="https://picsum.photos/900/350" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, veritatis eligendi nemo fugiat similique dolorem!</p>
      </div>
      <div class="clearfix"></div>
    </div>
  </body>
</html>
```

---

## Additional Data:

### Object-Position Property:
The `object-position` property is used to adjust the position of the content inside an object element like `<img>` or `<video>`. It can take values like `top`, `right`, `bottom`, `left`, or a combination of percentages or length values to precisely position the object within the container.

Example:
```css
object-position: 50% 50%; /* Center the image */
```

### Browser Support:
Most modern browsers support `object-fit` and `object-position`, but there may be issues with older versions of Internet Explorer and some other legacy browsers. For broader compatibility, it's a good idea to include fallback images or use `background-image` with `background-size` for these browsers.

---

For further details, you can refer to the official [CSS Object-Fit documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
```





















```
# CSS User-Select

The CSS `user-select` property controls whether the user can select text. It doesn’t have any effect on content loaded as part of a browser’s user interface (its chrome), except in textboxes.

### Syntax:
```css
user-select: auto | none | text | all;
```

### Values:
- **auto**: The browser uses its default behavior. Typically, this means the user can select the text unless other properties are applied to prevent it.
  
- **none**: The user cannot select the text in the element. This is useful for preventing text selection on certain parts of a webpage, like buttons or interactive elements.
  
- **text**: The user can select the text within the element.
  
- **all**: The entire text content of the element will be selected when the user clicks on it, useful for selecting entire text blocks.

### Example:

```html
<html>
  <head>
    <title>User-select</title>		
    <style>			
      body {
        font-family: arial, helvetica;
      }

      .box {
        width: 500px;
        height: 300px;				
        background: WHEAT;
        border: 1px solid SADDLEBROWN;
        padding: 10px;
        margin-left: 30px;
        user-select: none;
      }					
    </style>
  </head>
	
  <body>
    <h1 style="margin-bottom: 50px;">Yahoo Baba : CSS User-select</h1>		
					
    <div class="box">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, necessitatibus, sit facilis reiciendis similique veritatis itaque amet ut ipsam deserunt at ipsa ea commodi magnam aperiam maxime dolores quas repellendus aliquam debitis! Modi, commodi, veritatis, esse nesciunt perspiciatis corrupti sapiente soluta iusto debitis officia placeat id minus pariatur magnam maiores suscipit laboriosam. Vel, laboriosam, molestias voluptatum voluptatem omnis quam dolores dolorum nostrum dignissimos error assumenda est libero alias sapiente natus accusantium culpa id voluptatibus accusamus eum. Odio, beatae, impedit similique vel fugiat nulla officiis in optio nihil nam voluptate repellat commodi fuga aspernatur quidem inventore quia hic maiores nemo amet.
    </div>		
  </body>	
</html>
```

---

## Additional Data:

### Browser Support:
Most modern browsers support the `user-select` property, though older browsers may not fully support it. For better compatibility with older browsers, it’s advised to use appropriate vendor prefixes (e.g., `-webkit-user-select`).

Example with prefixes:
```css
-webkit-user-select: none; /* For Webkit-based browsers like Chrome and Safari */
-moz-user-select: none; /* For Firefox */
-ms-user-select: none; /* For Internet Explorer/Edge */
user-select: none; /* Standard syntax */
```

### Use Cases:
1. **Preventing Text Selection**: Commonly used in UI elements where text selection is unnecessary or might break the user experience, like in buttons or interactive cards.
2. **Text Editing Fields**: Can be used on editable text areas to control how users interact with content in certain text boxes.

For more details, you can refer to the official [CSS User-Select documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select).
```



































```
# CSS Box-Decoration-Break

The `box-decoration-break` property is used to control the box decoration after the fragmentation of the paragraph. It defines the background, padding, border, margin, and clip-path of an element that is applied when the box for the element is broken into separated parts.

### Default Value:
- `slice`

### Syntax:
```css
box-decoration-break: slice | clone | initial | inherit;
```

### Property Values:
- **slice**: This is the default value. It breaks the edges of the element fragments as a whole. This means that any decoration like borders or backgrounds will apply to the entire box, even when it’s fragmented.
  
- **clone**: It is used to decorate each fragment of the element as if the fragments were unbroken, individual elements. Borders wrap the four edges of each fragment of the element, and backgrounds are redrawn in full for each fragment.
  
- **initial**: It sets the property to its default value, which is `slice`.

- **inherit**: This value causes the property to inherit the value from its parent element.

### Example:

```html
<html>
  <head>
    <title>Box-Decoration-Break</title>		
    <style>			
      body {
        font-family: Arial, Helvetica, sans-serif;
      }

      .container {
        width: 60%;
        margin: 0 auto;
        padding: 20px;
        background-color: lightblue;
        box-decoration-break: clone;
        border: 5px solid black;
      }
      
      .content {
        padding: 20px;
        background-color: wheat;
        margin: 10px 0;
      }
    </style>
  </head>
	
  <body>
    <h1 style="margin-bottom: 50px;">Yahoo Baba: CSS Box-Decoration-Break</h1>		
					
    <div class="container">
      <div class="content">This is some content inside a box.</div>
      <div class="content">Here’s more content with decoration breaking applied.</div>
    </div>		
  </body>	
</html>
```

---

## Additional Data:

### Browser Support:
- **Chrome** (from version 73)
- **Firefox** (from version 67)
- **Safari** (from version 13.1)
- **Edge** (from version 79)
- **Opera** (from version 60)

For older versions of browsers, it is recommended to use feature queries or fallbacks.

### Use Cases:
1. **Multi-line text with backgrounds**: Useful for applying borders or background colors to text fragments when the text is broken into multiple lines or columns, without the decoration spilling over the broken parts.
2. **Decorative boxes or cards**: Can be applied to boxed content like cards, which are often split across multiple lines in responsive layouts, ensuring consistent decoration across fragments.

For further details, refer to the official [CSS Box-Decoration-Break documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break).

```





















```
# CSS Quotes

The `quotes` property in CSS specifies the type of quotation mark for the quotation used in the sentence. It defines which quotation mark to be used when the quotation is inserted by using the `open-quote` and `close-quote` values of the `content` property.

### Syntax:
```css
quotes: none | string | initial;
```

### Property Values:
- **none**: This is the default value, which specifies that the `open-quote` and `close-quote` values of the `content` property do not generate any quotation marks.

- **string**: This value specifies the type of quotation mark to be used in the sentence. The first pair represents the outer-level quotation; the second pair indicates the first nested level, the third pair indicates the third level, and so on.

- **initial**: It sets the property to its default value, which is `none`.

### Quotation Mark Characters:

| Description                                  | Entity Number |
|----------------------------------------------|---------------|
| " (double quote)                             | 022           |
| ' (single quote)                             | 027           |
| „ (double quote, low-9)                      | 201E          |
| « (double, left angle quote)                 | 0AB           |
| » (double, right angle quote)                | 0BB           |
| ‹ (single, left angle quote)                 | 2039          |
| › (single, right angle quote)                | 203A          |
| ' (left quote, single high-6)                | 2018          |
| ' (right quote, single high-9)               | 2019          |
| “ (left quote, double high-6)                | 201C          |
| ” (right quote, double high-9)               | 201D          |

### Example:

```html
<html>
  <head>
    <title>Quotes</title>		
    <style>			
      body {
        font-family: Arial, Helvetica, sans-serif;
      }

      q {
        quotes: "?" "?" "‹" "›";
        font-size: 27px;
        background: wheat;
        padding: 10px;
      }
    </style>
  </head>
  
  <body>
    <h1 style="margin-bottom: 50px;">Yahoo Baba: CSS Quotes Property</h1>		
    
    <q>Lorem ipsum dolor <q>sit amet</q>, consectetur adipisicing elit.</q>		
  </body>	
</html>
```

---

## Additional Data:

### Browser Support:
- **Chrome** (from version 4)
- **Firefox** (from version 3.5)
- **Safari** (from version 4)
- **Edge** (from version 12)
- **Opera** (from version 10)

For better compatibility with older browsers, you might consider using fallbacks like custom quote marks using the `content` property for pseudo-elements.

### Use Cases:
1. **Nested Quotes**: The `quotes` property is useful for managing nested quotes in paragraphs, making it easier to format multiple levels of quotations.
2. **Customizing Quotation Marks**: It allows you to set custom quote styles for your content, giving you more control over typography and ensuring consistency across your webpage.

For further details, refer to the official [CSS Quotes documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/quotes).

```


















```
# CSS Border-Image

The `border-image` property is used to specify an image to be used instead of the normal border around an element. The property has three parts:

1. The image to use as the border
2. Where to slice the image
3. Define whether the middle sections should be repeated or stretched

It is the shorthand property for the following individual properties:
- `border-image-source`
- `border-image-slice`
- `border-image-width`
- `border-image-outset`
- `border-image-repeat`

These properties can all be set at once using `border-image`. If any of the values are not specified, they are set to their default values. The default value of this property is:

```css
border-image: none 100% 1 0 stretch;
```

### Syntax:
```css
border-image: source slice width outset repeat | initial | inherit;
```

### Property Values:

- **border-image-source**: Specifies the source of the border-image. It sets the path of the image or the location of the image to be used as the border.

- **border-image-slice**: Divides the image specified by `border-image-source` into nine sections:
  - Four corners
  - Four sides
  - A center region

  It can accept four unitless positive values. The default value is `100%`.

- **border-image-width**: Sets the width of the border-image. It can accept a unitless positive value, a percentage value, or the keyword `auto`. Its default value is `1`. You can specify up to four values for the individual sides.

- **border-image-outset**: Specifies the amount of space by which the border image is set out from its border box.

- **border-image-repeat**: Controls the repetition of the image to fill the area of the border. You can specify up to two values:
  - If one value is provided, it is applied to both vertical and horizontal sides.
  - If two values are provided, the first value is applied to the horizontal sides and the second to the vertical sides.

  The possible values are:
  - `stretch` (default)
  - `repeat`
  - `round`
  - `space`

- **initial**: Sets the property to its default value (`border-image: none 100% 1 0 stretch`).

- **inherit**: Inherits the property from the parent element.

### Example:

```html
<html>
  <head>
    <title>Border-Image</title>
    <style>
      body {
        font-family: Arial, Helvetica;
        padding-left: 30px;
      }

      #box {
        width: 350px;
        height: 350px;
        border: 30px solid black;
        text-align: justify;
        padding: 20px;
        background: mediumpurple;
        /* border-image-source: url(images/border-image-2.png);
        border-image-slice: ;
        border-image-width: 15px;
        border-image-outset: 0px;
        border-image-repeat: round; */
        /* border-image: url(images/border-image-2.png) 21 / 25px / 5px round; */
        border-image: linear-gradient(to right, red, yellow) 25;
      }
    </style>
  </head>

  <body>
    <h1 style="margin-bottom: 50px;">Yahoo Baba: CSS Border-Image</h1>

    <div id="box">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, perferendis, beatae sit odit doloremque eligendi temporibus aperiam inventore sed adipisci quia in fugiat perspiciatis officiis praesentium at repudiandae magni eos saepe ipsa. Maiores, qui, ad, iste dicta provident voluptatibus ratione nemo tenetur optio libero error quisquam ipsum odit excepturi tempora ipsa rem eligendi facilis non accusamus magnam in quibusdam sapiente. Illum, repellendus, incidunt quasi necessitatibus laudantium doloribus suscipit commodi natus quos quisquam? Recusandae, repudiandae, perspiciatis, ullam, voluptate libero corporis doloremque error dolores officia est commodi enim sed id architecto ratione iusto laudantium dolor quaerat explicabo nemo voluptatibus distinctio dolorem? Ab?
    </div>

  </body>
</html>
```

---

## Additional Data:

### Browser Support:
- **Chrome** (from version 4)
- **Firefox** (from version 3.5)
- **Safari** (from version 4)
- **Edge** (from version 12)
- **Opera** (from version 10)

### Common Use Cases:
1. **Customizing Borders**: Using images for borders can add a unique design element to an element.
2. **Dynamic Borders**: The `border-image` property can be combined with CSS gradients or external images to create dynamic and visually appealing borders.
3. **UI Styling**: For buttons or div containers that require custom image borders, `border-image` is an effective method.

For further details, refer to the official [CSS Border-Image documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).

```


































```
# CSS Advanced (Combinator Selectors)

CSS combinators define the relationship between two selectors. While selectors target content for styling, combinators specify how those selectors are related, helping to manage the content's position in the document.

There are various types of combinators used in CSS to combine selectors in meaningful ways.

## Universal Selector

The asterisk (`*`) is the universal selector in CSS. It selects all elements on a page. The universal selector can also be used in combination with other selectors to target specific child elements of a parent.

### Example:
```css
* {
    property: value;
}
```
This selects all elements on the page. To select all children of a specific parent:
```css
parent * {
    property: value;
}
```

### Example in HTML:
```html
<html>
    <head>
        <title>Basic Layout</title>
        <style>
            * {
                box-sizing: border-box;
            }
            body {
                font-family: Arial;
            }
            #wrapper {
                border: 1px solid black;
                width: 1000px;
                background: white;
                margin: 0 auto;
            }
            #header {
                height: 100px;
                font-family: Arial;
                border-bottom: 1px solid black;
            }
            #header h1 {
                padding: 30px 0 0 20px;
            }
            #menu {
                border-bottom: 1px solid black;
            }
            #menu ul {
                margin: 0;
                padding: 0;
            }
            #menu li {
                display: inline-block;
            }
            #menu li a {
                display: block;
                padding: 10px 13px;
                text-decoration: none;
            }
            #content {
                width: 795px;
                min-height: 500px;
                padding: 15px;
                float: left;
                box-sizing: border-box;
                position: relative;
                border-right: 1px solid black;
            }
            #footer {
                padding: 5px 10px;
                text-align: right;
                clear: both;
                border-top: 1px solid black;
            }

            @media screen and (max-width:1020px) {
                #wrapper {
                    width: 800px;
                }
                #content {
                    width: 80%;
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
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div id="content">
                <h2>Sub Heading</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>
            <div id="footer">
                yahoobaba@copyright 2018.
            </div>
        </div>
    </body>
</html>
```

## Descendant Selector

The descendant selector targets elements that are descendants of a specified element. This includes elements nested within the parent element, whether they're direct children or deeper.

### Syntax:
```css
selector1 selector2 {
    /* property declarations */
}
```

### Example in HTML:
```html
<html>
    <head>
        <title>Descendant Selectors</title>
        <style>
            body {
                font-family: Arial;
            }
            #box {
                border: 2px solid #000;
                padding: 10px;
            }
            #box p {
                color: red;
            }
            div p span {
                color: blue;
            }
        </style>
    </head>

    <body>
        <h1>Yahoo Baba : CSS Descendant Selectors</h1>
        <div id="box">
            <span>Hello</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div>
    </body>
</html>
```

## Direct Child Selector

The child selector (`>`) targets elements that are direct children of a specified parent element.

### Syntax:
```css
element > element {
    /* CSS Property */
}
```

### Example in HTML:
```html
<html>
    <head>
        <title>Direct Child Selectors</title>
        <style>
            body {
                font-family: Arial;
            }
            #box {
                border: 2px solid #000;
                padding: 10px;
            }
            #list li {
                color: green;
            }
            #list > li {
                color: red;
            }
        </style>
    </head>

    <body>
        <h1>Yahoo Baba : CSS Direct Child Selectors</h1>
        <ul id="list">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Modi nihil in animi necessitatibus.</li>
        </ul>
    </body>
</html>
```

## Adjacent Sibling Selector

The adjacent sibling selector (`+`) is used to target elements that immediately follow another element.

### Syntax:
```css
element + element {
    /* declarations */
}
```

### Example in HTML:
```html
<html>
    <head>
        <title>Adjacent Sibling Selector</title>
        <style>
            body {
                font-family: Arial;
            }
            ul + p {
                color: red;
            }
        </style>
    </head>

    <body>
        <h1>Yahoo Baba : CSS Adjacent Sibling Selector</h1>
        <ul id="list">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Modi nihil in animi necessitatibus.</li>
        </ul>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
    </body>
</html>
```

## Additional Data

### Combinator Types:
- **Descendant**: Selects all elements that are descendants of a specified element, regardless of how deeply nested they are.
- **Child**: Selects only direct children of a specified element.
- **Adjacent Sibling**: Selects an element that is immediately preceded by a specific element.
- **General Sibling**: Selects all sibling elements that follow a specified element, not just the immediately adjacent ones.

### Use Case
Combinator selectors help in creating more efficient and targeted CSS rules for specific elements within the HTML structure, avoiding the need for excessive or redundant selectors.
```















```
# CSS Advanced (Attribute Selectors)

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Attribute Selectors</title>
	<style>
		body{
			font-family: arial;
		}
		p{
			font-size: 19px;
			line-height: 25px;
		}
		
		/* ======================================= */
		/* only attribute */
		/* ======================================= */

		/* img[title]{
			border: 3px solid red;
		}
		input[type]{
			border: 3px solid blue;
		}
		a[target]{
			color: red;
		} */

		/* ======================================= */
		/* attribute with value */
		/* ======================================= */
		
		/* input[type="password"]{
			border: 3px solid red;
		}

		img[alt="Image of cat"]{
			border: 3px solid red;
		} */

		/* ======================================= */
		/* Attribute begins with value */
		/* ======================================= */

		/* img[alt^="Image"]{
			border: 3px solid red;
		}

		img[title^="flower"]{
			border: 3px solid red;
		} */

		/* ======================================= */
		/* Attribute begins with value OR is first in a dash separated list */
		/* ======================================= */

		/* img[alt|="Image"]{
			border: 3px solid red;
		} */

		/* ======================================= */
		/* Attribute ends with value */
		/* ======================================= */

		/* img[alt$="cat"]{
			border: 3px solid red;
		}

		a[href$=".png"]{
			color: red;
		}
		a[href$=".net"]{
			color: red;
		} */

		/* ======================================= */
		/* Attribute value occurs anywhere in attribute */
		/* ======================================= */

		/* img[alt*="of"]{
			border: 3px solid blue;
		} */

		/* ======================================= */
		/* Attribute value matches attribute in space separated list. */
		/* ======================================= */

		img[alt~="of"]{
			border: 3px solid blue;
		}

	</style>
</head>
<body>
	<h1>Yahoo Baba : CSS Attribute Selectors</h1>

	<img src="images/cat.jpg" width="200px" alt="Image of cat">

	<p>Lorem <a href="">ipsum dolor</a> sit amet, consectetur adipisicing elit. Dolore, tempora minus! Illum totam iure <a href="www.yahoobaba.net" target="_blank">laborum</a>	 maxime? Libero illo ad eos vel quam veniam facilis, commodi inventore recusandae officiis nulla a, nisi corrupti adipisci explicabo praesentium nobis unde reprehenderit quas sequi, quia aliquid placeat culpa! <a href="images/logo.png">Voluptate omnis</a> delectus optio repellendus nihil?</p>

	<img src="images/flower." title="flower" width="200px">
	<br><br>

	Name <input type="text"> <br><br>

	Gender <input type="radio"> Male <input type="radio"> Female <br><br>

	Address <input type="text"> <br><br>

	Password <input type="password"> <br><br>
	
</body>
</html>
```

### Additional Data:

- **Attribute Selectors** allow CSS to target HTML elements based on the presence or value of their attributes. They are useful for styling specific elements without adding classes or IDs.
  
- **Types of Attribute Selectors:**
  - **[attribute]**: Selects elements with a specified attribute.
  - **[attribute="value"]**: Selects elements with a specified attribute and value.
  - **[attribute^="value"]**: Selects elements whose attribute value starts with the given value.
  - **[attribute$="value"]**: Selects elements whose attribute value ends with the given value.
  - **[attribute*="value"]**: Selects elements whose attribute value contains the given value.
  - **[attribute|="value"]**: Selects elements whose attribute value starts with the given value or is a list of space-separated values.
  - **[attribute~="value"]**: Selects elements whose attribute value is a space-separated list of words and contains the specified word.

These selectors offer a flexible way to apply styles to elements based on their attributes, enhancing CSS capabilities.
























# CSS Pseudo-Classes Selectors

The CSS Attribute Selector is used to select an element with some specific attribute or attribute value. It is an excellent way to style the HTML elements by grouping them based on some specific attributes, and the attribute selector will select those elements with similar attributes.

There are several types of attribute selectors which are discussed below:

- **[attribute] Selector**: This type of attribute selector is used to select all the elements that have the specified attribute and applies the CSS property to that attribute. For example, the selector `[class]` will select all the elements with the `class` attribute.
  
- **[attribute = “value”] Selector**: This selector is used to select all the elements whose attribute has the value exactly the same as the specified value.

- **[attribute~=”value”] Selector**: This selector is used to select all the elements whose attribute value is a list of space-separated values, one of which is exactly equal to the specified value.

- **[attribute|=”value”] Selector**: This selector is used to select all the elements whose attribute has a hyphen-separated list of values beginning with the specified value. The value has to be a whole word either alone or followed by a hyphen.

- **[attribute^=”value”] Selector**: This selector is used to select all the elements whose attribute value begins with the specified value. The value doesn’t need to be a whole word.

- **[attribute$=”value”] Selector**: This selector is used to select all the elements whose attribute value ends with the specified value. The value doesn’t need to be a whole word.

- **[attribute*=”value”] Selector**: This selector selects all the elements whose attribute value contains the specified value present anywhere. The value doesn’t need to be a whole word.
```

### Additional Data:

- **Pseudo-Classes** like `:hover`, `:focus`, and `:nth-child` allow you to apply styles to elements based on their state or position in the DOM, offering more interaction and dynamic styling capabilities beyond just attributes.






```
# CSS Pseudo Element Selectors

A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected elements. For example, styling the first letter or line of an element, or inserting content before or after the content of an element. All of these can be done using pseudo-elements in CSS.

Note that in contrast to pseudo-elements, pseudo-classes can be used to style an element based on its state.

### Syntax:

```css
selector::pseudo-element 
{ 
     property: value; 
}
```

There are many pseudo-elements in CSS, but the ones most commonly used are as follows:

- **::first-line**: Pseudo-element applies styles to the first line of a block-level element. Note that the length of the first line depends on many factors, including the width of the element, the width of the document, and the font size of the text. Only a few properties are applied for the first-line pseudo-element, like font properties, color properties, background properties, word-spacing, letter-spacing, text-decoration, vertical-align, text-transform, line-height, clear, etc.

- **::first-letter**: Pseudo-element applies styles to the first letter of the first line of a block-level element, but only when not preceded by other content (such as images or inline tables). Only a few properties are applied for the first-letter pseudo-element, like font properties, color properties, background properties, word-spacing, letter-spacing, text-decoration, vertical-align, text-transform, line-height, clear, etc.

- **::before**: Pseudo-element creates a pseudo-element that is the first child of the selected element. It is often used to add cosmetic content to an element with the `content` property. It is inline by default.

- **::after**: Pseudo-element creates a pseudo-element that is the last child of the selected element. It is often used to add cosmetic content to an element with the `content` property. It is inline by default.

- **::marker**: Pseudo-element selects the marker box of a list item, which typically contains a bullet or number. It works on any element or pseudo-element set to `display: list-item`, such as the `<li>` and `<summary>` elements.

- **::selection**: Pseudo-element applies styles to the part of a document that has been highlighted by the user, such as clicking and dragging the mouse across the text.
```

### Additional Data:

- **Content Property**: The `content` property is essential for the `::before` and `::after` pseudo-elements, allowing you to insert content into the document dynamically, whether text, images, or other media.































```
# CSS Before and After Pseudo Elements

## `::before` or `::after`
The `::before` and `::after` pseudo-elements behave very similarly. The only difference is how they position themselves in the browser and the page source.

### Pseudo-class `::before`
The `::before` pseudo-element can be used to describe generated content before an element's content.

**Syntax:**

```css
selector::before { properties }
```

### Pseudo-class `::after`
In CSS, `::after` creates a pseudo-element that is the last child of the selected element. It is often used to add cosmetic content to an element with the `content` property. It is inline by default.

**Syntax:**

```css
selector { properties }::after
```

## Example 1

```html
<html>
	<head>
		<title>Pseudo Elements Selectors</title>
		<style>
			body{ font:21px/29px arial;padding: 10px 0 0 20px; }
			h1{ font-size: 28px;margin-bottom: 35px; }
			p{
				font-size: 37px;
				margin-top: 200px;
			}
			
			p::before{
				content: "Hello ";
				background: red;
				color: #fff;
				display: block;
				margin-bottom: 10px;
			}
			
			p::after{
				content: "World";
				background: green;
				color: #fff;
				display: block;
				margin-top: 10px;
			}
		</style>
	</head>

	<body>
		<h1>Yahoo Baba : ::after & ::before Selectors</h1>

		<p>Learn web design from us.</p>

	</body>
</html>
```

## Example 2

```html
<html>
	<head>
		<title>Pseudo Elements Selectors</title>
		<style>
			body{ font:21px/29px arial;padding: 10px 0 0 20px; }
			h1{ font-size: 28px;margin-bottom: 35px; }
			p{
				font-size: 37px;
				margin-top: 200px;
			}

			p:hover::after{
				content: "World ";
				background:green;
				color: #fff;
			}
		</style>
	</head>

	<body>
		<h1>Yahoo Baba : ::after & ::before Selectors</h1>

		<p>Learn web design from us.</p>

	</body>
</html>
```

### Additional Data:

- **Content Property**: Both `::before` and `::after` pseudo-elements require the `content` property to generate content, whether it be text, images, or other media.


























# CSS `attr()` Function

The `attr()` function is an inbuilt function in CSS that returns the value of an attribute of the selected elements.

### Syntax:

```css
attr( attr_name )
```

### Parameter:
- **attr_name**: This function accepts a single parameter, `attr_name`, which is used to hold the name of the attribute in an HTML element. It is a mandatory parameter.

### Return Value:
This function returns the value of the attribute of the selected elements.

## Example 1

```html
<html>
	<head>
		<title>Attribute Function</title>
		<style>
		body{ font:19px/25px arial;padding: 10px 0 0 20px; }
		h1{ font-size: 32px;margin-bottom: 35px; }
		p{
			font-size: 37px;
			margin: 200px 0 0 50px;
		}

		p::after{
			content: attr(data-caption);
			color: red;
		}
		</style>
	</head>

	<body>
		<h1>Yahoo Baba : CSS Attribute Function</h1>

		<p class="test" data-caption=" Baba">Yahoo</p>

	</body>
</html>
```

## Example 2

```html
<html>
	<head>
		<title>Attribute Function</title>
		<style>
		body{ font:19px/25px arial;padding: 10px 0 0 20px; }
		h1{ font-size: 32px;margin-bottom: 35px; }
		p{
			font-size: 37px;
			margin: 200px 0 0 50px;
		}

		p:hover::after{
			content: attr(data-caption);
			color: red;
		}
		</style>
	</head>

	<body>
		<h1>Yahoo Baba : CSS Attribute Function</h1>

		<p class="test" data-caption=" Baba">Yahoo</p>

	</body>
</html>
```

### Additional Data:
- **Usage**: The `attr()` function is commonly used with `::before` and `::after` pseudo-elements to display attribute values within the content of the selected element.


















# CSS Counter

CSS counters are similar to variables. These are maintained by CSS and those values can be incremented by CSS rules to track how many times they are used.

CSS counters facilitate simple CSS-based incrementing and display of a number for generated content.

## CSS Counter Properties

Following is a list of properties that are used with CSS counters:

- **counter-reset**: It is used to create or reset a counter.
- **counter-increment**: It is used to increment the counter value.
- **content**: It is used to insert generated content.
- **counter() or counters() function**: It is used to add the value of a counter to an element.

## Example 1: Counter-Increment

```html
<html>
	<head>
		<title>Counter-Increment</title>
		<style>
		body{ font:19px/25px arial;padding: 10px 0 0 20px;
			counter-reset: my-counter;
		 }
		h1{ font-size: 32px;margin-bottom: 35px;color: green;}

		h2::before{
			content: counter(my-counter,upper-roman);
			counter-increment: my-counter 1;
			color: white;
			background: crimson;
			display: inline-block;
			padding: 4px;
		}

		</style>
	</head>

	<body>
		<h1>Yahoo Baba : CSS Counter-Increment</h1>

		<h2>Lorem ipsum dolor sit.</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore reiciendis incidunt rerum voluptatum sint nulla quidem eaque alias, tempore ducimus adipisci ea necessitatibus ut. Placeat.</p>

		<h2>Lorem ipsum dolor sit amet.</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore reiciendis incidunt rerum voluptatum sint nulla quidem eaque alias, tempore ducimus adipisci ea necessitatibus ut. Placeat.</p>

		<h2>Lorem ipsum dolor.</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore reiciendis incidunt rerum voluptatum sint nulla quidem eaque alias, tempore ducimus adipisci ea necessitatibus ut. Placeat.</p>

		<h2>Lorem ipsum dolor sit.</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore reiciendis incidunt rerum voluptatum sint nulla quidem eaque alias, tempore ducimus adipisci ea necessitatibus ut. Placeat.</p>
	</body>
</html>
```

## Example 2: Counter-Increment with Subsection

```html
<html>
	<head>
		<title>Counter-Increment</title>
		<style>
		body{ font:19px/25px arial;padding: 10px 0 0 20px;
			counter-reset: section;
		 }
		h1{ font-size: 32px;margin-bottom: 35px;color: green;
			counter-reset: subsection;
		}

		h1::before{
			content: "Section " counter(section) " : ";
			counter-increment: section;
		}

		h2::before{
			content: counter(section) "." counter(subsection) " : ";
			counter-increment: subsection;
		}

		</style>
	</head>

	<body>
    <h1>HTML and CSS</h1>
    <h2>HTML Tutorial</h2>
    <h2>CSS Tutorial</h2>
    <h2>Bootstrap Tutorial</h2>
    <hr>

    <h1>JavaScript</h1>
    <h2>JavaScript Tutorial</h2>
    <h2>jQuery Tutorial</h2>
    <h2>JSON Tutorial</h2>
    <hr>

    <h1>Server Side</h1>
    <h2>SQL Tutorial</h2>
    <h2>PHP Tutorial</h2>
  </body>
</html>
```

### Additional Data:
- **Usage**: CSS counters are commonly used in ordered lists, headings, or any scenario where you need to display an incremented number.


























# CSS Caret-Color

This property is used to set the color of the cursor in inputs, text areas, or other editable areas.

## Default Value:
- `auto`

## Syntax:
```css
caret-color: auto|color;
```

## Property values:
- **auto**: It has a default value. It uses the current-color in the web browser.
- **color**: It is used to specify the color value used for the caret. All values can be used (rgb, hex, named-color, etc).

## Example:

```html
<html>
	<head>
		<title>Caret-Color</title>
		<style>
      body{ font:19px/25px arial;padding: 10px 0 0 20px; }
      h1{ font-size: 28px;margin-bottom: 35px;	}

			input,
			textarea{
				font-size: 20px;
				caret-color: red;
			}
		</style>
	</head>

	<body>
		<h1>Yahoo Baba : CSS Caret-Color</h1>

		<form action="">
			<label>First Name :</label> <input type="text"> <br><br>

			<label>Last Name :</label> <input type="text"> <br><br>

			<label>Your Age :</label> <input type="number" min="10" max="20"> <br><br>

			<label>Your Email-Id :</label> <input type="email"> <br><br>

			<label style="float:left;">Your Hobbies : </label>
				<textarea name="name" rows="8" cols="40"></textarea>
				<br><br>

			<input type="submit">

		</form>
	</body>
</html>
```

### Additional Data:
- **Usage**: The `caret-color` property is useful in customizing the appearance of the text cursor in input fields and text areas to match the design theme of the website.






















# CSS @import Rule - Import StyleSheet

The `@import` rule is used to import one style sheet into another style sheet. This rule also supports media queries so that the user can import the media-dependent style sheet. The `@import` rule must be declared at the top of the document after any `@charset` declaration.

## Syntax:
```css
@import url|string list-of-mediaqueries;
```

## Property Values:
- **url|string**: A URL or a string represents the location of the resource to be imported. The URL may be relative or absolute.
- **list-of-mediaqueries**: The list of media queries conditions the application of the CSS rules defined in the linked URL.

```css
@import "color.css";
```

## Layout Page HTML:
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Basic Layout</title>
		<link rel="stylesheet" href="css/main.css">
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
					<li><a href="">Contact Us</a></li>
				</ul>
			</div>
			<div id="content">
				<h2>Sub Heading</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, veniam eius architecto ullam cupiditate quam aspernatur quis facilis tempora vel! Aspernatur, consequatur, laborum, explicabo consequuntur minima beatae perferendis impedit accusantium ex animi odit quisquam sint pariatur minus amet ullam reprehenderit rerum inventore sed officiis voluptas? Dolore, perferendis, minus eum debitis vero ipsam tempora voluptate nam ut autem itaque provident consequatur nobis quia libero! Magni, molestiae, laborum architecto natus inventore facere quis pariatur quia quos quasi quo dicta dolores. Deleniti, facere, fugit sed minus ducimus ut modi voluptatum eaque praesentium saepe aperiam nam quidem laboriosam assumenda voluptate vitae inventore et quibusdam!</p>

            <ul id="list">
               <li>Lorem ipsum dolor sit amet. </li>
               <li>Modi nihil in animi necessitatibus.</li>
               <li>Consectetur adipisicing elit.</li>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Modi nihil in animi dolore natus.</li>
            </ul>
         </div>

			<div id="sidebar">
				<ul>
					<li><a href="">Home</a></li>
					<li><a href="">About Us</a></li>
					<li><a href="">Gallery</a></li>
					<li><a href="">Contact Us</a></li>
				</ul>
			</div>
			<div id="footer">
				yahoobaba@copyright 2018.
			</div>
		</div>
	</body>
</html>
```

## main.css
```css
@import "color.css";
@import "printstyle.css" print;
@import "media-1020.css" screen and (max-width:1020px);

*{
  box-sizing: border-box;
}
body{
  font: 18px/24px arial;
}
#wrapper{
  border:1px solid black;
  width: 1000px;
  background: white;
  margin: 0 auto;
}

#top-bar{
  background: MEDIUMPURPLE;
}
#top-bar ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
#top-bar ul li{
  display: inline-block;
  margin: 5px;
}
#top-bar a{
  color: #fff;
  font-size: 20px;
}
#top-bar a:hover{
  color: crimson;
}
#header{
  height: 100px;
  font-family: arial;
  border-bottom: 1px solid black;
}
#header h1{
  padding:30px 0 0 20px;
  margin: 0;
}
#menu{
      border-bottom: 1px solid black;
}
#menu ul{
  margin: 0;
  padding: 0;
}
#menu li{
  display:inline-block;
}
#menu li a{
  display:block;
  padding: 10px 13px;
  text-decoration:none;

}
#menu li a:hover{

}
#content{
  width:795px;
  min-height:500px;
  padding: 15px;
  float:left;
  box-sizing:border-box;
  position:relative;
}
#content h2{
  font-family: arial;
}

#sidebar{
  width:200px;
  min-height:500px;
  float:right;
  border-left: 1px solid black;
}
#sidebar a{
  text-decoration:none;
  color:black;
}
#footer{
  padding: 5px 10px;
  text-align:right;
  font-size: 14px;
  clear:both;
  border-top: 1px solid black;
}

@media screen and (max-width:810px){
  #wrapper{
    width:500px;
  }
  #content{
      width:65%;
  }
  #sidebar{
    width:34%
  }
}
@media screen and (max-width:510px){
  #wrapper{
    width:auto;
  }

  #content{
      width:100%;
    float:none;
  }
  #sidebar{
    width:100%;
    float:none;
  }
  #header h1{
  padding:30px 0 0 0;
  text-align:center;
}
}
```

## color.css
```css
body{
  background: slategrey;
}
#header{
  background: crimson;
  color: #fff;
}
#menu{
  background: MEDIUMPURPLE;
}
#menu a{
  color: #fff;
}
#menu a:hover{
  background: crimson;
}
#content ::selection{
  background: crimson;
  color: #fff;
}
#sidebar{
  background: LAVENDER;
}
#sidebar a:hover{
  color: crimson;
}
#footer{
  background: crimson;
  color: #fff;
}
```

## media-1020.css
```css
#wrapper{
  width:800px;
}
#content{
    width:80%;
}
#sidebar{
  width:18%
}
```

### Additional Data:
- **Usage**: The `@import` rule is used to modularize and organize stylesheets by allowing one stylesheet to import others. This helps manage complex styling rules and ensures a more maintainable code structure. It can also be used to apply different styles based on media queries.






















# CSS Scrollbar Styling

The CSS scrollbars styling module defines properties that you can use for visual styling of scrollbars. You can customize the width of the scrollbar as required. You can also customize the color of the scrollbar track, which is the background of the scrollbar, and the color of the scrollbar thumb, which is the draggable handle of the scrollbar.  
Chrome, Edge, Safari, and Opera support the non-standard `::-webkit-scrollbar` pseudo-element, which allows us to modify the look of the browser's scrollbar.

## Scrollbar Selectors

For webkit browsers, you can use the following pseudo-elements to customize the browser's scrollbar:

- `::-webkit-scrollbar`: the scrollbar.
- `::-webkit-scrollbar-button`: the buttons on the scrollbar (arrows pointing upwards and downwards).
- `::-webkit-scrollbar-thumb`: the draggable scrolling handle.
- `::-webkit-scrollbar-track`: the track (progress bar) of the scrollbar.
- `::-webkit-scrollbar-track-piece`: the track (progress bar) NOT covered by the handle.
- `::-webkit-scrollbar-corner`: the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet.
- `::-webkit-resizer`: the draggable resizing handle that appears at the bottom corner of some elements.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Document</title>
	<style>
		body{ font-family: arial; }
		h1{ text-align: center; }

		#test{
			width: 250px;
			height: 400px;
			margin:50px 20px;
			border: 1px solid #000;
			overflow:auto;
		}

		#test::-webkit-scrollbar{
			width:15px;
		}
		#test::-webkit-scrollbar-track{
			border-radius: 10px;
			background: #f5f5f5;
			box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		}
		#test::-webkit-scrollbar-thumb{
			border-radius: 10px;
			background: linear-gradient(red,yellow);
			box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		}
		#test::-webkit-scrollbar-corner{
			background: linear-gradient(red,yellow);
		}
	</style>
</head>
<body>
	<h1>CSS Scrollbar Styling</h1>

	<div id="test">
		<img src="https://picsum.photos/300/400" alt="">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, dolorum esse tenetur eius consectetur modi ad et quod ab eaque! Cupiditate, voluptates, sunt, modi, repellendus nemo saepe illum delectus aut ex corporis at deserunt id repellat quaerat ratione sed ipsam provident quod magnam quidem molestiae a aliquam in debitis ullam excepturi dicta inventore laudantium officiis? Saepe, perspiciatis, illum neque distinctio natus aperiam ratione optio ullam magnam illo amet expedita! Qui, voluptates, fugit, fuga dicta impedit dolorum harum voluptatum porro inventore cumque dolores quae dignissimos labore tempora officia totam nihil assumenda unde ex quidem ducimus repellendus delectus. Cum, aut suscipit quod porro distinctio sed veritatis ullam voluptatibus incidunt maxime accusantium consectetur adipisci quos eveniet unde praesentium dolorum! Inventore, quod, odit provident excepturi iure vel voluptates perspiciatis dolor quo nesciunt omnis consequatur nobis ipsum velit obcaecati dolore nam officia atque sed quis. Inventore, deserunt, soluta doloremque unde eaque repellat ipsam at vero similique quisquam dolorum animi nemo velit dolor voluptatem nam iusto illum mollitia reiciendis provident! Est, asperiores amet modi nam incidunt eveniet porro illo esse voluptas necessitatibus id vitae quia. Maxime obcaecati itaque earum possimus magni! Consequuntur, asperiores, excepturi, laborum laudantium sunt incidunt ea cupiditate provident voluptate voluptas eius optio accusamus quia nostrum debitis aliquam aliquid dolorem. Alias, corporis eos quos ullam beatae. Repellendus vel alias ullam nobis numquam quaerat nam optio necessitatibus cupiditate enim. Earum, assumenda, soluta facilis blanditiis similique ipsum iusto asperiores veniam tempore id. Inventore, quisquam asperiores perferendis libero itaque culpa unde error nesciunt delectus eius molestias ab nemo odio numquam beatae. Nisi, error, officia, placeat, ratione labore illum doloribus nulla id tempora rem earum atque eaque accusamus. Laudantium, asperiores voluptatibus officia ullam aperiam molestiae quos placeat natus iste nisi sequi excepturi qui recusandae labore atque odio ratione. Ipsam aperiam voluptate repudiandae repellendus error similique autem perferendis quos.
	</div>
</body>
</html>
```

This example demonstrates how to style the scrollbar in a `div` element with custom thumb and track colors, as well as a gradient background. The pseudo-elements such as `::-webkit-scrollbar`, `::-webkit-scrollbar-track`, and `::-webkit-scrollbar-thumb` are used to apply the styles.




















# CSS Display Flow-Root

The `display: flow-root` property generates a block element box that establishes a new block formatting context, defining where the formatting root lies.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Document</title>
	<style>
		body{ font-family: arial; }
		h1{ text-align: center; }

		#parent{
			width: 600px;
			margin:50px 20px;
			border: 2px solid #000;
			display : flow-root;
		}
		.child{
			width: 100px;
			height: 100px;
			background: red;
			float: left;
		}
	</style>
</head>
<body>
	<h1>CSS Display : flow-root</h1>

	<div id="parent">
		<div class="child"></div>
	</div>
</body>
</html>
```

This example demonstrates the use of `display: flow-root` on the `#parent` element. It creates a new block formatting context for the parent element, which affects how the floated `.child` element is displayed within the container. This ensures that the child element's float does not collapse the height of the parent.














# CSS CurrentColor

The `currentColor` keyword in CSS is used to define the color property by referring to the currently used color on the element. It acts like a variable for the current value of the color property. This can be useful when you want to use the same color in multiple places without explicitly repeating the color value.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>CurrentColor</title>
	<style>
		body{ font-family: arial; }

    h1{
      text-align: center;
    }

		#test{
			color: blue;
			width: 500px;
			padding: 10px;
			margin: 0 auto;
			border: 2px solid CurrentColor;
    }
		#test h2{
			border-bottom : 2px solid CurrentColor;
		}
		#test .readmore{
			color:CurrentColor;
			background: red;
		}

	</style>
</head>
<body>
	<h1>CSS CurrentColor Mode</h1>

  <div id="test">
    <h2>Yahoo Baba</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ut error aliquid! Iste libero voluptatum cum, earum hic amet quae eos. Numquam perspiciatis amet, velit provident odio ex, itaque accusamus?</p>
    <a class="readmore" href="">Readmore</a>
		<div class="abc"></div>
  </div>

</body>
</html>
```

This example demonstrates how `currentColor` is used to apply the same color throughout different elements. In this case, the color of the text in `#test` is blue, and `currentColor` is applied to the border, the `h2` element's bottom border, and the `.readmore` link, so they all inherit the same color without needing to be explicitly set.

















# CSS3 ::Marker Pseudo Element

The `::marker` CSS pseudo-element targets the marker box of a list item. The marker box typically contains a bullet or number and applies to elements or pseudo-elements that are set to `display: list-item`, such as the `<li>` and `<summary>` elements.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>::marker</title>
	<style>
		body{
			font-family: arial;
			font-size: 20px;
			line-height: 24px;
		}

		h1{
			text-align: center;
		}
		
		ul li::marker{
			color: red;
		}
	</style>
</head>
<body>
<h1>Pesudo Element  ::marker</h1>
<ul>
	<li>Orange</li>
	<li>Apple</li>
	<li>Banana</li>
	<li>Grapes</li>
</ul>

<ol>
	<li>Orange</li>
	<li>Apple</li>
	<li>Banana</li>
	<li>Grapes</li>
</ol>
</body>
</html>
```

In this example, the `::marker` pseudo-element is used to change the color of the bullets in the unordered list (`<ul>`) to red. This doesn't affect the numbers in the ordered list (`<ol>`), as `::marker` only applies to the marker (bullet or number) of list items.




















# CSS !important

The `!important` rule in CSS is used to give more importance to a specific property/value. When applied, it overrides all previous styling rules for that property on the element, making it the most specific rule.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>!important</title>
	<style>
		body{
			font-family: arial;
			font-size: 40px;
		}

		h1{
			padding-left: 20px;
			color: red !important;
			font-size: 18px !important;
		}
		.first{
			color: green;
		}
		#second{
			color: blue;
			font-size: 38px;
		}
	</style>
</head>
<body>

<h1 class="first" id="second" style="color:orange;">Yahoo Baba</h1>

</body>
</html>
```

In this example, the `color: red !important;` and `font-size: 18px !important;` in the `h1` tag are applied despite other conflicting styles (such as inline `style="color:orange;"` and class `first`). The `!important` rule ensures that the red color and 18px font size are enforced.






















# CSS3 @supports

The `@supports` rule in CSS checks if a specific CSS property is supported by the browser. If the condition is true, the corresponding block of code is executed; otherwise, it is not. It allows you to apply styles conditionally based on feature support.

### Syntax:
```css
@supports (condition) {
  /* Style you want to apply */
}
```

### Keywords Used with @supports:
1. **not**: Checks for the absence of support for a feature.
2. **and**: Checks if multiple conditions are true.
3. **or**: Checks if at least one condition is true.

### Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>@support</title>
  <style>
    :root{
      --test : green;
    }
    @supports (--test : green){
      body{
        background: var(--test);
      }
    }
  </style>
</head>
<body>

</body>
</html>
```

In this example, the `@supports (--test : green)` checks if custom properties (CSS variables) are supported by the browser. If supported, it applies a green background color to the body.


















# CSS :placeholder-shown

The `:placeholder-shown` pseudo-class in CSS selects an input or textarea element that is currently displaying placeholder text. Unlike the `::placeholder` pseudo-element, which styles the placeholder text itself, `:placeholder-shown` targets the input field when the placeholder is visible.

### Syntax:
```css
:placeholder-shown {
   /* CSS Property */ 
}
```

### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>:placeholder-shown</title>
	<style>
    body{
			font-family: arial;
			font-size: 20px;
			line-height: 24px;
		}
    h1{
      text-align: center;
      margin-bottom: 50px;
    }

    input{
      font-size: 20px;
      border: 3px solid black;
      width: 300px;
      padding: 5px;
    }
		input[type="text"]:placeholder-shown{
			border: 3px solid red;
		}

  </style>
</head>
<body>
  <h1>:placeholder-shown</h1>

  <form action="">
    <input type="text" placeholder="Enter Name"><br><br>
    <input type="text" placeholder="Enter Address"><br><br>
    <input type="number" placeholder="Enter Percentage"><br><br>
    <input type="email" placeholder="Enter Email"><br><br>
		<input type="month" placeholder="Enter Email"><br><br>
  </form>
</body>
</html>
```

In this example, when the placeholder text is shown in any text input field, the border of the input will turn red. This is achieved using the `:placeholder-shown` pseudo-class.
















# CSS List Style Type : String

The `list-style-type` property in CSS allows you to specify the type of list marker to be used for a list. This example demonstrates how you can use a custom string as the list marker.

### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<title>:placeholder-shown</title>
	<style>
    body{
			font-family: arial;
			font-size: 20px;
			line-height: 24px;
		}
        h1{
            text-align: center;
            margin-bottom: 50px;
        }
		ul{
			list-style-type: "? ";
			list-style-position: inside;
			line-height: 35px;
		}

  </style>
</head>
<body>
  <h1>list-style-type : string</h1>

  <ul>
    <li>Lorem ipsum dolor sit amet.</li>
    <li>Lorem ipsum dolor sit amet.</li>
    <li>Lorem ipsum dolor sit amet.</li>
    <li>Lorem ipsum dolor sit amet.</li>
    <li>Lorem ipsum dolor sit amet.</li>
  </ul>
</body>
</html>
```

In this example, the list uses a custom string `"? "` as the marker for each list item. The `list-style-type` property is set to `"? "` to customize the list marker.








# CSS Scroll-Behavior

The `scroll-behavior` property specifies whether to smoothly animate the scroll position, instead of a straight jump, when the user clicks on a link within a scrollable box.

## Syntax
```css
scroll-behavior: auto|smooth|initial|inherit;
```

## Property Values

| Value    | Description                                                                                     |
|----------|-------------------------------------------------------------------------------------------------|
| `auto`   | Allows a straight jump "scroll effect" between elements within the scrolling box. This is default. |
| `smooth` | Allows a smooth animated "scroll effect" between elements within the scrolling box.              |
| `initial`| Sets this property to its default value.                                                        |
| `inherit`| Inherits this property from its parent element.                                                 |
```

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
  html{
    scroll-behavior: smooth;
  }
  body {
    background-color: white;
    margin: 0;
    font-family:arial;
    /*height: 100vh;
    overflow: hidden;*/
  }

  nav {
    background-color: #000;
    display: block;
    padding: 1em 0;
    text-align: center;
    position:sticky;
    top: 0;
  }
  nav a {
    color: #fff;
    margin: 0 1em;
    text-decoration: none;
  }
  nav a{
    font-size: 30px;
  }

  .scrolling-box {
    background-color: #eaeaea;
    display: block;
    height: 200px;
    overflow-y: scroll;

    text-align: center;

    width: 100%;
    height: 100%;
  }

  section {
    padding-top: 70px;
  }
  section h2{
    text-align: center;
  }
  </style>
</head>
<body>

<nav>
  <a href="#1">1</a>
  <a href="#2">2</a>
  <a href="#3">3</a>
</nav>

  <section id="1">
    <h2>Section 1</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, itaque at nam quibusdam qui tenetur accusamus quas maxime expedita repellat sed fugit eius ipsam dignissimos quasi excepturi, beatae? Eveniet 
  </section>

  <section id="2">
    <h2>Section 2</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facilis enim eos iusto accusantium repellat facere quam pariatur excepturi animi voluptatum harum, ab officia hic libero placeat inventore nemo quod! Odio reiciendis consectetur quasi autem ipsam, natus nisi suscipit eligendi! Necessitatibus dolores eum maxime, omnis facilis aliquam ipsum tenetur, molestias ipsam dolorum illo hic eos aperiam vitae quasi ipsa! Hic incidunt corporis sed autem cumque? Accusantium hic cum, quaerat! Excepturi velit odio assumenda commodi saepe quod ab aut accusantium ducimus sint impedit, vitae dolores doloribus iusto deleniti maxime accusamus omnis at autem a? Ut ipsum odio qui culpa eligendi 
  </section>

  <section id="3">
    <h2>Section 3</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident asperiores unde, deserunt vel, voluptas, fugiat beatae earum sed, necessitatibus officia itaque! Nulla asperiores ullam maxime doloribus tenetur laborum adipisci quisquam excepturi at sapiente, nam, perspiciatis aliquam delectus id hic dolorum officia accusamus iure alias tempora aperiam possimus. Adipisci enim asperiores incidunt sapiente sit voluptas alias necessitatibus, dicta corporis voluptatem modi, odio ducimus, laborum! Eos perspiciatis alias tenetur iste dolore, quia quos impedit commodi ipsam nulla officia quod nostrum odio, officiis repellendus natus neque nesciunt, nobis, vero nisi totam aliquid. Nulla earum deleniti delectus corporis voluptatum, necessitatibus id, fugit iure obcaecati ipsum perferendis ut qu
  </section>

</body>
</html>

```










# CSS Scroll-Snap

The `scroll-snap-type` property specifies how the elements will snap into focus when you stop scrolling and in what direction. To achieve scroll snap behavior, the `scroll-snap-type` property must be set on the parent element, and the `scroll-snap-align` property must be set on the child elements.

### Syntax

```css
scroll-snap-type: none|x|y|block|inline|both|mandatory|proximity|initial|inherit;
```

### Property Values

| Value       | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `none`      | No scroll snap effect. This is the default.                                 |
| `x`         | Scroll snap effect is set on the x-axis.                                    |
| `y`         | Scroll snap effect is set on the y-axis.                                    |
| `block`     | Scroll snap effect is set on the block direction.                           |
| `inline`    | Scroll snap effect is set on the inline direction.                          |
| `both`      | Scroll snap effect is set on both x- and y-axis.                            |
| `mandatory` | Scroll will automatically move to snap point after the scroll action is finished. |
| `proximity` | Similar to `mandatory`, but not as strict. Scroll will automatically move to snap point after scroll action is finished, but in-between snap points, there is an area without the snap effect. Depends on browser parameters. |
| `initial`   | Sets this property to its default value.                                    |
| `inherit`   | Inherits this property from its parent element.                             |
``

# HTML Example: Scroll Snap

This HTML example demonstrates how to create a scrollable page with sections that snap into focus when scrolling, using the `scroll-snap-type` and `scroll-snap-align` properties.

### Code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Scroll Snap</title>
  <style>
  html{
    scroll-snap-type : y proximity;
  }
  body {
    margin: 0;
    font-family:arial;
  }

  div.section {
    padding: 60px 40px;
    min-height: 100vh;
    scroll-snap-align : start;
  }
  div.section h2{
    font-size: 30px;
    text-align: center;
  }
  #section1{
    background-color: #fad390;
  }
  #section2{
    background-color: #82ccdd;
  }
  #section3{
    background-color: #b8e994;
  }
  #section4{
    background-color: #FDA7DF;
  }

  </style>
</head>
<body>

  <div class="section" id="section1">
    <h2>Section 1</h2>
    Lorem ipsum dolor sit aquo et fuga qui, exercitationem ratione asperiores debitis eos ad dolorum ipsa temporibus quam delectus, dolor cupiditate eius voluptatem quod tenetur suscipit necessitatibus a? Voluptatum officiis possimus veniam delectus placeat incidunt quis labore excepturi nam fugit, dolore magnam, laudantium dolor voluptatem! Assumenda debitis cum recusandae, quibusdam vel ratione, perspiciatis quod accusantium adipisci doloremque numquam animi. Veritatis consectetur accusamus maxime quos assumenda minima!
  </div>
  <div class="section" id="section4">
    <h2>Section 4</h2>
    Lorem ipsum dolor sit amet, cassumenda minima!
  </div>

</body>
</html>
```

### Explanation:
- The `scroll-snap-type: y proximity;` property on the `html` element enables vertical scroll snapping with proximity-based snapping behavior.
- The `scroll-snap-align: start;` on each `.section` ensures that each section aligns to the top when scrolling.





















# CSS File-Selector-Button Pseudo Element

The `::file-selector-button` is a CSS pseudo-element that targets the file input button (`<input type="file">`) in HTML. This is commonly used to customize the file upload button’s appearance in forms.

### Code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>File Selector Button</title>
  <style>
    input[type=file]::file-selector-button{
      background-color: #a28bfe;
      border: 1px solid #6c5ce7;
      border-radius: 4px;
      padding: 4px 10px;
      color: #fff;
    }
    input[type=file]::file-selector-button:hover{
      background-color: #81ecec;
      border: 1px solid #00cec9;
    }
    input[type=file]::-webkit-file-upload-button{
      background-color: #a28bfe;
      border: 1px solid #6c5ce7;
      border-radius: 4px;
      padding: 4px 10px;
    }
    input[type=file]::-webkit-file-upload-button:hover{
      background-color: #81ecec;
      border: 1px solid #00cec9;
    }
  </style>
</head>
<body>
  <form action="">
    <label>Upload File</label>
    <input type="file" id="fileUpload">
  </form>
</body>
</html>
```

### Explanation:
- The `::file-selector-button` pseudo-element is used to style the file input button. 
- The `background-color`, `border`, and `padding` properties are applied to change the appearance of the button.
- The `hover` state changes the button's color when the user hovers over it.











```markdown
# CSS Backdrop Filter

The `backdrop-filter` property in CSS is used to apply graphical effects to the area behind an element, rather than the element itself. This can be used to create effects like blur, brightness, or contrast on the background, eliminating the need for an extra element to style the background separately.

### Syntax:
```css
backdrop-filter: blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | none | initial | inherit;
```

### Property Values:

- **blur()**: Applies a Gaussian blur to the background. The default value is `0`, which means no blur.
- **brightness()**: Adjusts the lightness or darkness of the background. Values over 100% brighten the image, and values below 100% darken it.
- **contrast()**: Changes the contrast of the background. The default is 100%, and values below 0% will black out the image.
- **drop-shadow()**: Adds a drop shadow effect. It takes horizontal, vertical shadow amounts, spread, and color.
- **grayscale()**: Converts the image to black and white. `0%` means the original image, and `100%` means completely grayscale.
- **hue-rotate()**: Applies a hue rotation to the background, shifting its color values.
- **invert()**: Inverts the background colors. `0%` means the original, and `100%` fully inverts the colors.
- **opacity()**: Adjusts the opacity of the background. `0%` is fully transparent, and `100%` is fully opaque.
- **saturate()**: Controls the saturation of the background. `0%` means unsaturated (grayscale), and values above 100% increase saturation.
- **sepia()**: Applies a sepia effect, giving a warm tone to the background. `0%` is the original, and `100%` is fully sepia.
- **none**: No effect is applied.
- **initial**: Sets the property to its default value.
- **inherit**: Inherits the property value from the parent element.

### Code Example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Text Underline Position</title>
  <style>
    #container {
    	width: 600px;
    	height: 600px;
    	border: 1px solid #000;
    	background: url(https://source.unsplash.com/user/erondu/1600x900) no-repeat;

		display: flex;
		align-items: center;
		justify-content: center;
    }
    #inner {
    	color: #fff;
    	text-align: center;
		width: 400px;
		height: 250px;
		border: 2px solid #fff;
		border-radius: 5px;
		backdrop-filter: blur(4px) saturate(70%);
    }
  </style>
</head>
<body>
 	<div id="container">
 		<div id="inner">
 			<h1>Yahoo Baba</h1>
 		</div>
 	</div>
</body>
</html>
```

### Explanation:
- The `backdrop-filter` property is applied to the `#inner` element, which applies a blur and saturation effect to the background image behind it.















# CSS3 `:is()` Pseudo-Class

The `:is()` pseudo-class in CSS is used to simplify complex selectors by grouping multiple selectors together. This allows for a more efficient way to apply the same styles to various elements without repeating the styles for each selector.

### Syntax:
```css
:is(selector1, selector2, ...)
```

The `:is()` function accepts a comma-separated list of selectors, and it matches any element that matches one of the selectors in the list.

### Code Example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>:is Pseudo Class</title>
  <style>
    /* Grouping selectors with :is() */
    :is(#test1, #test2) :is(h1, p) {
      font-family: arial;
      color: red;
    }

    /* Applying hover effect using :is() */
    :is(#test1, #test2) p:hover {
      color: green;
    }
  </style>
</head>
<body>
	<h1>Heading Outside Div</h1>
 	<div id="test1">
		<h1>Section One</h1>
		<h2>Sub Heading</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula risus, fermentum a elit quis, scelerisque bibendum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et enim diam. Quisque vel lorem rutrum, convallis nunc id, facilisis nibh. Phasellus hendrerit ornare mi ut pretium. Nam pulvinar aliquet nulla nec vestibulum. In ut turpis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
		<h3>Sub Heading 2</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula risus, fermentum a elit quis</p>
	</div>
	<div id="test2">
		<h1>Section Two</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula risus, fermentum a elit quis, scelerisque bibendum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et enim diam. Quisque vel lorem rutrum, convallis nunc id, facilisis nibh. Phasellus hendrerit ornare mi ut pretium. Nam pulvinar aliquet nulla nec vestibulum. In ut turpis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
	</div>
</body>
</html>
```

### Explanation:
- The first rule targets the `h1` and `p` elements inside both the `#test1` and `#test2` divs, applying a red font color and Arial font family.
- The second rule changes the color of any `p` element inside the `#test1` or `#test2` div to green when hovered over.














# CSS Text-orientation

The `text-orientation` property in CSS is used to specify the orientation of characters when the text is displayed vertically. This property is effective only in vertical writing mode and does not affect horizontal text.

### Property Values:

| **Value**               | **Description**                                                                 |
|-------------------------|---------------------------------------------------------------------------------|
| `mixed`                 | Default value. It rotates characters 90° clockwise, setting vertical text naturally. |
| `upright`               | Keeps horizontal scripts upright and treats vertical scripts as left-to-right.  |
| `sideways`              | Rotates the text 90° clockwise, displaying the text horizontally. This value works only in Firefox. |
| `sideways-right`        | Alias for `sideways`, kept for compatibility.                                   |
| `use-glyph-orientation` | Deprecated and no longer used.                                                 |
| `initial`               | Sets the property to its default value.                                         |
| `inherit`               | Inherits the property from its parent element.                                  |

### Example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Text-Orientation</title>
  <style>
    #test {
		width: 550px;
		border: 2px solid #000;
		font: 17px arial;
		padding: 10px;
		writing-mode: vertical-lr;
		text-orientation: upright;
		/*text-orientation: mixed;*/
	}
  </style>
</head>
<body>
 	<div id="test">
		<h1>Yahoo Baba</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula risus, fermentum a elit quis, scelerisque bibendum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et enim diam. Quisque vel lorem rutrum, convallis nunc id, facilisis nibh. Phasellus hendrerit ornare mi ut pretium. Nam pulvinar aliquet nulla nec vestibulum. In ut turpis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
	</div>
</body>
</html>
```

### Explanation:
- The `#test` div uses the `writing-mode: vertical-lr;` property to set the text flow vertically.
- The `text-orientation: upright;` property ensures that the text appears in an upright position in the vertical writing mode.
```






















```

# CSS :focus-within Pseudo Class

The `:focus-within` pseudo-class selects an element that contains a focused child element. This means the CSS rules are applied when any child element (like an input or link) within the element receives focus.

### Syntax:
```css
:focus-within {
    /* CSS Properties */
}
```

### Example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>:focus-within</title>
  <style>
    *{
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	body{
		font-family: Roboto, Helvetica, Arial;
		line-height: 1.4;
		padding: 20px 10%;
		background: #3c889b;
	}
	
	form{
		background: white;
	}
    form:focus-within {
        background: #ffeaa7;
    }

    form header {
        padding: 2rem;
    }

    form header div {
        font-size: 90%;
        color: #999;
    }

    form header h2 {
        margin: 0 0 5px 0;
    }

    form > div {
        clear: both;
        overflow: hidden;
        padding: 0.5rem 2rem;
    }

    form > div:focus-within {
        background: #81ecec;
    }

    form > div:last-child {
        padding-bottom: 2rem;
    }

    form > div > fieldset > div > div {
        margin: 0 0 5px 0;
    }

    form > div > label, legend {
        width: 25%;
        float: left;
        padding-right: 10px;
        font-weight: bold;
    }

    form > div > div, form > div > fieldset > div {
        width: 75%;
        float: right;
    }

    form > div > fieldset label {
        font-size: 90%;
    }

    fieldset {
        border: 0;
        padding: 0;
    }

    input[type=text], input[type=email], input[type=url], input[type=password], textarea {
        width: 100%;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }

    input[type=text], input[type=email], input[type=url], input[type=password] {
        width: 50%;
    }

    input[type=text]:focus, input[type=email]:focus, input[type=url]:focus, input[type=password]:focus, textarea:focus {
        outline: 0;
        border-color: #4697e4;
    }
  </style>
</head>
<body>
  <form action="#">
    <header>
      <h2>CSS :focus-within Pseudo Class</h2>
    </header>
    <div>
      <label for="fullname">Full Name</label>
      <div>
        <input id="fullname" type="text" value="" autocomplete="off">
      </div>
    </div>
    <div>
      <label for="fullname">Email</label>
      <div>
        <input id="fullname" type="email" value="" autocomplete="off">
      </div>
    </div>
    <div>
      <fieldset>
        <legend>Gender</legend>
        <div>
          <div>
            <input type="radio" name="gender">
            <label for="">Male</label>
          </div>
          <div>
            <input type="radio" name="gender">
            <label for="">Female</label>
          </div>
        </div>
      </fieldset>
    </div>
    <div>
      <fieldset>
        <legend>Hobbies</legend>
        <div>
          <div>
            <input type="checkbox" name="hobbies">
            <label for="">Travel</label>
          </div>
          <div>
            <input type="checkbox" name="hobbies">
            <label for="">Reading Books</label>
          </div>
          <div>
            <input type="checkbox" name="hobbies">
            <label for="">Photography</label>
          </div>
        </div>
      </fieldset>
    </div>
  </form>
</body>
</html>
```

### Explanation:
- The `form:focus-within` selector changes the background color of the form when any child element inside the form is focused.
- The `form > div:focus-within` selector changes the background of the div to a different color when any child element inside the div is focused.
```















```
# CSS Display Table

The CSS `display` property is used to set whether an element is treated as a block or inline box and the layout used for its children, such as flow layout, grid, or flex.

The `table` value of the `display` property is used to define an element as a table.

- The `table-cell` value is used to define an element as a table cell.
- The `table-row` value is used to define an element as a table row.

You can use the `table-layout` CSS property to set the algorithm used to lay out `<table>` cells, rows, and columns. By default, most browsers use an automatic table layout algorithm, which adjusts the widths of the table and its cells to fit the content.

### Example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Display : Table</title>
  <style>
    body{
		font-family: arial;
		font-size: 20px;
		line-height: 24px;
	}
	h1{
		text-align: center;
		margin-bottom; 20px;
	}
	#table{
		display: table;
		width: 600px;
		border: 1px solid #000;
		margin: 0 auto;
	}
	.row{
		display: table-row;
	}
	.col{
		border: 1px solid #000;
		padding: 10px;
		display: table-cell;
	}
	#table-header{
		display: table-header-group;
		background: lightblue;
		text-align: center;
		font-weight: bold;
	}
	#table-footer{
		display: table-footer-group;
		background: lightgreen;
	}
	#row-group{
		/*background: pink;*/ 
		display: table-row-group;
	}
	#table-colgroup{
		display: table-column-group;
	}
	.table-col{
		display: table-column;
	}
	.col-2{
		background: pink;
		width: 400px;
	}
	.col-1{
		background: yellowgreen;
	}
	.caption{
		display: table-caption;
		text-align: center;
		text-transform: uppercase;
		color: red;
	}
  </style>
</head>
<body>
	<h1>Display : Table</h1>
 	
	<div id="table">
		<div class="caption">
			<h3>Student Information</h3>
		</div>
		<div id="table-colgroup">
			<div class="table-col col-1">Col 1</div>
			<div class="table-col col-2">Col 2</div>
			<div class="table-col col-3">Col 3</div>
		</div>
		<div id="table-header">
			<div class="col">Roll No.</div>
			<div class="col">Student Name</div>
			<div class="col">Age</div>
		</div>
		<div id="row-group">
			<div class="row">
				<div class="col">1</div>
				<div class="col">Yahoo Baba</div>
				<div class="col">25</div>
			</div>
			<div class="row">
				<div class="col">2</div>
				<div class="col">Salman Khan</div>
				<div class="col">24</div>
			</div>
			<div class="row">
				<div class="col">3</div>
				<div class="col">Shahid Kapoor</div>
				<div class="col">23</div>
			</div>
		</div>
		<div id="table-footer">
			<div class="col"></div>
			<div class="col">Total Records :</div>
			<div class="col">3</div>
		</div>
	</div>
</body>
</html>
```

### Explanation:
- The `#table` div is displayed as a table with borders.
- The `#table-header`, `#table-footer`, and `#row-group` are used to define the respective parts of the table.
- The `display: table-cell` property is applied to the `.col` class to make the elements act as table cells.
- The `caption` class is used to display a caption for the table, centered and with a red color.
