import breadcrumdListFormat from '@libs/breadcrumdListFormat'

const getters = {
  breadcrumbListResult: state => {
    return breadcrumdListFormat(state.breadcrumbList)
  }
}

export default getters