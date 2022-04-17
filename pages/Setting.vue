<template>
  <div class="container-fluid">
    <H3> This is Setting page. Require Admin right.</H3>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  middleware: 'isAuthenticated',
}
</script>
