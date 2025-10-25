diff b/w async and differ
https://dev.to/fidalmathew/async-vs-defer-in-javascript-which-is-better-26gm

Both async and defer are attributes used in HTML's <script> tag to control how JavaScript files are loaded and executed. They are both designed to improve the performance of web pages by preventing scripts from blocking the rendering of the page.

Loading:

async:
The script is downloaded asynchronously, meaning it doesn't block the parsing of the HTML document.
The script executes as soon as it's downloaded, which can be before the entire HTML document is parsed.

defer:
The script is downloaded asynchronously, but it is executed only after the entire HTML document has been parsed and before the DOMContentLoaded event fires. 


Execution Order:

async:

Scripts with the async attribute execute as soon as they are downloaded, regardless of the order in which they appear in the HTML document.
defer:
Scripts with the defer attribute execute in the order they appear in the HTML document, but only after the HTML document has been fully parsed.

Use Cases:
async:
Ideal for independent scripts that don't rely on the DOM being fully loaded, such as analytics scripts or third-party widgets.
defer:
Ideal for scripts that depend on the DOM or interact with other scripts, such as scripts that manipulate the page layout or add event listeners.

2) can we create any tag name => YES we can create
3) What will be the output of a randomly created element in HTML? Will it be block-level or inline?
it will be inline but depend upom what tag we are creating 

4) can we give width and height to inline element =>No 
But we can give margin left and right but not margin top and botton but we can give padding 
even if we give padding content will shift from left and right but not top and bottom. in case we give box height will increase but not content.
block element will take space it parents element if we not defined any width and height

HTML Non-replaced and Replaced Elements
1) Non-replaced Elements
2) Replaced Elements

Non-replaced Elements
These are standard HTML elements where the content is defined directly in the HTML or modified via CSS.
: <p>, <span>, <h1>–<h6>, <div>, <blockquote>

Replaced Elements
hese are elements whose content is replaced with external content (e.g., images, videos, or other resources).
<img>, <iframe>, <canvas>, and <video>

What is box model
https://www.w3schools.com/css/css_boxmodel.asp
The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins. The image below illustrates the box model:
Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent.