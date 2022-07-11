import React, { Component, useCallback, useEffect, useRef, useState } from 'react';

// 함수는 클래스가 함수다! 그래서 컴포넌트가 변경되면 전부 다 계쏙 호출됨
// 지역 변수는 무한정 반복!


// 리액트 훅에서 state 사용하려면 useState라는 API 사용하라!
const SimpleHabit = (props) => {

    // state = {
    //     count: 0,
    //   };
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
        //this.setState({ count: this.state.count + 1 });
    });

    useEffect(() => {
        // 처음, 컴포넌트 바귈 때마다 호출
    });
    // }, []);  이렇게 하면 한 번만 호출
    // }, [count]);  이렇게 하면 count 변경될 때마다 호출

    return (
        <li className="habit">
        <span ref={spanRef} className="habit-name">Reading</span>
        <span className="habit-count">{count}</span>
        <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
        >
        <i className="fas fa-plus-square"></i>
        </button>
    </li>
    );
};

export default SimpleHabit;

