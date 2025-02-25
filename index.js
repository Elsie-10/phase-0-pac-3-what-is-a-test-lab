const name = "Susan";
const height = 39;


// check the height is greater than 0 and less than 40
const message =(height > 0 && height < 40) 
? `${name} is ${height} inches tall` 
: `${name}'s height must be greater than 0 and less than 40 inches.`;
 

module.exports = {name, height, message}; 