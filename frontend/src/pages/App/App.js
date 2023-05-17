import React, { useEffect } from 'react'
import axios from 'axios'
import TweetList from '../../components/Tweetlist/Tweetlist'
import NewTweet from '../../components/NewTweet/NewTweet'

import './App.css'

const App = () => {

  const [tweets, setTweets] = React.useState([])
  const BASE_URL = 'https://pwqy7tg6v7.execute-api.us-east-1.amazonaws.com/prod'

  const mapArray = (arr) => {
    return arr.map(obj => ({
      content: obj.content.S,
      user: obj.user.S,
      date: obj.date.S,
      id: obj.id.S
    }))
  }

  const fetchTweets = async () => {
    const response = await axios.get(`${BASE_URL}/tweets`)
    const tweets = mapArray(JSON.parse(response.data.body))
    setTweets(tweets)
  }

  useEffect(() => {
    fetchTweets()
  }, [])

  const handleAddTweet = (tweet) => {
    setTweets([tweet, ...tweets])
  };

  return (
    <div className="app">
      <h1>Yowl</h1>
      <NewTweet onAddTweet={handleAddTweet} setTweets={setTweets} mapArray={mapArray} />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default App;
