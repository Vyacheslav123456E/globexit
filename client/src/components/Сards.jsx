import React, {useState} from 'react';
import '../assets/styles/card.css'
import phone from '../assets/images/phone.png'
import email from '../assets/images/email.png'

const Cards = (props) => {
    return (
        <>
            <div className={'card'} onClick={(e) =>props.showModal(props.users)}>
                <h2 className={'h2'}>{props.users.name}</h2>
                <div className={'box'}>
                    <div className={'box-contact'}>
                        <img src={phone} alt="phone"/>
                        <span>{props.users.phone}</span>
                    </div>
                    <div className={'box-contact'}>
                        <img src={email} alt="email"/>
                        <span>{props.users.email}</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Cards;