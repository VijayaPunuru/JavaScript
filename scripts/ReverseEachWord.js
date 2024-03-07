function reverseEachWord(sentence) {
    if (typeof sentence !== 'string') {
        return "Invalid input";
    }

    return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

const inputSentence = "Java J2EE Reverse Me";
const reversedSentence = reverseEachWord(inputSentence);
console.log("Input:", inputSentence);
console.log("Output:", reversedSentence);
