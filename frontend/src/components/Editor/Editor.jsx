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


const Editor = ({data, setData}) => {
    const [isEdit, setIsEdit] = useState(true)
    const output = document.getElementById("editorsave");
    console.log(output)
    const editor = new EditorJS({
        holder: 'editorjs', 
        tools: { 
            image: {
                class: SimpleImage,
                inlineToolbar: true            
            },
            header: Header, 
            list: List,
          },
          data: data,
          autofocus: false,
        placeholder: 'True guide...'
    })


	useEffect(() => {

    }, []);


    const onEdit = () => {
        setIsEdit(true)
    }    

    const onSave = () => {
        setIsEdit(false)
        editor.save().then((outputData) => {
            console.log('Article data: ', outputData)
            setData(outputData)
            output.innerHTML = JSON.stringify(outputData, null, 4);
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