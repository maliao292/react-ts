import Axios from './Axios'
import {AxiosInstance} from './types'
// 创建一个axios 实例，其实axios 就是一个函数
function creatInstance():AxiosInstance {
    // this 指针上下文
    let context: Axios = new Axios();
    // 让request 方法里的this 永远指向context
    let instance:any = Axios.prototype.request.bind(context)
    instance = Object.assign(instance, Axios.prototype, context)
    return instance as AxiosInstance
}

let axios = creatInstance();

export default axios;
export * from './types'