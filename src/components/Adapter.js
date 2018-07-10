import env from '../env.js'

class Adapter {



  static getRecipes = (term) => {
  return fetch(`https://api.edamam.com/search?q=${term}&app_id=${env.app_id}&app_key=${env.app_key}`)
    .then( r=>r.json() )
    }



}

export default Adapter;


//  static isLoggedIn() {
//    return !!localStorage.getItem('token')
//  }
//
//  static logout() {
//    localStorage.removeItem('token');
//  }
// }
