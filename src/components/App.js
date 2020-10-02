import React from 'react';
import Navbar from './navbar.component';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";

import createStudent from './create-student.component';
import studentList from './student-list.component';
import editStudent from './edit-student.component';
import showStudent from './show-student.component';

function App() {
    return (
        <div>
            <Router>
                <div className="container">
                    <Navbar />
                    <br />
                    <Route path="/" exact component={studentList} />
                    <Route path="/show/:id" exact component={showStudent} />
                    <Route path="/create" exact component={createStudent} />
                    <Route path="/edit/:id" exact component={editStudent} />
                </div>
            </Router>
        </div>
    );
}

export default App;
