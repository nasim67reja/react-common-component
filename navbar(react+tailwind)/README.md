# Navbar (React + Tailwind)

### Navbar

This is a brone structer of a navbar which is build by Reactjs and Tailwind CSS

```JavaScript

import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-around font-medium">
        <div className="z-50 flex w-full justify-between p-5 md:w-auto">
          <img src={<<Logo>>} alt="logo" className="h-9 md:cursor-pointer" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="hidden items-center gap-8 font-[Poppins] uppercase md:flex">
          <li>
            <Link to="/" className="inline-block py-7 px-3">
              Home
            </Link>
          </li>
        </ul>
        <div className="hidden md:block">
          <button>something</button>
        </div>

        {/* Mobile nav */}
        <ul
          className={`
        fixed top-0 bottom-0 w-full overflow-y-auto bg-white py-24 pl-4 duration-500
        md:hidden ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="inline-block py-7 px-3">
              Home
            </Link>
          </li>
          <div className="py-5">
          <button>something</button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

```

<!--
## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](images/Screenshot.png)

### Links

- Solution URL: [Github Repo](https://github.com/nasim67reja/manage.github.io)
- Live Site URL: [Live link](https://your-live-site-url.com)

### Built with

- Reactjs
- Tailwind CSS
- Flexbox
- CSS Grid
- JavaScript
- Desktop-first workflow

- The API I used in this project

```JavaScript
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
```

### What I learned

- connecting with api by the help of fetch was awesome for me.But i still have some problem with fetch api I mean how to fetch data from server into my react application.I think I need to focus on this topic for my upcoming project.
- This is also my first time with tailwind CSS. Tailwind css is awesome I like their utility class it's save a lot of time for building application.I also need to enhance my skills on Tailwind by building other projects

### Useful resources

- [The Movie DB Api](https://www.themoviedb.org/documentation/api)
- [Example resource 2](https://css-tricks.com/pure-css-horizontal-scrolling/) -horizontal scrolling

## Author

- Website - [Nasim Reja](https://www.your-site.com)
- Frontend Mentor - [@nasim67reja](https://www.frontendmentor.io/profile/@nasim67reja)
- Twitter - [@Nasimreja97](https://www.twitter.com/@Nasimreja97) -->
