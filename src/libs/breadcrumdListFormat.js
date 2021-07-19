
import routerConfig from '@router/serviceRoutes'

/**
 * 拼接面包屑
 * @param {*} breadcrumdList 
 */
const breadcrumdListFormat = breadcrumdList => {
  let result = []
  routerConfig.map(route => {
    if (breadcrumdList[0] === route.id) {
      result.push({
        path: route.path,
        name: route.title
      })
      route.children && route.children.map(item => {
        if (breadcrumdList[1] === item.id) {
          result.push({
            path: item.path,
            name: item.title
          })
        }
      })
    }
  })

  return result
}

export default breadcrumdListFormat