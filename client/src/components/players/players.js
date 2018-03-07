import React, { Component } from 'react';
import './players.css';

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
        };
    }

    componentDidMount() {
        fetch('/api/players')
            .then(res => res.json())
            .then(players => this.setState({players}, () => console.log(this.state.players)));
    }

    render() {
        return (
            <div>
                <h2>Players</h2>
                <ul>
                    {this.state.players.map(player => {
                        return <li key={player.id}>{player.firstName} {player.lastName}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Players;