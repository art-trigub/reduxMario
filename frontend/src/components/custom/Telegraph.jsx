import SaveButton from './BasicComponents/SaveButton'
import EditButton from './BasicComponents/EditButton'
import * as React from 'react';
import { useEffect, useState } from "react";
import EditorJS from '@editorjs/editorjs'; 




export default function Telegraph({onSaveData, data}) {
    const [isEdit, setIsEdit] = useState(true)
    const [domArticles, setDomArticles] = useState(false)
    console.log(domArticles)

    const editor = new EditorJS({ 
        placeholder: 'Телеграфное вступление',
        /** 
         * Id of Element that should contain the Editor 
         */ 
        holder: 'editorjs', 
      
        /** 
         * Available Tools list. 
         * Pass Tool's class or Settings object for each Tool you want to use 
         */ 

      })
    function handleKeyPress (e) {
        if (e.key === "Enter") {
            console.log("do validate");
        }
    }
    
    function onSave(data) {
        // setIsEdit(false)
        cloneDomAndSave()
        GetArticlesDom()
        // setIsEdit(false)
    }

    function onEdit() {
        setIsEdit(true)

    }

    function cloneDomAndSave () {
        let node = document.getElementsByClassName("telegraph__text_line_elem")[0]
        let dupNode = node.cloneNode(true);
        setDomArticles(dupNode)
        onSaveData(dupNode)

    }

    function GetArticlesDom() {
            console.log('AAAAAAAAA', data)
            var node2 = document.createTextNode("");
        let ab = document.getElementById("telegraph__buttons_wrap_id")
        ab.innerHTML = ''
        ab.appendChild(data || node2)
        
    }

    return (
        <>  
            <div className="telegraph__container" onKeyPress={handleKeyPress}>
                <div id="telegraph__buttons_wrap_id" className="telegraph__buttons_wrap">
                    
                    {isEdit 
                    ?                     
                    <SaveButton onClick={onSave}/>
                    :
                    <EditButton onClick={onEdit}/>
                    }

                </div>
                <div id="editorjs">
                    {/* {data 
                        ?                   
                        GetArticlesDom()
                        :
                        <p className="telegraph__text_line_elem" placeholder="True Guide" contentEditable="true"></p>
                    }
                   <p className="telegraph__text_line_elem" placeholder="True Guide" contentEditable="true"></p>
                    */}
                </div>
                
            </div>

        </>
    );
}

