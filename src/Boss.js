import React, { Component } from 'react';

class Boss extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: true
        }
    }
    render(){
        return(
            <div>
                <div className={this.state.isShow? 'show' : 'hide'}>Boss级人物-孙悟空</div>
                <div><button onClick={this.toToggole.bind(this)}>召唤Boss</button></div>
            </div>
        )
    }

    toToggole(){
        this.setState({
            isShow: this.state.isShow ? false: true
        })
    }
}

export default Boss;