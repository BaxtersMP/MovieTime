// App.jsx
import React from 'react'
import axios from 'axios'

import {
    Header,
    Footer
} from './components'

import '../scss/styles.scss'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            randomMovie: '...'
        }
    }

    getRandomMovie = () => {
        console.log('test')
        axios.get('/random')
            .then(response => {
                this.setState ({
                    randomMovie: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <main className="main">
                    <div className="randomMovie">You should watch {this.state.randomMovie}</div>
                    <button className="btn btn--draw" onClick={this.getRandomMovie}>Get a random movie! </button>
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}