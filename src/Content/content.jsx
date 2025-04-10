import './content.css'
import {context} from '../context'
import Nav from '../Nav/nav'
//import add_block from './add_block'
import {useContext, useState} from "react";

function Content() {

    const [show_block_edit, set_block_edit] = useState(false)
    const state = useContext(context)

    let content

    if(state.all_data){
        content = state.all_data[state.course].pages[state.page]
    }
    return (
        <div>
            {state.all_data ? <>
                <Nav/>
                <div className="main-content">
                    {state.all_data[state.course].pages[state.page].blocks.map((block, idx) => (
                       <>
                           <div className={block.title}></div>
                           <div className={block.content}></div>
                       </>
                    ))}

                    {!show_block_edit ?
                        <button className="add_block_button" onClick={()=>set_block_edit(true)}>Add Block</button> : ""
                    }
                    {!show_block_edit ?
                        /*<AddBlock show_edit_block={set_block_edit}></AddBlock>*/'' : ''}
                </div>
                </> : null
            }
        </div>
    )
}

export default Content;