<template>
  <header>
    <h1>More on Vue Components</h1>
  </header>
</template>

<!-- REMARK: By default <style> would be treated as globally. -->
<!-- REMARK: Through scoped, the styles will only affect the current template,
  no parent, child or siblings components are affected. -->
<!-- REMARK: Vue achieve this by giving special attributes like data-, V-, etc. -->
<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14005e;
}

header h1 {
  color: white;
  margin: 0;
}
</style>