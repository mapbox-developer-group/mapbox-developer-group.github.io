var config = {
    style: 'mapbox://styles/mapboxmax/ck4qzh38n02ok1cp7jjzb6n4s',
    accessToken: 'pk.eyJ1IjoibWFwYm94bWF4IiwiYSI6ImNqbnY4MHM3azA2ZmkzdnBnMThvNzRoZ28ifQ.IffqPZGkhcdPjnZ2dmSO6w',
    showMarkers: true,
    theme: 'light',
    alignment: 'center',
    title: '2019 年 Mapbox 开发者年终报告',
    subtitle: '2020，我们将会与你同行',
    byline: 'By Mapbox 中国',
    footer: 'Source: Mapbox 开发者交流群的 614 位 Mapbox 真爱粉',
    chapters: [
        {
            id: 'Q-id',
            title: '2019 再见！2020 你好！',
            image: 'max.jpeg',
            description: '大家好，我是 Mapbox 前台小姐姐 Max！还记得在加入 Mapbox 技术交流群的时候，你帮我填写过的问卷吗？憋了一年，终于找到个机会，为你揭晓结果了～非常感谢认真填写问卷的 600+ Mapbox 开发者！ ',
            location: {
                center: [105.80053, 33.58230],
                zoom: 3.83,
                pitch: 6.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q1-id',
            title: 'Mapbox 开发者们都是来自这些行业的',
            image: 'q1.png',
            description: 'Mapbox 中国的开发者们有将近一半来自于 GIS 行业，剩下的分布在互联网、设计、规划等行业，汽车、游戏等对地图美观度要求高的行业也经常出没机智的 Mapbox 的开发者哦。',
            location: {
                center: [121.49568, 31.24217],
                zoom: 17.84,
                pitch: 60.00,
                bearing: 28.00
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
                center: [116.38831, 39.91636],
                zoom: 17.60,
                pitch: 60.00,
                bearing: -41.62
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
                center: [114.17143, 22.27707],
                zoom: 17.06,
                pitch: 51.50,
                bearing: 0.00
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
                center: [113.26848, 23.14801],
                zoom: 17.82,
                pitch: 55.00,
                bearing: 41.82
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
                center: [-122.40450, 37.79481],
                zoom: 16.66,
                pitch: 51.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q6-id',
            title: 'Mapbox 中文文档真的非常重要吗？',
            image: 'q6.png',
            description: '群众是犀利的！看来本地化的工作，依旧是 2020 年的重点～记得关注微信公众号 Maopbox（Mapbox-China），加入翻译志愿者的大军！记得到 Mapbox.cn 实时关注我们的进度哦～',
            location: {
                center: [114.27730, 30.57030],
                zoom: 11.52,
                pitch: 60.00,
                bearing: 11.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q7-id',
            title: 'Mapbox 在大多数使用者心中的“aha 时刻”是？',
            image: 'aha.png',
            description: '说到 aha 时刻，是大部分开发者在初遇 Mapbox 时内心下意识的反应。爱心中来自 600 多开发者的超过 300 个关键词，值得你在 2020 年一个一个地发现背后别具一格的故事。不过，“惊艳的开发者”是 Mapbox 最想表达的，感谢全球 180 万开发者，有了你们，才得以塑造 Mapbox 无比精彩的 2019；Mapbox 希望和你们一起，在 2020 年一起携手同行！',
            location: {
                center: [104.05596, 30.67392],
                zoom: 16.71,
                pitch: 52.00,
                bearing: -70.66
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q8-id',
            title: 'Mapbox 开发者们吐槽最多的点有什么？',
            image: 'issues.png',
            description: '10 岁的 Mapbox 还有太多的空间需要成长！衷心感谢提出建议的每一位开发者。其实开发者反映的一些问题，比如网络稳定性等，官方有解决方案哦，记得经常找 Mapbox 前台小姐姐 Max 聊一聊你的问题和困惑吧，指不定有意想不到的解答呢！',
            location: {
                center: [-77.03654, 38.89563],
                zoom: 14.84,
                pitch: 51.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q9-id',
            title: 'Mapbox 开发者们最想要的功能！',
            image: '2020.png',
            description: '2020 已来，大家的反馈 Mapbox 已经收到了！希望我们一起期待着这些新功能的出现，陪伴大家完成更多更美好的 #buildwithMapbox 项目。',
            location: {
                center: [104.14714, 35.43976],
                zoom: 4.32,
                pitch: 51.00,
                bearing: -51.39
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'F-id',
            title: '2020 年，加入 Mapbox 开发者社群，一起突破地图开发的瓶颈',
            image: 'qr.jpeg',
            description: '每个开发者，都像点亮 Mapbox 前方之路的一颗星星，我们需要你的加入！请关注微信公众号 Mapbox（Mapbox-China），回复【技术】开始与我们一起翱翔于地图开发的宇宙吧！在这里，Mapbox 将会聆听你的每一个需求，你可以在这里为 Mapbox 中国文档教程的汉化作出贡献、告诉上千开发者你的开发者故事、组织属于自己的技术直播、结交你的技术合伙人、还有机会参加 Mapbox 年度 Locate 大会！最重要的是，你 2020 年的梦想，可能从这里开始。',
            location: {
                center: [102.81520, 35.03368],
                zoom: 1,
                pitch: 51.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
