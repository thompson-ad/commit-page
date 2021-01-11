import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Placeholder } from "./Placeholder";
import CommitPage from "./components/CommitPage";

export const App: React.FunctionComponent = () => (
    <Router>
        <div className="container">
            <Switch>
                <Route
                    path="/repositories/:repository"
                    component={Placeholder}
                    exact={true}
                />
                <Route
                    path="/repositories/:repository/commits/:commitSHA"
                    component={CommitPage}
                    exact={true}
                />
                <Route path="/" component={Placeholder} />
            </Switch>
        </div>
    </Router>
);
