import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        image={faker.image.avatar()}
        comment="nice blog post!"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        image={faker.image.avatar()}
        comment="sweet!"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        image={faker.image.avatar()}
        comment="learn to read!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
