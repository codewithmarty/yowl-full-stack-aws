import React from 'react'
import axios from 'axios'

import './NewTweet.css';

const NewTweet = ({ onAddTweet, setTweets, mapArray }) => {

  const BASE_URL = 'https://pwqy7tg6v7.execute-api.us-east-1.amazonaws.com/prod'

  const [username, setUsername] = React.useState('')
  const [tweetText, setTweetText] = React.useState('')

  const handleInputChange = (event) => {
    setTweetText(event.target.value)
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  };

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (tweetText.trim() === '' || username.trim() === '') {
      return
    }

    const newTweet = {
      id: Date.now(),
      user: username,
      date: new Date(),
      content: tweetText,
    };

    const response = await axios.post(`${BASE_URL}/newtweet`, newTweet)
    const tweets = mapArray(JSON.parse(response.data.body))
    setTweets(tweets)
    
    onAddTweet(newTweet)
    setTweetText('')
  };

  return (
    <form className="new-tweet" onSubmit={handleSubmit}>
      <input
        className="username-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <textarea
        className="tweet-input"
        placeholder="What's happening?"
        value={tweetText}
        onChange={handleInputChange}
      ></textarea>
      <button className="tweet-button" type="submit">
        Yowl
      </button>
    </form>
  );
};

export default NewTweet;
