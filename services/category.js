import { api } from ".";

const CategoryService = {
    getCategory({
        // ...restParam
    } = {}) {
        return api.call().get('/KeHoachTiem/DaCheckin', {
            params: {
                // ...restParam
            }
        })
    }
}

export default CategoryService