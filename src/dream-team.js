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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arr = [];
  let name = '';

  try {
    members.forEach(item => {        
      if (!Number.isInteger(item) && item !== null && typeof(item) !== 'boolean' && typeof(item) !== 'number' && typeof(item) !== 'object' && typeof(item) !== 'undefined' && typeof(item) !== "symbol") {
        console.log(typeof(item));
        arr.push(item.trim().substr(0, 1).toUpperCase());    
      }          
    });
  }
  catch (e) {
    return false;
  }
  
  
  arr.sort(function(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  });

  if (arr.length == 0 ) return false;

  arr.forEach(str => {
    name += str;
  });
  
  return name;
}

//const members = [undefined]; 
    // const a = [3],
    //         b = [3.312312],
    //         c = [false],
    //         d = [null],
    //         e = [undefined],
    //         g = { 'foo': 'bar' };
// createDreamTeam(members);
// console.log('createDreamTeam(a): ', createDreamTeam(a));
// console.log('createDreamTeam(b): ', createDreamTeam(b));
// console.log('createDreamTeam(c): ', createDreamTeam(c));
// console.log('createDreamTeam(d): ', createDreamTeam(d));
// console.log('createDreamTeam(e): ', createDreamTeam(e));

// //console.log(typeof([{ 'foo': 'bar' }]));

// console.log('createDreamTeam(g): ', createDreamTeam(g));
