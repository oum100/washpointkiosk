<template>
  <div class="container col-md-4 pt-5">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input id="email" v-model="loginData.email" type="email" class="form-control" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input id="password" v-model="loginData.password" type="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary w-100"><font-awesome-icon :icon="['fas', 'sign-in-alt']" />login</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.loginData,
        })
        this.$router.push('/profile')
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
<style></style>
