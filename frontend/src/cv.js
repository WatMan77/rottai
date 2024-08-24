class CV {

    /**
   * Creates a new Person instance.
   * @param {string} name - The name of the person.
   * @param {number} age - The age of the person.
   * @param {string} email - Optional email address of the person.
   * @param {string} phone - Phone number of the person.
   * @param {BasicInfo} basics
   */
    constructor(basics, exp) {
        this.basics = basics;
        this.experience = exp;
    }
}

class BasicInfo {
    constructor(name, age, email, profile, address, phone) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.profile = profile;
        this.phone = phone;
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
    constructor(exp, skills, languages, highlights, hobbies) {
        this.exp = exp;
        this.skills = skills;
        this.languages = languages;
        this.highlights = highlights;
        this.hobbies = hobbies;
    }
}

export { CV, BasicInfo, Experience }