    import React from 'react'
    import {Link, Outlet} from "react-router-dom";

    const MainLayout = () => {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <link to="/counterapp">Counter App</link>
                        </li>
                        <li>
                            <link to="/imageapp">Image App</link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        );
    };

    export default MainLayout;