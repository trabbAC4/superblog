<template>

  <div id="nav">
    <!-- Different routes created and redirected in navbar -->
    <router-link to="/">Home</router-link> |
    <router-link :to = "{ name: 'others'}" >View other posts</router-link> | 
    <router-link :to= "{name: 'login'}">Login </router-link> |
    <router-link :to="{name: 'yours'}">View your posts </router-link>
  </div>

  <router-view/>
</template>

<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;

}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


