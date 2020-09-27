import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import AdoptionPage from './AdoptionPage';

import ApiServices from './ApiServices';

import '../src/index.css';


class App extends React.Component {

    state = {
        queue: [], 
        person: '',
    }

    setPerson = (person) => {
        this.setState({ person: person })
    }

    render() {

        let peopleList 
            
        if(this.state.queue[0] === this.state.person) {
            peopleList = true;
        } else {
            peopleList = false;
        }

        ApiServices.getQueue()
        .then((list) => this.setState({ queue: list }));

        return(
            <div className='app'>
                <Switch>
                    <Route 
                        exact path='/' 
                        render={
                            () => <HomePage 
                                    setPerson={this.setPerson} />
                        } 
                    />

                    <Route 
                        path='/adopt' 
                        render={
                            () => <AdoptionPage 
                                    adopt={peopleList} 
                                    queue={this.state.queue} />
                        }
                    />
                </Switch>
            </div>
        );
    }
}

export default App;