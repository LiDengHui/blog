import * as React from 'react';
import {Link} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import routes from "./Routes";

export default function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                </ul>
            </nav>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <hr/>
            {renderRoutes(routes)}
        </div>
    );
}
