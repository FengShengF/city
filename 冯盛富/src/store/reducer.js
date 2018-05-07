import city from '../data/city'
import provinceCity from '../data/provinceCity'
import carClass from '../data/carClass'

const reducers = (state = {city,provinceCity,carClass},action)=>{
    return {
        state
    }
}

export default reducers