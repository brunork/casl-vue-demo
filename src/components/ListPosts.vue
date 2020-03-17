<template>
  <div class="list-posts">
    <div class="ui four column doubling stackable grid container">
      <div class="column post-wrapper" v-for="post in posts" :key="post.id">
        <h4>{{ post.title }}</h4>
        <span class="author">@{{ post.author}}</span>
        <p>{{ post.description }}</p>
        <button class="ui basic button">
          <i class="icon edit"></i>
          Edit Post
        </button>

        <div class="ui labeled button" tabindex="0">
          <div class="ui button">
            <i class="heart icon"></i> Like
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListPosts",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(json => {
        console.log("json: ", json);
        this.posts = json.posts;
      });
  }
};
</script>

<style scoped>
h1 {
  color: orangered;
}
.container {
  display: flex;
  justify-content: center;
}
.column {
  margin: 10px 5px;
}
.post-wrapper {
  background: #fafafa;
  border-radius: 10px;
}
.post-wrapper:hover {
  background: #fff;
  cursor: pointer;
}
.author {
  font-weight: bold;
  color: #42b983;
}
</style>
