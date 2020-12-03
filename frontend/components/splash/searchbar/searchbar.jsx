import React from 'react';
import {withRouter} from 'react-router-dom';


class SearchBar extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      s_term: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e)
  {
    this.setState({s_term: e.currentTarget.value});
  }

  handleSubmit(e)
  {
    e.preventDefault();
    const s_term = this.state.s_term;
    if(s_term !== "")
    {
      this.props.history.push(`/search/${s_term}`);
    }
  }

  render()
  {
    return (
        <form className='video-search' onSubmit = {this.handleSubmit}>
          <input type='text' className='video-search-text' placeholder={this.props.match.params.s_term || 'Search'} onChange ={this.handleInput}/>
            <input type='image' className='video-search-image' src={window.searchlogoURL}></input>
        </form>
    );
  }
}

export default withRouter(SearchBar);