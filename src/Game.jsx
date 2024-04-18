import React, { useState } from "react";
import Card from "./Card.jsx"

function Game() {
    const [numSeedWords, setNumSeedWords] = useState(1);
    const [seedWords, setSeedWords] = useState([]);
    const [allWords, setAllWords] = useState([]);
    const [oddle, setOddle] = useState("");
    const [rightWrong, setRightWrong] = useState(0) // 0 do nothing, 1 correct, 2 wrong
    const [started, setStarted] = useState(false)

    const cards = allWords.map((word, index) => (
        <Card
          key={index} // It's important to include a unique key when mapping
          card_word={word}
          isOddle={word == oddle}
          onClick={() => checkAnswer(word)}
        />
      ));
    
    function getRandomInt(n) {
        return Math.floor(Math.random() * (n + 1));
    }

    // function shuffleCards(){
    //     let array = [...allWords]; // Make a copy of allWords to shuffle
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    //     }
    //     setAllWords(array); // Set the shuffled array back to state
    // }

    function shuffleCards(words) {
        let array = [...words]; // Copy the words array to shuffle
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        setAllWords(array); // Set the shuffled array back to state
    }

    function nextLevel(){
        setNumSeedWords(oldNum => oldNum + 1)
        setRightWrong(0)
        getAllWords()
        // shuffleCards()
        setStarted(true)
    }

    function checkAnswer(word){
        if (word === oddle) {
            setRightWrong(1)
        }
        else{
            setRightWrong(2)
        }
    }

    async function fetchSeedWord() {
        const response = await fetch(`https://random-word-api.vercel.app/api?words=1`);
        const data = await response.json();
        return data[0]; // Return a single new seed word
    }

    async function fetchAlikeWords(word) {
        const response = await fetch(`https://api.api-ninjas.com/v1/thesaurus?word=${word}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'eYNgburuDe5fmupuFfedpw==jvrAI65Gue0qzHKS'
            }
        });
        const data = await response.json();
        if (data.synonyms && data.synonyms.length > 0) {
            return [data.synonyms.slice(0, 2), word];  // Return only the first two synonyms
        } else {
            // If no synonyms, fetch a new seed word and try again
            const newSeed = await fetchSeedWord();
            return fetchAlikeWords(newSeed); // Recursively fetch synonyms for the new seed
        }
    }

    async function getAllWords() {
        try {
            const seeds = await fetchSeedWords();  // Fetch initial seed words
    
            let newAllWords = [];  // Temporary array to store all words
    
            const oddleWord = await fetchSeedWord();  // Fetch the oddle word
            newAllWords.push(oddleWord);  // Add the oddle word to the temporary array
            setOddle(oddleWord);  // Set the oddle word state
    
            for (let i = 0; i < seeds.length; i++) {
                const seed = seeds[i];
                const result = await fetchAlikeWords(seed);  // Fetch alike words for each seed
                const alikeWords = result[0];
                const newSeed = result[1];
                newAllWords.push(newSeed, ...alikeWords);  // Add both seed and its alike words to the array
            }
    
            shuffleCards(newAllWords);  // Shuffle the complete list of words before setting them
        } catch (error) {
            console.error('Failed to fetch words:', error);
            setAllWords([]);  // Only setAllWords in case of an error
        }
    }

    // async function getAllWords() {
    //     try {
    //         const seeds = await fetchSeedWords();  // Fetch initial seed words
    //         setAllWords([]);  // Clear allWords before populating

    //         const oddleWord = await fetchSeedWord();
    //         setOddle(oddleWord);
    //         setAllWords([oddleWord])

    //         for (let i = 0; i < seeds.length; i++) {
    //             const seed = seeds[i];
    //             const result = await fetchAlikeWords(seed);  // Fetch alike words for each seed
    //             const alikeWords = result[0]
    //             const newSeed = result[1]
    //             setAllWords(prevWords => [...prevWords, newSeed, ...alikeWords]);  // Add both seed and its alike words
    //         }
    //     } catch (error) {
    //         console.error('Failed to fetch words:', error);
    //         setAllWords([]);
    //     }
    // }

    async function fetchSeedWords() {
        const seeds = [];
        for (let i = 0; i < numSeedWords; i++) {
            const newSeed = await fetchSeedWord();
            seeds.push(newSeed);
        }
        setSeedWords(seeds);
        return seeds;  // Return the fetched seed words
    }

    return (
        <div>
            <h1>Oddle</h1>
            <h2>There are {numSeedWords - 1} groups of 3 words that relate to each other. Select the odd one out.</h2>
            {!started && <button onClick={nextLevel}>Start</button>}
            <div className="card-container">
                {cards}    
            </div>
            <h2>{rightWrong === 1 && "You got it right!"}</h2>
            <h2>{rightWrong === 2 && "You got it wrong"}</h2>
            {rightWrong === 1 && <button onClick = {nextLevel}> Next Level</button>}
        </div>
    );
}

export default Game;