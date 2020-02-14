import Service from '@ember/service';

export default class StartshipsServiceService extends Service {
  userScore = 0;
  computerScore = 0;
  async getRandomCard() {
    const url = 'https://swapi.co/api/starships/';
    let response = await fetch(url);
    let { count } = await response.json();
    let random = () => {
      const min = 1;
      return Math.floor(Math.random() * (count - min)) + min;
    };

    let promisePlayer = fetch(`${url}${random()}/`).then(response => response.json());
    let promiseComputer = fetch(`${url}${random()}/`).then( response => response.json());

    let [resultPlayer, resultComputer] = await Promise.all([promisePlayer, promiseComputer]);
    if(!resultPlayer.name || !resultComputer.name){
      alert('Oops! No information about on one of the ships! Just play again!');
    }
    return { resultPlayer, resultComputer };
  }
}
