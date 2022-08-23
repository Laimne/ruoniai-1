import React from 'react';
import Show from './Show';

class Dog extends React.Component {

    constructor() {
        super();
        this.state = {size: 70, type: 'small'};
    }

    doIt = () => {
        if (this.state.size === 70) {
            this.setState({size: 120, type: 'BIG'});
        } else {
            this.setState({size: 70, type: 'small'});
        }
    }


    render() {
        return (
            <>
            <Show color={this.props.color} size={this.state.size} type={this.state.type}></Show>
            <button onClick={this.doIt}>Press this button, plese</button>
            </>
        );
    }

}

export default Dog;