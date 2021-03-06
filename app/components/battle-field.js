import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class BattleFieldComponent extends Component {
  @service peopleService;
  @tracked data;
  @tracked userScore;
  @tracked computerScore;

  constructor(...args) {
    super(...args);
    this.peopleService.getRandomCard()
      .then(data => this.calculateScore(data));
  }
  @action changePlayers() {
    this.peopleService.getRandomCard()
      .then(data => this.calculateScore(data));
  }
  calculateScore(data) {
    this.data = data;

    if(data.resultComputer.mass === 'unknown'){
      this.peopleService.userScore +=1;
    } else if(data.resultPlayer.mass === 'unknown'){
      this.peopleService.computerScore +=1;
    } else if(data.resultPlayer.mass > data.resultComputer.mass) {
      this.peopleService.userScore +=1;
    } else if(data.resultPlayer.mass < data.resultComputer.mass) {
      this.peopleService.computerScore +=1;
    } else  if (data.resultPlayer.mass === data.resultComputer.mass) {
      this.peopleService.userScore += 0;
      this.peopleService.computerScore += 0;
    }
    this.userScore = this.peopleService.userScore;
    this.computerScore = this.peopleService.computerScore;
  }
}
