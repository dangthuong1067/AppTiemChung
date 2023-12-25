import { api } from ".";

const CategoryService10 = {
    getCategory10({
        // ...restParam
    } = {}) {
        return api.call().get('/KhamLamSang/GetAll', {
            params: {
                // ...restParam
            }
        })
    }
}

export default CategoryService10