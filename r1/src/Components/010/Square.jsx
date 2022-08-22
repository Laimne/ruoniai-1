import randColor from '../../Functions/randColor';

function Square({color, name, size}) {

    return (
        <div className="cat App-logo" style={{ 
            backgroundColor: size > 300 ? randColor() : color,
            width: size + 'px', 
            height: size + 'px' 
            }}>
            <span className="App-logo2">{name}</span>
        </div>
    )
}

export default Square;