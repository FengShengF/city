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
            to: '/index/home',
            active: 'active'
        },
        {
            title: '分类',
            to: '/index/classify',
            active: 'active'
        },
        {
            title: '购物车',
            to: '/index/car',
            active: 'active'
        },
        {
            title: '我的',
            to: '/index/mine',
            active: 'active'
        },
    ],
    ROUTER: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/index/home',
            component: Home
        },
        {
            path: '/index/classify',
            component: Classify
        },
        {
            path: '/index/car',
            component: Car
        },
        {
            path: '/index/mine',
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