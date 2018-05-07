import { createStore } from 'redux'
import reducers from './reducer.js'

const store=createStore(reducers)

export default store
