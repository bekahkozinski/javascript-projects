//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }
    
    average() {
        let average  = 0
        for (let i = 0; i < this.scores.length; i++) {
            average += this.scores[i]
        }
        return Math.round((average / this.scores.length) * 10) / 10
    }

    status() {
        let pass;
        if (this.average() >= 90) {
            pass = "Accepted"
        } else if (this.average() >= 80 && this.average() <= 89) {
            pass = "Reserve"
        } else if (this.average() >= 70 && this.average() <= 79) {
            pass = "Probationary"
        } else if (this.average() < 70) {
            pass = "Rejected"
        }
        return `${this.name} earned an average test score of ${this.average()}% and has a status of ${pass}.`
    }
}

const bubbaBear = new CrewCandidate("Bubba Bear", "135kg", [88, 85, 90]);
const merryMaltese = new CrewCandidate("Merry Maltese", "1.5kg", [93, 88, 97]);
const gladGator = new CrewCandidate("Glad Gator", "225kg", [75, 78, 62]);

bubbaBear.addScore(83);
bubbaBear.average();
console.log(merryMaltese.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.