import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('https://swapi.co/api/people/');
    let { results } = await response.json();
    return results;
  }
}
