<template>
  <div>
    <router-link v-for="m in list" :key="m.id" :to="{name:'detail',params:{id:m.id}}">
      <div class="item">
        <div class="cover">
          <img :src="m.cover" />
        </div>
        <div class="content">
          <h3>{{m.title}}</h3>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          type: -1,
          subtype: 0,
          jumptype: 10014,
          id: "7290437289",
          subid: "",
          title: "奥斯卡影帝：莱昂纳多电影配乐",
          subtitle: "",
          cover:
            "http://qpic.y.qq.com/music_cover/RMOUeia0IqkRib6BgqUdvV1iaiahC99uVicXOia6OmHl9ZDwXU5IPpRyUmRw/300?n=1",
          cnt: 37200,
          time: 0,
          v_user: [
            {
              uin: "2841356990",
              encrypt_uin: "",
              nick: "念_SHUI也不忘",
              avatar:
                "http://thirdqq.qlogo.cn/g?b=sdk&k=nIOIbeaUkeZeFM6Lpeiae0Q&s=140&t=1556807154",
              icon: "",
              viptype: 0,
              follow: 0
            }
          ],
          tjreport: "1_8_666666_3_10014_7290437289_0_0_0_1000_1014",
          trace: "",
          abt: "",
          miscellany: {
            rcmdtemplate: "编辑推荐"
          },
          pingpong: ""
        },
        {
          type: -1,
          subtype: 0,
          jumptype: 10014,
          id: "7227324849",
          subid: "",
          title: "江湖情能有几何，几人听雨中萧瑟",
          subtitle: "",
          cover:
            "http://qpic.y.qq.com/music_cover/6pKF7XnkTESE8L7nkkbjXgQf3rhKjdUpZ3Thkd7m06NPySiazuXfTicg/300?n=1",
          cnt: 56740,
          time: 0,
          v_user: [
            {
              uin: "1043698531",
              encrypt_uin: "",
              nick: "刘珂矣",
              avatar:
                "http://imgcache.qq.com/music/photo_new/T001R300x300M0000020uUft0MjWjW.jpg",
              icon: "",
              viptype: 3,
              follow: 0
            }
          ],
          tjreport: "1_8_666666_4_10014_7227324849_0_0_0_1000_1014",
          trace: "",
          abt: "",
          miscellany: {
            rcmdtemplate: "编辑推荐"
          },
          pingpong: ""
        },
        {
          type: -1,
          subtype: 0,
          jumptype: 10014,
          id: "7287409134",
          subid: "",
          title: "习习古风：浅唱低吟，余韵绕梁",
          subtitle: "",
          cover:
            "http://qpic.y.qq.com/music_cover/Fe6emiag6IuVbMib3oN6yctQjSsIRV8gxP8MW6Netu9YDicmFm0VrPT4g/300?n=1",
          cnt: 59313,
          time: 0,
          v_user: [
            {
              uin: "2407142727",
              encrypt_uin: "",
              nick: "就是一个听歌der",
              avatar:
                "http://thirdqq.qlogo.cn/g?b=sdk&k=l2etFtvx131SCmnKnuvl1Q&s=140&t=1557217645",
              icon: "",
              viptype: 2,
              follow: 0
            }
          ],
          tjreport: "1_8_666666_5_10014_7287409134_0_0_0_1000_1014",
          trace: "",
          abt: "",
          miscellany: {
            rcmdtemplate: "编辑推荐"
          },
          pingpong: ""
        },
        {
          type: -1,
          subtype: 0,
          jumptype: 10014,
          id: "7051170850",
          subid: "",
          title: "巧克力式人生，苦中带甜",
          subtitle: "",
          cover:
            "http://qpic.y.qq.com/music_cover/AhbCa0vazSRDjEJhYwthghU2xnKRv5rPKwv6olBsC2YefbSWSBsREw/300?n=1",
          cnt: 28233,
          time: 0,
          v_user: [
            {
              uin: "1747907171",
              encrypt_uin: "",
              nick: "鹿仁",
              avatar:
                "http://y.gtimg.cn/music/common/upload/t_celebrity_certification/1163233.jpg",
              icon: "",
              viptype: 2,
              follow: 0
            }
          ],
          tjreport: "1_8_666666_9_10014_7051170850_0_0_0_1000_1014",
          trace: "",
          abt: "",
          miscellany: {
            rcmdtemplate: "编辑推荐"
          },
          pingpong: ""
        },
        {
          type: -1,
          subtype: 0,
          jumptype: 10014,
          id: "7130261500",
          subid: "",
          title: "少女心萌动 ! 无前奏日系甜嗓",
          subtitle: "",
          cover:
            "http://qpic.y.qq.com/music_cover/ib5u1yLjrIls7cqVwYRpW6rPbHkKcaiaanrgwwLGB57Gkdiccib0kewPQg/300?n=1",
          cnt: 26327,
          time: 0,
          v_user: [
            {
              uin: "2909946281",
              encrypt_uin: "",
              nick: "Lin衾浅",
              avatar:
                "http://thirdqq.qlogo.cn/g?b=sdk&k=jOXYseonJh42kQZhF4GplQ&s=140&t=1571552774",
              icon: "",
              viptype: 2,
              follow: 0
            }
          ],
          tjreport: "1_8_666666_10_10014_7130261500_0_0_0_1000_1014",
          trace: "",
          abt: "",
          miscellany: {
            rcmdtemplate: "编辑推荐"
          },
          pingpong: ""
        },
        {
          type: -1,
          subtype: 0,
          jumptype: 10014,
          id: "7249717407",
          subid: "",
          title: "遇见苏轼 | 何妨吟啸且徐行",
          subtitle: "",
          cover:
            "http://qpic.y.qq.com/music_cover/6pKF7XnkTESE8L7nkkbjXtoiaRoafam6CqWpqs5aibxpEoWuGowMs6xQ/300?n=1",
          cnt: 129856,
          time: 0,
          v_user: [
            {
              uin: "1043698531",
              encrypt_uin: "",
              nick: "刘珂矣",
              avatar:
                "http://imgcache.qq.com/music/photo_new/T001R300x300M0000020uUft0MjWjW.jpg",
              icon: "",
              viptype: 3,
              follow: 0
            }
          ],
          tjreport: "1_8_666666_11_10014_7249717407_0_0_0_1000_1014",
          trace: "",
          abt: "",
          miscellany: {
            rcmdtemplate: "编辑推荐"
          },
          pingpong: ""
        }
      ]
    };
  }
};
</script>

<style>
.item {
  width: 100%;
  height: 100px;
  display: flex;
}
.item .cover {
  width: 100px;
}

.item .cover img {
  width: 100px;
}
.item .content {
  flex: 1;
}
</style>