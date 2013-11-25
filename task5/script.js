//Task #1
var App = function(){
  
  return {

    init: function() {
      this.nodes = document.querySelectorAll('.node');
      this.setListeners();

    },
    
    setListeners: function() {
      [].slice.call(this.nodes).forEach(function(n){
        n.onclick = this.onClick.myBind(this);
      }, this);
    },
    
    onClick: function(e) {
      e = e || window.event;
      var node = e.target || e.srcElement;

      // this - should be the main context - instance of App
      // node - should be the node, that fires event
      console.log(node);
    }

  };
};
 

 if (typeof Function.prototype.myBind === 'undefined') {
  Function.prototype.myBind = function(context){
  	that = this;
  	return  function (context) { that.apply(context, arguments); } 
  };
}

 
(new App()).init();

//Task #2
var Person = function(args) {
    for (var i in args) {
            this[i] = args[i];
    }
};

//Task #3
var PersonExtended = function (args) {
    var getSet = function(val) {
        return {
            get: function() { return val; }
            , set: function(newVal) {
                val = newVal;
            }
        }
    };
    for (var i in args) {
        if (typeof args[i] !== 'function') {
            var capitalizedProperty = i.substring(0, 1).toUpperCase() + i.substring(1);
            var getterName = 'get' + capitalizedProperty;
            var setterName = 'set' + capitalizedProperty;
            var keyVal = getSet(args[i]);

            this[getterName] = keyVal.get;
            this[setterName] = keyVal.set;
        }
        else if (typeof args[i] === 'function') {
            this[i] = args[i].bind(args);
        }
    }
};

//Task #4

var $ = function (selector) {
    var selectedItems = document.querySelectorAll(selector),
    	length = selectedItems.length;
    selectedItems.width = function(newValue){
        for (var i = 0; i < length; i++){
            selectedItems[i].style.width = newValue+"px";
        }
    }
    selectedItems.height = function(newValue){
        for (var i = 0; i < length; i++){
            selectedItems[i].style.height = newValue+"px";
        }
    }

    return selectedItems;
};
