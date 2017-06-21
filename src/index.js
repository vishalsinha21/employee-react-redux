import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CreateForm from './components/CreateForm'
import List from './components/List'
import reducer from './reducers'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={List} />
      <Route path="/new" component={CreateForm} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

