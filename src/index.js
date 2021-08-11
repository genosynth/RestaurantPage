import _ from 'lodash';
import { title, describtion1, describtion2, describtion3, image } from "./home"
import { titleAbout, viewAddress, imageAbout, contact } from "./about"
import {titleMenu} from "./menu"

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


})