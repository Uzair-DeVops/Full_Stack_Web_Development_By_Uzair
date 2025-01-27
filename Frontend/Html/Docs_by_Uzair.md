
# HTML Introduction
HTML is the standard markup language for creating Web pages.

## What is HTML?
- HTML stands for Hyper Text Markup Language.
- HTML is the standard markup language for creating Web pages.
- HTML describes the structure of a Web page.
- HTML consists of a series of elements.
- HTML elements tell the browser how to display the content.
- HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

## A Simple HTML Document

### Example
```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

### Example Explained
- The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document.
- The `<html>` element is the root element of an HTML page.
- The `<head>` element contains meta information about the HTML page.
- The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab).
- The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The `<h1>` element defines a large heading.
- The `<p>` element defines a paragraph.

```




```
# HTML Elements
An HTML element is defined by a start tag, some content, and an end tag.

## HTML Elements
The HTML element is everything from the start tag to the end tag:

```html
<tagname>Content goes here...</tagname>
```

Examples of some HTML elements:

```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

| Start tag | Element content | End tag |
| --------- | --------------- | ------- |
| `<h1>`    | My First Heading | `</h1>` |
| `<p>`     | My first paragraph. | `</p>` |
| `<br>`    | none            | none    |

**Note:** Some HTML elements have no content (like the `<br>` element). These elements are called **empty elements**. Empty elements do not have an end tag!

## Nested HTML Elements
HTML elements can be nested (this means that elements can contain other elements).

All HTML documents consist of nested HTML elements.

The following example contains four HTML elements (`<html>`, `<body>`, `<h1>`, and `<p>`):

### Example
```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

### Example Explained
- The `<html>` element is the root element and it defines the whole HTML document.  
  It has a start tag `<html>` and an end tag `</html>`.
- Inside the `<html>` element, there is a `<body>` element:
  ```html
  <body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
  </body>
  ```
  The `<body>` element defines the document's body. It has a start tag `<body>` and an end tag `</body>`.
- Inside the `<body>` element, there are two other elements: `<h1>` and `<p>`:
  ```html
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
  ```
  The `<h1>` element defines a heading. It has a start tag `<h1>` and an end tag `</h1>`.
  The `<p>` element defines a paragraph. It has a start tag `<p>` and an end tag `</p>`.

## Never Skip the End Tag
Some HTML elements will display correctly, even if you forget the end tag:

### Example
```html
<html>
<body>

<p>This is a paragraph
<p>This is a paragraph

</body>
</html>
```

However, **never rely on this!** Unexpected results and errors may occur if you forget the end tag!

## Empty HTML Elements
HTML elements with no content are called empty elements.

The `<br>` tag defines a line break and is an empty element without a closing tag:

### Example
```html
<p>This is a <br> paragraph with a line break.</p>
```

## HTML is Not Case Sensitive
HTML tags are not case sensitive: `<P>` means the same as `<p>`.

The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.

## Additional Data

### Common Empty HTML Elements
- `<br>`: Line break
- `<img>`: Image
- `<hr>`: Horizontal rule
- `<input>`: Input field
- `<meta>`: Metadata for a document
```







```
# HTML Attributes
HTML attributes provide additional information about HTML elements.

## HTML Attributes
- All HTML elements can have attributes.
- Attributes provide additional information about elements.
- Attributes are always specified in the start tag.
- Attributes usually come in name/value pairs like: `name="value"`

## The `href` Attribute
The `<a>` tag defines a hyperlink. The `href` attribute specifies the URL of the page the link goes to:

### Example
```html
<a href="https://www.w3schools.com">Visit W3Schools</a>
```

## Additional Data

### Common HTML Attributes
- `href`: Specifies the URL for a hyperlink.
- `src`: Specifies the source file for an image.
- `alt`: Provides alternative text for an image.
- `class`: Defines one or more class names for an element (used for CSS or JavaScript).
- `id`: Specifies a unique identifier for an element.
- `style`: Defines inline CSS for an element.
- `target`: Specifies where to open the linked document (e.g., `_blank` for a new tab).
```























































```
## **HTML Formatting**  

HTML formatting is used to enhance the appearance of text on a web page. It includes various tags that define how text should be displayed, such as bold, italic, underlined, and highlighted text.

### **Markdown Format**

# HTML Headings

To create headings in HTML, you can use the `<h1>` to `<h6>` tags. The `<h1>` tag defines the most important heading and `<h6>` defines the least important heading. You should only use one `<h1>` per page.

Here is an example of how to create a header using HTML:

````html
<h1>Hello World</h1>
<h2>Hello World</h2>
<h3>Hello World</h3>
<h4>Hello World</h4>
<h5>Hello World</h5>
<h6>Hello World</h6>

# HTML Paragraphs
To create paragraphs in HTML, you can use the `<p>` tag. The `<p>` element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

````html
<p>Quisque iaculis consectetur odio. Praesent commodo.</p>
<p>Vestibulum et dolor pellentesque magna pulvinar fermentum a at eros. Pellentesque vel imperdiet enim. Phasellus eget volutpat purus.</p>
````

# HTML `<b>` Tag

The `<b>` tag bolds the text given inside it to draw the reader's attention to the important text.

````html
<b>Hello World</b>
````

# HTML `<i>` Tag

The HTML `<i>` element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.

````html
<i>Hello World</i>
````

# HTML `<u>` Tag

The contents inside this tag are displayed with an underline.

````html
<u>Hello World</u>
````

# HTML `<s>` Tag

The `<s>` HTML element is used to represent text that is no longer accurate or relevant. The text will be displayed with a line through it.

Here is an example of how to use the `<s>` tag:

````html
<s>Hello World</s>
````

# Align Property

The align attribute is used to specify the alignment of text content of an element. There are four align types:  
**Align Types:** Left, Right, Center, Justify.

Here is an example of how to use the align attribute with a center value:

````html
<html>
  <head>
    <title>First Web Page</title>
  </head>
  <body>
    <h1 align="center">Hello World</h1>
    <p align="center">
      Quisque iaculis consectetur odio. Praesent commodo, est nec suscipit ultricies, nulla eros 
      molestie mauris, eu tincidunt ex nunc non ipsum. Maecenas ornare semper ante, volutpat euismod 
      arcu faucibus id. Vivamus ut nisi nec tellus condimentum auctor a eu dui. Quisque nunc urna, 
      euismod sit amet pharetra vitae, mollis vitae leo. Aenean viverra consequat nibh.
    </p>
  </body>
</html>
````

# HTML `<sup>` Tag

The `<sup>` HTML element is used to represent superscript text. Superscript text appears half a character above the normal line and is sometimes rendered in a smaller font.

````html
<p>12<sup>th</sup></p>
````

# HTML `<sub>` Tag

The `<sub>` HTML element is used to represent subscript text. Subscript text appears half a character below the normal line and is sometimes rendered in a smaller font.

````html
<p>H<sub>2</sub>O</p>
````

# HTML `<br/>` Tag

The `<br>` HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.

````html
<p>Quisque iaculis consectetur odio.<br/> Praesent commodo, est nec suscipit ultricies, <br/>nulla eros molestie mauris, eu <br/>tincidunt ex nunc non ipsum. Maecenas ornare semper <br/>ante, volutpat euismod arcu faucibus id.</p>
````

# HTML Non-breaking Space

The non-breaking space is a special character in HTML that prevents the browser from breaking a line at that point. It is useful for writing text that should not be broken by line breaks or other whitespace.

````html
<h1>Hello &nbsp;&nbsp;&nbsp; World</h1>
````

### **Common HTML Formatting Tags and Their Uses:**

1. **`<b>`** – Makes text bold (without semantic meaning).  
   **Example:**  

   ```html
   <p>This is <b>bold</b> text.</p>
   ```

2. **`<strong>`** – Emphasizes text with strong importance (bold with semantic meaning).  
   **Example:**  

   ```html
   <p>This is <strong>important</strong> text.</p>
   ```

3. **`<i>`** – Italicizes text (without semantic meaning).  
   **Example:**  

   ```html
   <p>This is <i>italic</i> text.</p>
   ```

4. **`<em>`** – Emphasizes text in italics (with semantic meaning).  
   **Example:**  

   ```html
   <p>This is <em>emphasized</em> text.</p>
   ```

5. **`<u>`** – Underlines text.  
   **Example:**  

   ```html
   <p>This is <u>underlined</u> text.</p>
   ```

6. **`<mark>`** – Highlights text.  
   **Example:**  

   ```html
   <p>This is <mark>highlighted</mark> text.</p>
   ```

7. **`<small>`** – Reduces text size.  
   **Example:**  

   ```html
   <p>This is <small>small</small> text.</p>
   ```

8. **`<del>`** – Displays deleted text with a strikethrough.  
   **Example:**  

   ```html
   <p>This is <del>deleted</del> text.</p>
   ```

9. **`<ins>`** – Displays inserted text with an underline.  
   **Example:**  

   ```html
   <p>This is <ins>inserted</ins> text.</p>
   ```

10. **`<sub>`** – Subscript text (smaller and lower).  
    **Example:**  

    ```html
    <p>Water formula: H<sub>2</sub>O</p>
    ```

11. **`<sup>`** – Superscript text (smaller and higher).  
    **Example:**  

    ```html
    <p>E = mc<sup>2</sup></p>
    ```

12. **`<abbr>`** – Represents an abbreviation or acronym with a tooltip.  
    **Example:**  

    ```html
    <p><abbr title="World Health Organization">WHO</abbr> was established in 1948.</p>
    ```

13. **`<blockquote>`** – Indicates a long quotation from another source.  
    **Example:**  

    ```html
    <blockquote>
      "The journey of a thousand miles begins with one step." – Lao Tzu
    </blockquote>
    ```

14. **`<q>`** – Represents a short quotation.  
    **Example:**  

    ```html
    <p>As they say, <q>practice makes perfect.</q></p>
    ```

15. **`<cite>`** – Represents the title of a work, such as a book or article.  
    **Example:**  

    ```html
    <p><cite>The Great Gatsby</cite> is a novel by F. Scott Fitzgerald.</p>
    ```

16. **`<code>`** – Displays code snippets in a monospaced font.  
    **Example:**  

    ```html
    <p>Here is a code example: <code>console.log('Hello, world!');</code></p>
    ```

17. **`<pre>`** – Preformatted text that retains spaces and line breaks.  
    **Example:**  

    ```html
    <pre>
    function sayHello() {
        console.log("Hello, World!");
    }
    </pre>
    ```

---

### **Example of HTML Formatting Usage Together**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Formatting Example</title>
</head>
<body>
    <p>This is <b>bold</b> and <i>italic</i> text.</p>
    <p><strong>Important!</strong> Don't forget to <mark>highlight</mark> key points.</p>
    <p>Albert Einstein's equation: E = mc<sup>2</sup></p>
    <p><abbr title="Cascading Style Sheets">CSS</abbr> is used for styling.</p>
    <blockquote>"Success is not final, failure is not fatal."</blockquote>
</body>
</html>
```

# HTML `<font>` Tag

The HTML `<font>` tag was used to change the **color**, **size**, and **style** of text on a web page. It allows you to add style to your text, such as changing its appearance. However, it is **recommended to use CSS** instead of the `<font>` tag, as it is considered obsolete in modern HTML.

---

### Example of Using the `<font>` Tag

```html
<html>
  <head>
    <title>First Web Page</title>
  </head>

  <body>
     <h1><font color="red" size="1" face="arial,verdana">Hello World</font></h1>
     <h1><font color="green" size="2" face="arial,verdana">Hello World</font></h1>
     <h1><font color="blue" size="3" face="arial,verdana">Hello World</font></h1>
     <h1><font color="purple" size="4" face="arial,verdana">Hello World</font></h1>
     <h1><font color="#fd521e" size="5" face="arial,verdana">Hello World</font></h1>
     <h1><font color="#be2276" size="6" face="arial,verdana">Hello World</font></h1>
     <h1><font color="#4c4f6b" size="7" face="arial,verdana">Hello World</font></h1>
  </body>
</html>
```

---

### Attributes of `<font>` Tag

1. **`color`** – Specifies the color of the text. It can be a color name (e.g., "red") or a hexadecimal code (e.g., "#fd521e").
2. **`size`** – Sets the size of the font. Values range from 1 to 7, where 1 is the smallest and 7 is the largest.
3. **`face`** – Defines the font family. Common values include "Arial", "Verdana", or "Times New Roman". You can specify multiple font families as fallback options.

---

### Example of Setting Font Size

```html
<font size="3">This is a medium-sized text.</font>
```

---

### Example of Setting Font Face

```html
<font face="Georgia, serif">This is a text with Georgia font.</font>
```

---

### Example of Setting Font Color

```html
<font color="blue">This text is blue.</font>
<font color="#ff5733">This text has a custom color.</font>
```

---

### Recommended Web Safe Fonts

These fonts are widely available across most devices and browsers:

- **Arial** (sans-serif)
- **Verdana** (sans-serif)
- **Tahoma** (sans-serif)
- **Trebuchet MS** (sans-serif)
- **Times New Roman** (serif)
- **Georgia** (serif)
- **Garamond** (serif)

---

### Important Note

While the `<font>` tag was widely used in the past, it is now considered outdated. **CSS** should be used to style text for better control and accessibility. For example, use CSS like this:

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: blue;
}
```

# HTML Lists

HTML lists are used to specify lists of information. There are three different types of HTML lists:

1. **Ordered List or Numbered List (`<ol>`)**  
2. **Unordered List or Bulleted List (`<ul>`)**  
3. **Description List or Definition List (`<dl>`)**

---

## 1. Unordered HTML List

The HTML `<ul>` tag defines an unordered (bulleted) list.  
An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag. The list items will be marked with bullets (small black circles) by default:

```html
<ul>
  <li>Orange</li>
  <li>Apple</li>
  <li>Grapes</li>
  <li>Banana</li>
  <li>Pineapple</li>
</ul>
```

### Unordered List with `type` Property

You can use the `type` attribute in the `<ul>` tag to specify the type of bullet point you want to use for each list item.  
Example of using different bullet types:

- **Types:** `disc`, `square`, `circle`

```html
<ul type="square">
  <li>Orange</li>
  <li>Apple</li>
  <li>Grapes</li>
  <li>Banana</li>
  <li>Pineapple</li>
</ul>
```

---

## 2. Ordered HTML List

To create an ordered list in HTML, you can use the `<ol>` tag.  
Each element of an ordered list is declared inside the `<li>` tag.  

### Example of an Ordered List

```html
<ol>
  <li>Orange</li>
  <li>Apple</li>
  <li>Grapes</li>
  <li>Banana</li>
  <li>Pineapple</li>
</ol>
```

### Ordered List with `type` and `start` Properties

You can use the `type` attribute in the `<ol>` tag to specify the type of numbering and the `start` attribute to specify the starting number.  

- **Types:** `A`, `a`, `i`, `I`, `1`

```html
<ol type="A" start="3">
  <li>Orange</li>
  <li>Apple</li>
  <li>Grapes</li>
  <li>Banana</li>
  <li>Pineapple</li>
</ol>

<ol type="a" start="4">
  <li>Orange</li>
  <li>Apple</li>
  <li>Grapes</li>
  <li>Banana</li>
  <li>Pineapple</li>
</ol>

<ol type="i" start="10">
  <li>Orange</li>
  <li>Apple</li>
  <li>Grapes</li>
  <li>Banana</li>
  <li>Pineapple</li>
</ol>

<ol type="I" start="100">
  <li>Orange</li>
  <li>Apple</li>
  <li>Grapes</li>
  <li>Banana</li>
  <li>Pineapple</li>
</ol>
```

---

## 3. HTML Description List

In HTML, you can create a description list using the `<dl>` tag. A description list is a list of terms and their descriptions.  

- **Terms** are declared inside the `<dt>` tag.  
- **Descriptions** are declared inside the `<dd>` tag.

### Example of a Description List

```html
<dl>
  <dt>Heading One</dt>
  <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta nunc sem, non tincidunt 
      quam accumsan eget. Integer non cursus est. Cras eu ex odio. Suspendisse euismod laoreet 
      porttitor. Pellentesque ac sem nec dolor ullamcorper gravida.</dd>
  <dt>Heading Two</dt>
  <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta nunc sem, non tincidunt 
      quam accumsan eget. Integer non cursus est. Cras eu ex odio. Suspendisse euismod laoreet 
      porttitor. Pellentesque ac sem nec dolor ullamcorper gravida.</dd>
  <dt>Heading Three</dt>
  <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta nunc sem, non tincidunt 
      quam accumsan eget. Integer non cursus est. Cras eu ex odio. Suspendisse euismod laoreet 
      porttitor. Pellentesque ac sem nec dolor ullamcorper gravida.</dd>
</dl>
```

---

## Additional Data

### Nested HTML Lists

HTML supports nested lists, allowing you to create lists within lists.  
Nested lists can be unordered or ordered.

#### Example of a Nested Unordered List

```html
<ul>
  <li>Fruits
    <ul>
      <li>Orange</li>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Spinach</li>
    </ul>
  </li>
</ul>
```

#### Example of a Nested Ordered List

```html
<ol>
  <li>Chapter 1
    <ol>
      <li>Introduction</li>
      <li>Basics</li>
    </ol>
  </li>
  <li>Chapter 2
    <ol>
      <li>Advanced Topics</li>
      <li>Summary</li>
    </ol>
  </li>
</ol>
```

# HTML `<marquee>` Tag

The `<marquee>` tag in HTML is used to create a scrolling or moving text or image effect. However, it is considered **obsolete and non-standard** in HTML5 and is **not recommended** for use.  

The `<marquee>` tag was supported by older web browsers, but modern browsers have phased out support for it.

---

## Basic Example

If you still wish to use the `<marquee>` tag, here's an example of its basic usage:

```html
<marquee>Hello World</marquee>
```

---

## Marquee with `behavior` Attribute

The `behavior` attribute defines how the marquee scrolls.  

```html
<marquee behavior="scroll">Hello World</marquee>
<marquee behavior="slide">Hello World</marquee>
<marquee behavior="alternate">Hello World</marquee>
```

- **scroll** – The text scrolls continuously in the specified direction.
- **slide** – The text slides once and stops.
- **alternate** – The text moves back and forth.

---

## Marquee with `scrollamount` Attribute

The `scrollamount` attribute sets the speed of the scrolling motion.  

```html
<marquee behavior="scroll" scrollamount="5">Hello World</marquee>
<marquee behavior="slide" scrollamount="10">Hello World</marquee>
<marquee behavior="alternate" scrollamount="2">Hello World</marquee>
```

- The value of `scrollamount` determines the speed of the scroll.

---

## Marquee with `direction` Attribute

The `direction` attribute specifies the scrolling direction.  

```html
<marquee behavior="scroll" scrollamount="5" direction="left">Hello World</marquee>
<marquee behavior="slide" scrollamount="10" direction="right">Hello World</marquee>
<marquee behavior="alternate" scrollamount="2" direction="up">Hello World</marquee>
<marquee behavior="scroll" scrollamount="8" direction="down">Hello World</marquee>
```

- **left** – Scrolls from right to left (default).
- **right** – Scrolls from left to right.
- **up** – Scrolls from bottom to top.
- **down** – Scrolls from top to bottom.

---

## Marquee with `loop` Attribute

The `loop` attribute specifies how many times the marquee should repeat.  

```html
<marquee scrollamount="5" loop="3">Hello World</marquee>
```

- If the `loop` attribute is not specified, the marquee will scroll indefinitely.

---

## Marquee with `bgcolor` Attribute

The `bgcolor` attribute sets the background color of the marquee.  

```html
<marquee scrollamount="5" bgcolor="pink">Hello World</marquee>
```

---

## Marquee with `height` and `width` Attributes

The `height` and `width` attributes define the size of the marquee.  

```html
<marquee scrollamount="5" bgcolor="pink" height="50%" width="50%">Hello World</marquee>
```

---

## Additional Data

### Alternative to `<marquee>` Tag

Since the `<marquee>` tag is obsolete, it is recommended to use CSS for similar scrolling effects.

#### CSS Alternative Example

```html
<div class="scroll-text">Hello World</div>

<style>
  .scroll-text {
    white-space: nowrap;
    overflow: hidden;
    animation: marquee 5s linear infinite;
  }
  @keyframes marquee {
    from { transform: translateX(100%); }
    to { transform: translateX(-100%); }
  }
</style>
```

- **`white-space: nowrap;`** – Prevents text from wrapping.
- **`overflow: hidden;`** – Hides overflowing content.
- **`animation: marquee;`** – Creates the scrolling effect.

---

# HTML `<hr/>` Tag

The `<hr>` HTML element is used to create a **horizontal line** in an HTML page. It is often used to separate sections of a page.

### Example of `<hr>` Tag

```html
<html>
  <head>
    <title>First Web Page</title>
  </head>

  <body>
     <h1>Hello World</h1>
     <hr/>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta nunc sem, non tincidunt 
     quam accumsan eget. Integer non cursus est. Cras eu ex odio. Suspendisse euismod laoreet 
     porttitor. Pellentesque ac sem nec dolor ullamcorper gravida.
     </p>
  </body>
</html>
```

---

# HTML `<pre>` Tag

The `<pre>` HTML element is used to define **preformatted text**. The text inside a `<pre>` element is displayed in a **fixed-width font**, and it **preserves both spaces and line breaks**.

### Example of `<pre>` Tag

```html
<html>
  <head>
    <title>First Web Page</title>
  </head>

  <body>
     <pre>                Hello              World                 uzair.</pre>
  </body>
</html>
```

---

# HTML `<br/>` Tag

The `<br>` HTML element is used to insert **a line break** in the content. It is useful when you want to break text onto a new line without starting a new paragraph.

### Example of `<br>` Tag

```html
<html>
  <head>
    <title>First Web Page</title>
  </head>

  <body>
     <p>This is line one.<br/>This is line two.<br/>This is line three.</p>
  </body>
</html>
```

### Common Uses of `<br>`

- Breaking long lines of text.
- Creating space between lines in poems or addresses.
- Formatting content within paragraphs without extra margins.

---

# Additional Data

### Attributes of `<hr>` Tag

The `<hr>` tag supports several attributes to style the horizontal line:

```html
<hr color="blue" width="50%" size="3" align="center"/>
```

- **`color`** – Specifies the color of the line.
- **`width`** – Defines the width of the line (in percentage or pixels).
- **`size`** – Specifies the thickness of the line.
- **`align`** – Defines the alignment of the line (`left`, `center`, `right`).

---

### Additional Attributes of `<pre>` Tag

The `<pre>` tag can include additional attributes such as:

```html
<pre wrap="off">This is preformatted text with no wrapping.</pre>
```

- **`wrap`** – Defines whether text should wrap to the next line (`on`, `off`).

---

### Additional Attributes of `<br>` Tag

The `<br>` tag can include the following attribute:

```html
<p>This is an example of <br clear="all"/> line break with clear.</p>
```

- **`clear`** – Used to clear floating elements (`left`, `right`, `all`).

Example:

```html
<br clear="left"/>
```

This helps to clear content and prevent overlapping elements on a webpage.

# HTML `<img>` Tag

The `<img>` tag in HTML is used to **embed images** in an HTML document.

### Attributes of `<img>` Tag

1. **`src`** – Specifies the URL of the image.
2. **`alt`** – Specifies an alternate text for the image, which is displayed if the image cannot be loaded.
3. **`width`** – Specifies the width of the image.
4. **`height`** – Specifies the height of the image.

---

### Example of `<img>` Tag

```html
<html>
  <head>
    <title>Image Example</title>
  </head>

  <body>
     <h1>My Favorite Image</h1>
     <img src="example.jpg" alt="Beautiful Scenery" width="500" height="300"/>
  </body>
</html>
```

# HTML `<video>` Tag

The HTML `<video>` element is used to **show a video** on a web page.

---

### Example of `<video>` Tag

```html
<html>
  <head>
    <title>Video Tag</title>
  </head>

  <body>
    <video controls loop width="320" height="240" muted poster="IMAGE_PATH">
      <source src="VIDEO_PATH" type="video/mp4" />
    </video>
  </body>
</html>
```

---

### Explanation of Attributes

1. **`controls`** – Adds video controls like play, pause, and volume.
2. **`loop`** – Makes the video repeat indefinitely.
3. **`width` and `height`** – Specifies the video dimensions; if not set, the page may flicker during loading.
4. **`muted`** – Starts the video without sound.
5. **`poster`** – Defines an image to be shown before the video starts playing.
6. **`<source>`** – Allows specifying alternative video formats for better browser compatibility.

---

# Additional Data

### More Attributes of `<video>` Tag

```html
<video controls autoplay preload="auto">
  <source src="video.mp4" type="video/mp4"/>
  <source src="video.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>
```

#### Additional Attributes

- **`autoplay`** – Automatically starts playing the video when the page loads.
- **`preload`** – Specifies if and how the video should be loaded when the page loads:
  - `auto` – Load the video automatically.
  - `metadata` – Load only metadata (duration, dimensions).
  - `none` – Do not load the video until the user initiates it.
- **`poster`** – Defines an image displayed before the video starts playing.

---

### Example of Multiple Video Formats

To ensure better compatibility across browsers, provide multiple video formats.

```html
<video controls>
  <source src="video.mp4" type="video/mp4"/>
  <source src="video.ogg" type="video/ogg"/>
  <source src="video.webm" type="video/webm"/>
  Your browser does not support HTML5 video.
</video>
```

---

### Adding Text Captions with `<track>`

The `<track>` element provides captions, descriptions, or subtitles for videos.

```html
<video controls>
  <source src="movie.mp4" type="video/mp4"/>
  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English"/>
</video>
```

#### Attributes of `<track>`

- **`src`** – URL of the subtitle file.
- **`kind`** – Specifies the type of text track (`subtitles`, `captions`, `descriptions`).
- **`srclang`** – Language of the text track.
- **`label`** – Title for the track displayed to the user.

---

# HTML `<audio>` Tag

The HTML `<audio>` element is used to **play an audio file** on a web page. It allows embedding sound content, such as music or other audio streams.

---

### Example of `<audio>` Tag

```html
<html>
  <head>
    <title>Audio Tag</title>
  </head>

  <body>
    <audio controls autoplay loop>
      <source src="YOUR_FILE_PATH" type="audio/mpeg" />
    </audio>
  </body>
</html>
```

---

### Explanation of Attributes

1. **`controls`** – Adds audio controls like play, pause, and volume.
2. **`autoplay`** – Starts playing the audio automatically when the page loads.
3. **`loop`** – Repeats the audio file indefinitely.
4. **`<source>`** – Provides alternative audio file formats for compatibility.

---

# Additional Data

### More Attributes of `<audio>` Tag

```html
<audio controls muted preload="auto">
  <source src="audio.mp3" type="audio/mp3"/>
  <source src="audio.ogg" type="audio/ogg"/>
  Your browser does not support the audio tag.
</audio>
```

#### Additional Attributes

- **`muted`** – Starts playing the audio without sound.
- **`preload`** – Specifies how the audio should be loaded when the page loads:
  - `auto` – Loads the audio automatically.
  - `metadata` – Loads only metadata like duration and file size.
  - `none` – Audio will not load until the user starts it.

---

### Example of Multiple Audio Formats

To ensure compatibility across different browsers, use multiple formats.

```html
<audio controls>
  <source src="sound.mp3" type="audio/mpeg"/>
  <source src="sound.ogg" type="audio/ogg"/>
  <source src="sound.wav" type="audio/wav"/>
  Your browser does not support the audio element.
</audio>
```

---

### Example of Custom Fallback Message

If the browser doesn't support the audio element, a fallback message is displayed.

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg"/>
  Your browser does not support HTML5 audio. <a href="audio.mp3">Download the audio</a>.
</audio>
```

---

### Example of Audio Without Controls

```html
<audio autoplay>
  <source src="audio.mp3" type="audio/mpeg"/>
</audio>
```

# HTML `<a>` Tag

The HTML `<a>` tag is used to create hyperlinks. Hyperlinks are clickable links that allow users to navigate to other web pages or resources. The `href` attribute is essential as it specifies the destination URL of the link.

---

### Example of Using the `<a>` Tag

```html
<html>
  <head>
    <title>Anchor Tag</title>
  </head>
  <body>
    <a href="https://www.uzair..net">Go to uzair.</a>
  </body>
</html>
```

---

### Anchor Tag with `target` Attribute

The `target` attribute specifies where to open the linked document. The value `_blank` tells the browser to open the link in a **new window** or **new tab**.

---

### Example with `target="_blank"`

```html
<html>
  <head>
    <title>Anchor Tag</title>
  </head>
  <body>
    <a href="https://www.uzair..net" target="_blank">Go to uzair.</a>
  </body>
</html>
```

---

### Explanation

- **`href`** – The URL to which the link points.
- **`target="_blank"`** – Opens the linked page in a new tab or window.
  
The `<a>` tag is one of the most commonly used tags in HTML for navigation across websites.

I have checked the information based on your request and reviewed HTML documentation. Here's the summary including any additional relevant details:

---

### Additional Information on HTML `<a>` Tag

1. **`target` Attribute**:
   - When creating hyperlinks, the `target` attribute can be used to specify where the linked document should open.
   - The common values for the `target` attribute are:
     - `_blank`: Opens the link in a new window or tab.
     - `_self`: Opens the link in the same frame (default).
     - `_parent`: Opens the link in the parent frame.
     - `_top`: Opens the link in the full body of the window.

   **Example**:

   ```html
   <a href="https://www.example.com" target="_blank">Visit Example</a>
   ```

2. **`rel` Attribute**:
   - The `rel` attribute defines the relationship between the current document and the linked document.
   - This is important for security and SEO purposes.
   - For example, when using `target="_blank"`, you can use `rel="noopener noreferrer"` to ensure that the new tab doesn't have access to the linking page's window object, which helps prevent potential security risks.

   **Example**:

   ```html
   <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>
   ```

3. **`download` Attribute**:
   - The `download` attribute can be added to an `<a>` tag to indicate that the linked resource is meant to be downloaded.
   - When clicked, the file is downloaded instead of opened.

   **Example**:

   ```html
   <a href="path/to/file.pdf" download>Download PDF</a>
   ```

4. **Email with Pre-filled Information**:
   - In addition to `mailto:` links, you can also pre-fill the `cc` (carbon copy) and `bcc` (blind carbon copy) fields by including them in the URL.

   **Example**:

   ```html
   <a href="mailto:hello@uzair..net?subject=Hello World&cc=someone@domain.com&bcc=another@domain.com&body=this is just test">Contact Us</a>
   ```

### Internal Page Link

To create an internal link in HTML with the name attribute, you can use the `<a>` tag with the `href` attribute set to the value of the name attribute on the element you want to link to.  
Here is an example of how to create an internal link:

```html
<html>
  <head>
    <title>Anchor Tag</title>
  </head>
  <body>
    <a name="top"></a>
    <a href="#linkone">Go to Link One</a><br/>
    <a href="#linksecond">Go to Link Second</a>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet molestie odio. Integer auctor tincidunt massa sit amet lacinia. Sed non massa nec augue viverra blandit sed ac mauris. Aliquam pellentesque pulvinar quam, sit amet aliquam dui iaculis et. Praesent pulvinar rhoncus sollicitudin. Vivamus sed maximus sapien.</p>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet molestie odio. Integer auctor tincidunt massa sit amet lacinia. Sed non massa nec augue viverra blandit sed ac mauris. Aliquam pellentesque pulvinar quam, sit amet aliquam dui iaculis et. Praesent pulvinar rhoncus sollicitudin. Vivamus sed maximus sapien.</p>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet molestie odio. Integer auctor tincidunt massa sit amet lacinia. Sed non massa nec augue viverra blandit sed ac mauris. Aliquam pellentesque pulvinar quam, sit amet aliquam dui iaculis et. Praesent pulvinar rhoncus sollicitudin. Vivamus sed maximus sapien.</p>
 <h2><a name="linkone">Sub Heading One</a></h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet molestie odio. Integer auctor tincidunt massa sit amet lacinia. Sed non massa nec augue viverra blandit sed ac mauris. Aliquam pellentesque pulvinar quam, sit amet aliquam dui iaculis et. Praesent pulvinar rhoncus sollicitudin. Vivamus sed maximus sapien.</p>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet molestie odio. Integer auctor tincidunt massa sit amet lacinia. Sed non massa nec augue viverra blandit sed ac mauris. Aliquam pellentesque pulvinar quam, sit amet aliquam dui iaculis et. Praesent pulvinar rhoncus sollicitudin. Vivamus sed maximus sapien.</p>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet molestie odio. Integer auctor tincidunt massa sit amet lacinia. Sed non massa nec augue viverra blandit sed ac mauris. Aliquam pellentesque pulvinar quam, sit amet aliquam dui iaculis et. Praesent pulvinar rhoncus sollicitudin. Vivamus sed maximus sapien.</p>
 <a href="#top">GoTo Top</a>
 <h2><a name="linksecond">Sub Heading Second</a></h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet molestie odio. Integer auctor tincidunt massa sit amet lacinia. Sed non massa nec augue viverra blandit sed ac mauris. Aliquam pellentesque pulvinar quam, sit amet aliquam dui iaculis et. Praesent pulvinar rhoncus sollicitudin. Vivamus sed maximus sapien.</p>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet molestie odio. Integer auctor tincidunt massa sit amet lacinia. Sed non massa nec augue viverra blandit sed ac mauris. Aliquam pellentesque pulvinar quam, sit amet aliquam dui iaculis et. Praesent pulvinar rhoncus sollicitudin. Vivamus sed maximus sapien.</p>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet molestie odio. Integer auctor tincidunt massa sit amet lacinia. Sed non massa nec augue viverra blandit sed ac mauris. Aliquam pellentesque pulvinar quam, sit amet aliquam dui iaculis et. Praesent pulvinar rhoncus sollicitudin. Vivamus sed maximus sapien.</p>
 <a href="#top">GoTo Top</a>
  </body>
</html>
```

### Mail to link

To create a link to an email address in HTML, you can use the `<a>` tag with the `href` attribute set to “mailto:” followed by the email address.  
In this example, clicking on the link will open the default email client with the recipient set to “<hello@uzair..net>” with subject as Hello World and body as this is just test.

```html
<html>
 <head>
  <title>Anchor Tag II</title>
 </head>
 <body>
  <a href="mailto:hello@uzair..net?subject=Hello World&body=this is just test">Contact Us</a>
 </body>
</html>
```

# HTML Table

HTML tables are used to display data in rows and columns. They are created using the `<table>` tag and its related tags such as `<tr>` (table row), `<th>` (table header), and `<td>` (table data).

Here is an example of how to create a simple HTML table:

```html
<html>
 <head>
  <title>Table Tag</title>
 </head>
 <body>
  <table border="1" align="center" width="80%" cellpadding="10px" cellspacing="10px">
   <tr align="right">
    <td valign="top">Nunc et eros mi. Nam purus diam</td>
    <td>Sed non massa nec augue viverra blandit sed ac mauris. Aliquam pellentesque pulvinar quam</td>
   </tr>
   <tr>
    <td height="400px" valign="top" align="right">magna porttitor sed. Vivamus condimentum </td>
    <td>Ut lobortis quis lacus vel viverra. Nullam tempor ligula at urna condimentum ultrices. Ut sodales ornare faucibus. Ut augue neque, interdum sit amet efficitur euismod</td>
   </tr>
  </table>
 </body>
</html>
```

### Table with Colspan

HTML tables can have cells that span over multiple rows and/or columns. To make a cell span over multiple columns, use the `colspan` attribute:

```html
<html>
 <head>
  <title>Colspan</title>
 </head>
 <body>
  <table border="1" align="center" width="50%" cellpadding="10px" cellspacing="0px">
   <tr>
    <td height="100px">A</td>
    <td>B</td>
   </tr>
   <tr>
    <td height="100px" colspan="2">C</td>
   </tr>
   <tr>
    <td height="100px">E</td>
    <td>F</td>
   </tr>
  </table>
 </body>
</html>
```

**Note:** The value of the `colspan` attribute represents the number of columns to span.

### Table with Rowspan

To make a cell span over multiple rows, use the `rowspan` attribute:

```html
<html>
 <head>
  <title>Rowspan</title>
 </head>
 <body>
  <table border="1" align="center" width="50%" cellpadding="10px" cellspacing="0px">
   <tr>
    <td height="100px">A</td>
    <td>B</td>
   </tr>
   <tr>
    <td height="100px" rowspan="2">C</td>
    <td>D</td>
   </tr>
   <tr>
    <td height="100px">F</td>
   </tr>
  </table>
 </body>
</html>
```

**Note:** The value of the `rowspan` attribute represents the number of rows to span.

### Table with Caption Tag

You can add a caption to an HTML table using the `<caption>` tag. Here is an example of how to use the caption tag:

```html
<html>
 <head>
  <title>Table with caption</title>
 </head>
 <body>
  <table border="1" align="center" width="50%" cellpadding="10px" cellspacing="0px">
   <caption>Student Record</caption>
   <tr>
    <td height="100px">A</td>
    <td>B</td>
   </tr>
   <tr>
    <td height="100px">C</td>
    <td>D</td>
   </tr>
   <tr>
    <td height="100px">E</td>
    <td>F</td>
   </tr>
  </table>
 </body>
</html>
```

### Table with Thead, Tbody, and Tfoot

You can use the `<thead>`, `<tbody>`, and `<tfoot>` tags to group the rows of an HTML table into separate sections.

- The `<thead>` tag is used to group the header content in a table.
- The `<tbody>` tag is used to group the body content in a table.
- The `<tfoot>` tag is used to group the footer content in a table.

Here is an example of how to use these tags:

```html
<html>
 <head>
  <title>Table with caption</title>
 </head>
 <body>
  <table border="1" align="center" width="50%" cellpadding="10px" cellspacing="0px">
   <thead>
    <tr>
     <th>Subject</th>
     <th>Marks</th>
    </tr>
   </thead>
   <tbody bgcolor="tan">
    <tr>
     <td>Math</td>
     <td>80</td>
    </tr>
    <tr>
     <td>English</td>
     <td>70</td>
    </tr>
    <tr>
     <td>Science</td>
     <td>75</td>
    </tr>
   </tbody>
   <tfoot>
    <tr>
     <td>Total Marks</td>
     <td>255</td>
    </tr>
   </tfoot>
  </table>
 </body>
</html>
```


# HTML Forms

An HTML form is a section of a document that contains controls such as text fields, password fields, checkboxes, radio buttons, submit buttons, menus, etc. An HTML form facilitates the user to enter data that is to be sent to the server for processing, such as name, email address, password, phone number, etc.

The HTML `<form>` element is used to create an HTML form for user input.

## Example of a Simple Form with Labels

```html
<html>
  <head>
    <title>Form Tags</title>
  </head>

  <body>
    <form action="" method="post">
      <label>Name</label> 
      <input type="text" name="fname" value="" placeholder="Enter your name" /> 
      <br><br>

      <label>Password</label> 
      <input type="password" name="" />  
      <br><br>

      <label>Gender</label> 
      <input type="radio" name="gender" id="male" />
      <label for="male">Male</label> 
      <input type="radio" name="gender" id="female">
      <label for="female">Female</label> 
      <br><br>

      <label>Hobbies</label> 
      <input type="checkbox" name="hobby" id="music" />
      <label for="music">Music</label> 
      <input type="checkbox" name="hobby" id="football">
      <label for="football">Football</label> 
      <br><br>

      <label>Message</label> 
      <textarea rows="10" cols="60">uzair .</textarea> 
      <br><br>
    </form>
  </body>
</html>
```

## The `action` Attribute

The `action` attribute defines the action to be performed when the form is submitted. Usually, the form data is sent to a file on the server when the user clicks on the submit button.

## The `method` Attribute

The `method` attribute specifies the HTTP method to be used when submitting the form data. The form data can be sent as URL variables (with `method="get"`) or as an HTTP post transaction (with `method="post"`).  
The default HTTP method when submitting form data is **GET**.




The HTML `<form>` element is used to create an HTML form for user input:  
Here is the Example of Simple Form containing labels.

```html
<html>
	<head>
		<title>Form Tags</title>
	</head>
	
	<body>
		<form action="" method="post">
			<label>Name</label> <input type="text" name="fname" value="" placeholder="Enter your name" /> <br><br>
			
			<label>Password</label> <input type="password" name="" />  <br><br>
			
			<label>Gender</label> <input type="radio" name="gender" id="male" /><label for="male">Male</label> <input type="radio" name="gender" id="female"><label for="female">Female</label> <br><br>
			
			<label>Hobbies</label> <input type="checkbox" name="hobby" id="music" /><label for="music">Music</label> <input type="checkbox" name="hobby" id="football"><label for="football">Football</label> <br><br>
		
			<label>Message</label> <textarea rows="10" cols="60">uzair .</textarea> <br><br>
		</form>
	</body>
</html>
```

### The Action Attribute  
The action attribute defines the action to be performed when the form is submitted. Usually, the form data is sent to a file on the server when the user clicks on the submit button.

### The Method Attribute  
The method attribute specifies the HTTP method to be used when submitting the form data. The form-data can be sent as URL variables (with `method="get"`) or as HTTP post transaction (with `method="post"`).  
The default HTTP method when submitting form data is GET.

---

### The HTML `<form>` Elements  
The HTML `<form>` element provides a document section to take input from the user. It provides various interactive controls for submitting information to the web server such as text field, text area, password field, etc.  
The HTML `<form>` element can contain one or more of the following form elements:

- `<input>`
- `<label>`
- `<select>`
- `<textarea>`
- `<button>`
- `<fieldset>`
- `<legend>`
- `<datalist>`
- `<output>`
- `<option>`
- `<optgroup>`

### HTML `<input>` element  
The HTML `<input>` element is a fundamental form element. It is used to create form fields, to take input from the user. We can apply different input fields to gather different information from the user. Following is an example of a simple text input.

### The `<label>` Element  
The `<label>` element defines a label for several form elements. The `<label>` element is useful for screen-reader users because the screen-reader will read out loud the label when the user focuses on the input element.

### The `<select>` Element  
The `<select>` element defines a drop-down list. The `<option>` elements define an option that can be selected. By default, the first item in the drop-down list is selected. Use the `multiple` attribute to allow the user to select more than one value:

### The `<optgroup>` Element  
The `<optgroup>` tag is used to group related options in a `<select>` element (drop-down list).

### The `<datalist>` Element  
The `<datalist>` tag specifies a list of pre-defined options for an `<input>` element. The `<datalist>` tag is used to provide an "autocomplete" feature for `<input>` elements. Users will see a drop-down list of pre-defined options as they input data. The `<datalist>` element's id attribute must be equal to the `<input>` element's list attribute (this binds them together).

```html
<html>
	<head>
		<title>Form Tags</title>
	</head>
	
	<body>
		<form action="" method="post">
			<label>Name</label>
            <input type="text" name="fname" value="" placeholder="Enter your name" /> <br><br>
			
			<label>Password</label>
            <input type="password" name="" />  <br><br>
			
			<label>Gender</label>
            <input type="radio" name="gender" id="male" /><label for="male">Male</label> 
            <input type="radio" name="gender" id="female"><label for="female">Female</label> <br><br>
			
			<label>Hobbies</label>
            <input type="checkbox" name="hobby" id="music" /><label for="music">Music</label> 
            <input type="checkbox" name="hobby" id="football"><label for="football">Football</label> <br><br>
		
			<label>Message</label>
            <textarea rows="10" cols="60">uzair .</textarea> <br><br>
			
			<label>Country</label>
            <select name="" size="3" multiple>
				<option value="in">India</option>
				<option value="pk">Pakistan</option>
				<option value="ne">Nepal</option>
				<option value="cn" selected>China</option>
			</select>
			<br/><br/>
			<label>Cars</label>
            <select>
				<optgroup label="Toyota">
				  <option>Innova</option>
				  <option>Etios</option>
				  <option>Fortuner</option>
				</optgroup>
			    <optgroup label="Renault">
				  <option>Kwid</option>
				  <option>Duster</option>
				  <option>Captur</option>
				</optgroup>
			</select>
			<br><br>
			<label>Cars</label>
            <input list="cars">					
				<datalist id="cars">
					<option value="Innova">
					<option value="Kwid">
					<option value="Etios">
					<option value="Swift">
					<option value="Duster">
				</datalist>
			    <br><br>		
			<label>Upload File</label>
            <input type="file" accept="video/*" name="" />
		</form>
	</body>
</html>
```

---

### Submit button control  
HTML `<input type="submit">` is used to add a submit button on the web page. When the user clicks on the submit button, the form gets submitted to the server. The `value` attribute can be anything which we write on the button on the web page.

```html
<html>
	<head>
		<title>Form Tags</title>
	</head>
	
	<body>
		<form action="" method="post">
			<fieldset>
			<legend>Enter Personal Detail</legend>
			<label>Name</label> <input type="text" name="fname" value="" placeholder="Enter your name" /> <br><br>
			
			<label>Password</label> <input type="password" name="" />  <br><br>
			
			<label>Gender</label> <input type="radio" name="gender" id="male" /><label for="male">Male</label> 
            <input type="radio" name="gender" id="female"><label for="female">Female</label> <br><br>
			
			<input type="submit" value="Save" />
			<input type="reset" />	
			<input type="image" src="IMAGE_PATH" width="20px" alt="Submit button" />
			</fieldset>
		</form>
	</body>
</html>
```










# Additional Data

## The `input` Element

The `<input>` element is the most used form element and it can have different types depending on the required input. Some commonly used input types are:

- `text` - A single-line text input field.
- `password` - A field for passwords (masked input).
- `email` - A field for entering email addresses.
- `number` - A field for numeric input.
- `date` - A field for selecting dates.
- `submit` - A button to submit form data.
- `reset` - A button to reset form fields.

### Example:

```html
<form>
  <label>Email:</label>
  <input type="email" name="email" placeholder="Enter your email" />
  <br><br>

  <label>Age:</label>
  <input type="number" name="age" min="18" max="60" />
  <br><br>

  <input type="submit" value="Submit">
</form>
```

## The `select` Element

The `<select>` element is used to create a drop-down list of options.

### Example:

```html
<form>
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="bmw">BMW</option>
    <option value="audi">Audi</option>
  </select>
</form>
```

## The `button` Element

The `<button>` element allows clickable buttons with custom text inside.

### Example:

```html
<form>
  <button type="submit">Click Me</button>
</form>
```

## The `fieldset` and `legend` Elements

The `<fieldset>` element is used to group related form elements, and the `<legend>` element provides a title for the fieldset.

### Example:

```html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </fieldset>
</form>
```

## HTML Form Validation

HTML5 provides built-in form validation by using attributes such as:

- `required` - Ensures the field must be filled.
- `pattern` - Validates input against a regular expression.
- `maxlength` - Specifies the maximum length of input.

### Example:

```html
<form>
  <input type="text" name="username" required placeholder="Enter your name">
  <input type="email" name="email" pattern=".+@example\.com" placeholder="Enter your email">
  <input type="submit" value="Submit">
</form>
```




# HTML Input Types

Here are the different input types you can use in HTML:

- `<input type="button">`
- `<input type="checkbox">`
- `<input type="color">`
- `<input type="date">`
- `<input type="datetime-local">`
- `<input type="email">`
- `<input type="file">`
- `<input type="hidden">`
- `<input type="image">`
- `<input type="month">`
- `<input type="number">`
- `<input type="password">`
- `<input type="radio">`
- `<input type="range">`
- `<input type="reset">`
- `<input type="search">`
- `<input type="submit">`
- `<input type="tel">`
- `<input type="text">`
- `<input type="time">`
- `<input type="url">`
- `<input type="week">`

## Input Type Text
`<input type="text">` defines a single-line text input field.

## Input Type Password
`<input type="password">` defines a password field.

## Input Type Submit
`<input type="submit">` defines a button for submitting form data to a form-handler.

## Input Type Reset
`<input type="reset">` defines a reset button that will reset all form values to their default values.

## Input Type Radio
`<input type="radio">` defines a radio button. Radio buttons let a user select ONLY ONE of a limited number of choices.

## Input Type Checkbox
`<input type="checkbox">` defines a checkbox. Checkboxes let a user select ZERO or MORE options of a limited number of choices.

## Input Type Button
`<input type="button">` defines a button.

## Input Type Color
The `<input type="color">` is used for input fields that should contain a color. Depending on browser support, a color picker can show up in the input field.

## Input Type Date
The `<input type="date">` is used for input fields that should contain a date. Depending on browser support, a date picker can show up in the input field.

## Input Type Email
The `<input type="email">` is used for input fields that should contain an e-mail address.

## Input Type Image
The `<input type="image">` defines an image as a submit button. The path to the image is specified in the `src` attribute.

### HTML Code Example:
```html
<html>
    <head>
        <title>HTML5 Input Types</title>
    </head>
    
    <body>
        <form action="">
            <label>Select Color</label> <input type="color" name=""/>
            <br><br>
            
            <label>Number</label> <input type="number" min="0" max="100" step="10" name=""/>
            <br><br>
            
            <label>Range</label> <input type="range"  min="0" max="100" step="10" name=""/>
            <br><br>
            
            <label>Date</label> <input type="date" name=""/>
            <br><br>
            
            <label>DateTime</label> <input type="datetime-local"  name=""/>
            <br><br>
            
            <label>Month</label> <input type="month" name=""/>
            <br><br>
            
            <label>Week</label> <input type="week"  name=""/>
            <br><br>
            
            <label>Time</label> <input type="time"  name=""/>
            <br><br>
            
            <label>Email</label> <input type="email"  name=""/>
            <br><br>
            
            <label>URL</label> <input type="url"  name=""/>
            <br><br>
            
            <label>Search</label> <input type="search"  name=""/>
            <br><br>
            
            <label>Phone No.</label> <input type="tel"  name=""/>
            <br><br>
            <input type="submit"/>
        </form>
    </body>
</html>
```

## Additional Data

### Input Type File
`<input type="file">` defines a file-select field and a "Browse" button for file uploads.

### Input Type Month
`<input type="month">` allows the user to select a month and year.

### Input Type Search
`<input type="search">` is used for search fields (a search field behaves like a regular text field).

### Input Type Time
`<input type="time">` allows the user to select a time (no time zone). Depending on browser support, a time picker can show up in the input field.

### Input Type Url
`<input type="url">` is used for input fields that should contain a URL address.

### Input Type Week
`<input type="week">` allows the user to select a week and year.


*Reference: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)*


























# HTML Semantic Elements

## Semantic Elements
Semantic elements are elements that carry meaning, both for the browser and the developer.

### What are Semantic Elements?
A semantic element clearly describes its meaning to both the browser and the developer.

#### Examples of non-semantic elements:
- `<div>` and `<span>`: Do not provide any information about the content.

#### Examples of semantic elements:
- `<form>`, `<table>`, and `<article>`: Clearly define their content.

## Semantic Elements in HTML
In many websites, HTML code like:
```html
<div id="nav">
  <div class="header">
    <div id="footer">
```
is used to indicate navigation, header, and footer. HTML provides several semantic elements to define different parts of a webpage:

- `<article>`
- `<aside>`
- `<details>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<header>`
- `<main>`
- `<mark>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`

### HTML `<section>` Element
The `<section>` element defines a section in a document. 

According to W3C's HTML documentation: "A section is a thematic grouping of content, typically with a heading."

#### Examples of where a `<section>` element can be used:
- Chapters
- Introduction
- News items
- Contact information

### Example:
```html
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
</section>

<section>
  <h1>WWF's Panda symbol</h1>
  <p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
</section>
```

### HTML `<article>` Element
The `<article>` element specifies independent, self-contained content.

An article should make sense on its own, and it should be possible to distribute it independently from the rest of the website.

#### Examples of where the `<article>` element can be used:
- Forum posts
- Blog posts
- User comments
- Product cards
- Newspaper articles

### Example 1:
```html
<article>
  <h2>Google Chrome</h2>
  <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
</article>

<article>
  <h2>Mozilla Firefox</h2>
  <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
</article>

<article>
  <h2>Microsoft Edge</h2>
  <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
</article>
```

### Example 2 - Using CSS to Style the `<article>` Element:
```html
<html>
<head>
<style>
.all-browsers {
  margin: 0;
  padding: 5px;
  background-color: lightgray;
}

.all-browsers > h1, .browser {
  margin: 10px;
  padding: 5px;
}

.browser {
  background: white;
}

.browser > h2, p {
  margin: 4px;
  font-size: 90%;
}
</style>
</head>
<body>

<article class="all-browsers">
  <h1>Most Popular Browsers</h1>
  <article class="browser">
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
  </article>
  <article class="browser">
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
  </article>
  <article class="browser">
    <h2>Microsoft Edge</h2>
    <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
  </article>
</article>

</body>
</html>
```

### Nesting `<article>` in `<section>` or Vice Versa?
- The `<article>` element specifies independent, self-contained content.
- The `<section>` element defines a section in a document.

We cannot decide how to nest them based purely on their definitions. Thus, HTML pages might have `<section>` elements containing `<article>` elements, and `<article>` elements containing `<section>` elements.

### HTML `<header>` Element
The `<header>` element represents a container for introductory content or a set of navigational links. It typically contains:
- One or more heading elements (`<h1> - <h6>`)
- Logo or icon
- Authorship information

Note: Multiple `<header>` elements can be used in one HTML document. However, `<header>` cannot be placed within `<footer>`, `<address>`, or another `<header>` element.

#### Example - Header for an `<article>`:
```html
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>WWF's mission is to stop the degradation of our planet's natural environment, and build a future in which humans live in harmony with nature.</p>
</article>
```

### HTML `<footer>` Element
The `<footer>` element defines a footer for a document or section. It typically contains:
- Authorship information
- Copyright information
- Contact information
- Sitemap
- Back to top links
- Related documents

Multiple `<footer>` elements can be used in one document.

#### Example - Footer Section:
```html
<footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
```

### HTML `<nav>` Element
The `<nav>` element defines a set of navigation links. However, not all links should be inside a `<nav>` element. This element is for major blocks of navigation links, such as main menus.

Browsers and screen readers can use this element to determine whether to skip the initial rendering of this content.

#### Example - Navigation Links:
```html
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```

### HTML `<aside>` Element
The `<aside>` element defines content aside from the main content, such as a sidebar. The content in `<aside>` is indirectly related to the surrounding content.

#### Example 1 - Content Aside:
```html
<p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

<aside>
  <h4>Epcot Center</h4>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</aside>
```

#### Example 2 - CSS Styling for `<aside>`:
```html
<html>
<head>
<style>
aside {
  width: 30%;
  padding-left: 15px;
  margin-left: 15px;
  float: right;
  font-style: italic;
  background-color: lightgray;
}
</style>
</head>
<body>

<p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

<aside>
  <p>The Epcot center is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</aside>

<p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>
<p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

</body>
</html>
```

### HTML `<figure>` and `<figcaption>` Elements
The `<figure>` tag specifies self-contained content, like illustrations, diagrams, photos, or code listings. The `<figcaption>` tag defines a caption for a `<figure>` element.

The `<figcaption>` element can be placed as the first or last child of a `<figure>` element.

#### Example - Image with Caption:
```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>
```

## Why Semantic Elements?
According to the W3C: "A semantic Web allows data to be shared and reused across applications, enterprises, and communities."

## List of HTML Semantic Elements
| Tag           | Description                                    |
|---------------|------------------------------------------------|
| `<article>`   | Defines independent, self-contained content    |
| `<aside>`     | Defines content aside from the page content    |
| `<details>`   | Defines additional details that the user can view or hide |
| `<figcaption

>`| Defines a caption for a `<figure>` element     |
| `<figure>`    | Specifies self-contained content, like images |
| `<footer>`    | Defines a footer for a document or section     |
| `<header>`    | Defines a header for a document or section     |
| `<main>`      | Specifies the main content of a document       |
| `<mark>`      | Specifies text that has been highlighted       |
| `<nav>`       | Defines navigation links                       |
| `<section>`   | Defines a section in a document                |
| `<summary>`   | Defines a summary for a `<details>` element    |
| `<time>`      | Defines a specific time or date                |

## Additional Data

### HTML5 Semantic Elements Documentation
For more details on semantic elements, visit the official [HTML5 semantic elements documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Accessibility and Semantic Elements
Semantic elements play a crucial role in web accessibility. For instance, screen readers rely on semantic HTML to understand the structure and context of the content on the page.