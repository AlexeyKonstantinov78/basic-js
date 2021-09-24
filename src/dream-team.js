import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arr = [];
  let name = '';

  members.forEach(item => {        
    if (!Number.isInteger(item) && item !== null && typeof(item) !== "boolean") {
      arr.push(item.trim().substr(0, 1));    
    }    
    
  });

  arr.sort(function(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  });

  arr.forEach(str => {
    name += str;
  });
  
  return name;
}

// const members = ['Olivia', 1111, 'Lily', 'Oscar', true, null]; 

// createDreamTeam(members);
// console.log('createDreamTeam(members): ', createDreamTeam(members));