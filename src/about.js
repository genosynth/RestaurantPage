function titleAbout() {
    const element = document.createElement('span');
    element.className="title";    
    element.innerText = _.join(['ABOUT'], ' ');
  
    return element;
  }

  function viewAddress(){
    const element = document.createElement('span');
       
    element.innerText = "Come visit us in Lampuka Street, Paola, Malta."
  
    return element;

  }

  function imageAbout(){
    const image = document.createElement('img');
    image.className = "homeImg";
    image.src = "./images/restaurant.jpg"

    return image;
      
  }


  function contact(){
    const element = document.createElement('span');
       
    element.innerText = "Call us on +356 77777777"
  
    return element;

  }

  export {titleAbout, viewAddress, imageAbout, contact}