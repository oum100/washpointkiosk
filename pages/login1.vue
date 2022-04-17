<template>
  <div class="container">
    <input id="one" v-model="picked" type="radio" value="One" />
    <label for="one">One</label>
    <br />
    <input id="two" v-model="picked" type="radio" value="Two" />
    <label for="two">Two</label>
    <br />
    <input v-if="notEnabled ? 'disabled' : ''" id="three" v-model="picked" type="radio" value="Three" />
    <label for="three">Three</label>
    <br />
    <span>Picked: {{ picked }}</span>
    <br />

    <form>
      <select class="custom-select-sm">
        <option selected>Please select service</option>
        <option value="30">30 Bath | Temp 20° | 28 Mins</option>
        <option value="40">40 Bath | Temp 30° | 30 Mins</option>
        <option value="50">50 Bath | Temp 40° | 40 Mins</option>
      </select>

      <select class="custom-select-sm">
        <option selected>Please select service</option>

        <option value="30">30 Bath | 45 Mins</option>
        <option value="40">40 Bath | 60 Mins</option>
        <option value="50">50 Bath | 75 Mins</option>
      </select>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disable: false,
      picked: 'Two',
      options: [
        { item: 'A', name: 'Option A' },
        { item: 'B', name: 'Option B' },
        { item: 'D', name: 'Option C', notEnabled: false },
        { item: { d: 1 }, name: 'Option D' },
      ],
    }
  },
}
</script>
