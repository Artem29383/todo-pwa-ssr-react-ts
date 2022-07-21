import React from 'react';
import {Route, Switch} from "react-router-dom";
import Normalize from './styles/normalize';
import {routes} from "@/routes";

function App() {
    return (
        <>
            <Normalize />
            <Switch>
                {routes.map(({ path, ...rest }) => (
                    <Route key={path.toString()} path={path} {...rest} />
                ))}
            </Switch>
        </>
    );
}
export default App;