(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3212],{47033:function(n,e,t){"use strict";function r(n){return null==n?null:i(n)}function i(n){if("function"!==typeof n)throw new Error;return n}t.d(e,{j:function(){return r},C:function(){return i}})},35227:function(n,e,t){"use strict";function r(){return 0}function i(n){return function(){return n}}t.d(e,{G:function(){return r},Z:function(){return i}})},22210:function(n,e,t){"use strict";function r(n){var e=0,t=n.children,r=t&&t.length;if(r)for(;--r>=0;)e+=t[r].value;else e=1;n.value=e}function i(n,e){var t,r,i,a,u,l=new s(n),d=+n.value&&(l.value=n.value),f=[l];for(null==e&&(e=o);t=f.pop();)if(d&&(t.value=+t.data.value),(i=e(t.data))&&(u=i.length))for(t.children=new Array(u),a=u-1;a>=0;--a)f.push(r=t.children[a]=new s(i[a])),r.parent=t,r.depth=t.depth+1;return l.eachBefore(c)}function o(n){return n.children}function a(n){n.data=n.data.data}function c(n){var e=0;do{n.height=e}while((n=n.parent)&&n.height<++e)}function s(n){this.data=n,this.depth=this.height=0,this.parent=null}t.d(e,{NB:function(){return s},le:function(){return c},ZP:function(){return i}}),s.prototype=i.prototype={constructor:s,count:function(){return this.eachAfter(r)},each:function(n){var e,t,r,i,o=this,a=[o];do{for(e=a.reverse(),a=[];o=e.pop();)if(n(o),t=o.children)for(r=0,i=t.length;r<i;++r)a.push(t[r])}while(a.length);return this},eachAfter:function(n){for(var e,t,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),e=i.children)for(t=0,r=e.length;t<r;++t)o.push(e[t]);for(;i=a.pop();)n(i);return this},eachBefore:function(n){for(var e,t,r=this,i=[r];r=i.pop();)if(n(r),e=r.children)for(t=e.length-1;t>=0;--t)i.push(e[t]);return this},sum:function(n){return this.eachAfter((function(e){for(var t=+n(e.data)||0,r=e.children,i=r&&r.length;--i>=0;)t+=r[i].value;e.value=t}))},sort:function(n){return this.eachBefore((function(e){e.children&&e.children.sort(n)}))},path:function(n){for(var e=this,t=function(n,e){if(n===e)return n;var t=n.ancestors(),r=e.ancestors(),i=null;n=t.pop(),e=r.pop();for(;n===e;)i=n,n=t.pop(),e=r.pop();return i}(e,n),r=[e];e!==t;)e=e.parent,r.push(e);for(var i=r.length;n!==t;)r.splice(i,0,n),n=n.parent;return r},ancestors:function(){for(var n=this,e=[n];n=n.parent;)e.push(n);return e},descendants:function(){var n=[];return this.each((function(e){n.push(e)})),n},leaves:function(){var n=[];return this.eachBefore((function(e){e.children||n.push(e)})),n},links:function(){var n=this,e=[];return n.each((function(t){t!==n&&e.push({source:t.parent,target:t})})),e},copy:function(){return i(this).eachBefore(a)}}},10018:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(47033),i=t(22210),o={depth:-1},a={};function c(n){return n.id}function s(n){return n.parentId}function u(){var n=c,e=s;function t(t){var r,c,s,u,l,d,f,p=t.length,h=new Array(p),m={};for(c=0;c<p;++c)r=t[c],l=h[c]=new i.NB(r),null!=(d=n(r,c,t))&&(d+="")&&(m[f="$"+(l.id=d)]=f in m?a:l);for(c=0;c<p;++c)if(l=h[c],null!=(d=e(t[c],c,t))&&(d+="")){if(!(u=m["$"+d]))throw new Error("missing: "+d);if(u===a)throw new Error("ambiguous: "+d);u.children?u.children.push(l):u.children=[l],l.parent=u}else{if(s)throw new Error("multiple roots");s=l}if(!s)throw new Error("no root");if(s.parent=o,s.eachBefore((function(n){n.depth=n.parent.depth+1,--p})).eachBefore(i.le),s.parent=null,p>0)throw new Error("cycle");return s}return t.id=function(e){return arguments.length?(n=(0,r.C)(e),t):n},t.parentId=function(n){return arguments.length?(e=(0,r.C)(n),t):e},t}},29483:function(n,e,t){"use strict";function r(n,e,t,r,i){var o,a,c=n.children,s=c.length,u=new Array(s+1);for(u[0]=a=o=0;o<s;++o)u[o+1]=a+=c[o].value;!function n(e,t,r,i,o,a,s){if(e>=t-1){var l=c[e];return l.x0=i,l.y0=o,l.x1=a,void(l.y1=s)}var d=u[e],f=r/2+d,p=e+1,h=t-1;for(;p<h;){var m=p+h>>>1;u[m]<f?p=m+1:h=m}f-u[p-1]<u[p]-f&&e+1<p&&--p;var x=u[p]-d,g=r-x;if(a-i>s-o){var v=(i*g+a*x)/r;n(e,p,x,i,o,v,s),n(p,t,g,v,o,a,s)}else{var y=(o*g+s*x)/r;n(e,p,x,i,o,a,y),n(p,t,g,i,y,a,s)}}(0,s,n.value,e,t,r,i)}t.d(e,{Z:function(){return r}})},44925:function(n,e,t){"use strict";function r(n,e,t,r,i){for(var o,a=n.children,c=-1,s=a.length,u=n.value&&(r-e)/n.value;++c<s;)(o=a[c]).y0=t,o.y1=i,o.x0=e,o.x1=e+=o.value*u}t.d(e,{Z:function(){return r}})},23062:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var r=t(86228),i=t(21086),o=t(47033),a=t(35227);function c(){var n=i.ZP,e=!1,t=1,c=1,s=[0],u=a.G,l=a.G,d=a.G,f=a.G,p=a.G;function h(n){return n.x0=n.y0=0,n.x1=t,n.y1=c,n.eachBefore(m),s=[0],e&&n.eachBefore(r.Z),n}function m(e){var t=s[e.depth],r=e.x0+t,i=e.y0+t,o=e.x1-t,a=e.y1-t;o<r&&(r=o=(r+o)/2),a<i&&(i=a=(i+a)/2),e.x0=r,e.y0=i,e.x1=o,e.y1=a,e.children&&(t=s[e.depth+1]=u(e)/2,r+=p(e)-t,i+=l(e)-t,(o-=d(e)-t)<r&&(r=o=(r+o)/2),(a-=f(e)-t)<i&&(i=a=(i+a)/2),n(e,r,i,o,a))}return h.round=function(n){return arguments.length?(e=!!n,h):e},h.size=function(n){return arguments.length?(t=+n[0],c=+n[1],h):[t,c]},h.tile=function(e){return arguments.length?(n=(0,o.C)(e),h):n},h.padding=function(n){return arguments.length?h.paddingInner(n).paddingOuter(n):h.paddingInner()},h.paddingInner=function(n){return arguments.length?(u="function"===typeof n?n:(0,a.Z)(+n),h):u},h.paddingOuter=function(n){return arguments.length?h.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):h.paddingTop()},h.paddingTop=function(n){return arguments.length?(l="function"===typeof n?n:(0,a.Z)(+n),h):l},h.paddingRight=function(n){return arguments.length?(d="function"===typeof n?n:(0,a.Z)(+n),h):d},h.paddingBottom=function(n){return arguments.length?(f="function"===typeof n?n:(0,a.Z)(+n),h):f},h.paddingLeft=function(n){return arguments.length?(p="function"===typeof n?n:(0,a.Z)(+n),h):p},h}},3346:function(n,e,t){"use strict";var r=t(44925),i=t(12460),o=t(21086);e.Z=function n(e){function t(n,t,a,c,s){if((u=n._squarify)&&u.ratio===e)for(var u,l,d,f,p,h=-1,m=u.length,x=n.value;++h<m;){for(d=(l=u[h]).children,f=l.value=0,p=d.length;f<p;++f)l.value+=d[f].value;l.dice?(0,r.Z)(l,t,a,c,a+=(s-a)*l.value/x):(0,i.Z)(l,t,a,t+=(c-t)*l.value/x,s),x-=l.value}else n._squarify=u=(0,o.DD)(e,n,t,a,c,s),u.ratio=e}return t.ratio=function(e){return n((e=+e)>1?e:1)},t}(o.Sk)},86228:function(n,e,t){"use strict";function r(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)}t.d(e,{Z:function(){return r}})},12460:function(n,e,t){"use strict";function r(n,e,t,r,i){for(var o,a=n.children,c=-1,s=a.length,u=n.value&&(i-t)/n.value;++c<s;)(o=a[c]).x0=e,o.x1=r,o.y0=t,o.y1=t+=o.value*u}t.d(e,{Z:function(){return r}})},44164:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(44925),i=t(12460);function o(n,e,t,o,a){(1&n.depth?i.Z:r.Z)(n,e,t,o,a)}},21086:function(n,e,t){"use strict";t.d(e,{Sk:function(){return o},DD:function(){return a}});var r=t(44925),i=t(12460),o=(1+Math.sqrt(5))/2;function a(n,e,t,o,a,c){for(var s,u,l,d,f,p,h,m,x,g,v,y=[],b=e.children,k=0,w=0,j=b.length,S=e.value;k<j;){l=a-t,d=c-o;do{f=b[w++].value}while(!f&&w<j);for(p=h=f,v=f*f*(g=Math.max(d/l,l/d)/(S*n)),x=Math.max(h/v,v/p);w<j;++w){if(f+=u=b[w].value,u<p&&(p=u),u>h&&(h=u),v=f*f*g,(m=Math.max(h/v,v/p))>x){f-=u;break}x=m}y.push(s={value:f,dice:l<d,children:b.slice(k,w)}),s.dice?(0,r.Z)(s,t,o,a,S?o+=d*f/S:c):(0,i.Z)(s,t,o,S?t+=l*f/S:a,c),S-=f,k=w}return y}e.ZP=function n(e){function t(n,t,r,i,o){a(e,n,t,r,i,o)}return t.ratio=function(e){return n((e=+e)>1?e:1)},t}(o)},59576:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(76422),i=(t(2784),t(48090)),o=t(18476),a=t.n(o),c=(t(73113),t(15961),t(2847),t(52322));function s(n){var e=n.lines;return(0,c.jsx)("span",{"aria-hidden":"true",className:"line-numbers-rows",children:e.map((function(n,t){return(0,c.jsx)("span",{},"line-number-".concat(e.length,"-").concat(t))}))})}function u(n){var e=n.children,t=e.match(/\n(?!$)/g),o=t?t.length+1:1,u=new Array(o+1).fill(1),l=[i.renderToString((0,c.jsx)(s,{lines:u})),a().highlight(e,a().languages.ts,"tsx")].join("");return(0,c.jsxs)("pre",{className:"jsx-3645412256 codeblock line-numbers",children:[(0,c.jsx)("code",{dangerouslySetInnerHTML:{__html:l},className:"jsx-3645412256"}),(0,c.jsx)(r.default,{id:"3645412256",children:[".codeblock.jsx-3645412256 code.jsx-3645412256{display:block;padding:0 0 0 1.5rem;border-radius:0;font-weight:300;font-size:14px;line-height:1.4em;background:white;color:#495057;}",".codeblock.line-numbers.jsx-3645412256{padding-left:0;}","@media (max-width:600px){.codeblock.jsx-3645412256 code.jsx-3645412256{font-size:10px;padding:0;pointer-events:none;}}"]})]})}try{Codeblock.displayName="Codeblock",Codeblock.__docgenInfo={description:"",displayName:"Codeblock",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Codeblock.tsx#Codeblock"]={docgenInfo:Codeblock.__docgenInfo,name:"Codeblock",path:"src/components/Codeblock.tsx#Codeblock"})}catch(l){}},73545:function(n,e,t){"use strict";t.d(e,{Z:function(){return v}});var r=t(76422),i=t(2784),o=t(72779),a=t.n(o),c=t(60594),s=t(52322),u=(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,s.jsx)("polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}),(0,s.jsx)("polyline",{points:"7.5 19.79 7.5 14.6 3 12"}),(0,s.jsx)("polyline",{points:"21 12 16.5 14.6 16.5 19.79"}),(0,s.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),(0,s.jsx)("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]});function l(n){var e=n.branch,t=void 0===e?"master":e,i=n.exampleDirectoryName;return i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("a",{href:"https://codesandbox.io/s/github/airbnb/visx/tree/".concat(t,"/packages/visx-demo/src/sandboxes/").concat(i),rel:"nofollow noopener noreferrer",target:"_blank",className:"jsx-3803197895 sandbox-link",children:[u,"\xa0Try it on CodeSandbox"]}),(0,s.jsx)(r.default,{id:"3803197895",children:[".sandbox-link.jsx-3803197895{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;color:#222;}"]})]}):null}var d=l;try{l.displayName="CodeSandboxLink",l.__docgenInfo={description:"",displayName:"CodeSandboxLink",props:{branch:{defaultValue:{value:"master"},description:"",name:"branch",required:!1,type:{name:"string"}},exampleDirectoryName:{defaultValue:null,description:"",name:"exampleDirectoryName",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CodeSandboxLink.tsx#CodeSandboxLink"]={docgenInfo:l.__docgenInfo,name:"CodeSandboxLink",path:"src/components/CodeSandboxLink.tsx#CodeSandboxLink"})}catch(y){}var f=t(89022),p=t(59576),h=t(39097);function m(n){var e=n.packageName,t=function(n){var e=n.split("@visx/")[1];return e?"docs/".concat(e):null}(e);return t?(0,s.jsx)(h.default,{href:t,children:(0,s.jsx)("a",{children:e})}):null}var x=m;try{m.displayName="VisxDocLink",m.__docgenInfo={description:"",displayName:"VisxDocLink",props:{packageName:{defaultValue:null,description:"",name:"packageName",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisxDocLink.tsx#VisxDocLink"]={docgenInfo:m.__docgenInfo,name:"VisxDocLink",path:"src/components/VisxDocLink.tsx#VisxDocLink"})}catch(y){}var g=t(48422),v=(0,c.Z)((function(n){var e=n.screenWidth,t=n.children,o=n.title,c=n.component,u=n.shadow,l=void 0!==u&&u,h=n.events,m=void 0!==h&&h,v=n.margin,y=n.description,b=n.codeSandboxDirectoryName,k=n.packageJson,w=Math.min(800,(e||0)-40),j=.6*w,S=(0,i.useMemo)((function(){return(0,g.Z)(k)}),[k]);return(0,s.jsxs)(f.Z,{title:o,children:[(0,s.jsx)("div",{className:"jsx-1780118371 container",children:(0,s.jsxs)("div",{style:{width:w},className:"jsx-1780118371",children:[(0,s.jsx)("h1",{className:"jsx-1780118371",children:o}),(0,s.jsx)("div",{className:"jsx-1780118371 "+(a()(!!l&&"shadow",o.split(" ").join("-"),"chart")||""),children:i.createElement(c,{width:w,height:j,margin:v,events:m})}),y&&i.createElement(y,{width:w,height:j}),b&&(0,s.jsx)("div",{className:"jsx-1780118371 sandbox-link",children:(0,s.jsx)(d,{exampleDirectoryName:b})}),S.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"jsx-1780118371",children:"Documentation"}),(0,s.jsx)("div",{className:"jsx-1780118371 doc-links",children:S.map((function(n){return(0,s.jsx)(x,{packageName:n},n)}))})]}),t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"jsx-1780118371",children:"Code"}),(0,s.jsx)("div",{className:"jsx-1780118371 code",children:(0,s.jsx)(p.Z,{children:t})})]})]})}),(0,s.jsx)(r.default,{id:"1780118371",children:[".container.jsx-1780118371{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;margin-bottom:40px;}",".container.jsx-1780118371 h1.jsx-1780118371{margin-top:15px;line-height:0.9em;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}",".container.jsx-1780118371 h2.jsx-1780118371{margin-top:15px;margin-bottom:5px;}",".chart.jsx-1780118371{border-radius:14px;}",".shadow.jsx-1780118371{border-radius:14px;box-shadow:0 1px 6px rgba(0,0,0,0.1);}",".sandbox-link.jsx-1780118371{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}",".doc-links.jsx-1780118371{font-size:13px;}",".doc-links.jsx-1780118371 a{margin-right:6px;}"]})]})}))},48422:function(n,e,t){"use strict";function r(n){var e,t=[];return Object.keys(null!==(e=null===n||void 0===n?void 0:n.dependencies)&&void 0!==e?e:{}).forEach((function(n){n.startsWith("@visx/")&&t.push(n)})),t}t.d(e,{Z:function(){return r}});try{r.displayName="extractVisxDepsFromPackageJson",r.__docgenInfo={description:"",displayName:"extractVisxDepsFromPackageJson",props:{dependencies:{defaultValue:null,description:"",name:"dependencies",required:!1,type:{name:"{ [packageName: string]: string; }"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/util/extractVisxDepsFromPackageJson.ts#extractVisxDepsFromPackageJson"]={docgenInfo:r.__docgenInfo,name:"extractVisxDepsFromPackageJson",path:"src/components/util/extractVisxDepsFromPackageJson.ts#extractVisxDepsFromPackageJson"})}catch(i){}},22181:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});t(2784);var r=t(13424),i=t(84472),o=t(73545),a=t(52322);var c=function(){return(0,a.jsx)(o.Z,{component:r.ZP,title:"Treemap",codeSandboxDirectoryName:"visx-treemap",packageJson:i,children:"import React, { useState } from 'react';\nimport { Group } from '@visx/group';\nimport {\n  Treemap,\n  hierarchy,\n  stratify,\n  treemapSquarify,\n  treemapBinary,\n  treemapDice,\n  treemapResquarify,\n  treemapSlice,\n  treemapSliceDice,\n} from '@visx/hierarchy';\nimport { TileMethod } from '@visx/hierarchy/lib/types';\nimport shakespeare, { Shakespeare } from '@visx/mock-data/lib/mocks/shakespeare';\n\nimport { scaleLinear } from '@visx/scale';\n\nexport const color1 = '#f3e9d2';\nconst color2 = '#4281a4';\nexport const background = '#114b5f';\n\nconst colorScale = scaleLinear<string>({\n  domain: [0, Math.max(...shakespeare.map((d) => d.size ?? 0))],\n  range: [color2, color1],\n});\n\nconst data = stratify<Shakespeare>()\n  .id((d) => d.id)\n  .parentId((d) => d.parent)(shakespeare)\n  .sum((d) => d.size ?? 0);\n\nconst tileMethods: { [tile: string]: TileMethod<typeof data> } = {\n  treemapSquarify,\n  treemapBinary,\n  treemapDice,\n  treemapResquarify,\n  treemapSlice,\n  treemapSliceDice,\n};\n\nconst defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 };\n\nexport type TreemapProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default function TreemapDemo({ width, height, margin = defaultMargin }: TreemapProps) {\n  const [tileMethod, setTileMethod] = useState<string>('treemapSquarify');\n  const xMax = width - margin.left - margin.right;\n  const yMax = height - margin.top - margin.bottom;\n  const root = hierarchy(data).sort((a, b) => (b.value || 0) - (a.value || 0));\n\n  return width < 10 ? null : (\n    <div>\n      <label>tile method</label>{' '}\n      <select\n        onClick={(e) => e.stopPropagation()}\n        onChange={(e) => setTileMethod(e.target.value)}\n        value={tileMethod}\n      >\n        {Object.keys(tileMethods).map((tile) => (\n          <option key={tile} value={tile}>\n            {tile}\n          </option>\n        ))}\n      </select>\n      <div>\n        <svg width={width} height={height}>\n          <rect width={width} height={height} rx={14} fill={background} />\n          <Treemap<typeof data>\n            top={margin.top}\n            root={root}\n            size={[xMax, yMax]}\n            tile={tileMethods[tileMethod]}\n            round\n          >\n            {(treemap) => (\n              <Group>\n                {treemap\n                  .descendants()\n                  .reverse()\n                  .map((node, i) => {\n                    const nodeWidth = node.x1 - node.x0;\n                    const nodeHeight = node.y1 - node.y0;\n                    return (\n                      <Group\n                        key={`node-${i}`}\n                        top={node.y0 + margin.top}\n                        left={node.x0 + margin.left}\n                      >\n                        {node.depth === 1 && (\n                          <rect\n                            width={nodeWidth}\n                            height={nodeHeight}\n                            stroke={background}\n                            strokeWidth={4}\n                            fill=\"transparent\"\n                          />\n                        )}\n                        {node.depth > 2 && (\n                          <rect\n                            width={nodeWidth}\n                            height={nodeHeight}\n                            stroke={background}\n                            fill={colorScale(node.value || 0)}\n                          />\n                        )}\n                      </Group>\n                    );\n                  })}\n              </Group>\n            )}\n          </Treemap>\n        </svg>\n      </div>\n    </div>\n  );\n}\n"})}},7324:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/treemap",function(){return t(22181)}])},89549:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(13980),i=t.n(r),o=t(2784),a=t(72779),c=t.n(a),s=["top","left","transform","className","children","innerRef"];function u(){return(u=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function l(n){var e=n.top,t=void 0===e?0:e,r=n.left,i=void 0===r?0:r,a=n.transform,l=n.className,d=n.children,f=n.innerRef,p=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,s);return o.createElement("g",u({ref:f,className:c()("visx-group",l),transform:a||"translate("+i+", "+t+")"},p),d)}l.propTypes={top:i().number,left:i().number,transform:i().string,className:i().string,children:i().node,innerRef:i().oneOfType([i().string,i().func,i().object])}},60594:function(n,e,t){"use strict";e.Z=function(n){return function(e){var t,o;function s(){for(var t,i,o,a,c,s,u=arguments.length,l=new Array(u),d=0;d<u;d++)l[d]=arguments[d];return(s=e.call.apply(e,[this].concat(l))||this).displayName="withScreenSize("+(null!=(t=null!=(i=n.displayName)?i:n.name)?t:"Component")+")",s.state={screenWidth:void 0,screenHeight:void 0},s.resize=(0,r.default)((function(){s.setState((function(){return{screenWidth:window.innerWidth,screenHeight:window.innerHeight}}))}),null!=(o=null!=(a=s.props.debounceTime)?a:s.props.windowResizeDebounceTime)?o:300,{leading:null==(c=s.props.enableDebounceLeadingCall)||c}),s}o=e,(t=s).prototype=Object.create(o.prototype),t.prototype.constructor=t,c(t,o);var u=s.prototype;return u.componentDidMount=function(){window.addEventListener("resize",this.resize,!1),this.resize()},u.componentWillUnmount=function(){window.removeEventListener("resize",this.resize,!1),this.resize.cancel()},u.render=function(){var e=this.state,t=e.screenWidth,r=e.screenHeight;return null==t||null==r?null:i.default.createElement(n,a({screenWidth:t,screenHeight:r},this.props))},s}(i.default.Component)};var r=o(t(99788)),i=o(t(2784));function o(n){return n&&n.__esModule?n:{default:n}}function a(){return(a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function c(n,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n})(n,e)}},42613:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(39554),i=(0,t(63458).Z)("domain","range","reverse","clamp","interpolate","nice","round","zero");function o(n){return i((0,r.Z)(),n)}},84698:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t.d(e,{Z:function(){return r}})},64993:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(84698);var i=t(7245);function o(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7245:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(84698);function i(n,e){if(n){if("string"===typeof n)return(0,r.Z)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(n,e):void 0}}},39554:function(n,e,t){"use strict";t.d(e,{Z:function(){return d},Q:function(){return l}});var r=t(36346),i=t(55101),o=t(88478),a=t(11912),c=t(35206);var s=t(22094);function u(n,e,t,i){var o,u=(0,r.ly)(n,e,t);switch((i=(0,a.Z)(null==i?",f":i)).type){case"s":var l=Math.max(Math.abs(n),Math.abs(e));return null!=i.precision||isNaN(o=function(n,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,c.Z)(e)/3)))-(0,c.Z)(Math.abs(n)))}(u,l))||(i.precision=o),(0,s.jH)(i,l);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=function(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,(0,c.Z)(e)-(0,c.Z)(n))+1}(u,Math.max(Math.abs(n),Math.abs(e))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=function(n){return Math.max(0,-(0,c.Z)(Math.abs(n)))}(u))||(i.precision=o-2*("%"===i.type))}return(0,s.WU)(i)}function l(n){var e=n.domain;return n.ticks=function(n){var t=e();return(0,r.ZP)(t[0],t[t.length-1],null==n?10:n)},n.tickFormat=function(n,t){var r=e();return u(r[0],r[r.length-1],null==n?10:n,t)},n.nice=function(t){null==t&&(t=10);var i,o,a=e(),c=0,s=a.length-1,u=a[c],l=a[s],d=10;for(l<u&&(o=u,u=l,l=o,o=c,c=s,s=o);d-- >0;){if((o=(0,r.G9)(u,l,t))===i)return a[c]=u,a[s]=l,e(a);if(o>0)u=Math.floor(u/o)*o,l=Math.ceil(l/o)*o;else{if(!(o<0))break;u=Math.ceil(u*o)/o,l=Math.floor(l*o)/o}i=o}return n},n}function d(){var n=(0,i.ZP)();return n.copy=function(){return(0,i.JG)(n,d())},o.o.apply(n,arguments),l(n)}}},function(n){n.O(0,[9774,1603,5592,5450,9097,8231,8524,2888,179],(function(){return e=7324,n(n.s=e);var e}));var e=n.O();_N_E=e}]);