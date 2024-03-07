function determineAgeGroup(age) {
    if (age < 13) {
        return "kid";
    } else if (age >= 13 && age <= 19) {
        return "teen";
    } else {
        return "adult";
    }
}
const personAge = 13;
console.log(determineAgeGroup(personAge));
