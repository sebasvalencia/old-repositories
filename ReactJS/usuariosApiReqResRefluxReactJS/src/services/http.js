import Fetch from 'whatwg-fetch';

//funcion q recibe una url y regresa el response.json
export function get(url){
  return fetch(url).then( (response) => {
    return response.json();
  });
};
