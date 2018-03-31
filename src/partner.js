import Cookie from 'js-cookie'
import qs from 'query-string'
import constants from './constants'

const params = qs.parse(location.search)

if (params[constants.PARTNER_PARAM]) {
  Cookie.set(constants.PARTNER_COOKIE, params[constants.PARTNER_PARAM])
}