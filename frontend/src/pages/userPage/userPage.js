import React, {useContext} from 'react';
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/navBar";
import './userPageStyles.scss'
import {Context} from "../../index";


const UserPage = () => {
    const {user} = useContext(Context)
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="user-info-main">
                    <img src={user.img} alt={user.username}/>
                    <p className="username"> {user.username}</p>
                    <p className="email"> {user.email}</p>
                </div>
                <div className="user-description">
                    <h5>Описание</h5>
                    <p className='user-description'>{user.description}</p>
                </div>
                <div className="fav-list">
                    <h5> Мои списки:</h5>
                    <ul>
                        {user.favorite.map((d, i) => (
                            <li key={d.favID}>{d.name}</li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default UserPage;