import { api } from ".";
const CategoryService9 = {
    getCategory9({
        offset = 0,
        limit = 10,
        ...restParam
    } = {}) {
        return api.call().get('/KetQua', {
            params: {
                offset,
                limit,
                ...restParam
            }
        })
    }
}

export default CategoryService9