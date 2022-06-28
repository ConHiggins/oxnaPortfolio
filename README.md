# oxnaPortfolio



I approached the site with a mobile-first philosophy, deciding it would be much easier to scale up to larger resolutions than trying to squash content down to mobile.

Initially I structured my SCSS into three files (Mobile, Tablet, Desktop) with relevant media queries, however soon found this to be an un-scalable way of working due to
the sheer size the files were reaching. I spent some time splitting the SCSS down into sectioned files (Home, Portfolio etc) using the _file naming convention to disable 
the generation of map files on compilation (only main.scss would be mapped).


I wrote out the full html first to ensure all of my content had the correct skeleton setup. I then worked my way down section-by-section formatting the basic styling. 

I used the * selector to initially reset the CSS and set the scroll-behaviour to smooth. The reason for setting scroll-behaviour (I don't believe it makes a difference to general scrolling from what I've seen) was to let the nav-bar links smoothly take the user down the page, rather than a jarring snap reload.


I also formatted every <section> into 1-column grids (see _defaults.scss). While probably unneccesary, I found this helpful in terms of knowing what the stylistic starting point was for each section. I then split those grids out more individually as necessary, and used flex within the grids for positioning of elements.

I used fieldsets and legends to create an attractive but quick/simple content-dividing system, and feel the borders help lead the eye down the page.




My biggest mistake was deciding to create my styling and then go back and re-purpose my class names into BEM (I was fuzzy on the correct usage of BEM). 
This just ended up creating a large, finicky job at the end that I am yet to properly approach. Moving forward (with a now proper understanding of BEM) I will definitely ensure to build my projects using this from the get-go.


I spent a lot of time working on getting my Lighthouse accessibility score as high as I could. At time of writing it stands at 86. The 14 points are due to a couple of button names which I believe to be, from a human perspective, actually completely accessible, and this is perhaps not something to spend time on getting to 100 points.

I also created an interactive graphic for the splash section using three.js. While this did end up bringing the Lighthouse performance score down, I feel it adds a lot of character and also an initial wow-factor to the splash page. There is also unlikely to be anything else performance-heavy added to the site so for now I am comfortable with the trade off.
