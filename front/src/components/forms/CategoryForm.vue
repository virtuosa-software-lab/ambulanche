<template>
  <div>
    <h1 v-if="adding">Nova categoria</h1>
    <h1 v-else>Componente de categoria</h1>
  </div>
</template>

<script>
export default {
  props: ['adding']
}
</script>
