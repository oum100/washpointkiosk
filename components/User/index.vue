<template>
  <div>
    Hello dear <b style="color: red">{{ getUserInfo.fullname }}</b> you're in profile page
    <hr />
    This is your information:
    <br /><br />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Scope</th>
          <th scope="col">ReadOnly</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ getUserInfo._id }}</td>
          <td>{{ getUserInfo.name }}</td>
          <td>{{ getUserInfo.email }}</td>
          <td width="200px">
            <div class="row justify-content-center">
              <div v-if="$auth.hasScope('admin')" class="col">Admin</div>
              <div v-if="$auth.hasScope('user')" class="col">User</div>
            </div>
          </td>
          <td>{{ getUserInfo.readonly }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo
    },
  },
}
</script>

<style></style>
