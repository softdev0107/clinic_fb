<template>
  <div class="phone-input-container">
    <label for="phone">Phone Number (optional)</label>
    <input type="text" name="phone" id="phone" v-model="phone_number" @input="acceptNumber"  />
  </div>
</template>
<script>
export default {
  data () {
    return {
      phone_number: ''
    }
  },
  methods: {
    acceptNumber () {
      const x = this.phone_number.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
      this.phone_number = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    }
  }
}
</script>

<style scoped>
  .phone-input-container {
    width: 60%;
    padding: 10px;
    border: 1px solid gainsboro;
    border-radius: 5px;
  }
  .phone-input-container label {
    margin: 0 10px;
    display: block;
    color: rgb(182, 182, 182);
    font-size: 12px;
  }
  .phone-input-container input {
    margin: 0 10px;
    display: block;
    border: none;
  }
  .phone-input-container input:focus {
    display: block;
    outline: none !important;
  }

  @media screen and (max-width: 768px) {
    .phone-input-container {
      width: 100%;
    }
  }
</style>
