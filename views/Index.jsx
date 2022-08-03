const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

class Index extends React.Component {
    render() {
        return (
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
                <nav>
                    <a href="/pokemon/new">Add a New Pokemon</a>
                </nav>
                <ul>
                    {
                        this.props.pokemon.map((pokemon, index) => {
                            return (
                                <li>
                                    <a href={`/pokemon/${pokemon.id}`}>{pokemon.name}</a>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        )
    }
}

module.exports = Index