import React from 'react';

class Show extends React.Component {

    render() {
        return (
            <>
            <h2 style={{
                color: this.props.color,
                fontSize: this.props.size + 'px'
            }}>Im {this.props.type} dog</h2>
            </>
        );
    }
}

export default Show;