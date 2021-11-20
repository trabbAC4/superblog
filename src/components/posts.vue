<template>
    <!--Iterating through arrays and emitting to document-->
    <div :key = "post.id" v-for = "post in posts">
        <Post @delete-post="$emit('delete-post', post.id)" :post = "post" />
    </div>
</template>

<script>

import Post from './post.vue'

    export default {
        name: 'Posts',
        props: { //Takes in data as array and returns
            posts: Array,
        },
        components: {
            Post,
        },
        emits: ['delete-post'],
    }

</script>

