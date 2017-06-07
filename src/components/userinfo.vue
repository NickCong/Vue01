<template>
   <div id="user-info">
       <label>name:{{username}}</label>
   </div>
</template>
export default{
  props: {'username': string}
}
