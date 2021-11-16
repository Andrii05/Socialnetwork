import React from "react";

import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElement = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let newMessage =() => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea ref={newMessageElement}> </textarea>
            </div>
            <div>
                <button onClick= {newMessage} >Send Message</button>
            </div>

        </div>
    );
}
export default Dialogs;