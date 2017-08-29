# CSS笔记
## CSS块状与行内元素的区别
- 块状元素：<div>,<p>,<ol>,<ul>,<dl>,<table>,<h1…..h6>,<blockquote>,<dt>,<address>,<caption>,<form>, <ul> 和 <li>
- 内联/行内元素：
    <bdo-bidioverride>；
    <big>大字体；
    <br>换行；
    <cite>引用；
    <code>计算机代码（在引用源代码的时候需要）；
    <dfn>定义字段；
    <em>强调；
    <font>字体设定；
    <i>斜体；
    <img>图片；
    <input>输入框；
    <kbd>定义键盘；
    <lable>表格标签；
    <q>段引用；
    <s>中划线；
    <samp>定义范例计算机代码；
    <select>项目选择；
    <small>小字体文本；
    <span>常用内联（行内）容器，定义文本内区块；
    <strike>中划线；
    <strong>粗体强调；
    <sub>下标；
    <sup>下标；
    <textarea>多行文本输入框；
    <tt>电传文本；
    <u>下划线；
    <var>定义变量；
    <a>锚点；
    <abrr>缩写;
    <b>加粗
- 注：
    inline—block可以在css样式中转化成行内元素，display:inline可以转化成块状元素，但是display：block也可以能转化成行内元素的
    （block表示以块状的形式显示，inline-block表示行内块状，不换行，有大小；inline没有大小不换行）
    <span>, <a>, <label>, <input>, <img>, <strong> 和<em>若需要改变大小，需要使用css样式转化成块状元素，还控制大小，控制图片大小还可以使用绝对定位（fixed）和float来移动图片

- 关于css的继承:
    在修改同一个属性的样式时，会先执行上一级元素，再执行下一级

## CSS布局，使用position+float
- 布局步骤：
1. 第一步是画框架
2. 第二步就是布局
3. 第三步就是写样式
- 关于display:
    display:inline; 元素显示为行内元素，无大小，设置margin、padding、width、height都无效（不符合盒子模型）
    display:inline-block; 符合盒子模型 不换行
    display:block; 符合盒子模型 换行
- 关于position：
    position：relative; 相对定位（元素的默认定位，不用特别设置）
    position：absolute; 绝对定位
    position：fixed;


- display:block
    block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。
    block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。
    block元素可以设置margin和padding属性。
- display:inline
    inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
    inline元素设置width,height属性无效。
    inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。
- display:inline-block
    简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性。


* CSS盒子模型
	目标：
        理解width、height、padding、border、margin、内容在盒子模型中处于的具体位置、作用、效果
    拓展：
	1. 什么样的元素可以是“盒子”？
	2. 可以自己创建盒子吗？
	3. 使用什么标签创建自己的盒子？
	4. 盒子有什么用？
	5. 为什么我们要创建盒子？
	
* CSS定位（如何布局）
	目标：
    a. 理解relative、absolute、fixed定位区别与用途。
    b. 理解relative、absolute、fixed定位中，top、bottom、left、right区别。
    c. z-index的作用。
    d. float


