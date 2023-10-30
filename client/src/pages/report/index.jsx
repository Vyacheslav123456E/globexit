import React, {useEffect, useState} from 'react';
import Container from '../../components/Сontainer'
import '../../assets/styles/report.css'
import Cards from "../../components/Сards";
import {Report, UserFilter} from "../../store/report";
import {useDispatch, useSelector} from "react-redux";
import ModalUser from "../../components/ModalUser";

const Index = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.dataReport)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemUser, setItemUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [dataUsers, setDataUsers] = useState([]);

    const showModal = (e) => {
        setItemUser(e)
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleChangeSearch = (event) => {
        //console.log(event.target.value.toString().length)
        if (event.target.value.toString().length > 0) {
            setSearchTerm(event.target.value);
            dispatch(UserFilter(event.target.value))
                .unwrap().then((res) => {
                setDataUsers(res)
            }).catch((error) => {console.log(error)})
        }else {
            setDataUsers(users)
            setSearchTerm("")
        }
    };
    useEffect(() => {
        dispatch(Report())
            .unwrap().then((response) => {
                setDataUsers(response)
            }).catch((error) => {console.log(error)})
    }, []);

    return (
        <Container>
            <form>
                <input type="text" placeholder=""
                       value={searchTerm}
                       onChange={handleChangeSearch}/>
                <img src={require('../../assets/images/icon_search.png')} alt="search icon" className="button"/>
            </form>
            {dataUsers.length === 0 ? (
                 <div>Загрузка</div>
                ) : (
                <div className="card-box">
                    {dataUsers.map((user, i) => {
                        return (
                            <Cards users={user} key={i} showModal={showModal}/>
                        )
                    })
                    }
                </div>
            )}
            <ModalUser active={isModalOpen} setIsModalOpen={setIsModalOpen} itemUser={itemUser}/>
        </Container>
    );
};

export default Index;