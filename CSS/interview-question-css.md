## What are the different values of the position property in CSS, and how do they affect the positioning of an element?
static, absolute, relative, fixed , sticky

## In how many ways you can display HTML elements?
block, inline, inline-block, flex, inline-flex, grid, inline-grid, none, table, list-item, contents, inherit, intial, unset

# Difference between CSS and CSS3

# CSS
CSS stands for Cascading Style Sheets.
Does not support responsive design. Cannot be split into modules. Cannot build 3D animation and transformation.
Slower compared to CSS3. Uses a set of standard colors and basic color schemes. Supports only single text blocks.
Does not support media queries. Requires manual development of rounded gradients and corners.
No special effects like shadowing text or text animation; requires jQuery and JavaScript for animations.

# CSS3 
Supports responsive design. Can be broken down into modules. Supports animation and 3D transformations.
Has a good collection of HSL, RGBA, HSLA, and gradient colors. Supports multi-column text blocks.
Provides advanced codes for setting rounded gradients and corners. Supports text shadows, visual effects, and a wide range of font styles and colors.

# New Features of CSS3
Combinator : sibling combinator, which matches sibling elements using the tilde (~) combinator.
CSS Selectors, Pseudo-elements (::),
Border Style :  border-radius, border-image-slice, border-image-source
Background Style Properties: background-clip, background-size, background-style, and background-origin.

## What are the elements of the CSS Box Model?
The CSS Box Model is a fundamental concept in web design and layout. It describes how every HTML element is represented as a rectangular box.
1) Content , Padding , Border , Margin
+-----------------------+
|      Margin           |
|  +-----------------+  |
|  |     Border       |  |
|  | +-------------+ |  |
|  | |   Padding    | |  |
|  | | +---------+ | |  |
|  | | | Content  | | |  |
|  | | +---------+ | |  |
|  | +-------------+ |  |
|  +-----------------+  |
+-----------------------+

## CSS vs CSS Preprocessor (SCSS, Less)
# SCSS - SCSS is a syntax of SASS (Syntactically Awesome Stylesheets).
Variables , Nesting, Mixins, Partials and imports, Extends and placeholders , Functions

# Variable
=> $primary-color: blue;

# Nesting Variable
.menu{
    ul {
        li{
            color :blue;
        }
    }
}

# Mixins
Mixins define reusable blocks of styles, allowing parameterization.

@mixin blue-btn($color){
    background-color : $color;
}
.button{
    @include button-styles(blue);
}

# Functions and Operations

.box {
  width: 100px + 50px; // 150px
  color: lighten(blue, 20%);
}

# Advantages of CSS Preprocessor (SCSS)
Reusability with Variables  =>  $primary-color: blue;
Code Modularity             => @import 'header';
Nesting for Readability
Mixins for Reusable Styles
Functions and Operations

# What are Pseudo classes?
A pseudo-class is a keyword added to a CSS selector that specifies a special state of the selected element(s).

selector:pseudo-class {
  property: value;
}

User Interaction States
:hover , :focus , :active:

Structural Pseudo-classes
:first-child , :last-child, :nth-child(2)

Form State
input[type="checkbox"]:checked , input:disabled, input:placeholder-shown

Position-based
:first-of-type , :last-of-type , div:only-child

:not(selector) , :empty , :root 
p:not(.special) , div:empty  :root { }

# What is responsive design?
# What is responsive design?

## Reflow and Repaint
Reflow is the process of calculating the layout of the web page elements. It determines the position, size, and geometry of elements based on the DOM and CSS.
An element’s size or position changes. The DOM structure is updated,The browser window is resized. 
color, background-color, or visibility change.
document.getElementById("box").style.width = "200px"; // Triggers a reflow

Performance Impact
Reflow is a CPU-intensive process because it affects the layout of the entire page or parts of it. Changes in one part of the DOM tree can trigger a cascade of reflows.

# Repaint
Repaint occurs when changes are made to the visual appearance of an element without affecting its layout. This involves updating the pixels on the screen.
color, background-color, or visibility change.
document.getElementById("box").style.backgroundColor = "red";

# Ways To Center With CSS
# Targeting the 3rd and Second Last Child in CSS
.parent div:nth-child(3) , parent div:nth-last-child(2) 

# Equalizing Heights of Elements of Different Sizes 
To equalize the heights of elements of different sizes in CSS, there are several techniques you can use depending on the layout and specific requirements
Flexbox , Grid Layout , min-height with display:table, align-items: stretch

# flexbox
.parent { display :flex} .child{flex :1 }

# Grid
.parent{display: grid;  grid-template-columns: repeat(3, 1fr); /* 3 equal-width columns */} 

# min-height with display: table
.parent { display : table} .child{ display : table-cell}

# align-items: stretch
.parent { display :flex ; align-items: stretch; /* Ensure all items stretch to equal height */}