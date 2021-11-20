<template>
  <h2> Here are some posts by other users </h2> 
    <!--Loops through current array of objects-->
  <div :key ="sample_post.id" v-for= " sample_post in sample_post" >
      <div id = "border">
        <h3 id = "name"> {{sample_post.name}} </h3>
        <h3 id = "text"> {{sample_post.text}} </h3>
        <h3 id = "hash_tag"> {{sample_post.hash_tag}} </h3>
      
      </div>
  </div>   

</template>

<script>
export default {
    data() {
        return {
            sample_post: [
             {
                id: 1,
                name: 'Clark Kent',
                text: 'Hi my name is Clark Kent. I am not superman',
                hash_tag: '#DC',
            },
            {
                id: 2,
                name: 'Bruce Wayne',
                text: 'Hi my name is Bruce Wayne. I am not batman.',
                hash_tag: '#DC #Batmobile',
            },
            {
                id: 3,
                name: 'Peter Parker',
                text: 'Hi spiderman over here!',
                hash_tag: '#Marvel #Spiderman #GreatPowerComesGreatResponsibility',
            },
            ]
        }

    },
    methods: {},
}
    //Fetch request for json api 
    //Renders by entering npm run backend in terminal
    //As of right now, there is an issue with the data retrieval
    //However, when running the following command, the json object works and shows

    //     async fetchPosts() {
    //         const res = await fetch('http://localhost:5000/sample_post')
    //         const data = await res.json()
 
    //         return data
    //  },
    // }, 

    // async created() {
    //     this.sample_post = await this.fetchPosts()
    // },

</script>


<style scoped>
    #name {
        text-align: left;
        font-size: 25px;


    }

    #text { 
        text-align: center;
        font-size: 35px;


    }
    #hash_tag {
        text-align: left;
        font-size: 25px;
        
    }
    #border {
        border: 0.5rem outset pink;
        border-radius: 12px;
        font: bold 1rem sans-serif;
        margin: 2rem;
        padding: 1rem;
        outline-offset: 0.5rem;
    }
    
</style>