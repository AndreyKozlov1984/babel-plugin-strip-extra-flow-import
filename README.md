# babel-plugin-strip-extra-flow-import
A babel plugin to remove `import` statement completely when only flow types are imported

## Problem
by default `babel-plugin-strip-flow` will just convert this:
```
    import {type X, type Y, type Z} from 'type'
```
to this:
```
     import from 'type'
```
That prevents the WebPack async code split from working. 
This plugin fixes the issue via completely  removing the import statement which imports only types.
