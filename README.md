# Audiophile e-commerce website

## Table of contents

- [Overview](#overview)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Setup](#setup)
  - [Built with](#built-with)
  - [Future Trends](#future-trends)

## Overview

### Features

Users can perform the following:

- View the optimal layout for the app depending on their device's screen size

- Add/Remove products from the cart
- Edit product quantities in the cart
- Checkout and place order

### Screenshot

![](./screenshot.png)

### Links

[Live Site URL](https://audiophile-ecommerce-l6rb6uy4f-codingaddos-projects.vercel.app/)

### Setup

To run this project locally:

```
npm install && npm run dev
```

### Built with

- Next.js
- Chakra UI
- Redux Toolkit
- React-Hook-Form
- Framer-Motion
- React-Intersection-Observer
- TypeScript
- Atomic Design System
- Mobile-first workflow


#### Chakra-UI

For this project I wanted for the first time to try out chakara ui component library, they create their components with accessibility in mind

- it provides default breakpoints: base, sm: "30em", md: "48em", lg: "62em" just like tailwindCSS (you can customize them and add more),
- under hood it uses @media(min-width) media query to ensure interfaces are mobile-first.
- it makes responsive styles really easy to do with the way how you define media queries, as an object or array

#### Next.js

Next.js is a great framework built on top of React, that has features like file-based routing, static & server rendering, TypeScript support and many more with no configuration.
The basic way of pre-fetching data is with a function called getStaticProps. Next.js will pre-render the page at build time using the props returned by this function. All data in the application like products details comes from products.json 

#### Redux Toolkit

Redux is one of the oldest and most popular state management libraries for React applications, and although currently there are [many alternatives](https://leerob.io/blog/react-state-management) to choose from, in job listings for React positions you will see Redux more often than others.
Redux Toolkit is a library that makes working with Redux a lot easier, as it eliminates a lot of boilerplate. With Redux Toolkit you can create so called slices (pieces of state in your application) that combine action creators and reducers. It automatically sets up Redux DevTools by default.
It also allows you to update state in a 'mutating way' thanks to Immer library it uses under the hood.
In the application I'm using Redux to hold mostly state of cart, persist it to local storage and retrieve it when the app is loaded.  

#### Future Trends
- Use supabase as a backend 
- Include user authenticaion
- Add admin dashboard for product management

