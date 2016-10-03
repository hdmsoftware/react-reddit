import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick}>
        Clicks: {this.state.count}
        <p>
          {this.props.username}
        </p>
      </div>
    );
  }
}
Counter.propTypes = { initialCount: React.PropTypes.number,
username: React.PropTypes.string.isRequired };

Counter.defaultProps = { initialCount: 0 };

export default Counter