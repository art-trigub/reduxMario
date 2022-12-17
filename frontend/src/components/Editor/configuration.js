import React from "react";


const Configuration = () => {
    return ({
        holder : 'editorjs',
        tools: {

        },
        onReady: () => {
            console.log('Editor.js is ready to work!')
        },
        onChange: (api, event) => {
            console.log('Now I know that Editor\'s content changed!', event)
        },
        autofocus: true,
        data: {},
        placeholder: 'Paste image URL'
    })
};



export default Configuration