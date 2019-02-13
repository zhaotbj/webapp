<template>
  <div class="header">
    <x-header>
      <x-input placeholder="I'm placeholder"></x-input>
    </x-header>
  </div>
</template>
<script>
import { XHeader, XInput } from "vux";
export default {
  components: {
    XHeader,
    XInput
  }
};
</script>
<style lang="less" scoped>
.header {
  .vux-header {
    background-color: #f33;
    .weui-cell {
      padding: 0 0;
      background-color: #fff;
      border-radius: 0.2rem;
    }
  }
}
</style>
