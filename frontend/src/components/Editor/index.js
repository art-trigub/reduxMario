import React, { useEffect } from "react";
import EditorJS from '@editorjs/editorjs';
import configuration from './configuration'


const Editor = (props) => {
    const editor = new EditorJS(configuration);
    return (
        <div>
            <div className="editor__container">
                <div id="editor"></div>
            </div>
        </div>
    )
}

export default Editor;