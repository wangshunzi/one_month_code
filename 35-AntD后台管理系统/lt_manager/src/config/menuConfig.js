const menuItems =  [
    {
        id: 1,
        title: "概览",
        route: "/",
        icon: "icon-gailan",
    },
    {
        id: 2,
        title: "焦点课程",
        route: "/ad_course",
        icon: "icon-icon_jiaodian",
    },
    {
        id: 3,
        title: "分类管理",
        route: "/course_category",
        icon: "icon-leimupinleifenleileibie2",
    },
    {
        id: 4,
        title: "讲师管理",
        route: "/teacher",
        icon: "icon-jiangshi",
    },{
        id: 5,
        title: "课程管理",
        route: "/course",
        icon: "icon-kecheng",
    },
    {
        id: 6,
        title: "文章管理",
        route: "/article",
        icon: "icon-wenzhang",
    },
    {
        id: 7,
        title: "数据统计",
        icon: "icon-xiazai7",
        route: "/chart",
        children: [
            {
                id: 8,
                title: "课程统计",
                route: "/chart/bar",
                icon: "icon-histogram"
            },
            {
                id: 9,
                title: "用户统计",
                route: "/chart/line",
                icon: "icon-61"
            },
            {
                id: 10,
                title: "评论统计",
                route: "/chart/pie",
                icon: "icon-bingzhuangtu"
            }
        ]
    },{
        id: 11,
        title: "网站配置",
        route: "/web_contact",
        icon: "icon-peizhi",
    }
]



export default menuItems
