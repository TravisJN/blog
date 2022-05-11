export default `
My name is Travis Neufeld and this is a personal site for some of the stuff I've worked on.
I'm a software engineer with 7 years of experience building mobile and web apps and I love being able to create anything I can think of with a few (million) strokes of the keyboard.
I've dabbled in game development and physics simulation (check out Bomblobber) but mostly I've worked on native apps written in JavaScript and/or React Native for mobile devices and gaming consoles.

---

Here are most of the projects I've worked on professionally at __Sony Interactive Entertainment__ and my startup __Dlivr__:

---
__PS Vue for PlayStation 3 & 4__
  - The codebase was written in __TypeScript__ but rendered elements to a scene graph instead of rendering to a DOM
    - No HTML or CSS
    - MVC framework
    - Animations were easy to implement. I built a really cool parallax effect promo screen similar to the Netflix idle screen (but better :p)
    - Focus management was tricky sometimes
      - All input was through a controller
      - Most interfaces were either scrolling strands in lists or large grids
---
__Vue Content Management Tool__
  - Written in __Ember.js__
    - Ember was widely used at Sony for the first few years I was there, it was eventually abandoned for __React Native__
  - Compiled to a desktop app for Mac and Windows
  - Provided a visual interface for content managers to easily update assets (images, videos, copy) in Vue
    - Content managers could even change the visual layout of some views
      - We had the good fortune of being able to guarantee that the app will always be displayed on a TV at 1920x1080 due to it being a PS4 app so it made layout changes simple
---
__Other Vue Content Management Tool__
  - Written in __React__ with __Redux__
  - Internally hosted web app
  - Used for managing shows and movies in Vue
    - Content Managers could add/remove lists of movies
    - Lists could be manually created or automatically generated based on metadata
  - This was the first project that I was the owner of
    - I basically learned __React__ and __Redux__ building this app
---
__PS Vue for Next-Gen__
  - Written in __React Native__ with __TypeScript__
  - Built to be multi-platform (PS5, Amazon Fire, Web, etc.)
    - Prior to PS5, Vue had separate apps/codebases/teams for different platforms
  - PS Vue was shut down about one year prior to the PS5 release
    - Despite high customer satisfaction, Vue was never profitable and was deemed too risky and expensive
---
__Platform Apps for PS5__
  - Written in __React Native__
  - There are many separate applications that are part of the platform such as the store, the image viewer, social hub, etc.
  - I primarily worked on Explore which is the default view when the PS5 turns on
  - I implemented a lot of Text-to-Speech and other accessibility feature work
    - Accessibility was a large focus for the PS5 platform

---
After SIE, I cofounded a Saas startup called Dlivr Inc. where I was the sole developer of two native mobile apps:

---
__Dlivr Drive__
  - Written in __React Native__
  - Built for __iOS__ and __Android__ to be used by delivery drivers for browsing and fulfilling delivery orders
  - In-app three-way chat between restaurant-driver-customer where customer chats were sent and received via SMS while driver to restaurant chats were internal
    - SMS service provided by [Bandwidth](https://bandwidth.com/)
  - Push notification support
---
__Dlivr Store__
  - Written in __React Native__
  - Built for __iOS__ and __Android__ tablets to be used in the restaurant to receive delivery orders and dispatch drivers
  - Integration support for several third-party ordering platforms and POS systems
  - Order history, driver payments, customer history, driver and customer chat support
---
__Dlivr Backend__
  - __Firebase Firestore__ database
  - __Google Cloud Storage__ for media (profile pictures, delivery confirmation images, etc.)
  - Server scripts written in __Node.js__ using __Firestore Cloud Functions__
---
`;
