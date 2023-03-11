import { PRODUCT_LIST} from "./constant"

export const productList = () => {
    console.warn("action productList")
    return {
        type: PRODUCT_LIST
    }
}
