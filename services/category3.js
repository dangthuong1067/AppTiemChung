import { api } from ".";
//để lấy ra thời gian tiêm
const CategoryService3 = {
    getCategory3({
        // ...restParam
    } = {}) {
        return api.call().get('/KeHoachTiem', {
            params: {
                // ...restParam
            }
        })
    }
}

export default CategoryService3