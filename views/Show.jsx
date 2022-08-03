const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

class Show extends React.Component {
    render() {
        return (
            <div style={myStyle}>
                <h1>Gotta Catch 'Em All</h1>
                <h2>{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</h2>
                <img src={this.props.pokemon.img} alt="" />
                <br />
                <a href="/pokemon">Back</a>
            </div>
        )
    }
}

module.exports = Show