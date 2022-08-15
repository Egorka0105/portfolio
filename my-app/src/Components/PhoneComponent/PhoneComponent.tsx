import React, {FC, MouseEventHandler} from 'react';
import {useAppDispatch} from "../../core/interfaces";
import {changeFormClickSend} from "store/portfolioSlice";

const PhoneComponent: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <a href="tel:0936675573">093-667-55-73</a>
            <button onClick={() => dispatch(changeFormClickSend(false))}>
                Don't want to call
            </button>
        </div>
    );
};

export default PhoneComponent;
