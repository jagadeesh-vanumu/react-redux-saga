import { PRODUCT_LIST} from "./constant"

export const productList = async() => {
    console.warn("action productList")
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = data.json()
    return {
        type: PRODUCT_LIST,
        data
    }
}
