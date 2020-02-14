import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      name: 'Luke Skywalker',
      mass: 77,
    };
  }
}
