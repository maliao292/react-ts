export type Methods = 'get' | 'GET' | 'post' | 'POST'
export interface AxiosRequestConfig {
    url: string;
    method?: Methods,
    params?: any,
    headers?:any
}
export interface AxiosInstance {//axios
    // Promise 的泛型T代表此Promise变成成功态之后resolve的值
    <T = any>(config: AxiosRequestConfig): Promise<T>
}
// T 响应体的类型
export interface AxiosResponse<T = any> {
    data: T
    status: number
    statusText?: string
    headers?: any
    config?:AxiosRequestConfig
    request?: XMLHttpRequest,
}  