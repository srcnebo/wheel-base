import App, {Container } from 'nexxt/app'

class MyApp extends App {
  render(){
    const {Component} = this.props;

    return (
      <Container>
        <p>Hey im on every page</p>
        <Component></Component>
      </Container>
    )
  }
}