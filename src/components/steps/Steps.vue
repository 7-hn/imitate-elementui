<template>
  <div class="steps">
    <div class="step-line"></div>
    <div
        class="step"
        v-for="item in count"
        :key="item"
        :style="{ color: active >= item ? activeColor : defaultColor }"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  props: {
    count: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 2
    },
    activeColor: {
      type: String,
      default: 'green'
    },
    defaultColor: {
      type: String,
      default: '#ccc'
    }
  }
}
</script>

<style scoped>
.steps {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.step-line {
  position: absolute;
  height: 2px;
  top: 50%;
  left: 24px;
  right: 24px;
  z-index: 1;
  background: rgb(223, 231, 239);
  transform: translateY(-50%);
}

.step {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  z-index: 2;
  border: 2px solid;
  border-radius: 50%;
  font-weight: 700;
  background-color: white;
  box-sizing: border-box;
}

</style>
