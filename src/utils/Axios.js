import axios from 'axios'
import Config from 'react-native-config'

class Axios {
  constructor() {
    // 创建实例
    this.instance = axios.create({
      baseURL: Config.TIME_API_URL,
      timeout: 1000,
      headers: { 'X-Custom-Header': 'foobar' },
    })
  }
}

export default Axios
