import React, {FC, FormEvent, useState, memo} from 'react';
import clN from "./form.module.scss";

const Form: FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlerSubmit = (e: FormEvent) => {
        e.preventDefault();

    }


    return (
        <form className={clN.form}>

            <input onChange={(e) => {
                setName(e.target.value)
            }} className={clN.name} type={"text"} required={true} placeholder={'Name'}/>
            <input onChange={(e) => {
                setEmail(e.target.value)
            }} className={clN.email} type={"email"} required={true} placeholder={'Email'} pattern={"/^[a-zA-Z0-9\d]/"}/>
            <textarea onChange={(e) => {
                setMessage(e.target.value)
            }} className={clN.message} required={true} placeholder={"Message"}/>
            <button onSubmit={handlerSubmit} className={clN.submit} type={"submit"}>Send</button>
        </form>
    );
};

export default memo(Form);
