class CV {

    /**
   * Creates a new Person instance.
   * @param {string} name - The name of the person.
   * @param {number} age - The age of the person.
   * @param {string} email - Optional email address of the person.
   * @param {BasicInfo} basics
   */
    constructor(basics, exp) {
        this.name = basics.name;
        this.age = basics.age;
        this.email = basics.email;
        this.profile = basics.profile;
        this.address = basics.address;
        this.hobbies = basics.hobbies

        this.exp = exp.exp;
        this.skills = exp.skills;
        this.languages = exp.languages;
        this.highlights = exp.highlights;
    }
}

class BasicInfo {
    constructor(name, age, email, profile, hobbies, address) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;

        this.profile = profile;
        this.hobbies = hobbies;
    }
}
/**
 * @param {string[]} exp - Previous work experience with work years at the end
 * @param {Object[]} skills - { desc: string, rating: number } 
 * @param {Object[]} languages - { language: string, rating: number } 
 * @param {String[]} highlights - Special skills like "cook 2 min in 1min 58sec" 
 * 
 */

class Experience {
    constructor(exp, skills, languages, highlights) {
        this.exp = exp;
        this.skills = skills;
        this.languages = languages;
        this.highlights = highlights;
    }
}

export { CV, BasicInfo, Experience }