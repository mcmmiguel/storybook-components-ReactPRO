import{j as _}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({label:o,size:v="normal",color:t="",allCaps:L=!1,fontColor:x})=>_.jsx("span",{className:`${v} ${t}`,style:{color:x||t},children:L?o.toUpperCase():o});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"normal"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalize all letters",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:""},description:"Label color",name:"color",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const z={title:"UI/labels/MyLabel",component:s,tags:["autodocs"],argTypes:{size:{control:"inline-radio"}},parameters:{layout:"centered"}},e={args:{label:"Que onda"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-primary"}},l={args:{label:"Custom colors Label",fontColor:"#44k4sl"}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Que onda'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,i,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-primary'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,f,g;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Custom colors Label',
    fontColor: '#44k4sl'
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const V=["Basic","AllCaps","Secondary","CustomColors"];export{a as AllCaps,e as Basic,l as CustomColors,r as Secondary,V as __namedExportsOrder,z as default};
//# sourceMappingURL=MyLabel.stories-8f474d29.js.map
