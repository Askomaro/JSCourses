(function () {
    
    //@param [string] - childSelector
    //@param [string] - eventType
    //@param [function] - handler
    Object.prototype.delegate = function (childSelector, eventType, handler) {
      
      this.addEventListener(eventType, function(event){
        childSelector && event.target.className === childSelector.substring(1, childSelector.length) ? handler.apply(event.target, arguments) : null;
      
      }, false);
    
    };
})();

var container = document.getElementById('container');
  container.delegate('.child', 'click', function(e){
    console.log(this);
  // the context 'this' should be equal the element, that fires event, i.e. child with class 'child'
});