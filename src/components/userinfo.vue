<template>
   <div id="user-info">
       <label>name:{{username}}</label>
   </div>
</template>

<script>
export default{
  props: { username: String }
}
</script>
