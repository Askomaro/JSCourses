function getObj(path, o) {
	path = path.split('.'); 
	for (var i = 0, len = path.length; i < len; i++) {
   		o = o[path[i]];
 	}
 	return o;
}		

function deepCopy(obj) {
	return JSON.parse(JSON.stringify(obj));	
}

function getFriends (id) {
 var arr = [],
     len;
   if (people[id-1] && people[id-1].friends) {
      len = people[id-1].friends.length;
      for (var i = 0; i < len; i++) {
        arr.push( people[people[id-1].friends[i]-1]); 

      }

   } else {
     return null
   }
   
   
return arr;

}


