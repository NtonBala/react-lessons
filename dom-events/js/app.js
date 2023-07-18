var Box = React.createClass({
  getInitialState: function () {
    return { width: window.innerWidth };
  },
  update: function () {
    this.setState({ width: window.innerWidth });
  },
  componentDidMount() {
    window.addEventListener('resize', this.update);
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.update);
  },
  render: function () {
    return (
      <div>
        <p>Width: {this.state.width}</p>
      </div>
    );
  },
});

React.render(<Box />, document.getElementById('box'));
