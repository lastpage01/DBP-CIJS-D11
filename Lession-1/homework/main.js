//Pig Latin

const translatePigLatin = (word)=>{
    let modifiedWord = word;
    const vowels = "euoai".split("");
    if(vowels.indexOf(word[0]) != -1){
        modifiedWord = `${word}way`;
    }
    else{
        let firstVowelIndex = 0;
        for(let i =0;i<word.length;i++){
            if(vowels.indexOf(word[i]) != -1){
                firstVowelIndex = i;
                break;
            }
        }
        let consonantCluster = word.slice(0,firstVowelIndex);
        let remain = word.slice(firstVowelIndex)
        modifiedWord = `${remain}${consonantCluster}ay`;
    }
    console.log(modifiedWord);
}
translatePigLatin('schwartz');

//Padovan Sequence

const padovan = (m,n)=>{
    let positive = [];
    let negative = [];
    for(let i = 0;i<n+1;i++){
        if(i<3)
            positive.push(1);
        else{
            let value = positive[i-3]+ positive[i-2];
            positive.push(value); 
        }
    }
    for(let i = 0;i< Math.abs(m)+3;i++){
        if(i<3)
            negative.push(1);
        else{
            let value = negative[i-3] - negative[i-1];
            negative.push(value)
        }
    }
    return [...negative.slice(3).reverse(),...positive]
}

console.log(padovan(-10,10));
