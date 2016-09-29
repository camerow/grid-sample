

function GridNormalizer(WrappedComponent) {
  return class NewGrid extends Component {
    this.changeName(name) {
      return name.toUpperCase();
    }

    render() {
      const newProps = {
        name: {
          onChange: this.changeName
        }
      }
      return (
        <WrappedComponent {...this.props} {...newProps} />
      )
    }
  }
}
