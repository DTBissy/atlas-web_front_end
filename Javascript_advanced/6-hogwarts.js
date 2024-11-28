class Hogwarts {
  constructor(privateScore = 0, points = null) {
    this.privateScore = privateScore;
    this.points = points;


  }
  #name = "";


  #changeScoreBy(points) {
    this.privateScore += points
    return this.privateScore
  }

  setName(newName) {
    this.#name = newName;
    return { name: newName };
  }

  rewardStudent(point = 1) {
    this.#changeScoreBy(point);
  }

  penalizeStudent(point = -1) {
    this.#changeScoreBy(point);
  }

  getScore() {
    return `${this.#name}: ${this.privateScore}`;
  }

}

let Harry = new Hogwarts();

let BigDraco = new Hogwarts();

Harry.setName("Harry");
BigDraco.setName("BigDraco");

Harry.rewardStudent();
Harry.rewardStudent();
Harry.rewardStudent();
Harry.rewardStudent();
BigDraco.rewardStudent();
BigDraco.penalizeStudent();
BigDraco.penalizeStudent();
BigDraco.penalizeStudent();


console.log(BigDraco.getScore());
console.log(Harry.getScore());
