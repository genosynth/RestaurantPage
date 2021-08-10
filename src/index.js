import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    
    element.innerText = _.join(['Hello', 'Fucktard'], ' ');
  
    return element;
  }
  
  //document.body.appendChild(component());