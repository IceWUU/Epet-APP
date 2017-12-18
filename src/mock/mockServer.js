import Mock from 'mockjs'
import data from './data.json'


Mock.mock('/api2/goods', {code: 0, data: data.classifyName})
