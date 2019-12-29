知识点1：生命周期
                第一阶段：initialization  初始化（一般用于constructor）
                第二阶段：Mounting：    componentWillMount    render    componentDidMount
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
                第三阶段：Updation两种形式：  A：props:  1.组件第一次存在于dom中，函数是不会被执行  2.如果已经存在与Dom中，函数才会被执行
                                                        componenetWillReceiveProps  shouldComponentUpdata componentWillUpdata  render  componentDidUpdate
                                            B:states： shouldComponentUpdata(返回要有返回值true或者false)  componentWillUpdate  render  componenetDidUpdata 
                第四阶段：Unmounting生命周期  componentWillUnmount   组件删除的时候，把使用

知识点2：onChange事件
        class XXX extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    inputValue: '',
                    list: ['JFK了撒法','附件两款都是']
                }
            }

            inputChamge(e){
                this.setState({
                    inputValue: e.target.value
                })
            }

            render() {
                return (
                    <Fragment>
                        <div>
                            <input 
                                value={this.state.inputValue} 
                                onChange={this.inputChamge.bind(this)}>
                            </input>
                            <button>增加服务</button>
                        </div>
                    </Fragment>
                )
            }
        }

        但你想要改变输入框的值，而且可以跟着变化，那么你就可以使用这个事件


知识点3：map
        当你想要遍历this.state里面的数据，那么我们可以透过map的用法：
            constructor(props) {
                super(props)
                this.state = {
                    inputValue: '',
                    list: ['JFK了撒法','附件两款都是']
                }
            }

            <ul>
                {
                    this.state.list.map((item,index)=>{
                    return <li>{item}</li>
                    })
                }
            </ul>
        总结：通过this.state.list.map((item,index)=>{

        })
        拿到数据，对数据进行遍历

知识点4：对数据的添加
        但我们对数据进行改变的时候，我们可以直接对数据进行改变。。。
        首先：我们通过绑定事件：<button onClick={this.addList.bind(this)}>增加服务</button>
        然后：我们对事件的方法：addList(){
                                    this.setState({
                                    list: [...this.state.list,this.state.inputValue],
                                    inputValue: ''
                                })
                            }
        对于上面的方法：...this.state.list ==  list: ['据肯定是','高房价考虑']  和 this.state.inputValue形成新的数组
        而且里面的：inputValue: ''就是为了是你输入的值：点击之后变成空的。。。

知识点5：key值得使用
        key={index+item}如果不写这个会报错，必须要写。。。                                                                                  {后续进行补充}

知识点5：删除方法：<ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li
                                deleteItem={this.deleteItem.bind(this)}  

                                key={index+item}
                                />
                            )
                        })
                    }
                </ul>

                //删除列表项
                    deleteItem(index){
                        let list = this.state.list
                        list.splice(index,1)
                        this.setState({
                            list:list
                        })
                    }
        总结：要想删除数据，找到对应的数据，进行事件绑定，如上。。。
            deleteItem(index) 中的index就是绑定相应的角标，对应那个点
            let list = this.state.list  就是获取当前（this.state）的数据
            list.splice(index,1)对数据进行删除，就是利用js原生写法
            this.setState({
                list:list
            })对所有数据进行改变

知识点6： 父对子传值
            父元素：
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <XiaojiejieItem 
                                content={item}
                                />
                            )
                        })
                    }
                </ul>
            子元素：
                class XiaojiejieItem extends React.Component {
                    render() {
                        return (
                            <div>
                                {this.props.content}
                            </div>
                            )
                        }
        父元素给子元素传值的时候：我们可以利用父元素：content={item}的属性。。。其中item就是map遍历上面state的数据来的
        子元素接收数据：父元素用的什么属性，那么子元素接收就可以呢。。。{this.props.content}

知识点7：复杂的父组件对子组件传值
            我们想要删除数据，而父元素已经有了这个方法，那我们可以通过传值的方法。。。
            父元素：
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <XiaojiejieItem 
                                    content={item}
                                    index={index}
                                    key={index+item}

                                    deleteItem={this.deleteItem.bind(this)}  
                                />
                            )
                        })
                    }
                </ul>

                content={item}：给子元素传递数据
                index={index}：给子元素传递角标
                key={index+item}：如果不绑定key值就会报错
                deleteItem={this.deleteItem.bind(this)}：给子元素传递删除数据的方法。。。。子元素通过接收，来改变数据
            子组件：
                class XiaojiejieItem extends React.Component {
                    render() {
                        return (
                            <div onClick={this.handleClick.bind(this)}>
                                {this.props.content}
                            </div>
                            )
                        }
                handleClick(){
                    this.props.deleteItem(this.props.index);
                }
                this.props.deleteItem:就是子元素接收父元素传过来的值
                this.props.index：就是子元素接收父元素传过来的角标
                handleClick()就是绑定方法，对数据进行改变
