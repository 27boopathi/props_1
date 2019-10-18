import React ,{Component} from 'react'
class Sample extends Component {
render(){
  return(
    <div>
    <h1>Your EMP ID is {this.props.id}</h1>
    <h2>Your Name is {this.props.name}</h2></div>
  )

}
  }
  export default Sample
