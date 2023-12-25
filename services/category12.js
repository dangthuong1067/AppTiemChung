import { api } from ".";
//để lấy ra thời gian tiêm
const CategoryService12 = {
    getCategory12({
        id,
        //...restParam
    } = {}) {
        return api.call().get(`/NguoiDung/${id}`, {
            params: {
                id,
                //...restParam
            }
        })
    }
}

export default CategoryService12