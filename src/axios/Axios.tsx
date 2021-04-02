import { AxiosRequestConfig, AxiosResponse } from './types'
import qs from 'qs'
import parseHeaders from 'parse-headers'
export default class Axios {
    request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.dispatchRequest(config)
    }
    dispatchRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return new Promise<AxiosResponse<T>>(function (resolve, reject) {
            let { method, url, params, headers} = config
            let xhr = new XMLHttpRequest();
            if (params && typeof params === 'object') {
                params = qs.stringify(params);
                url += (url.indexOf('?') === -1 ? '?' : '&') + params
            }
            console.log(url)

            xhr.open(method!, url, true)
            xhr.responseType = 'json'

            xhr.onreadystatechange = function () {
                console.log(xhr.readyState)

                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        let response: AxiosResponse<T> = {
                            data: xhr.response ? xhr.response : xhr.responseText,
                            status: xhr.status,
                            statusText: xhr.statusText,
                            headers: parseHeaders(xhr.getAllResponseHeaders()),
                            config,
                        }
                        resolve(response)
                    }

                } else {
                    reject('请求失败')
                }
            }
            xhr.onerror = function(){
                reject('链接出错')
            }
            if(headers){
                for(let key in headers){
                    xhr.setRequestHeader(key,headers[key])
                }
            }

            xhr.send();
        })
    }
}

