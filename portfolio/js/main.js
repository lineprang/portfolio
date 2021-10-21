"use strict";

console.log("Ready 🎉");



// mobile navigation start //
window.addEventListener("load", () => {
    document.body.classList.remove("preload");
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
 
    //åben navigation
    document.querySelector("#btnNav").addEventListener("click", () => {
      nav.classList.add("nav--open");
    });

  //luk navigation
  document.querySelector(".nav__overlay").addEventListener("click", () => {
    nav.classList.remove("nav--open");
  });
  
  });
  
  // mobile navigation slut //


