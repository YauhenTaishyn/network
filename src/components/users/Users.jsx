import React from 'react';
import styles from './Users.module.css'


let Users =(props)=>{
    if (props.users.length===0) {

        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://pokrovgold.ru/images/upl/img/1498203727.png',
                    followed: true,
                    fullName: 'Jenya T',
                    status: 'free',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 2,
                    photoUrl: 'https://pokrovgold.ru/images/upl/img/1498203727.png',
                    followed: false,
                    fullName: 'Anna P',
                    status: 'free',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 3,
                    photoUrl: 'https://pokrovgold.ru/images/upl/img/1498203727.png',
                    followed: false,
                    fullName: 'Kate T',
                    status: 'free',
                    location: {country: 'Russia', city: 'Moscow'}
                },
                {
                    id: 4,
                    photoUrl: 'https://pokrovgold.ru/images/upl/img/1498203727.png',
                    followed: true,
                    fullName: 'Ivan L',
                    status: 'free',
                    location: {country: 'Ukraine', city: 'Kiev'}
                },
            ]
        );
    }
    return <div> {
        props.users.map( u=> <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={()=>{props.unfollow(u.id)}}> Unfollow </button>
                        : <button onClick={()=>{props.follow(u.id)}}> follow </button> }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.FullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>

                </span>
            </span>

        </div>)
    }
        </div>
};
export default Users;