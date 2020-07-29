<template>

<view>
<text>メールアドレス</text>
<textInput type="text" v-model="textInput1"/>

<text>パスワード</text>
<textInput type="text" v-model="textInput2"/>
</view>
</template>

<script>
export default {
  data: function() {
    return {
      textInput1: '入力',
      textInput2: '入力',
    }
  },
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
</script>
