const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Show extends React.Component {
    render() {
        const poke = this.props.poke
        return (
            <div style={myStyle}>
                <h1>Gotta Catch 'Em All</h1>
                <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>
                <img src={poke.img + '.jpg'} alt="" />
                <br />
                <a href="/pokemon">Back</a>
            </div>
        )
    }
}

module.exports = Show