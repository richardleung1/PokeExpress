const React = require("react");

class Index extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>Pokemon Index</title>
          <link rel="stylesheet" href="./css/style.css" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body>
          <div>
            <h1>See All The Pokemon!</h1>
            <nav>
              <a href="/pokemon/new" className="btn btn-success">
                Add a New Pokemon
              </a>
            </nav>
            <ul>
              {this.props.pokemon.map((pokemon, index) => {
                return (
                  <li>
                    <br />
                    <a href={`/pokemon/${pokemon.id}`} className="btn btn-primary">
                      {pokemon.name}
                    </a>
                    <br />
                    <a
                      href={`/pokemon/${pokemon.id}/edit`}
                      className="btn btn-secondary"
                    >
                      Edit pokemon
                    </a>
                    <form
                      action={`/pokemon/${pokemon.id}?_method=DELETE`}
                      method="POST"
                    >
                      <input
                        type="submit"
                        className="btn btn-danger"
                        value="Delete pokemon"
                      />
                    </form>
                  </li>
                );
              })}
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;
