module.exports ={
    base:'/learn-typescript/',
    title:'Typescript4 文档',
    description:'Typescript 最新官方文档翻译',
    themeConfig:{
        subSidebar:'auto',
        nav:[
            {text:'首页',link:'/'},
            {
                text:'月牙',
                items:[
                    {text:'Github',link:'https://github.com/myg'},
                    {text:'掘金',link:''}
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }
          ]
    },
    theme:'reco',
    locales:{
        '/':{
            'lang':'zh-CN'
        }
    }
}