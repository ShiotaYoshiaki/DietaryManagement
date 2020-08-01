<template>
  <view class="container">
    <text class="heading">Login</text>
    <text>This is the App Login screen</text>
    <nb-button block primary :on-press="openItem">
      <nb-text>Login</nb-text>
    </nb-button>
    <nb-button
      block
      primary
      :onPress="() => this.props.navigation.navigate(listItemArr[0].route)"
    >
      <nb-text>Sign up</nb-text>
    </nb-button>
    <Modal :is_active="isModalActive" :open_func="openItem">
      <Login />
    </Modal>
  </view>
</template>

<script>
import Modal from "../parts/Modal";
import Login from "../pages/Login/Index";

export default {
  data: () => {
    return {
      isModalActive: false,
      listItemArr: [
        {
          route: "SignUp",
          text: "Sign up",
        },
      ],
    };
  },
  components: { Modal, Login },
  methods: {
    /**
     * clickイベントが発火されたタイミングで、
     * オーバーレイコンテンツを表示するフラグを持つdata(isModalActive)を切り替える
     */
    openItem() {
      this.toggleModal();
    },
    /**
     * active状態を切り替える。
     */
    toggleModal() {
      this.isModalActive = !this.isModalActive;
    },
  },
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}
</style>
