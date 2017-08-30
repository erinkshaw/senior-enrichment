'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Main from './components/Root'
import store from './store'
// import AllCampuses from './components/AllCampuses'

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('main')
)
