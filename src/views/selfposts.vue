<template>
  <div> 
    <!--renders addpost and delete post components -->
    <AddPost @add-post = "addPost" />
    <Posts @delete-post= "deletePost" :posts= "posts" />
  </div>


</template>

<script>
  import Posts from '../components/posts.vue'
  import AddPost from '../components/AddPost.vue'


  export default {
    name: 'selfposts',

    components: {
      Posts,
      AddPost,
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    addPost(post) {
      this.posts = [...this.posts, post] //Adds new post to current array
    },

    deletePost(id) {
      if (confirm('Are you sure?')) { //Asks for confirmation then deletes from array
        this.posts = this.posts.filter((post)=>post.id !== id)
      }
    },
  },
  created() {
    this.posts = [

    ]
  }
}

</script>



