const $siteList=$(".siteList"),$lastLi=$siteList.find("li.last"),xSite=localStorage.getItem("xSite"),xSiteObject=JSON.parse(xSite),hashMap=xSiteObject||[{logo:"Z",url:"https://www.zhihu.com"},{logo:"B",url:"https://www.bilibili.com"}],simplifyUrl=e=>e.replace("https://","").replace("www.","").replace("http://","").replace(/\/.*/,"");let render=()=>{$siteList.find("li:not(.last)").remove(),hashMap.forEach(((e,i)=>{const t=$(`<li>\n                    <div class="site">\n                        <div class='logo'>${e.logo}</div>\n                        <div class='link'>${simplifyUrl(e.url)}</div>\n                         <div class=close><span class="iconfont">&#xe6c9;</span></div>\n                    </div>             \n            </li>`).insertBefore($lastLi);t.on("click",(()=>{window.open(e.url)})),t.on("click",".close",(e=>{e.stopPropagation(),hashMap.splice(i,1),render()}))}))};render(),$(".addButton").on("click",(()=>{let e=window.prompt("请问你要添加什么网址");0!==e.indexOf("http")&&(e="https://"+e),hashMap.push({logo:simplifyUrl(e)[0].toUpperCase(),url:simplifyUrl(e)}),render()})),window.onbeforeunload=()=>{const e=JSON.stringify(hashMap);localStorage.setItem("xSite",e)},$(document).on("keypress",(e=>{const i=e.key;for(let e=0;e<hashMap.length;e++)hashMap[e].logo.toLowerCase()===i&&window.open(hashMap[e].url)}));
//# sourceMappingURL=index.e3ffc69d.js.map