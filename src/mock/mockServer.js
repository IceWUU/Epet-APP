import Mock from 'mockjs'
import apiData  from './data.json'


Mock.mock('/api2/goods', {code: 0, data:apiData.classifyName})
