import './index.css';

import { IconH1, IconH2, IconH3, IconH4, IconH5, IconH6, IconHeading } from '@codexteam/icons';



export default class Header {

  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.readOnly = readOnly;


    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-header',
    };


    this._settings = config;


    this._data = this.normalizeData(data);


    this._element = this.getTag();
  }


  normalizeData(data) {
    const newData = {};

    if (typeof data !== 'object') {
      data = {};
    }

    newData.text = data.text || '';
    newData.level = parseInt(data.level) || this.defaultLevel.number;

    return newData;
  }


  render() {
    return this._element;
  }


  renderSettings() {
    return this.levels.map(level => ({
      icon: level.svg,
      label: this.api.i18n.t(`Heading ${level.number}`),
      onActivate: () => this.setLevel(level.number),
      closeOnActivate: true,
      isActive: this.currentLevel.number === level.number,
    }));
  }


  setLevel(level) {
    this.data = {
      level: level,
      text: this.data.text,
    };
  }


  merge(data) {
    const newData = {
      text: this.data.text + data.text,
      level: this.data.level,
    };

    this.data = newData;
  }


  validate(blockData) {
    return blockData.text.trim() !== '';
  }


  save(toolsContent) {
    return {
      text: toolsContent.innerHTML,
      level: this.currentLevel.number,
    };
  }


//   static get conversionConfig() {
//     return {
//       export: 'text', // use 'text' property for other blocks
//       import: 'text', // fill 'text' property from other block's export string
//     };
//   }


//   static get sanitize() {
//     return {
//       level: false,
//       text: {},
//     };
//   }


//   static get isReadOnlySupported() {
//     return true;
//   }


//   get data() {
//     this._data.text = this._element.innerHTML;
//     this._data.level = this.currentLevel.number;

//     return this._data;
//   }


//   set data(data) {
//     this._data = this.normalizeData(data);


//     if (data.level !== undefined && this._element.parentNode) {

//       const newHeader = this.getTag();


//       newHeader.innerHTML = this._element.innerHTML;

//       this._element.parentNode.replaceChild(newHeader, this._element);


//       this._element = newHeader;
//     }


//     if (data.text !== undefined) {
//       this._element.innerHTML = this._data.text || '';
//     }
//   }


//   getTag() {

//     const tag = document.createElement(this.currentLevel.tag);


//     tag.innerHTML = this._data.text || '';


//     tag.classList.add(this._CSS.wrapper);


//     tag.contentEditable = this.readOnly ? 'false' : 'true';


//     tag.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || '');

//     return tag;
//   }


//   get currentLevel() {
//     let level = this.levels.find(levelItem => levelItem.number === this._data.level);

//     if (!level) {
//       level = this.defaultLevel;
//     }

//     return level;
//   }


//   get defaultLevel() {

//     if (this._settings.defaultLevel) {
//       const userSpecified = this.levels.find(levelItem => {
//         return levelItem.number === this._settings.defaultLevel;
//       });

//       if (userSpecified) {
//         return userSpecified;
//       } else {
//         console.warn('(ง\'̀-\'́)ง Heading Tool: the default level specified was not found in available levels');
//       }
//     }


//     return this.levels[1];
//   }



//   get levels() {
//     const availableLevels = [
//       {
//         number: 1,
//         tag: 'H1',
//         svg: IconH1,
//       },
//       {
//         number: 2,
//         tag: 'H2',
//         svg: IconH2,
//       },
//       {
//         number: 3,
//         tag: 'H3',
//         svg: IconH3,
//       },
//       {
//         number: 4,
//         tag: 'H4',
//         svg: IconH4,
//       },
//       {
//         number: 5,
//         tag: 'H5',
//         svg: IconH5,
//       },
//       {
//         number: 6,
//         tag: 'H6',
//         svg: IconH6,
//       },
//     ];

//     return this._settings.levels ? availableLevels.filter(
//       l => this._settings.levels.includes(l.number)
//     ) : availableLevels;
//   }


//   onPaste(event) {
//     const content = event.detail.data;


//     let level = this.defaultLevel.number;

//     switch (content.tagName) {
//       case 'H1':
//         level = 1;
//         break;
//       case 'H2':
//         level = 2;
//         break;
//       case 'H3':
//         level = 3;
//         break;
//       case 'H4':
//         level = 4;
//         break;
//       case 'H5':
//         level = 5;
//         break;
//       case 'H6':
//         level = 6;
//         break;
//     }

//     if (this._settings.levels) {
//       // Fallback to nearest level when specified not available
//       level = this._settings.levels.reduce((prevLevel, currLevel) => {
//         return Math.abs(currLevel - level) < Math.abs(prevLevel - level) ? currLevel : prevLevel;
//       });
//     }

//     this.data = {
//       level,
//       text: content.innerHTML,
//     };
//   }


//   static get pasteConfig() {
//     return {
//       tags: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
//     };
//   }

//   static get toolbox() {
//     return {
//       icon: IconHeading,
//       title: 'Heading',
//     };
//   }
}