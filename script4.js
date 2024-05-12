class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log(`${this.name} says: Running is fun! - said no one ever.`);
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}.`);
    }
}

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true; // Default value for busy property
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }

    learnLanguage(language) {
        this.languages.push(language);
    }

    listLanguages() {
        console.log(`${this.name} knows ${this.languages.join(', ')}.`);
    }
}

// Testing the implementation
const programmer1 = new Programmer('Alice', 'Software Engineer', 30, ['JavaScript', 'Python']);
const programmer2 = new Programmer('Bob', 'Web Developer', 25, ['HTML', 'CSS']);

programmer1.exercise(); 
programmer1.fetchJob(); 
programmer1.offerNewTask(); 
programmer1.completeTask();
programmer1.offerNewTask(); 
programmer1.learnLanguage('Java');
programmer1.listLanguages(); 
