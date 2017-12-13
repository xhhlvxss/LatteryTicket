<template>
	<div id="app">
		
	</div>
</template>

<script>
	export default {
    name: 'app',
    components: {
      
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

	#app{
    background: url(./images/01.jpg);
  }
</style>

