import React, { Component } from 'react'
import { connect } from "react-redux"

class ReadMore extends Component {

    render(){
      if(!this.props.moviesData){
        return(<h1>Movie Not Found</h1>)
      }
      const moviesData = this.props.moviesData.filter(el=>el.id === this.props.match.params.id)
        return(
            <div>
         <h1>{moviesData.description}</h1>
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

  