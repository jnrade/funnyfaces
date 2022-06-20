import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';


// what state to listen to using redux
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// what state to dispatch using redux
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    
    componentDidMount() {
        this.props.onRequestRobots();          
    }

    render() {
        const { searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot =>{
                return robot.name.toLowerCase().includes(searchField.toLowerCase())
            })
            // If statement to check for large list of users & add loading screen
            return isPending ?
                <h1>Loading Funny People</h1> :
                (
                    <div className='tc'>
                        <h1 className='f1'>The Funny Faces App</h1>
                            <SearchBox searchChange = {onSearchChange} />
                            <Scroll>
                            <ErrorBoundary>
                            <CardList robots= {filteredRobots} />
                            </ErrorBoundary>
                        </Scroll>    
                        
                    </div>
                );
            }
        }

export default connect(mapStateToProps, mapDispatchToProps)(App);