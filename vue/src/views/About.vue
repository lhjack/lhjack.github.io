<template>
  <div class="about">

    <Head></Head>
    <h1>This is an about page</h1>
    <Demo></Demo>
    <Foot></Foot>
    <h2>{{word}}--{{keys}}</h2>
  </div>
</template>

<script>
  import Demo from "@/components/demo.vue"
  const { word } = require("@/utils/demo.js")
  import obj from "@/utils/es6"
  export default {
    data() {
      return {
        word,
        keys: obj.keys
      }
    },
    components: {
      Demo,
    }
  }
</script>