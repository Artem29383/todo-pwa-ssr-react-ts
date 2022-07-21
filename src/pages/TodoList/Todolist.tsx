import React, {useEffect, useRef} from 'react';
import {useSelector} from "@/hooks/useSelector";
import {listSelector} from "@/models/app/selectors";
import {useAction} from "@/hooks/useAction";
import {actions} from '@/models/app'
import {NavLink} from "react-router-dom";

const Todolist = () => {
    const list = useSelector(listSelector);
    const emitList = useAction(actions.getList);
    const willMount = useRef(true)
    console.info('process.env.BROWSER', process.env.BROWSER)
    if (willMount.current && !process.env.BROWSER) {
        emitList();
        willMount.current = false
    }

    useEffect(() => {
        (async () => {
            emitList();
        })()
    }, [])

    return (
        <div>
            <div>todo</div>
            <NavLink to="/main">REDIRECT</NavLink>
            {list.map((item: { id: string | number; text: React.ReactNode; }) => <div key={item.id}>{item.text}</div>)}
        </div>
    );
};

export default Todolist;