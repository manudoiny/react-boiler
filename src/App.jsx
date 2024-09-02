import {Route, Switch} from "react-router-dom/cjs/react"
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </>
  );
}

export default App;
