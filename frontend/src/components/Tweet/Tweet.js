import React from 'react';
import moment from 'moment';
import './Tweet.css';

const Tweet = ({ tweet }) => {
  const formattedDate = moment(tweet.date).fromNow();

  return (
    <div className="tweet">
      <div className="tweet-header">
        <span className="tweet-author">{tweet.user}</span>
        <span className="tweet-date">{formattedDate}</span>
      </div>
      <div className="tweet-content">{tweet.content}</div>
    </div>
  );
};

export default Tweet;
