<template>

  <div id="app">
    <Navbar />
    <Collections />
    <TextContent />
    <router-view/>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar"
  import Collections from "@/components/Collections"
  import TextContent from "@/components/TextContent";
  export default {
    name: 'App',
    components: {
      Navbar,
      Collections,
      TextContent
    },
    comments: {
      Navbar,
      Collections
    }
  }
</script>

<style>

</style>
