import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      searchedMovie: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({input: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({searchedMovie: this.state.input, input: ''})
  }
  render() {
    return (
      <div>
        <Header />
        <h1>The Open Movie Database</h1>
        <p>Search for a movie:</p>
        <form>
          <input value={this.state.input} onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit}>Search</button>
        </form>
        <MovieCard movieTitle={this.state.searchedMovie}/>
      </div>
    )
  }
}
class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>OMdb</h1>
        <p>Home</p>
      </div>
    )
  }
}

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie1: ''
    }
    this.handleMovieChange = this.handleMovieChange.bind(this)
  }
  handleMovieChange(event) {
    this.setState({movie1: event.target.value})
  }

  render() {
    if (this.props.movieTitle !== '') {
      let movie = this.props.movieTitle.replace(' ', '-');
      let movieInfo = new Request('http://www.omdbapi.com/?apikey=9c4122a2&t=Star-Wars'+ movie)
  
      //let movieInfo;
      fetch('http://www.omdbapi.com/?apikey=9c4122a2&t=Star-Wars')
        .then(response => response.json())
        .then(function(data) {
          movieInfo = data.results
        })
        this.setState({movie1: movieInfo})
        //let obj;    
        //fetch('http://www.omdbapi.com/?apikey=9c4122a2&t=Star-Wars')
          //.then(res => res.json())
          //.then(data => obj = data)
    }
    return (
      <div>
        <h1>{this.props.movieTitle}</h1>
        <p>{this.state.movie1}</p>
      </div>
    )
  }
}
export default App;
