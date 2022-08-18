import React from "react";
import './App.css';

let a = []
let style_value = ''
let margin_ratio = null 
let size_ratio = null 
let font_ratio = null 
let condition = false

class SearchingParent extends React.Component{
    constructor(){
      super();
      this.state={user:prompt("Enter Array Length : Min 2 | Max 200 ")}
    }}
export class Searching extends SearchingParent{
    
    constructor(){
        super();
        for(let i=0;i<this.state.user;i++){a[i] = Math.floor(Math.random()*100)}
        this.state = {userlen:this.state.user,count:a+',',clicks:1,speed:300,
        val:Math.floor(Math.random()*100),result:null}
        window.aval = a
        console.log(a)
    }
    
    linary_search = () => {
        let ans = null;
        let lid = setInterval(()=>
          {
            for(let i=0;i<this.state.clicks;i++)
            {
                document.querySelector('.arr'+i).style.backgroundColor = '#333';
                if(window.aval[i]===this.state.val){
                    let ans=i;
                    document.querySelector('.arr'+ans).style.backgroundColor = '#fbbf24';
                }
           }
            this.setState({clicks:this.state.clicks+1})
            if(this.state.clicks===this.state.userlen)
            {
                clearInterval(lid);  
                console.log("end");
                this.setState({result:ans});
            }
          },this.state.speed)
        }
    binary_search = () => {
        let sa = window.aval.sort(function(a, b){return a - b})
        this.setState({count:sa.toString()})
        let looking_for = this.state.val
        let s = 0
        let l = this.state.userlen-1
        
        function ser(){
            while (s <= l ) {
                let mid = Math.floor((s + l) / 2);
                if(sa[mid]===looking_for) {
                    return mid;}
                else if(sa[mid] < looking_for) {
                    s = mid + 1;}
                else {l = mid - 1;}}}
        
        let plus = ser()+1
        let minus = ser()-1
        if(ser()===undefined)
        {
            document.querySelector('.arrcon').style.display = 'none';
            document.getElementById("if").style.display = 'block';
        }
        if(ser()!==undefined)
        {
            if(sa[ser()]===sa[plus])
            {
                document.querySelector('.arr'+ser()).style.backgroundColor = '#fbbf24';
                document.querySelector('.arr'+plus).style.backgroundColor = '#fbbf24';
            }
            else if(sa[ser()]===sa[minus])
            {
                document.querySelector('.arr'+ser()).style.backgroundColor = '#fbbf24';
                document.querySelector('.arr'+minus).style.backgroundColor = '#fbbf24';
            }
            else{
                document.querySelector('.arr'+ser()).style.backgroundColor = '#fbbf24';
            }
        }
    }
    
    render()
    {
        if(this.state.userlen>30)
        {
            style_value = 'wrap';
            margin_ratio = 100;
            size_ratio = 1000;
            font_ratio = 35;
        }        else{style_value = 'no-wrap';margin_ratio=10;size_ratio=300;font_ratio=10;}
        
        return(
            <>
                <div className='arrcon' style={{flexWrap:style_value,marginTop:'8rem'}}>{ 
                  this.state.count.split(',').map((val,idx) => {
                    if(val===''){val=Math.floor(Math.random()*100)}
                    return(
                        <>
                            <div id={val} style={{height:size_ratio/this.state.userlen+'mm',width:size_ratio/this.state.userlen+'mm'
                                ,margin:margin_ratio/this.state.userlen+'mm',backgroundColor: 'rgb(0, 255, 251)',textAlign:'center'}}
                                 className={'arr'+idx} key={idx}>
                                <p style={{fontSize:font_ratio/this.state.userlen+'cm',fontWeight:'bolder'}}>{val.toString()}</p>
                            </div>
                        </>                       
                        )
                    })}
                </div>
                <div id='if'><h1 style={{textAlign:'center',fontSize:'4rem'}}>Element Is Not Present In The Array .</h1></div>
                <nav>
                    <button disabled={condition} onClick={() => {condition=true;this.linary_search()}}>Linear Search</button>
                    <button disabled={condition} onClick={() => {condition=true;this.binary_search()}}>Binary Search</button>
                    <button onClick={()=>{window.location.reload(true)}}>Genearte New Array</button>
                    <input type='text' id="for" required placeholder=" Search In Array .." value={this.state.val}
                    onChange={(e)=>{this.setState({val:e.target.value})}}/> 
                    <div style={{display:'flex'}}>
                        <input className='number' style={{top:'60%',marginLeft:'1rem'}} min='10' step='1' max='1000' type='range' value={this.state.speed}
                        onChange={(ev) => {this.setState({speed:ev.target.value})}}/>
                        <h1 id="speed">Speed of Searching</h1>
                    </div>                                 
                </nav>
            </>
        );
    }
}
