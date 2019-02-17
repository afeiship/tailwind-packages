# slate-plugin-quote
> SlateJS quote plugin.


## install:
```bash
npm install -S afeiship/slate-plugin-quote --registry=https://registry.npm.taobao.org
```

## usage:
```js
const isCode = editor.value.blocks.some((block) => block.type == 'code');
editor.setBlocks(isCode ? 'paragraph' : 'code');
```
