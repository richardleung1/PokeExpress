const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {pokemon.map((poke, index) => {
                        return (
                            <li>
                                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index