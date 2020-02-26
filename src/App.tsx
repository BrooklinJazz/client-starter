import React from "react";
import { exampleAction } from "./redux/example";
import { connect } from "react-redux";
import { selectExample } from "./redux/selectors";
import { AppState } from "./store";

function App({exampleAction, example}: IProps) {
  return (
    <div
      onClick={() => {
        exampleAction({});
      }}
      className="App"
    >
      {example}
    </div>
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
