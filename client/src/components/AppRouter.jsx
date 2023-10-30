import * as React from "react";
import {Routes} from "../router";
import {REPORT} from "../router/names";
import {Redirect, Route, Switch} from "react-router-dom";

const AppRouter = () => {
    return (
            <Switch>
                {Routes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}
                    />
                )}
                <Redirect to={REPORT}/>
            </Switch>
    );
};

export default AppRouter;