import './App.css';
import Header from './Header/header';
import LeftBar from './Left_Bar/left_bar';
import Content from './Content/content';
import {context, dispatchContext} from "./context";
import {useReducer} from "react";
import {default_state} from "./state";
import LoginForm from "./Login_Page/login_page";

function App() {
    const [state, dispatch] = useReducer(
        state_reducer,
        default_state
    )

    const user_idx = state.user
    const show_login_form = state.show_login_form

    return (
        <context.Provider value={state}>
            <dispatchContext.Provider value={dispatch}>
                <div className="App">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_forward_ios" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back_ios" />
                    <Header></Header>
                    {user_idx && !show_login_form ? <>
                        <div className="page">
                            <div className="content">
                                <LeftBar></LeftBar>
                                <Content></Content>
                            </div>
                        </div>
                    </> : <LoginForm></LoginForm>}
                </div>
            </dispatchContext.Provider>
        </context.Provider>
    );
}

function state_reducer(state, action) {
    switch (action.type) {
        case 'change_course': {
            return {
                ...state,
                course: action.course_num,
                page: 0
            };
        }
        case 'change_page': {
            return {
                ...state,
                page: action.page_num
            }
        }
        case 'change_user': {
            return {
                ...state,
                user: action.user_name
            }
        }
        case 'update_show_login_form': {
            return {
                ...state,
                show_login_form: action.show_login_form
            }
        }
        case 'change_all_data': {
            return {
                ...state,
                all_data: action.all_data
            }
        }
        case 'set_token': {
            return {
                ...state,
                token: action.token
            }
        }
        default: {
            throw Error(`Unknown action: ${action.type}`);
        }
    }
}


export default App;
