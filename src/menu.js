function titleMenu() {
    const element = document.createElement('span');
    element.className="title";    
    element.innerText = _.join(['MENU'], ' ');
  
    return element;
  }

  export {titleMenu}