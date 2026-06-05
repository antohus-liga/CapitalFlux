<script setup lang="ts">

</script>

<template>

  <div>
    <h1>Account</h1>
    <form>
      <input
          id="username-input"
          type="text"
          placeholder="Username"
          minlength="6"
          maxlength="30"
          pattern="[a-zA-Z0-9_-]"
          required
      >
      <input
          id="password-input"
          type="password"
          placeholder="Password"
          minlength="8"
          maxlength="60"
          required
      >

      <button type="submit">Sign in</button>

      <p>I don't have an account. <a href="/signup">Sign up</a></p>
    </form>
  </div>

</template>

<style scoped>

div {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 5px 5px 5px #ccc;
}

input {
  font-size: 20px;
  margin-bottom: 10px;
  color: #878787;
  border: 1px solid #878787;
  border-radius: 5px;
  padding: 3px;
}

button {
  transition: ease-in 100ms;
  color: white;
  background-color: cornflowerblue;
  border: 1px solid dimgray;
  border-radius: 10px;
  width: 8ch;
  font-size: 20px;
  padding: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
}

button:hover {
  transition: ease-in 100ms;
  background-color: #4084bf;
  cursor: pointer;
}

p {
  color: #878787;
  font-size: 16px;
  margin: 10px 0 0 0;
}

a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

</style>
