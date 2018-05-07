import Home from '../components/Home'
import Classify from '../components/Classify'
import Mine from '../components/Mine'
import Car from '../components/Car'
import City from '../components/City'
import Procity from '../components/Procity'


const routes = {
    NAV: [
        {
            title: '首页',
            to: '/home',
            active: 'active'
        },
        {
            title: '分类',
            to: '/classify',
            active: 'active'
        },
        {
            title: '购物车',
            to: '/car',
            active: 'active'
        },
        {
            title: '我的',
            to: '/mine',
            active: 'active'
        },
    ],
    ROUTER: [

        {
            path: '/home',
            component: Home
        },
        {
            path: '/classify',
            component: Classify
        },
        {
            path: '/car',
            component: Car
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/city',
            component: City
        },
        {
            path: '/procity',
            component: Procity
        }
    ]
}

export default routes