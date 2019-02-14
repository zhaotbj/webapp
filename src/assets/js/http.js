import axios from 'axios'
const http = axios.create({
  baseURL: "http://localhost:3000"
})

const httpPlugin = {}
httpPlugin.install = function (Vue, options) {
  Vue.prototype.$http = http
}
export default httpPlugin