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
      return Math.floor(Math.random() * (count - min)) + min;
    };

    let promisePlayer = fetch(`${url}${random()}/`).then(response => response.json());
    let promiseComputer = fetch(`${url}${random()}/`).then( response => response.json());

    let [resultPlayer, resultComputer] = await Promise.all([promisePlayer, promiseComputer]);
    return { resultPlayer, resultComputer };
  }
}
