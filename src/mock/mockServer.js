import Mock from 'mockjs'
import classificationData  from './classificationdata.json'
import homeData  from './home.json'



Mock.mock('/api2/goods', {code: 0, data:classificationData.classifyName})
Mock.mock('/api2/home', {code: 0, data:homeData})

