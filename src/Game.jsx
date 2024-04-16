import React, { useState } from "react";

function Game() {
    const [numSeedWords, setNumSeedWords] = useState(1);
    const [seedWords, setSeedWords] = useState([]);
    const [allWords, setAllWords] = useState([]);
    const [oddle, setOddle] = useState("");

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
            setAllWords([]);  // Clear allWords before populating

            const oddleWord = await fetchSeedWord();
            setOddle(oddleWord);
            setAllWords([oddleWord])

            for (let i = 0; i < seeds.length; i++) {
                const seed = seeds[i];
                const result = await fetchAlikeWords(seed);  // Fetch alike words for each seed
                const alikeWords = result[0]
                const newSeed = result[1]
                setAllWords(prevWords => [...prevWords, newSeed, ...alikeWords]);  // Add both seed and its alike words
            }
        } catch (error) {
            console.error('Failed to fetch words:', error);
            setAllWords([]);
        }
    }

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
            <h1 onClick={fetchSeedWords}>Get Seed Words</h1>
            <button onClick={getAllWords}>Get All Words</button>
            <h2>Oddle: {oddle}</h2>
            <h2>Number of Seed Words: {seedWords.length}</h2>
            <h3>All Words:</h3>
            <ul>
                {allWords.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul>
        </div>
    );
}

export default Game;