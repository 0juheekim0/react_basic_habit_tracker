import React, { memo } from 'react';

// class -> PureComponent
// function -> memo
const HabitAddForm = memo(props => {

    // DOM은 query로 객체 가저오는데
// 리액트는 Ref를 사용함
const inputRef = React.createRef();
const formRef = React.createRef();

const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);

    //inputRef.current.value = '';
    formRef.current.reset();
}

return (

    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
        <input ref={inputRef} type="text" className="add-input" placeholder="Habit"></input>
        <button className="add-button">Add</button>
    </form>
);

});

export default HabitAddForm;
