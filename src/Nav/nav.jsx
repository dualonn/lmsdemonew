import {useContext} from "react";
import {context, dispatchContext} from "../context";
import "./nav.css"

function Nav() {
    const state = useContext(context);
    const dispatch = useContext(dispatchContext);
    const cls = state.all_data[state.course]
    const pg = cls.pages[state.page]
    const pg_num = state.page

    function decrement(){
        dispatch({
            type: "change_page",
            page_num: state.page - 1
        })
    }

    function increment(){
        dispatch({
            type: "change_page",
            page_num: state.page + 1
        })
    }
    return (
        <div className="nav">
            <div className={`${state.page < 1 ? "hidden" : "visible"}`}>
            <span onClick={() => {decrement()}} className="material-symbols-outlined">
                arrow_back_ios
            </span>
            </div>

            <h3>{pg.title}</h3>

            <div className={`${state.page >= cls.pages.length-1 ? "hidden" : "visible"}`}>
                <span onClick={() => {increment()}} className="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </div>
        </div>
    )
}
export default Nav;