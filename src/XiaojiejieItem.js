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

    // 性能优化
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }else{
            return false
        }
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


/*
    npm install xxxx(安装什么)   只是安装到node_modules里面,不会安装到依赖包里面
    npm install -g axios         系统的全局安装,会按照到profix里面
    npm install -save axios      会安装到依赖包里面  
    npm install -save-dev axios   dependencies(生产环境里面)
*/ 