import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class BattleFieldStarshipsComponent extends Component {
  @service startshipsService;
  @tracked data;
  @tracked userScore;
  @tracked computerScore;

  constructor(...args) {
    super(...args);
    this.startshipsService.getRandomCard()
      .then(data => this.calculatedScore(data));
    }
  @action changePlayers() {
    this.startshipsService.getRandomCard()
      .then(data => this.calculatedScore(data));
  }
  calculatedScore(data) {
    this.data = data;

    if(data.resultComputer.crew === 'unknown'){
      this.startshipsService.userScore +=1;
    } else if(data.resultPlayer.crew === 'unknown'){
      this.startshipsService.computerScore +=1;
    } else if(data.resultPlayer.crew > data.resultComputer.crew) {
      this.startshipsService.userScore += 1;
    } else if(data.resultPlayer.crew < data.resultComputer.crew) {
      this.startshipsService.computerScore += 1;
    } else  if (data.resultPlayer.crew === data.resultComputer.crew) {
      this.startshipsService.userScore += 0;
      this.startshipsService.computerScore += 0;
    }
    this.userScore = this.startshipsService.userScore;
    this.computerScore = this.startshipsService.computerScore;
  }
}
