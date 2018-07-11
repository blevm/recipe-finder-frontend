import env from '../env';

class Adapter {

  static getRecipes = (term) => {
    return fetch(`https://api.edamam.com/search?q=${term}&app_id=${env.app_id}&app_key=${env.app_key}`)
    .then( r=>r.json() )
  }

  static isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  static logout() {
    localStorage.removeItem('token');
  }


}

export default Adapter;
