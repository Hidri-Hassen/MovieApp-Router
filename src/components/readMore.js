import React, { Component } from 'react'
import { connect } from "react-redux"

class ReadMore extends Component {

    render(){
      if(!this.props.moviesData){
        return(<h1>Movie Not Found</h1>)
      }
      const [moviesList] = this.props.moviesData.filter(movie=>movie.id === this.props.match.params.id)
      
        return(
          
      
            <div>
              
              <h1>Synopsis Of The Movie</h1>
              <h3>{moviesList.description}</h3>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
      moviesData: state.moviesData
    }
  } 
  
  export default  connect (mapStateToProps)(ReadMore);

  