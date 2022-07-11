import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    /*state = {
        count: 0,
    };

    handleIncreament = () => {
        // state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야됨
        // this.state.count ++; 이렇게 쓰면 되지 않는가? 
        // 이렇게 하면 리액트가 변수의 값이 증가된지 모른다!
        this.setState({count: this.state.count + 1});
    }

    handleDecreament = () => {
        const count = this.state.count - 1;
        this.setState({count: count < 0 ? 0 : count});
    }*/

    handleIncreament = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecreament = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        const { name, count } = this.props.habit;
        
        return <li className='habit'>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" 
        onClick={this.handleIncreament}>
            <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" 
        onClick={this.handleDecreament}>
            <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" 
        onClick={this.handleDelete}>
            <i className="fas fa-trash"></i>
        </button>
        </li>;
    }
}

export default Habit;