import React, { Component } from 'react'
import Countdown from 'react-countdown-now'

const renderer = ({ hours, minutes, seconds, completed }) => completed ? <span>Completed</span> : <span>Remaining hours: {hours}:{minutes}:{seconds}</span>

export default class extends Component {
    render() {
        return <>
            <Countdown date={1568905441827} renderer={renderer} />
        </>
    }
}