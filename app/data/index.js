import regions from './regions'
import years from './years'

const { data: availableRegions = [] } = regions
const { data: availableYears = [] } = years

export default {
  availableRegions,
  availableYears
}
