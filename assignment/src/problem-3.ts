//3.Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

const countWordOccurrences=(sentence:string, word:string):number=>{
    const wordTolowerCase=word.toLowerCase()
    const sentenceToLowercase=sentence.toLowerCase()
    console.log(sentenceToLowercase)
    const splitedSentence=sentenceToLowercase.split(' ')
    const noOfMatch=splitedSentence.filter(splitedWord=>splitedWord===wordTolowerCase)
    return noOfMatch.length
}

const res3=countWordOccurrences('i Am am a Boy typescript', 'typescript')
console.log(res3)