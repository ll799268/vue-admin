import serviceRoutes from '@router/serviceRoutes'

const serviceRoutesFormat = () => {
  const result = []
  return farmatArrTree(result, serviceRoutes)
}

/**
 * 扁平化化树形路由
 * @param {*} arr 
 */
const farmatArrTree = (result, arr) => {
  let originArr = result || []
  arr.map(item => {
    if (item.children) {
      farmatArrTree(originArr, item.children)
      return
    }
    result.push(item)
  })
  return originArr
}

export default serviceRoutesFormat