import React from 'react';

class LikeBar extends React.Component {

  render()
  {
    let prop_likes = this.props.likes;
    if(!prop_likes){return (<div></div>);}
    let likes = Object.values(prop_likes).filter(like => like.is_like === 1);
    let dislikes = Object.values(prop_likes).filter(like => like.is_like === 0);
    return (<div>
      <span className="likebar-none">{likes.length}</span> 
      {/* <img className="likebar-hand" src></img> */}
      <span>{this.props.liked}</span>
      <span className="likebar-none">{dislikes.length}</span>
      </div>);
  }
}

export default LikeBar;