var config = {
    style: 'mapbox://styles/mapboxmax/ck4qzh38n02ok1cp7jjzb6n4s',
    accessToken: 'pk.eyJ1IjoibWFwYm94bWF4IiwiYSI6ImNqbnY4MHM3azA2ZmkzdnBnMThvNzRoZ28ifQ.IffqPZGkhcdPjnZ2dmSO6w',
    showMarkers: true,
    theme: 'dark',
    alignment: 'center',
    title: '2019 年 Mapbox 开发者年终报告',
    subtitle: '2020，我们将会与你同行',
    byline: 'By Mapbox 中国',
    footer: 'Source: Mapbox 开发者交流群的 614 位 Mapbox 真爱粉',
    chapters: [
        {
            id: 'Q1-id',
            title: 'Mapbox 开发者们都是来自这些行业的',
            image: 'q1.png',
            description: 'Mapbox 中国的开发者们有将近一半来自于 GIS 行业，剩下的分布在互联网、设计、规划等行业，汽车、游戏等对地图美观度要求高的行业也经常出没机智的 Mapbox 的开发者哦。',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Q2-id',
            title: 'Mapbox 开发者们已经从事开发工作这么多年了！',
            image: 'q2.png',
            description: 'Mapbox 即将在 2020 年迎来 10 岁的日子！很开心在过去的一年，有 34.5% 的新伙伴开始了解 Mapbox，也感谢将近 50% 的开发者在过去的 5 年里始终允许 Mapbox 陪伴在你的身边，更震惊的是有将近 20% 的开发者已经是 5 年以上甚至 10 年以上的开发老鸟！Mapbox 只想说，余生还请多多指教！',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q3-id',
            title: 'Mapbox 开发者们最喜爱的开发平台竟然是？',
            image: 'q3.png',
            description: '大部分都是沉迷于网页开发的小伙伴吗？不妨可以试试移动端 SDK，功能更强大哦！',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q4-id',
            title: '开发者和 Mapbox 的初次相遇是什么时候？',
            image: 'q4.png',
            description: '想听听和 Mapbox 初次相遇的故事么？可以找 Mapbox 前台小姐姐！',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q5-id',
            title: 'Mapbox 被开发者使用的频率',
            image: 'q5.png',
            description: '有 30% 的开发者每天都用 Mapbox，真的倍感荣幸啊！',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q6-id',
            title: 'Mapbox 中文文档真的非常重要吗？',
            image: 'q6.png',
            description: '群众是犀利的！看来本地化的工作，依旧是 2020 年的重点～记得关注微信公众号 Maopbox（Mapbox-China），加入翻译志愿者的大军！',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
