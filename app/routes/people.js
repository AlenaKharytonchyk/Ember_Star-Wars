import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  // async model() {
  //   const url = 'https://swapi.co/api/people/';
  //   let response = await fetch(url);
  //   let { count } = await response.json();
  //   let random = () => {
  //     const min = 1;
  //     const max = count;
  //     return Math.floor(Math.random() * (max - min)) + min;
  //   };
  //   let cardResponsePlayer = await fetch(`${url}${random()}/`);
  //   let resultPlayer = await cardResponsePlayer.json();
  //
  //   let cardResponseComputer = await fetch(`${url}${random()}/`);
  //   let resultComputer = await cardResponseComputer.json();
  //   return {resultPlayer, resultComputer};
  // }
}
