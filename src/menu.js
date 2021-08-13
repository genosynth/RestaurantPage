function titleMenu() {
    const element = document.createElement('span');
    element.className="title";    
    element.innerText = _.join(['MENU'], ' ');
  
    return element;
  }

let array = [
  {name:"Angus Beef", imgurl:"./images/angus.jpg", describtion:"A popular breed of black cattle that ranges in quality, but can yield welbeel-marbled f."},
  {name:"Bone Roast Stake", imgurl:"./images/boneroast.jpg", describtion:"A large, flavourful chuck roast with a 7-shaped bone best cooked slowly on long heat."},
  {name:"Chuck Stake", imgurl:"./images/chuck.jpg", describtion:"Chewy, flavorful, budget-friendly shoulder steaks best marinated and grilled or braised."},
  {name:"Ostrich", imgurl:"./images/ostrich.jpg", describtion:"A quick-cooking tender meat more similar in flavor and texture to lean beef than poultry."},
  {name:"Beef Sirloin", imgurl:"./images/sirloin.jpg", describtion:"A portion of the beef loin primal cut that yields lean meat ideal for grinding or braisin."},
  {name:"Beef Tenderloin", imgurl:"./images/tenderloin.jpg", describtion:"A tender, lean and highly prized part of the loin made into steaks and roasts."},



]

  function imagesMenu() { //This function will return an array with all the elements of the images

    let imagesElements = [];

    for (let i=0; i<array.length; i++){
      const image = document.createElement('img');
      image.className = "menu-images";
      image.src = array[i].imgurl;

      imagesElements.push(image);
    }


    return imagesElements;

  }

  function titlesMenu() {

    let titlesElements = [];

    for (let i=0; i<array.length; i++){
      const element = document.createElement('h2');
      element.innerText = array[i].name;

      titlesElements.push(element);
    }

    return titlesElements;

  }

  function describtionsMenu() {

    let describtionElements = [];

    for (let i=0; i<array.length; i++){
      const element = document.createElement('p');
      element.innerText = array[i].describtion;

      describtionElements.push(element);
    }

    return describtionElements;
  }

  export {titleMenu, imagesMenu, titlesMenu, describtionsMenu }