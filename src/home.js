
function title() {
    const element = document.createElement('span');
    element.className="title";    
    element.innerText = _.join(['MYSTAKE'], ' ');
  
    return element;
  }

  function describtion1() {
      const element = document.createElement('span');
      element.innerText = 'Where we only delive the best'

      return element;

  }

  function describtion2() {
    const element = document.createElement('span');
    element.innerText = 'of the best stakes!'

    return element;
  }

  function image(){
    const image = document.createElement('img');
    image.className = "homeImg";
    image.src = "./images/chef.jpg"

    return image;
      
  }

  function describtion3(){
    const element = document.createElement('span');
    element.innerText = "Order online or visit us."

    return element;

  }



  export {title, describtion1, describtion2, image, describtion3}