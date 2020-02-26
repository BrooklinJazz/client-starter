import React from "react";
import { exampleAction } from "./redux/example";
import { connect } from "react-redux";
import { selectExample } from "./redux/selectors";
import { AppState } from "./store";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App({exampleAction, example}: IProps) {
  return (
    <Container
      onClick={() => {
        exampleAction({});
      }}
      className="App"
    >
      {example}
    </Container>
  );
}

interface IProps extends IDispatch, IState {}

interface IDispatch {
  exampleAction: typeof exampleAction
}

interface IState {
  example: ReturnType<typeof selectExample>
}

const mapDispatchToProps: IDispatch = {
  exampleAction
}

const mapStateToProps = (state: AppState) => ({
  example: selectExample(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
