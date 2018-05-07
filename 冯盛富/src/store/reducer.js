import city from '../data/city'
import provinceCity from '../data/provinceCity'

const reducers = (state = {city,provinceCity},action)=>{
    return {
        state
    }
}

export default reducers