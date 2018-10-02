// Dependencies
import React, { Component } from 'react';


class Library extends Component {

    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            id: null,

        }

    }
    componentDidMount(){
        const { id } = this.props.match.params
        this.setState({
            id: id
        })
    }
  render() {
    return (
      <div className="About">
        <h1>Library Page</h1>
        <p>{this.state.id}</p>
      </div>
    );
  }
}

export default Library;