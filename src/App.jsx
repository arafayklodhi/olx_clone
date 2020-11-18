import React from 'react';
// import logo from './logo.svg';
// import firebase from './config/firebase';
import './App.css';
import Children from "./components/child"
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
// import Home from './Home'
// import BasicTextFields from './components/TextField'
// import {TextButtons, Checkboxes} from './components/navbar'
// import Checkboxes from './components/navbar'
// import Navbar from 'bootstrap'
// import { About } from './About'
// import { Contact } from './Contact'
// import { NoMatch } from './NoMatch'
// import Header from './components/layout'
// class App extends React.Component {
//   constructor (){
//     super()
//     this.state = {
//       name : "RaphAA",
//       profession : "MERN STACK DEVELOPER",
//       value : ""
//     }
//   };
//   set_name =() => {
//     this.setState({
//       name : this.state.value
    
//     })
//   }
//   set_value = (e) => 
//   {
//     this.setState({
//       [e.target.name] : e.target.value
//     })
//   }
//   get_name =()=>{
//   console.log(this.state.name)
// }
// get_props =(props) => {
//     console.log(props)
//   }
//   render(){
    
//     return (
      
//         <div>
//           <Header get_props = {this.get_props} profession = {this.state.profession} name = {this.state.name} page = "Application Page"/>
//           <h2>My Name is {this.state.name}<br /> And Iam a {this.state.profession}
//           </h2>
//           <br/>
//           <input name="fm" onChange={(e)=> this.setState({value : e.target.value})} type = "text" placeholder ="naam daal idher"></input>
//           <input name="profession" onChange={(e)=>this.set_value(e)} type ="text" placeholder ="naam daal idher"></input>
//           <button onClick = {this.set_name}>Set name</button>
//           <button onClick = {this.get_name}>Get name</button>
//           {/* <TextButtons />
//           <Home />
//           <Checkboxes />
//           <button type="button" className="btn btn-primary">Primary</button> */}
//           {/* <BasicTextFields /> */}
//         </div>
          
//     );
//   }
// }
// class App extends React.Component
// {
//   constructor(){
//     super()
//     this.state = {
//       // todos : ["rafay","ahsan","masab"],
//       todos : [{title : "rafay",edit : false},{title :"ahsan",edit :false},{title :"masab"}],
//       value: ''
//     }
//   }
//   add_todo =() =>{
//     // this.state.todos.push(this.state.value)
//     // this.setState({
//     //   // todos : this.state.todos
//     //   todos : [...this.state.todos,this.state.value],
//     //   value : ""   
//     // })
//     let obj = {title : this.state.value}
//     firebase.database().ref('/').child("todos").push(obj)
//     this.setState({
//       todos : [...this.state.todos,obj],
//       value : ""
//     })
//     // console.log(this.state.todos)
//   }
//   delete_todo = (index) => {
//     this.state.todos.splice(index,1)
//     this.setState({
//       todos : this.state.todos
//     })
//   }
//   edit_todo = (index,val) =>
//   {
//     // var updated_value = prompt("Enter value");
//     // this.state.todos[index] = updated_value
//     // this.setState({
//     //   todos : this.state.todos
//     // })
//     this.state.todos[index].edit = true;
//     this.setState({
//       todos : this.state.todos
//     })
//   }
//   handleChange = (e,index) => 
//   {
//     this.state.todos[index].title = e.target.value;
//     this.setState({
//       todos : this.state.todos
//     })
//   }
//   update = (index) =>
//   {
//     this.state.todos[index].edit = false;
//     this.setState({
//       todos : this.state.todos
//     })
//   }
//   render(){
//     let {todos,value} =this.state;
//     return(
//       <div>
//         <input value={value} onChange= {(e)=> this.setState({value : e.target.value})} placeholder="loru lallit"></input>
//         <button onClick={this.add_todo}>Add Item</button>
//         <ul>
//           {todos.map((v,i)=>{
//             return <li key = {i}>
//               {v.edit ? <input value={v.title} type = "text" onChange={(e)=>this.handleChange(e,i)} />: v.title}
//               {v.edit ?
//               <button onClick = {()=> this.update(i)}>Update</button>
//               :
//               <button onClick = {()=> this.edit_todo(i,v.title)}>Edit</button>
//               }                 
//               <button onClick = {()=> this.delete_todo(i)}>Delete</button></li>
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;
// ROusing
// import Routing from './config/router'
// class App extends React.Component {
//   render() {
//     return (
//       <Routing />
//     )
//   }
// }
// export default App; 

//  React lifecycle & redux
// global state redex se mangne k lye
import { connect } from 'react-redux'
import {set_data, facebook_login} from './store/action'
class App extends React.Component {
  constructor(){
    super()
    this.state ={
      count : 0,
      // data : []  
    }
    // console.log("Contructor")
  }

  // isme this nhi milta tou hmein return krana hoga
  // static getDerivedStateFromProps(props,state){
  //   console.log ("getDerivedStateFromProps",state)
  //   // return {
  //   //   count : 0
  //   // }
  //   return null
  // }
  // componentDidMount(){
  //   console.log("componentDidMount")
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  // .then(data => {
  //   this.setState({
  //     data: data
  //   })
  // })
  // .catch(err => console.log(err))
  // }
  // shouldComponentUpdate(){
  //   if(this.state.count < 5){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  render() {
    // console.log("render")
    // console.log("dta=>",this.state.data)
    console.log("redux_data",this.props)
    return (
    <div style ={{textAlign : "center"}}>
    <h1>React lifecycle</h1>
    {/* {this.state.data.map((v,i)=>{
      return <h4>{v.title}</h4>
    }
    )
    } */}
    {/* <h4>{this.state.count}</h4> */}
    {this.state.count < 5 && <Children count = {this.state.count} />}
    <button onClick ={()=>this.setState({count :this.state.count +1})}>Increment</button>
    <button onClick ={()=>this.setState({count :this.state.count -1})}>Decrement</button>
    <button onClick ={()=>this.props.set_data("yeh le data or aesh kr")}>SetData</button>
    <button onClick = {()=>this.props.facebook_login()}>fb</button>
    </div>
    )
  }
}
// redux
// global state mil jae gi niche wali line se
const mapStateToProps = (state) => ({
  name : state.name,
  email: state.email
})
// data per function lagane k liye
const mapDispatchToProp = (dispatch) => ({
  set_data : (data)=> dispatch(set_data(data)),
  facebook_login : () =>dispatch(facebook_login())
})
export default connect(mapStateToProps,mapDispatchToProp)(App); 