// TweetList.js
import React from 'react';
import Tweet from '../Tweet/Tweet';

import './Tweetlist.css'

const TweetList = ({ tweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;