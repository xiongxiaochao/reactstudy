import React,{Component,Fragment} from 'react'
import axios from 'axios'
import XiaojeijieItem from './XiaojiejieItem'
import './style.css'
import Boss from './Boss'

class Xioajiejie extends Component {
    // initialization            setup props and state
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['JFK了撒法','附件两款都是']
        }
    }

    // 但你调用接口的时候,最好在这个生命周期
    componentWillMount(){
        axios.post()    //网址
            .then((res)=>{
                console.log('axios获取数据成功:'+JSON.stringify(res))
            })     //回调函数
            .catch((error)=>{
                console.log('axios 获取数据失败:' + error)
            })
    }

    // Mounting    componentWillMount    render    componentDidMount
    componentDidMount(){
        console.log('componentDidMount---------组件将要挂载到页面的时刻')
    }

    componentDidMount(){
        console.log('componentDidMount---------组件挂载完成的时刻')
    }

    //Updation两种形式： A：props:  componenetWillReceiveProps  shouldComponentUpdata  componentWillUpdata  render  componentDidUpdate
    //                  B:states： shouldComponentUpdata(返回要有返回值true或者false)  componentWillUpdate  render  componenetDidUpdata 

    shouldComponentUpdate(){
        console.log('1---shouldComponentUpdate----组件在挂载前')
        return false
    }

    componentWillUpdate(){
        console.log('2----componentWillUpdate---组件在挂载前')
    }

    componenetDidUpdata(){
        console.log('4---componenetDidUpdata---组件挂载完成之后')
    }

    render() {
        console.log('render--------------组件挂载中')
        return (
            <Fragment>
                <div>
                    <label htmlFor="jspang">增加服务：</label>
                    <input 
                        value={this.state.inputValue}  
                        onChange={this.inputChange.bind(this)} 
                        ref = {(input) =>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
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
                <Boss />
            </Fragment>
        )
    }

    inputChange(e){
        //console.log(this)
        //this.state.inputValue = e.target.value
        this.setState({
            // inputValue: e.target.value
            inputValue: this.input.value
        })
    }

    //增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue: ''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
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