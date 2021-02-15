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

    // Scroll up from footer
    // const arrow = document.querySelector('.arrow')

    // arrow.addEventListener('click', () => {
    //       window.scrollBy(0, - 1000);
    // })

    // Scroll down button 
    const projectsBtn = document.querySelector('.project-btn')

    projectsBtn.addEventListener('click', () => {
        if (document.body.scrollTop < 100) {
            window.scrollBy(0, 750);
        }else{
          return "nothing"
        }
    })

    

    // FormSpree JS code
    window.addEventListener("DOMContentLoaded", function() {

        // get the form elements defined in your form HTML above
        
        var form = document.getElementById("my-form");
        // var button = document.getElementById("my-form-button");
        // var status = document.getElementById("my-form-status");
    
        // Success and Error functions for after the form is submitted
        
        function success() {
          form.reset();
          status.innerHTML = "Thanks!";
        }
    
        function error() {
          status.innerHTML = "Oops! There was a problem.";
        }
    
        // handle the form submission event
    
        form.addEventListener("submit", function(ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
        });
      });
      
      // helper function for sending an AJAX request
    
      function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      }



    
}
