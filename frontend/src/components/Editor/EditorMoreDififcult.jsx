

import * as React from 'react';
import { useState, useEffect } from "react";
import EditorJS from '@editorjs/editorjs';

import SaveButton from '../custom/BasicComponents/SaveButton';
import EditButton from '../custom/BasicComponents/EditButton';

// import Configuration from './Configuration'


const Editor = (props) => {
    const [isEdit, setIsEdit] = useState(true)


	useEffect(() => {
            // document.getElementById("editor").innerHTML = ''
	}, []);

    const editor = new EditorJS();

    editor.isReady
        .then(() => {
            console.log('READY EDITOR')
            return({
                

            })
        })
        .catch(() => {

        });
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






// import * as React from 'react';
// import { useState, useEffect } from "react";
// import EditorJS from '@editorjs/editorjs';

// import SaveButton from '../custom/BasicComponents/SaveButton';
// import EditButton from '../custom/BasicComponents/EditButton';

// // import Configuration from './Configuration'


// const Editor = (props) => {
//     const [isEdit, setIsEdit] = useState(true)


// 	useEffect(() => {
//             // document.getElementById("editor").innerHTML = ''
// 	}, []);

//     const editor = new EditorJS();

//     editor.isReady
//         .then(() => {
//             console.log('READY EDITOR')
//             return({
                

//             })
//         })
//         .catch(() => {

//         });
        
//     const onEdit = () => {
//         setIsEdit(true)
//     }    

//     const onSave = () => {
//         setIsEdit(false)
//         editor.save().then((outputData) => {
//             console.log('Article data: ', outputData)
//           }).catch((error) => {
//             console.log('Saving failed: ', error)
//           });
//     }

//     return (
//             <div className="telegraph__container">
//                 <div className="container">
//                     <div id="editorjs"></div>
//                 </div>
//                 <div className="telegraph__buttons_wrap">
//                     {isEdit 
//                     ?                     
//                     <SaveButton onClick={onSave}/>
//                     :
//                     <EditButton onClick={onEdit}/>
//                     }

//                 </div>
//             </div>
//     )
// };

// export default Editor;
















// import * as React from 'react';
// import { useState, useEffect } from "react";
// import EditorJS from '@editorjs/editorjs';

// import SaveButton from '../custom/BasicComponents/SaveButton';
// import EditButton from '../custom/BasicComponents/EditButton';

// // import Configuration from './Configuration'


// const Editor = (props) => {
//     const [isEdit, setIsEdit] = useState(true)


// 	useEffect(() => {
//             // document.getElementById("editor").innerHTML = ''
// 	}, []);

//     const editor = new EditorJS();

//     editor.isReady
//         .then(() => {
//             console.log('READY EDITOR')
//             return({
//                 holder : 'editorjs',
//                 // autofocus: true,
//                 placeholder: 'Paste image URL',
//                 tools: {},
//                 data:{},
//                 onReady: () => {
//                     console.log('Editor.js is ready to work!')
//                 },
//                 onChange: (api, event) => {
//                     console.log('Now I know that Editor\'s content changed!', event)
//                 }
//             })
//         })
//         .catch(() => {

//         });
//     const onEdit = () => {
//         setIsEdit(true)
//     }    

//     const onSave = () => {
//         setIsEdit(false)
//         editor.save().then((outputData) => {
//             console.log('Article data: ', outputData)
//           }).catch((error) => {
//             console.log('Saving failed: ', error)
//           });
//     }

//     return (
//             <div className="telegraph__container">
//                 <div className="container">
//                     <div id="editorjs"></div>
//                 </div>
//                 <div className="telegraph__buttons_wrap">
//                     {isEdit 
//                     ?                     
//                     <SaveButton onClick={onSave}/>
//                     :
//                     <EditButton onClick={onEdit}/>
//                     }

//                 </div>
//             </div>
//     )
// };

// export default Editor;



