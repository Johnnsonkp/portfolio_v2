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

    const projects = document.querySelector('.projects')
    const home = document.querySelector('.home')
    const about = document.querySelector('.abouts')

    open.addEventListener('click', () => {
        mainMenu.classList.toggle('display-block')
        middleText.classList.toggle('display-none')
    })

    window.onscroll = function() {addClass()};

    function addClass () {
        if (document.body.scrollBottom < 10 || document.documentElement.scrollBottom < 10){
            projects.classList.add('custom')
            projects.classList.remove('big')
        }
        

        if (document.body.scrolltop > 100 || document.documentElement.scrollTop > 100) {
            home.classList.remove('big')
            projects.classList.remove('display-none')

            about.classList.remove('display-none')
        }else if (document.body.scrolltop < 100 || document.documentElement.scrollTop < 100) {
            projects.classList.remove('big')
            projects.classList.add('custom')
            home.classList.add('big')
        }
        if (document.body.scrolltop > 750 || document.documentElement.scrollTop > 750) {
            home.classList.add('display-none')
            projects.classList.remove('big')
            about.classList.add('big')
            // projects.classList.add('big')
        } else{
            home.classList.remove('display-none')
            projects.classList.add('big')
            about.classList.remove('big')
        }
        // if (document.body.scrolltop <= 100 || document.documentElement.scrollTop <=100){
        //     home.classList.add('big')
        //     // home.classList.remove('display-none')
        //     projects.classList.remove('big')
        // } 
        // if (document.body.scrolltop > 650 || document.documentElement.scrollTop > 650){
        //     about.classList.remove('display-none')
        //     about.classList.add('display-block')
        //     about.classList.add('big')
        //     // home.classList.remove('display-none')
        //     projects.classList.remove('big')
        // }
        // if (document.body.scrolltop < 650 || document.documentElement.scrollTop < 650){
        //     about.classList.remove('display-none')
        //     about.classList.add('display-block')
        //     about.classList.remove('big')
        //     // home.classList.remove('display-none')
        //     projects.classList.add('big')
        // }
        // else{
        //     document.querySelector('.projects').classList.add('')
        // }  
    }
    
}
