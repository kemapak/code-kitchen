# CSS Specificity

Click the [link](index.html) to open `index.html` with a browser and open developer tools by pressing `option+command+I (⌥+⌘+I)`.
Click the buttons to see the debugger behavior.

Click the [link](main.css) to open `main.css` to see the selectors that are used to explain how CSS specificity works.

## What is CSS Specificity?
In simple terms it is the algorithm and logic to determine what styles will apply to an HTML tag. It is especially crucial
for engineers to avoid and handle the conflicting style properties. 

After analyzing the example and reading the references you should be albe to determine the issues and how to resolve them.

## Order of Specificity
The specificity is calculated by 1 + 3 factors. Below is the order from **Highest** to **Lowest** specificity.

### 1- Inline `style`
   
Inline styles overrides anything, so avoid using it, unless to have a specific use case. Like using JavaScript to 
    collapse and display tags.   

_For example:_ 

HTML: 

`<div sytle="background-color: blue;>Hello<div>`

### 2- `id` Selector

Using ID selectors is the second highest; but again I would highly recommend you avoid using it, since it couples the page and the styles. If the page changes you have to update your styles or even worse will have dead code. You might want to use as an intermediate refactoring step.
          
_For example:_

HTML: 

`<div id="exampleContainer">Hello<div>`

CSS: 
	   
```
#exampleContainer {
	background-color: blue;
}
```

### 3- `class` Selector

This is the most common and a right way to assign custom styles to specific tags, but also this is the place where most issues, conflicts happen. So you need to know how to write CSS classes and how to apply them using the with the approach described in the following approach.

_For example:_
	
HTML: 

`<div class="blue">Hello<div>`
	
CSS: 

```
blue {
	background-color: blue;
}
```

### 4- Tag Selector

Assigning styles to HTML tags, `div`, `p`, `input` or `*` for all tags. This is lowest and can be overridden easily. For design systems, or resetting the browser defaults to make sure everything looks the same in different browsers this is a very common approach that is used.
    
_For example:_
    
HTML: 

`<div>Hello<div>`

CSS: 

```
div {
	background-color: blue;
}
```

## How to Calculate?

You can most of the time use the list above to determine the CSS specificity. Said that this could get way to complex and 
detailed which you can check the MDN Specificity documentation which I included in the reference.

There are 2 more rules:

### Order of declaration

If the classes have the same specificity, the one that is loaded last takes over.
   
_For example:_

HTML:
      
```
<div class="red blue">Hello<div>
<div class="blue red">Hello<div>
```

CSS:

```
blue {
	background-color: blue;
} 

red {
	background-color: red;
}
```

Since class `red` is defined last the `background-color` of the both the `div` tags will be **red**.

### `!important`
 If a class has a property with `!important` declaration, if effects the cascade and becomes property value selected.

_For example:_

HTML: 

```
<div class="red blue">Hello<div>
<div class="blue red">Hello<div>
```

CSS: 

```
blue {
		   background-color: blue !important;
}

red {
		   background-color: red;
}
```


Unlike the previous example, the result of the both `div` tags `background-color` will be **blue**. `!important` overrides the order of the 
classes load order and forces the `background-color` of the `blue` class.

## Avoid using !Important
Using `!import` should be avoided with small some exceptions. Regular code should have not have it. For example what happens when another person adds `!important` to class property you were trying to override with using your own `!important`? 

Learn the specificity rules and apply them avoid hacks!

## How to Override Styles
The big question comes how to safely override CSS classes and their properties? Especially if you are using a framework, a design system. You do not want to create your own custom button class, use inline styles or use id selectors.

You do not want to change the design systems button properties for all the pages or page but just a section of it. 

The solution is simple assign a class (or an ID if you are still having issues) to the container element and declare your override. This is almost like a conditional if statement.

_For example:_

HTML
```
 <div class"container">
	 <div class="blue">Hello</div>
 </div>
```

CSS
```
.blue {
	background-color: blue;
}

.container .blue {
	background-color: yellow;
}
```

>Note: Remember you cannot override an inline style, so if you need to override it you need to remove it and use a CSS class.

## References
[MDN Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

---
Return to [Index](../../README.md)