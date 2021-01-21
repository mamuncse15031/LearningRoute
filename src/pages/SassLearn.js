import React, { Component } from 'react';
import SassLearn from './SassLearn.scss'


class SassLearn extends Component {
    render() {
        return (
            <div>
                <h1 className={SassLearn.TextStyle1}>Hi I am SASS</h1>
            </div>
        );
    }
}

export default SassLearn;