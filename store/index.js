import { configureStore } from '@reduxjs/toolkit' //thay cho createStore để tạo ra store
import infoReducer from "./slices/info";
import infoReducer3 from "./slices/info3";
import infoReducer9 from "./slices/info9";
import infoReducer10 from "./slices/info10";
import infoReducer11 from "./slices/info11";
import infoReducer12 from "./slices/info12";
import infoReducer14 from "./slices/info14";
const store = configureStore({
    reducer: { //chỗ này để tạo ra nhiều reducer khác nhau
        Info: infoReducer,
        Info3: infoReducer3,//để lấy ra thời gian tiêm
        Info9: infoReducer9,// lấy ra kết quả tiêm
        Info10: infoReducer10,// lấy ra lịch sử kết quả khám lâm sàng
        Info11: infoReducer11,// lấy ra lịch sử kết quả tiêm của user
        Info12: infoReducer12,// lấy ra thông tin cá nhân của user
        Info14: infoReducer14,//lấy ra danh sách những người chưa tiêm
    },
})

export default store