const React = require("react");

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <html lang="en">
        <head>
          <title>{pokemon.name}</title>
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
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img} alt="" />
            <br />
            <a href="/pokemon" className="btn btn-info">
              Pokemon Index
            </a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Show;
