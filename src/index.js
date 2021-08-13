import _ from 'lodash';
import { title, describtion1, describtion2, describtion3, image } from "./home"
import { titleAbout, viewAddress, imageAbout, contact } from "./about"
import {titleMenu, imagesMenu, titlesMenu, describtionsMenu} from "./menu"

/*LOADS THE HOME TAB INFO */

home();

function home(){

  document.getElementById("content").innerHTML ="";
  document.getElementById("about").classList.remove("active");
  document.getElementById("menu").classList.remove("active");
  document.getElementById("home").className = "active";  
  document.getElementById("content").appendChild(title());
  document.getElementById("content").appendChild(describtion1());
  document.getElementById("content").appendChild(describtion2());
  document.getElementById("content").appendChild(image());
  document.getElementById("content").appendChild(describtion3());
}


/* ABOUT TAB */
document.getElementById("about").addEventListener("click", function(){
  document.getElementById("content").innerHTML ="";
  document.getElementById("content").appendChild(titleAbout());
  document.getElementById("content").appendChild(viewAddress());
  document.getElementById("content").appendChild(imageAbout());
  document.getElementById("content").appendChild(contact());
  document.getElementById("home").classList.remove("active");
  document.getElementById("menu").classList.remove("active");
  document.getElementById("about").className = "active";
  document.getElementById("home").addEventListener("click", home)


})

/* MENU TAB */
document.getElementById("menu").addEventListener("click", function() {
  document.getElementById("content").innerHTML ="";
  
  document.getElementById("home").classList.remove("active");
  document.getElementById("about").classList.remove("active");
  document.getElementById("menu").className = "active";
  document.getElementById("content").appendChild(titleMenu());
  let menu = document.createElement("div");
  menu.className="menu";
  let array = imagesMenu(); //This gets the array of img urls imported from menu.js
  let arrayTitles = titlesMenu(); //This gets the array of header 2 titles imported from menu.js 
  let arrayDescribtions = describtionsMenu(); ////This gets the array of describtion paragraphs imported from menu.js 


  for (let i=0; i<array.length; i++){
    let div = document.createElement("div");
    div.className ="menu-item";  
    
    div.appendChild(arrayTitles[i]);
    div.appendChild(array[i]);
    div.appendChild(arrayDescribtions[i]);
    menu.appendChild(div);
  }

  document.getElementById("content").appendChild(menu);

  

})