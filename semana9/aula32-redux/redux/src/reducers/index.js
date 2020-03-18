import { combineReducers } from "redux";
import tasks from './tasks'


const rootReducer = combineReducers({
 task:tasks
});

export default rootReducer;