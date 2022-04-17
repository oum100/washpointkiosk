<template>
  <div>
    <User />
  </div>
</template>

<script>
export default {
  middleware: 'isAuthenticated', // it will use `isAuthenticated` middleware
}
</script>

<style></style>
