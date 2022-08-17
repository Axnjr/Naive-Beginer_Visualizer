import React from "react" ;
import './App.css';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('arraycon'));

let a = []
window.aval = []  // global variable 
let idb = ''      // global variable for interval ID
let idq = ''      // global variable for interval ID
let idm = ''      // global variable for interval ID
let pivot = []    // for quick sort
let condition = false
let length_of_array = 0

class KarleParent extends React.Component{
  constructor(){
    super();
    this.state={user:12/*prompt("Enter Array Length : Min 2 | Max 9999 ")*/}
  }}

class Karle extends KarleParent{
    constructor() {
        super();
        length_of_array=this.state.user
        for(let i=0;i<=this.state.user;i++){a[i] = Math.floor(Math.random()*100)}
        this.state = {userlen:this.state.user,count:a+',',clicks:1,speed:300}
        window.aval = a
    }
    bubble = () => {
      for(let j=0;j<this.state.clicks;j++){
        setTimeout(()=>{document.getElementById(`${window.aval[j]}`).style.backgroundColor = 'rgb(0, 255, 251)';},this.state.speed)
        console.log(this.state.userlen)
        for(let i=0;i<this.state.clicks;i++){  
            if (window.aval[i]>window.aval[i+1]){ 
                document.getElementById(`${window.aval[i]}`).style.backgroundColor = 'red'; // Changing color
                document.getElementById(`${window.aval[i+1]}`).style.backgroundColor = '#fbbf24'; // Changing color
                [window.aval[i],window.aval[i+1]] = [window.aval[i+1],window.aval[i]] // SWAP
                this.setState({count: window.aval.toString()})
                this.setState({color:'white'})}}}
      this.setState({clicks:this.state.clicks+1})
      if(this.state.clicks == this.state.userlen){
        clearInterval(idb);}
    } 
    quick = () => {
      var arrleft = []
      var arrright = []
      pivot = [window.aval[0]]
      for(let i =0;i<this.state.clicks;i++){
        if(window.aval[i]<=pivot){
          arrleft.push(window.aval[i])
        }
        if(window.aval[i]>pivot){
          arrright.push(window.aval[i])
        }
        else{continue;}
      this.setState({count:arrleft.toString()+","+arrright.toString()})
      }
    setTimeout(() =>{
        for(let j=0;j<this.state.clicks;j++){      
          for(let i=0;i<this.state.clicks;i++){ 
            if (arrleft[i]>arrleft[i+1]){  
              [arrleft[i],arrleft[i+1]] = [arrleft[i+1],arrleft[i]] // SWAP
            }
            if (arrright[i]>arrright[i+1]){  
              [arrright[i],arrright[i+1]] = [arrright[i+1],arrright[i]] // SWAP
            }}}
        this.setState({count:arrleft.toString()+','+arrright.toString()})
      },1000)
      this.setState({clicks:this.state.clicks+1})
      if(this.state.clicks==this.state.userlen){
        clearInterval(idq);}
    }
    
    mergeMain = () => {
      var arrleft = []
      var arrright = []
      let l = this.state.userlen
      let mid = Math.floor(l/2) 

      function Merge(a){
        if (a.length>1){
          for(let i=0;i<mid;i++){
            arrleft.push(a[i])
          }
          for(let j=mid;j<=l;j++){
            arrright.push(a[j])
          }
          Merge(arrleft);
          Merge(arrright);
        }
        console.log(arrleft,"left")
        console.log(arrright,"right")
      }
      Merge(window.aval)
      clearInterval(idm)
    }

    render(){
      return(
        <div>
          <div>
              <div className='arrcon'>{ 
                  this.state.count.split(',').map((val,idx) => {
                    if(window.aval===1){
                      return(
                        <><div><h1>Choose Array Length Happy Sorting</h1></div></>
                      )}
                    else{
                    return(
                      <div id={val} style={{height:val+'mm',width:100/length_of_array+'mm',margin:10/length_of_array+'mm',}} className='arr' key={idx}>
                          <p style={{fontSize:10/length_of_array+'cm'}}>{val.toString()}</p>
                      </div>)}             
                  })}
            </div>
            <div id="else" style={{display:'none'}}>
                  <h1 style={{fontSize:'5rem'}}>Choose Array Length Happy Sorting </h1>
            </div>
          </div>
          <nav>
              <input className='number' style={{top:'20%'}} min='10' step='1' max='1000' type='range' value={this.state.speed}
                  onChange={(ev) => {this.setState({speed:ev.target.value})}}/>
              <h1 className="number">Speed of Sorting</h1>
              <button style={{marginLeft:'20rem'}} disabled={condition} onClick={(el) => {
                if(window.aval.length==1){condition=true;}
                else{idb = setInterval(this.bubble,this.state.speed);condition = true}}}>
                Bubble Sort
              </button>
              <button disabled={condition} onClick={(eo) => {
                if(window.aval==1){condition=true;}
                else{idq = setInterval(this.quick,this.state.speed);condition = true}}}>
                Quick Sort
              </button>
              <button disabled={condition} onClick={(eu) => {idm = setInterval(this.mergeMain,this.state.speed);condition = true}}>
                Merge Sort
              </button>
              <button onClick={()=>{window.location.reload(true)}}>Genearte New Array</button>
          </nav>
          
        </div>
      );
    }   
}
export default Karle;