import regions from './regions'
import statuses from './statuses'
import years from './years'

const { data: availableRegions = [] } = regions
const { data: availableStatuses = [] } = statuses
const { data: availableYears = [] } = years

export default {
  availableRegions,
  availableStatuses,
  availableYears
}
