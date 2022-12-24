import * as React from 'react';
import { useState, useEffect } from "react";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/editorjs'; 
import List from '@editorjs/editorjs'; 
import Embed from '@editorjs/editorjs'; 
import SimpleImage from './simple-image'
import image9 from "../../images/XDAO.jpg";

import SaveButton from '../custom/BasicComponents/SaveButton';
import EditButton from '../custom/BasicComponents/EditButton';

// import Configuration from './Configuration'


const Editor = (props) => {
    const [isEdit, setIsEdit] = useState(true)

    const [editor, setEditor] = useState(new EditorJS({
        holder: 'editorjs', 
        tools: { 
            image: SimpleImage,
            header: Header, 
            list: List 
          }, 
    }))

    console.log('aaaaaaa')



	useEffect(() => {
            // document.getElementById("editor").innerHTML = ''
            document.getElementById('editorjs').innerHTML = ''
            console.log(document.getElementById("editorjs"))
            let nodeEditor = document.getElementById("editorjs")
            if(nodeEditor.children.length > 1) nodeEditor.children[1].id = 'editorMain'
            console.log(document.getElementById("editorjs").children.length)
            // document.getElementById("editorjs").children[1].id = 'blablabla'
            // console.log(nodeEditor)
            // while(nodeEditor.children.length > 1) {
            //     console.log('1')
            //     nodeEditor.removeChild(nodeEditor.lastChild)
            // }
            // console.log(nodeEditor)
	}, []);





    // editor.isReady
    //     .then(() => {
    //         console.log('READY EDITOR')
    //         return({
                

    //         })
    //     })
    //     .catch(() => {

    //     });
        
    const onEdit = () => {
        setIsEdit(true)
    }    

    const onSave = () => {
        setIsEdit(false)
        editor.save().then((outputData) => {
            console.log('Article data: ', outputData)
          }).catch((error) => {
            console.log('Saving failed: ', error)
          });
    }



    return (
        <div className="telegraph__container">
        <div className="container">
            <div id="editorjs"></div>
            {/* <div className="home__slider_item__image" style={{backgroundImage: `url("https://via.placeholder.com/728x90?text=728x90+Leaderboard")`}}></div> */}
        </div>
        <div className="telegraph__buttons_wrap">
            {isEdit 
            ?                     
            <SaveButton onClick={onSave}/>
            :
            <EditButton onClick={onEdit}/>
            }

        </div>
    </div>
    )
};

export default Editor;