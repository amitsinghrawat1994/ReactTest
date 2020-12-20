import React from "react"
import { Route, Switch } from "react-router-dom"
import { List } from "./List"
import AddEdit from "./AddEdit"
import Detail from "./Detail"

const Teacher = ({ match }) => {
  const { path } = match
  return (
    <Switch>
      <Route path={`${path}/add`} component={AddEdit} />
      <Route path={`${path}/edit/:id`} component={AddEdit} />
      <Route exact path={path} component={List} />
      <Route path={`${path}/:id`} component={Detail} />
    </Switch>
  )
}

export { Teacher }
