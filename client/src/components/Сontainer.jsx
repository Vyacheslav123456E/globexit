import React from 'react';
import '../assets/styles/container.css'

const Container = (props) => {
    return (
        <div className={'container'}>
            <div className={'children'}>{props.children}</div>
        </div>
    );
};

export default Container;