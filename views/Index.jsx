const React = require("react");

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>See All The Pokemon!</h1>
        <nav>
          <a href="/pokemon/new">Add a New Pokemon</a>
        </nav>
        <ul>
          {this.props.pokemon.map((pokemon, index) => {
            return (
              <li>
                <a href={`/pokemon/${pokemon.id}`}>{pokemon.name}</a>
                <form
                  action={`/pokemon/${pokemon.id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
                <a href={`/pokemon/${pokemon.id}/edit`}>Edit pokemon</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
