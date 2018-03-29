# 基础 Base

### 统一样式

原型组件库以 [normalize.css](http://necolas.github.io/normalize.css) 为基础，使初始样式在各个浏览器下保持统一，然后对HTML元素的默认样式作了进一步优化。

类似 [Bootstrap](https://getbootstrap.com)，将`box-sizing: border-box`应用到所有元素，于是元素的宽高便不会受到`padding`的影响。

使用 Vue 的`preserveWhitespace: false`，将所有元素之间空格清除，这样在`inline-block`的元素之间不会有空隙。

### 黑名单

为了支持语义化，同时又为了满足正交性（组件元素之间互不影响的原则），以下元素被拉入黑名单：`<a>`、`<dl>`、`<dt>`、`<dd>`、`<ul>`、`<ol>`、`<li>`。它们的样式被清除，并且要求在组件中封装后使用，而不是直接在业务中使用。
