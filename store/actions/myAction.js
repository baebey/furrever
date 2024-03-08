export const INC_COUNTER = "INC_COUNTER";
export const increaseCounter = (name) => {
    return { type: INC_COUNTER, myname: name };
};
// ฟังก์ชัน increaseCounter รับค่า name และทำการรีเทิร์น Action ประเภท INC_COUNTER และส่งพารามิเตอร์ myname ที่เก็บค่า name ที่รับมาด้วย




 
// เราจะมี ชนิด Data ที่ใช้ 2 แบบคือ  USER_DATA(เอาไว้เก็บข้อมูลของUser) กับ DOC_NAME(เอาไว้เก็บชื่อDocumentจากFirebase)
export const USER_DATA = "USER_DATA";
export const putUSER_DATA = (data) => {
     console.log("♥️ putUSER_DATA : " , data);
    return { type: USER_DATA, user: data };
 };

export const DOC_NAME = "DOC_NAME";
export const putDocumentName = (name) => {
    console.log("♥️ putDocumentName : " , name);
    return { type: DOC_NAME, name_doc: name };
};







