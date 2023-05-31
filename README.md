# Website with dark mode switch 
Updated: 31/05/2023

## Project Description 
A ready to use website template with a customisable switch that flips the background of the page between light/dark mode.

I made this template as a learning exercise while building my own personal website.

## How to use
1. Open VS Code > File > Open Folder > Locate the project folder and select it

* To preview the project: Right click the index.html file within VS code > select 
‘Show in Browser’

## Customisation 

### Customise the switch images

1. Replace the lighton.svg & lightoff.svg files in ‘logo’ folder with your own svg image files.

2. To quickly link up the new images to the project, rename your image files ‘lighton.svg’ & ‘lightoff.svg’

3. To change the size of the switch, go to style.css & edit ‘height’ & ‘width’ in the .switch class.

### Customise the colour of the background

1. Go to ‘style.css & edit ‘background-color’ in the .dark class.

* You can also edit the time it takes to transition from light to dark mode by editing ’transition’ in the .dark class.

### Change the position of the switch

* (From left corner to right) In style.css, find ‘Justify-content’ in the ‘Header’ element and change ‘flex-start’ to ‘flex-end’

* (From the top of page to bottom) In index.html locate this code:

```
<header>

<img id=“bulb” img class=“switch” src=“logo/lightoff.svg” onclick=“changeimage()” alt=“logo/lighton.svg”/>

</header>
```

1. Cut it & paste it at the bottom of the page, just above <script>

2. Replace the header tags with footer tags. (You will also need to rename the header element to footer in style.css)
(Bulb will be below your content, but still appears in the top corner while the page is empty.)

### Extra Step: Make text switch between black/white

In the style.css file find this class:

```
.dark>* {
		Color: rgb(255, 255, 255);
}
```

This makes the colour of the text on your page change from black to white when you switch from light to dark mode.

You can change the dark mode text colour by editing ‘color’ in this class.

(You can just remove this class if you want to style the text yourself)
