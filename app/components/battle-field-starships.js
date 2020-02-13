import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class BattleFieldStarshipsComponent extends Component {
  @service starshipsService;
  @tracked data;
  @tracked userScore;
  @tracked computerScore;

  constructor(...args) {
    super(...args);
    this.starshipsService.getRandomCard()
      .then(data => this.calculatedScore(data));
    }
  @action changePlayers() {
    this.starshipsService.getRandomCard()
      .then(data => this.calculatedScore(data));
  }
  calculatedScore(data) {
    this.data = data;
    if(data.resultPlayer.crew > data.resultComputer.crew) {
      this.starshipsService.userScore += 1;
    } else if(data.resultPlayer.crew < data.resultComputer.crew) {
      this.starshipsService.computerScore += 1;
    } else if(data.resultComputer.crew === 'undefined'){
      this.peopleService.computerScore +=1;
    } else if(data.resultPlayer.crew === 'undefined'){
      this.peopleService.userScore +=1;
    }
    this.userScore = this.starshipsService.userScore;
    this.computerScore = this.starshipsService.computerScore;
  }
}
