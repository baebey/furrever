import MyNavigator from "./navigation/MyNavigator"


// Redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import myReducer from "./store/reducers/myReducer";

const rootReducer = combineReducers({
  myReducer: myReducer, // อ้างอิงจากตัวด้านหน้า
});

// store
const store = createStore(rootReducer);



export default function App() {
  return (
    <Provider store={store}><MyNavigator /></Provider>
  );
}

