import * as React from 'react';
import { useState, useEffect } from "react";
import EditorJS from '@editorjs/editorjs';
import Header from './Header'; 
import List from './List'; 
import Embed from '@editorjs/editorjs'; 
import Quotes from '@editorjs/editorjs'; 
import SimpleImage from './simple-image'
import image9 from "../../images/XDAO.jpg";

import SaveButton from '../custom/BasicComponents/SaveButton';
import EditButton from '../custom/BasicComponents/EditButton';

// import Configuration from './Configuration'

const Editor = ({data, setData, placehold}) => {
    let output = document.getElementById("editorsave")
    const [isEdit, setIsEdit] = useState(true)
    const editor = new EditorJS({
        holder: 'editorjs', 
        data: data,
        tools: { 
            image: {
                class: SimpleImage,
                inlineToolbar: true            
            },
            // myTune: MyTune,
            // blockTool: {
            //     class: MyBlockTool,
            //     tunes: ['myTune']
            // },


            // header: {
            //     class: Header,
            //     /**
            //      * This property will override the common settings
            //      * That means that this tool will have only Marker and Link inline tools
            //      * If 'true', the common settings will be used.
            //      * If 'false' or omitted, the Inline Toolbar wont be shown
            //      */
            //     inlineToolbar: ['marker', 'link'],
            //     config: {
            //       placeholder: 'Header'
            //     },
            //     shortcut: 'CMD+SHIFT+H'
            //   },


            // list: List,
            // embed: Embed,
            // quotes: Quotes
          },
          logLevel: 'error',
          autofocus: false,
        placeholder: placehold,
        onReady: () => {console.log('Editor.js is ready to work!')},
        onChange: (api, event) => {
            // console.log('Now I know that Editor\'s content changed!', event)
        },
    })

    editor.isReady
        .then(() => {
            
        })
        .catch((reason) => {
            console.log(`Editor.js initialization failed because of ${reason}`)
        });



    // const disableEdit = () => {
    //     let listParagraph = document.getElementsByClassName("ce-paragraph")
    //     console.log((listParagraph))
    //     for(let i = 0; i < listParagraph.length; i++) {

    //     }
    // }

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
            // output.innerHTML = JSON.stringify(outputData, null, 4);
            console.log(output)
          }).catch((error) => {
            console.log('Saving failed: ', error)
          });
        //   disableEdit()
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