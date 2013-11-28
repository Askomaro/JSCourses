(function () {
var table = document.getElementsByTagName('tbody')[0],
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

table.parentNode.classList.add('focus');

document.addEventListener('keydown', keyDownHandler, false);

function keyDownHandler(event) {
  var keyCode = event.keyCode,
      focusedElement = document.getElementsByClassName('focus')[0],
      newRowChild = table.firstChild.cloneNode(true),
      tableRow = table.getElementsByTagName('tr');

  switch(keyCode)
  {
  case key.ENTER:

    event.shiftKey ? addColumn([].slice.apply(tableRow)) : table.appendChild(newRowChild);
    break;

  case key.DELETE:
    
    event.shiftKey ? removeColumn([].slice.apply(tableRow)) : table.removeChild(tableRow[tableRow.length-1]);
    break;

  case key.DOWN:
    stepDown();

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

function stepDown() {

  table.firstChild.classList.add('focus'); 
}

})();