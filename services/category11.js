import { api } from ".";
//để lấy ra thời gian tiêm
const CategoryService11 = {
    getCategory11({
        id,
        //...restParam
    } = {}) {
        return api.call().get(`/KetQua/Showcmnd/${id}`, {
            params: {
                id,
                //...restParam
            }
        })
    }
}

export default CategoryService11