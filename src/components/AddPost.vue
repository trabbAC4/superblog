<template>
     <h1> View your recent posts and make a new post </h1>
    <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label class = "input"> Name</label>
      <input type="text" v-model="name" name="name" placeholder="Enter Name" />
    </div>
    <div class="form-control">
      <label class = "input"> Post</label>
      <input type="text" v-model="text" name="post" placeholder="Add Post" />
    </div>
    <div class="form-control">
      <label class = "input"> Hashtag</label>
      <input type="text" v-model="hash_tag" name="hash_tag" placeholder="Add hashtag" />
    </div>
    <div class ="wrap">
    <input type="submit" value="Save Post" class = "button"/>
    </div>
    </form>
</template>

<script>

export default {
    name: 'AddPost',
    data() {
        return {
            name: '',
            text: '',
            hash_tag: '',
        } 
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if (!this.text) { //Checks for input 
                alert("Please enter a post")
                return
            }
            if (!this.name) {
                alert("Please enter a name")
                return
            }
            if (!this.hash_tag)  {
                alert("Please enter a hashtag")
                return 
            }

            const newPost = {
                id: Math.floor(Math.random() * 100000), //Randomized id
                name: this.name, //Instances of object values
                text: this.text,
                hash_tag: this.hash_tag
            }

            this.$emit('add-post', newPost) //Outputs on form
            this.name = ''
            this.text = ''
            this.hash_tag = ''
            



        }
    }
}

</script>

<style scoped>
 .add-form {
    margin-bottom: 40px;
    }
    .form-control {
        margin: 20px 0;
    }
    .form-control label {
        display: block;
    }
    .form-control input {
        width: 100%;
        height: 40px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;
    }
    .form-control-check {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .form-control-check label {
        flex: 1;
    }
    .form-control-check input {
        flex: 2;
        height: 20px;
    }

    .input {
        font-size: 25px;
    }
    .wrap {  
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
}

.button {
        min-width: 300px;
        min-height: 60px;
        font-family: 'Nunito', sans-serif;
        font-size: 22px;
        text-transform: uppercase;
        letter-spacing: 1.3px;
        font-weight: 700;
        color: #313133;
        background: #4FD1C5;
        background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
        border: none;
        border-radius: 1000px;
        box-shadow: 12px 12px 24px rgba(79,209,197,.64);
        transition: all 0.3s ease-in-out 0s;
        cursor: pointer;
        outline: none;
        position: relative;
        padding: 10px;
  }

button::before {
        content: '';
        border-radius: 1000px;
        min-width: calc(300px + 12px);
        min-height: calc(60px + 12px);
        border: 6px solid #00FFCB;
        box-shadow: 0 0 60px rgba(0,255,203,.64);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
        color: #313133;
        transform: translateY(-6px);
}

button:hover::before, button:focus::before {
        opacity: 1;
}

button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}


</style>