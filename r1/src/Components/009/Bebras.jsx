import rand from '../../Functions/rand';

function Bebras() {

    const ka = rand(0, 1);

    return (
        <>
            <h2>Aš Bebras sako: {ka ? <i>Jo {8 * 10}</i> : 'Ne jo'} </h2>
            <span style={
                {
                    color: rand(0, 1) ? 'crimson' : 'pink',
                    backgroundColor: 'skyblue'
                }
            }>Jo!</span>
        </>
    )
}

export default Bebras;