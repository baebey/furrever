

// import data type มา จาก Action คือเราต้องเขียน Action เพื่อกำหนดชนิดข้อมูลก่อน ถึงจะทำ Reducer ได้
import { INC_COUNTER } from "../actions/myAction";
import { DOC_NAME } from "../actions/myAction";
import { USER_DATA } from "../actions/myAction";

 const initialState = {
    counter: 0,
    name: "KMITL",
    doc_name: "", // ไว้เก็บชื่อ Document ใน DB เช่น judas 
    user_data: {}, // ไว้เก็บข้อมูล User ใน DB {name: 'judas', history: Array(0), password: '1111', email: '64070257@kmitl.ac.th'}
 };

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER :
            return { counter: state.counter + 1, name: action.myname };
        case DOC_NAME :
            return { doc_name: action.name_doc }
        case USER_DATA :
            let test = {...action.user}
            return { user_data: test, doc_name: test.name}
        default:
            return state;
}};
export default myReducer;











