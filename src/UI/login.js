import React,{Fragment} from "react";
import {connect} from "react-redux";




const mapStateToProps=dispatch=>{
    return{
        
    }
}

const mapDispatchToProps=dispatch=>{
    return{

    }
}




@connect(mapStateToProps,mapDispatchToProps)
//组件
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            username:"",
            password:""
        }
    }
    userinput(e){
        this.setState({
            username:e.target.value
        })
    }
    passinput(e){
        this.setState({
            password:e.target.value
        })
    }
    entry(){
        if(!this.state.username||!this.state.password){
            alert("请输入用户名或密码")
        }
        
    }
    render(){
        return(
            <Fragment>
                <h1>
                    登录
                </h1>
                <p>
                    用户名:
                    <input type="text" value={this.state.username} onChange={this.userinput.bind(this)}/>
                </p>
                <p>
                    密码:
                    <input type="text" value={this.state.password} onChange={this.passinput.bind(this)}/>
                </p>
                <button onClick={this.entry.bind(this)}>登录</button>
            </Fragment>
        )
    }
}

export default Login
