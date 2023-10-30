import React from 'react';
import '../assets/styles/modal.css'
import close from "../assets/images/close.png";
import moment from 'moment'
import 'moment/locale/ru';

const ModalUser = ({active, setIsModalOpen, itemUser}) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setIsModalOpen(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'}>
                <div className={'modal-title'}>
                    <span>{itemUser.name}</span>
                    <img src={close} alt="phone" className={'close-img'} onClick={() => setIsModalOpen(false)}/>
                </div>
                <div className={'modal-box'}>
                  <div className={'modal-info'}>
                    <div className={'modal-info-title'}>
                        <div className={'title'}>
                            <span>Телефон: </span>
                        </div>
                        <div className={'title'}>
                            <span>Почта: </span>
                        </div>
                        <div className={'title'}>
                            <span>Дата приема: </span>
                        </div>
                        <div className={'title'}>
                            <span>Должность: </span>
                        </div>
                        <div className={'title'}>
                            <span>Подразделение: </span>
                        </div>
                    </div>
                </div>
                  <div className={'modal-info-text'}>
                    <div className={'title'}>
                        <span>{itemUser.phone}</span>
                    </div>
                    <div className={'title'}>
                        <span>{itemUser.email}</span>
                    </div>
                    <div className={'title'}>
                        <span>{moment.utc(itemUser.hire_date).format('DD.MM.YYYY')}</span>
                    </div>
                    <div className={'title'}>
                        <span>Дизайнер</span>
                    </div>
                    <div className={'title'}>
                        <span>{itemUser.department} </span>
                    </div>
                </div>
                </div>
                <div className={'information-box'}>
                    <div className={'information-title'}>
                        Дополнительная информация:
                    </div>
                    <div className={'information-text'}>
                        Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalUser;