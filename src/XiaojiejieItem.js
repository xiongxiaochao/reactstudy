import React from 'react'
import PropTypes from 'prop-types'  //校验

class XiaojiejieItem extends React.Component {
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.props.content}
            </div>
        )
    }

    //组件第一次存在于dom中，函数是不会被执行
    // 如果已经存在与Dom中，函数才会被执行
    componentWillReceiveProps(){
        console.log('child---componenetDidUpdata')
    }

    handleClick(){
        // console.log('就发生了发')
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index);
    }
}

//校验
XiaojiejieItem.propTypes={
    avname: PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

XiaojiejieItem.defaultProps={
    avname:'解放了'
}

export default XiaojiejieItem