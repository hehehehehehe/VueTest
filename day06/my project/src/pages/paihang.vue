<template>
  <div>
    <router-link v-for="m in list" :key="m.id" :to="{name:'detail',params:{id:m.id}}">
      <div class="item">
        <div class="content">
          <h4>{{m.title}}</h4>
          <ul>
            <li>{{m.song1}}{{m.writer1}}</li>
            <li>{{m.song2}}{{m.writer2}}</li>
            <li>{{m.song3}}{{m.writer3}}</li>
          </ul>
        </div>

        <div class="cover">
          <img :src="m.cover" />
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
          id: 0,
          cover:
            "https://y.gtimg.cn/music/photo_new/T003R300x300M000003rEFiK4HAlJi.jpg?max_age=2592000",
          title: "流行指数榜",
          song1: "那男孩还好吗-",
          writer1: "Uu",
          song2: "你的答案-",
          writer2: "阿冗",
          song3: "贰叁-",
          writer3: "吴亦凡"
        },
        {
          id: 1,
          cover:
            "https://y.gtimg.cn/music/photo_new/T003R300x300M000003Gn2Vk0Vp85d.jpg?max_age=2592000",
          title: "流行指数榜",
          song1: "那男孩还好吗-",
          writer1: "Uu",
          song2: "你的答案-",
          writer2: "阿冗",
          song3: "贰叁-",
          writer3: "吴亦凡"
        },
        {
          id: 2,
          cover:
            "https://y.gtimg.cn/music/photo_new/T003R300x300M000004gMhYA0ccUyi.jpg?max_age=2592000",
          title: "流行指数榜",
          song1: "那男孩还好吗-",
          writer1: "Uu",
          song2: "你的答案-",
          writer2: "阿冗",
          song3: "贰叁-",
          writer3: "吴亦凡"
        },

        {
          id: 3,
          cover:
            "https://y.gtimg.cn/music/photo_new/T003R300x300M000002ttR0a02hiy3.jpg?max_age=2592000",
          title: "流行指数榜",
          song1: "那男孩还好吗-",
          writer1: "Uu",
          song2: "你的答案-",
          writer2: "阿冗",
          song3: "贰叁-",
          writer3: "吴亦凡"
        },
        {
          id: 4,
          cover:
            "https://y.gtimg.cn/music/photo_new/T003R300x300M000000akZJ51fJKpm.jpg?max_age=2592000",
          title: "流行指数榜",
          song1: "那男孩还好吗-",
          writer1: "Uu",
          song2: "你的答案-",
          writer2: "阿冗",
          song3: "贰叁-",
          writer3: "吴亦凡"
        },
        {
          id: 5,
          cover:
            "https://y.gtimg.cn/music/photo_new/T003R300x300M000003BR60s16o03q.jpg?max_age=2592000",
          title: "流行指数榜",
          song1: "那男孩还好吗-",
          writer1: "Uu",
          song2: "你的答案-",
          writer2: "阿冗",
          song3: "贰叁-",
          writer3: "吴亦凡"
        },
        {
          id: 6,
          cover:
            "https://y.gtimg.cn/music/photo_new/T003R300x300M000003iw8K33hy7ez.jpg?max_age=2592000",
          title: "流行指数榜",
          song1: "那男孩还好吗-",
          writer1: "Uu",
          song2: "你的答案-",
          writer2: "阿冗",
          song3: "贰叁-",
          writer3: "吴亦凡"
        },
        {
          id: 7,
          cover:
            "https://y.gtimg.cn/music/photo_new/T003R300x300M000002DLixY4VfKaq.jpg?max_age=2592000",
          title: "流行指数榜",
          song1: "那男孩还好吗-",
          writer1: "Uu",
          song2: "你的答案-",
          writer2: "阿冗",
          song3: "贰叁-",
          writer3: "吴亦凡"
        }
      ]
    };
  }
};
</script>

<style>
.item {
  width: 100%;
  height: 107px;
  display: flex;
  margin-bottom: 5px;
}
.item .cover {
  width: 107px;
}

.item .cover img {
  width: 107px;
  border-radius:0 10px 10px 0;
}
.item .content {
  flex: 1;
}
ul {
  list-style: none;
  
}
.item .content h4 {
  margin-bottom: 0;
  margin-top: 8px;

}
.item .content{
    padding-left: 5px;
}
</style>