(function () {
var table, container = document.getElementsByTagName('table')[0],
    newRow = document.createElement('tr'),
    newColumn = document.createElement('td'),
    key = {
      ENTER   : 13,
      DELETE  : 46,
      UP      : 38,
      DOWN    : 40,
      RIGHT   : 39,
      LEFT    : 37,
      SHIFT   : 16
    };

container.classList.toggle('focusTable');
table = container.firstChild;


document.addEventListener('keydown', keyDownHandler, false);

function keyDownHandler(event) {
  var keyCode = event.keyCode,
      focusedElement = document.getElementsByClassName('focus')[0],
      focusTable = document.getElementsByClassName('focusTable')[0],
      newRowChild, tableRow;

      if (table.tagName == 'TBODY') {
        newRowChild = table.firstChild.cloneNode(true),
        tableRow = table.getElementsByTagName('tr');
        newRowChild.classList.remove('focus');  
      }
      
  console.log(table.tagName);
  switch(keyCode)
  {
  case key.ENTER:
    if(table.tagName == 'TBODY') { 
      event.shiftKey ? addColumn([].slice.apply(tableRow)) : table.appendChild(newRowChild);
    } else {
      container.innerHTML = '<tr><td></tr>';
      table = container.firstChild;
    }
    break;

  case key.DELETE:
    
    event.shiftKey ? removeColumn([].slice.apply(tableRow)) : table.removeChild(tableRow[tableRow.length-1]);
    break;

  //@param
  //@stepDown/Up - fucntion
  //@args[] - Obj, boolean[table or el of table]
  //
  case key.DOWN:

    focusedElement ? stepDown(focusedElement, false) : stepDown(focusTable, true);
    break;
  
  case key.UP:
    
    focusedElement ? stepUp(focusedElement, false) : stepUp(focusTable, true);
    break;

  case key.RIGHT:
    
    focusedElement ? stepRight(focusedElement) : null;
    break;  

  case key.LEFT:
    
    focusedElement ? stepLeft(focusedElement) : null;
    break;       

  default:
    
  }

}

function addColumn(tr) {
  
  tr.forEach(function(el){
    var newColumn = document.createElement('td');
    el.appendChild(newColumn);
  });
}

function removeColumn(tr) {
  var lastNum;
  tr.forEach(function(el){
    var lastColumn = el.getElementsByTagName('td');
    lastNum = lastNum ? lastNum : lastColumn.length - 1;

    el.removeChild(lastColumn[lastNum]);
  });
}

function stepDown(focusedElement, table) {
  var nextS;

  if(table) {
    
    focusedElement.classList.toggle('focusTable');
    focusedElement.firstChild.firstChild.classList.toggle('focus');

  } else if(focusedElement.tagName == 'TR') {
    
    nextS = focusedElement.nextSibling;
    focusedElement.classList.toggle('focus');
    nextS ? nextS.classList.toggle('focus') : container.classList.toggle('focusTable'); 

  } else {
    
    nextS = focusedElement.parentNode.nextSibling;
    focusedElement.classList.toggle('focus');
    nextS ? nextS.childNodes[focusedElement.cellIndex].classList.toggle('focus') : focusedElement.parentNode.classList.toggle('focus');
  }

}

function stepUp(focusedElement, table) {
  var prevS;

  if(table) {

  } else if(focusedElement.tagName == 'TR') {
    
    prevS = focusedElement.previousSibling;
    focusedElement.classList.toggle('focus');
    prevS ? prevS.classList.toggle('focus') : container.classList.toggle('focusTable'); 

  } else {
    
    prevS = focusedElement.parentNode.previousSibling;
    focusedElement.classList.toggle('focus');
    prevS ? prevS.childNodes[focusedElement.cellIndex].classList.toggle('focus') : focusedElement.parentNode.classList.toggle('focus');
  }  

}

function stepRight(focusedElement) {
  var nextS = focusedElement.nextSibling;

  focusedElement.classList.toggle('focus');
  if(focusedElement.tagName == 'TR') {
    focusedElement.firstChild.classList.toggle('focus');
  } else {
    nextS ? nextS.classList.toggle('focus') : focusedElement.parentNode.classList.toggle('focus');
  }

}

function stepLeft(focusedElement) {
  var prevS = focusedElement.previousSibling;

  focusedElement.classList.toggle('focus');
  if(focusedElement.tagName == 'TR') {
    focusedElement.firstChild.classList.toggle('focus');
  } else {
    prevS ? prevS.classList.toggle('focus') : focusedElement.parentNode.classList.toggle('focus');
  }

} 

})(); 