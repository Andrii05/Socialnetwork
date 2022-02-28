import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";



let maxLength30 = maxLengthCreator(30);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(n => <DialogItem name={n.name} id={n.id} key={n.id}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values)=> {
        props.addMessage(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               <div> {messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name="newMessageBody" placeholder="New message" validate={[required,maxLength30]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>

    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;