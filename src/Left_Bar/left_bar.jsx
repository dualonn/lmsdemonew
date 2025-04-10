import './left_bar.css'
import Select from 'react-select'
import axios from "axios"
import {useContext, useState, useEffect} from "react"
import {context, dispatchContext} from "../context"
import {default_state} from "../state"

function LeftBar() {
    const state = useContext(context)
    const dispatch = useContext(dispatchContext)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const url = "https://svu-csc-django-backend.online/section/"

    const header = {
        headers: {
            'Authorization': `Token ${state.token}`,
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, header);
                dispatch({
                    type: 'change_all_data',
                    all_data: response.data
                });
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
        return () => {
            // Clean-up function (optional)
            // Add any clean-up logic here
        };
    }, []);
    // The square brackets above can have dependencies. If it
    // is empty then useEffect will run once.
    // if there is a variable(s) inside the [] then the function
    // runs if the variable changes (or either of them change)
    if (loading) {
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error.message}</div>
    }

    console.log(state.all_data)

    let dropdown_options = []
    if(state.all_data){
        dropdown_options = state.all_data.map((cls,idx) =>
            ({value: idx, label: cls.title}))
    }

    function select_course(opt){
        console.log("opt", opt.value)
        dispatch({
            type: 'change_course',
            course_num: opt.value
        })
    }

    return (
        <div>
            {state.all_data ? <>
                <Select options={dropdown_options}
                          value={dropdown_options[state.course]}
                          onChange={select_course}></Select>
                <ul>
                    {state.all_data[state.course].pages.map((pg, idx) => (
                        <li key={'page' + idx}
                            onClick={() => {
                                dispatch({
                                    type: 'change_page',
                                    page_num: idx
                                })
                            }}>{idx+1}.{pg.title}
                        </li>
                    ))}
                </ul>
                </>
            :''}
        </div>
    )
}

export default LeftBar;