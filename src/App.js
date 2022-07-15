import React from "react";
import './App.css'

class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      url:'https://yts.torrentbay.to/api/v2/list_movies.json',
      movies:[],
      isLoading: true
    }
  }
  componentDidMount(){
    this.getMoviesList();
  }
  getMoviesList(){
    fetch(this.state.url,)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            movies: result.data.movies,
            isLoading : false
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoading: false,
            error
          });
        }
      )
  }






  render(){
    return(
      <div className="container my-5">
        {
          this.state.isLoading === true ?
          <div className="text-center">
              loading ...
          </div> :
          <div className="row">
            {
              this.state.movies.map((movie) => {
                return(
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <h6>{movie.title}</h6>
                        <img src={movie.background_image_original} width='100%' />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

        }
      </div>
    )
  }


}
export default App;