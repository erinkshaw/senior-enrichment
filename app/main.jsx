'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Root from './components/Root'
import store from './store'
// import AllCampuses from './components/AllCampuses'

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('main')
)
