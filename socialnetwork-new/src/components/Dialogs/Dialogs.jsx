import React from "react";

import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>

    );
};

const Message = (props) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>

    );
};

const Dialogs = () => {

    let dialogData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Lida'},
        {id: 3, name: 'Roma'},
        {id: 4, name: 'Inna'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'What about you?'},
        {id: 3, message: 'Can we meet?'},
        {id: 4, message: 'What are you doing?'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    );
}
export default Dialogs;