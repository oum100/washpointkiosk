<template>
  <div>
    <h2>Dashboard Page</h2>
  </div>
</template>

<script>
export default {
  middleware: 'isAuthenticated', // it will use `isAuthenticated` middleware
}
</script>
