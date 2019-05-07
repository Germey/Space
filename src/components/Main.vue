<template>
  <div class="hello">
    <el-row>
      <el-col>
        <div class="bar">
          <i class="icon el-icon-coffee-cup"></i>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="15" class="inputs">
      <el-col :span="12">
        <el-input
            class="input"
            type="textarea"
            placeholder="请输入内容"
            v-model="input">
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-input
            class="input"
            type="textarea"
            v-model="output">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  const pangu = require('pangu');

  export default {
    name: 'Main',
    data() {
      return {
        title: '空格处理',
        input: null,
        output: null,
      }
    },
    watch: {
      input() {
        this.output = pangu.spacing(this.input)
      }
    }
  }
</script>

<style lang="scss">
  $bar-height: 40px;
  $inputs-padding: 40px;
  .bar {
    width: 100%;
    height: $bar-height;
    background: #218ADC;
    color: white;
    .icon {
      margin: 10px;
    }
  }

  .inputs {
    padding: $inputs-padding;
    .input {
      height: 100vh;
      textarea {
        height: 100vh;
      }
    }
  }

</style>
