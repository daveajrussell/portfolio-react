import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Acknowledgements from './Acknowledgements.jsx';
import Projects from './Projects.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <Route exact path="/" component={Home} />
                            <Route path="/acknowledgements" component={Acknowledgements} />
                            <Route path="/projects" component={Projects} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}