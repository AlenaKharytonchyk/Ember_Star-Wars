import Service from '@ember/service';

export default class PeopleServiceService extends Service {
  userScore = 0;
  computerScore = 0;
  async getRandomCard() {
    const url = 'https://swapi.co/api/people/';
    let response = await fetch(url);
    let { count } = await response.json();
    let random = () => {
      const min = 1;
      const max = count;
      return Math.floor(Math.random() * (max - min)) + min;
    };
    // let cardResponsePlayer = await fetch(`${url}${random()}/`); //await promise.all
    // let resultPlayer = await cardResponsePlayer.json();

    let promisePlayer = fetch(`${url}${random()}/`).then(response => response.json());
    let promiseComputer = fetch(`${url}${random()}/`).then( response => response.json());

    // let cardResponseComputer = await fetch(`${url}${random()}/`);
    // let resultComputer = await cardResponseComputer.json();
    // return {resultPlayer, resultComputer};
    let [resultPlayer, resultComputer] = await Promise.all([promisePlayer, promiseComputer]);
    return { resultPlayer, resultComputer };
  }
}
