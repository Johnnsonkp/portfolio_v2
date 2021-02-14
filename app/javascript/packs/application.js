// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


Rails.start()
Turbolinks.start()
ActiveStorage.start()

window.onload=function(){
    const open = document.getElementById("open")
    const mainMenu = document.getElementById("mainMenu")
    const middleText = document.querySelector('.middle-text')
    const focus = document.querySelector('.big')

    const span = document.querySelector('span')
    const home = document.querySelector('.home')
    const about = document.querySelector('.abouts')

    open.addEventListener('click', () => {
        mainMenu.classList.toggle('display-block')
        middleText.classList.toggle('display-none')
    })

    const projectBody = document.querySelector('#home-projects')
    const dayNight = document.querySelector('.day-night')


    dayNight.addEventListener('click', () => {
        projectBody.classList.toggle('light')
        dayNight.classList.toggle('btn-slide')
    })



    // Scroll down button 
    const projectsBtn = document.querySelector('.project-btn')

    projectsBtn.addEventListener('click', () => {
        if (document.body.scrollTop < 100) {
            window.scrollBy(0, 750);
        }
        // alert("its working");
    })



    
}
