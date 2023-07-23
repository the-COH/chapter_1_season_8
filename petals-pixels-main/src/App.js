import React, { useState, useEffect } from 'react';
// This line is importing the React library along with two hooks: useState and useEffect. 
// useState is used to manage state in a functional component
// useEffect is used to perform side effects, such as fetching data.
import axios from 'axios';
// a promise-based HTTP client for the browser and node.js
// which can be used to make API requests.
import composeImage from './utils/ImageComposer.js';

const App = () => {
    // Initialize state variables using the useState hook
    // along with their corresponding setter functions
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [timezone, setTimezone] = useState('');
    const [mood, setMood] = useState('');

    const moods = ["Adventurous", "Refreshed", "Blissful", "Contemplative", "Nostalgic"]; // mood options available

    useEffect(() => {
        let now = new Date();
        
        // Standardizing date in 'DD-MONTH-YYYY' format
        let day = String(now.getDate()).padStart(2, '0'); 
        let month = now.toLocaleString('default', { month: 'long' });
        let year = now.getFullYear();
        setDate(`${day}-${month}-${year}`);
        
        // Standardizing time in 'HHMMSS' format
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');
        setTime(`${hours}${minutes}${seconds}`);
    
        // Retrieving the user's timezone in reference to UTC
        let offset = -now.getTimezoneOffset() / 60;
        setTimezone(`UTC${offset >= 0 ? '+' : ''}${offset}`);
    }, []);
    

    // This function sets the mood state variable when the user selects a mood.
    const handleMoodChange = (event) => {
        setMood(event.target.value);
        if (date && time && timezone) {
            generateImage();
        }
    };
    
    const generateImage = async () => {
        if (date && time && timezone && mood) {
            await composeImage(time, mood);
        } else {
            console.log("Cannot generate image, some inputs are missing.");
        }
    };

    const handleClick = async () => {
        // Call the composeImage function here
        // This is assuming that the composeImage function is async and works with the provided arguments
        await composeImage(time, mood);
    };

    return (
        <div>
            <label>
                Mood:
                <select value={mood} onChange={handleMoodChange}>
                    {moods.map((moodOption, index) => (
                        <option key={index} value={moodOption}>{moodOption}</option>
                    ))}
                </select>
            </label>
            <br />

            <p>Your date: {date}</p>
            <p>Your time: {time}</p>
            <p>Your timezone: {timezone}</p>

            <button onClick={handleClick}>Create Image</button>
        </div>
    );
};

export default App;

