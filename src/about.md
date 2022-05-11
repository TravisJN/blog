My name is Travis Neufeld and this is a personal site for some of the stuff I've worked on. I'm a software engineer with 7 years of experience building mobile and web apps and I love being able to create anything I can think of with a few (million) strokes of the keyboard. I've dabbled in game development and physics simulation (check out Bomblobber) but mostly I've worked on native apps written in JavaScript and/or React Native for mobile devices and gaming consoles.

Here are most of the projects I worked on at Sony Interactive Entertainment:

- PS Vue for PlayStation 3 & 4

  - The codebase was written in TypeScript but rendered elements to a scene graph instead of rendering to a DOM
    - No HTML or CSS
    - MVC framework
    - Animations were easy to implement. I built a really cool parallax effect promo screen similar to the Netflix idle screen (but better :p)
    - Focus management was tricky sometimes
      - All input was through a controller
      - Most interfaces were either scrolling strands in lists or large grids

- Vue Content Management Tool

  - Written in Ember.js
    - Ember was widely used at Sony for the first few years I was there, it was eventually abandoned for React Native
  - Compiled to a desktop app for Mac and Windows
  - Provided a visual interface for content managers to easily update assets (images, videos, copy) in Vue
    - Content managers could even change the visual layout of some views
      - We had the good fortune of being able to guarantee that the app will always be displayed on a TV at 1920x1080 due to it being a PS4 app so it made layout changes simple

- Other Vue Content Management Tool

  - Written in React with Redux
  - Internally hosted web app
  - Used for managing shows and movies in Vue
    - Content Managers could add/remove lists of movies
    - Lists could be manually created or automatically generated based on metadata
  - This was the first project that I was the owner of
    - I basically learned React and Redux building this app

- PS Vue for Next-Gen

  - Written in React Native with TypeScript
  - Built to be multi-platform (PS5, Amazon Fire, Web, etc.)
    - Prior to PS5, Vue had separate apps/codebases/teams for different platforms
  - PS Vue was shut down about one year prior to the PS5 release
    - Despite high customer satisfaction, Vue was never profitable and was deemed too risky and expensive

- Platform Apps for PS5

  - Written in React Native
  - There are many separate applications that are part of the platform such as the store, the image viewer, social hub, etc.
  - I primarily worked on Explore which is the default view when the PS5 turns on
  - I implemented a lot of Text-to-Speech and other accessibility feature work
    - Accessibility was a large focus for the PS5 platform
