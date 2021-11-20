<template> 
    <div class = "post">
        <button id = "button" @click = "onDelete(post.id)" > X </button>
        <h3 id ="name"> {{post.name}} </h3>
        <p> </p>
        <h2 id = "text"> {{post.text}} </h2>
        <h3 id = "hash"> <i> {{post.hash_tag}} </i> </h3>
    </div>
</template>

<script>
    export default {
        name: 'post',
        props: {
            post: Object,
        },
        methods: {
            onDelete(id) {
                this.$emit('delete-post', id)
            },

        },
    }
</script>


<style scoped> 

#button {
    background: #E9281C;
    position: absolute;
    right: 110px;
}
.fas {
    color: blue;
}

.post {
    background-image: linear-gradient(to right, rgba(0, 247, 255, 0), rgb(0, 174, 255));
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.post h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;

}


</style>
    


