import { api } from ".";

const CategoryService14 = {
    getCategory14({
        // offset = 0,
        // limit = 10,
        ...restParam
    } = {}) {
        return api.call().get('/KhamLamSang/chuatiem', {
            params: {
                // offset,
                // limit,
                ...restParam
            }
        })
    }
}

export default CategoryService14