class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleToggleDetails = this.handleToggleDetails.bind(this);
    this.getDetails = this.getDetails.bind(this);
    this.state = {
      showDetails: false
    };
  }

  handleToggleDetails() {
    this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  }

  getDetails() {
    if (this.state.showDetails) {
      return <p>Hey. Theses are some details you can now see!</p>
    }
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleDetails}>{this.state.showDetails ? 'Hide' : 'Show'} details</button>
        {this.getDetails()}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById('app')

// let showDetails = false;
// const toggleDetails = () => {
//   showDetails = !showDetails;

//   renderApp();
// };

// const getDetails = () => {
//   if (showDetails) {
//     return <p>Hey. Theses are some details you can now see!</p>
//   }
// };

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>{showDetails ? 'Hide' : 'Show'} details</button>
//       {getDetails()}
//     </div>
//   )

//   ReactDOM.render(template, appRoot)
// };

// renderApp();