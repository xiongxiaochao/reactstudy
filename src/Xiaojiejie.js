import React,{Component,Fragment} from 'react'
import XiaojeijieItem from './XiaojiejieItem'

class Xioajiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['JFK了撒法','附件两款都是']
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="jspang">增加服务：</label>
                    <input value={this.state.inputValue}  onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <XiaojeijieItem 
                                content={item}
                                index={index}
                                deleteItem={this.deleteItem.bind(this)}  

                                key={index+item}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e){
        //console.log(this)
        //this.state.inputValue = e.target.value
        this.setState({
            inputValue: e.target.value
        })
    }

    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    }

    //删除列表项
    deleteItem(index){
        // console.log(index)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
} 

export default Xioajiejie