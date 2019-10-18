import React ,{Component} from 'react'
class Sample2 extends Component {
  constructor(){
    super()
    this.state={
      name:"Boopathi",
       company:"TNQ Technologies"    }
  }
  companyName(){
    this.setState({
      company:"Megam System"
    })
  }
  render() {
    return(
      <div>
      <h1>
    I am {this.state.name}</h1>
      <p>I have worked in {this.state.company}</p>
      <button onClick={()=>this.companyName()}>current company</button></div>
    )
  }
}
export default Sample2
