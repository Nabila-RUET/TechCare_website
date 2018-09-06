import React,{Component} from 'react';
import './index.css';

class LetstalkBtn extends Component{
    constructor(props){
        super(props)
            this.state={
                flip:null
            }
        
    }
    mouseOver=()=>{
        this.setState({flip: true})
    }
    mouseOut=()=>{
        this.setState({flip: false})
    }
    render(){
        return(
            <button onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} 
                style={{backgroundColor:this.state.flip? `${this.props.colorbg}`: `${this.props.colorbgr}`,
                color:this.state.flip? `${this.props.col}`: `${this.props.colr}`,
                border: this.state.flip? `${this.props.colorbc}`:`${this.props.colorbclr}`}}
                className="button">{this.props.txt}</button>
        )
    }
}
export default LetstalkBtn;