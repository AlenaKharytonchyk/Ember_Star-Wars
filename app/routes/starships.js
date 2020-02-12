import Route from '@ember/routing/route';

export default class StarshipsRoute extends Route {
  async model() {
    let response = await fetch('https://swapi.co/api/starships/');
    let { results } = await response.json();
    return results;
  }
}
