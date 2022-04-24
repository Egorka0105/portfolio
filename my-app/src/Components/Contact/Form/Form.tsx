import React, {FC} from 'react';
import clN from "./form.module.scss";

const Form: FC = () => {
    return (
        <form className={clN.form}>

            <input className={clN.name} type={"text"} required={true} placeholder={'Name'}/>
            <input className={clN.email} type={"email"} required={true} placeholder={'Email'}/>
            <textarea className={clN.message} required={true} placeholder={"Message"}/>
            <button className={clN.submit} type={"submit"}>Send</button>
        </form>
    );
};

export default Form;
