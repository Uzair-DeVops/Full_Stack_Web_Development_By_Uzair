A Blog Post

Typography is one of the most important elements of front end design and development! In this exercise, we'll play around with some of the common CSS properties to manage and style our fonts by making a nice blog post-like web page.

12.31.2050 | ALL ABOUT CSS BLOG

All About Typography

Headlines, like this one, are great ways to quickly capture the
reader's attention, to give them a sumary, intro, or other important
information in a web page. You can use
text-transform: uppercase; to make a whole body of text
uppercase using CSS if you really need to grab attention!

Okay, now that we're done screaming in the headline in all caps (which you should do sparingly) - it's time to chat more about other components of typography. You'll notice that we chose a nice serif font for our headings, and a nice sans-serif font for our body text. This is intentional! Serif font faces are generally considered pretty inaccessible as a body text style, since at smaller sizes it's much more difficult to visually differentiate the characters from one another. At large font sizes, such as those seen in most headings, serif fonts are considered fine, since the larger style makes it easier to see where serif characters start and where they end.

But wait! What if you want more than just normal text on your page? Another common thing you might see in web pages are quotes. To make quotes, we can use the blockquote element and style it accordingly, so it stands out a bit as a non-body text quote.


"This is a quote - you probably knew that at a glance since we gave it some nice styling. Pretty nice, huh? A great lesson in User Experience Design, where we take special care to implement our web page in a way that makes it pleasant and intuitive for our users/readers. Differentiating our different typography components visually makes information much more organized and easier to digest for our users."
– A wise person

a new section

And just like that, we've got a new section of content separated by a hr element (a 'horizontal rule' or a divider) and a new heading. Isn't putting content together fun?

Notice as well that when we entered in the H3 content, it was all lowercase, but now it's in a nice Title Case, where the first letter of each word is capitalized. We did that with CSS! Using text-transform: capitalize; we can implement title cased content.

Heading 4

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae est dapibus, viverra metus ac, fermentum libero. Integer lobortis enim ac arcu malesuada ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Heading 5

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae est dapibus, viverra metus ac, fermentum libero. Integer lobortis enim ac arcu malesuada ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Heading 6

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae est dapibus, viverra metus ac, fermentum libero. Integer lobortis enim ac arcu malesuada ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Common Font Sizing Approaches

px (pixels)

Pixels are the simplest way to hard code your font size. By default the browser sets the root font size to 16px, but you can change the font size in the body element or any other HTML element by setting font-size to any number of px.

em

em units size font relative to the parent element. For example, if the body element is 16px, and a nested div element's font size is set to 1.5em, the browser will multiply 16px x 1.5, resulting in 24px font in the div.

rem (root em)

Root em units are similar to em, but they are relative to the root font size instead of the parent element of whatever is being styled. For example, if the root font size (the font size of the body element) is set to 16px, and we have a p element nested many layers down with a font-size set to 2rem, that paragraph will have 32px font. If the body font size ever changes, this paragraph will also change accordingly.

Which one do I use?

Great question! Generally, people try to stick to using em or rem over px, since they make responsive typography that scales up and down across different device widths much easier. Using px for your font sizes is not as dynamic, and you may find that writing media queries to update all the various element font sizes in pixels at different screen widths is not the most scalable approach to typography.

Between em and rem, rem has a nice advantage of all elements being relative to one single root font value, where nested elements with parent/child font size dependencies can still be hard to manage with em units. When writing responsive styles, rem allows you to simply update the root font size at different screen sizes and all elements using rem units will adjust themselves accordingly creating a super easy-to-manage typography size system.

In small projects you may not have an issues hard coding pixelage, but it's always important to understand the drawbacks of writing styles that may not be responsive or dynamic.

Privacy Policy 
Terms & Conditions 
About 
Contact Us 
More Info
