
import './index.css';
import { IconListBulleted, IconListNumbered } from '@codexteam/icons'


export default class List {

  static get isReadOnlySupported() {
    return true;
  }


  static get enableLineBreaks() {
    return true;
  }


  static get toolbox() {
    return {
      icon: IconListBulleted,
      title: 'List',
    };
  }

  constructor({ data, config, api, readOnly }) {

    this._elements = {
      wrapper: null,
    };

    this.api = api;
    this.readOnly = readOnly;

    this.settings = [
      {
        name: 'unordered',
        label: this.api.i18n.t('Unordered'),
        icon: IconListBulleted,
        default: config.defaultStyle === 'unordered' || false,
      },
      {
        name: 'ordered',
        label: this.api.i18n.t('Ordered'),
        icon: IconListNumbered,
        default: config.defaultStyle === 'ordered' || true,
      },
    ];


    this._data = {
      style: this.settings.find((tune) => tune.default === true).name,
      items: [],
    };

    this.data = data;
  }

  render() {
    this._elements.wrapper = this.makeMainTag(this._data.style);

    if (this._data.items.length) {
      this._data.items.forEach((item) => {
        this._elements.wrapper.appendChild(this._make('li', this.CSS.item, {
          innerHTML: item,
        }));
      });
    } else {
      this._elements.wrapper.appendChild(this._make('li', this.CSS.item));
    }

    if (!this.readOnly) {
      this._elements.wrapper.addEventListener('keydown', (event) => {
        const [ENTER, BACKSPACE] = [13, 8]; // key codes

        switch (event.keyCode) {
          case ENTER:
            this.getOutofList(event);
            break;
          case BACKSPACE:
            this.backspace(event);
            break;
        }
      }, false);
    }

    return this._elements.wrapper;
  }

  save() {
    return this.data;
  }


  static get conversionConfig() {
    return {

      export: (data) => {
        return data.items.join('. ');
      },

      import: (string) => {
        return {
          items: [ string ],
          style: 'unordered',
        };
      },
    };
  }


  static get sanitize() {
    return {
      style: {},
      items: {
        br: true,
      },
    };
  }


  renderSettings() {
    return this.settings.map(item => ({
      ...item,
      isActive: this._data.style === item.name,
      closeOnActivate: true,
      onActivate: () => this.toggleTune(item.name)
    }))
  }


  onPaste(event) {
    const list = event.detail.data;

    this.data = this.pasteHandler(list);
  }


  static get pasteConfig() {
    return {
      tags: ['OL', 'UL', 'LI'],
    };
  }


  makeMainTag(style) {
    const styleClass = style === 'ordered' ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered;
    const tag = style === 'ordered' ? 'ol' : 'ul';

    return this._make(tag, [this.CSS.baseBlock, this.CSS.wrapper, styleClass], {
      contentEditable: !this.readOnly,
    });
  }


  toggleTune(style) {
    const newTag = this.makeMainTag(style);

    while (this._elements.wrapper.hasChildNodes()) {
      newTag.appendChild(this._elements.wrapper.firstChild);
    }

    this._elements.wrapper.replaceWith(newTag);
    this._elements.wrapper = newTag;
    this._data.style = style;
  }


  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: 'cdx-list',
      wrapperOrdered: 'cdx-list--ordered',
      wrapperUnordered: 'cdx-list--unordered',
      item: 'cdx-list__item',
    };
  }


  set data(listData) {
    if (!listData) {
      listData = {};
    }

    this._data.style = listData.style || this.settings.find((tune) => tune.default === true).name;
    this._data.items = listData.items || [];

    const oldView = this._elements.wrapper;

    if (oldView) {
      oldView.parentNode.replaceChild(this.render(), oldView);
    }
  }


  get data() {
    this._data.items = [];

    const items = this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`);

    for (let i = 0; i < items.length; i++) {
      const value = items[i].innerHTML.replace('<br>', ' ').trim();

      if (value) {
        this._data.items.push(items[i].innerHTML);
      }
    }

    return this._data;
  }


  _make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }


  get currentItem() {
    let currentNode = window.getSelection().anchorNode;

    if (currentNode.nodeType !== Node.ELEMENT_NODE) {
      currentNode = currentNode.parentNode;
    }

    return currentNode.closest(`.${this.CSS.item}`);
  }


  getOutofList(event) {
    const items = this._elements.wrapper.querySelectorAll('.' + this.CSS.item);

    if (items.length < 2) {
      return;
    }

    const lastItem = items[items.length - 1];
    const currentItem = this.currentItem;

    /** Prevent Default li generation if item is empty */
    if (currentItem === lastItem && !lastItem.textContent.trim().length) {
      /** Insert New Block and set caret */
      currentItem.parentElement.removeChild(currentItem);
      this.api.blocks.insert();
      this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
      event.preventDefault();
      event.stopPropagation();
    }
  }


  backspace(event) {
    const items = this._elements.wrapper.querySelectorAll('.' + this.CSS.item),
        firstItem = items[0];

    if (!firstItem) {
      return;
    }


    if (items.length < 2 && !firstItem.innerHTML.replace('<br>', ' ').trim()) {
      event.preventDefault();
    }
  }


  selectItem(event) {
    event.preventDefault();

    const selection = window.getSelection(),
        currentNode = selection.anchorNode.parentNode,
        currentItem = currentNode.closest('.' + this.CSS.item),
        range = new Range();

    range.selectNodeContents(currentItem);

    selection.removeAllRanges();
    selection.addRange(range);
  }


  pasteHandler(element) {
    const { tagName: tag } = element;
    let style;

    switch (tag) {
      case 'OL':
        style = 'ordered';
        break;
      case 'UL':
      case 'LI':
        style = 'unordered';
    }

    const data = {
      style,
      items: [],
    };

    if (tag === 'LI') {
      data.items = [ element.innerHTML ];
    } else {
      const items = Array.from(element.querySelectorAll('LI'));

      data.items = items
        .map((li) => li.innerHTML)
        .filter((item) => !!item.trim());
    }

    return data;
  }
}