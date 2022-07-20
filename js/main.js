var result = getRandom( 0, 16 );
 
console.log( result );
 
 
 
function getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
}