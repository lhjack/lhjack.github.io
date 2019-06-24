<template>
    <div>
        <div id="photo">
            <img :src="touxiang" alt="上传头像" @click.stop="uploadImg" class="tou">
            <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hiddenInput">
            <button @click="logout">注销</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "avatar",
        data() {
            return {
                touxiang: "",
                username: ""
            }
        },
        mounted() {
            if (localStorage.touxiang) {
                this.touxiang = localStorage.touxiang;
            } else {
                this.touxiang = require("@/assets/images/photo.png");
            }

        },
        methods: {
            uploadImg() {
                this.$refs.one.click();
            },
            shangchuan() {
                console.log("准备上传")
                let file = this.$refs.one.files[0];  //需要上传 图片
                let data = new FormData();   //新建 表单对象 <form></form>
                data.append("avatar", file);

                this.$axios({
                    url: "/vue/uploadAvatar",
                    method: "POST",
                    contentType: false,
                    processData: false,
                    data: data
                }).then(res => {
                    console.log(res);
                    this.touxiang = res.data.avatarurl.replace(/public/, 'http://localhost:1902/');
                    localStorage.touxiang = this.touxiang
                })
                // processData: false,//默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
                // contentType: false,//数据编码格式不使用jquery的方式 为了避免 JQuery 对其操作，从而失去分界符，而使服务器不能正常解析文件。data:formData,
            },
            logout() {
                sessionStorage.removeItem('userInfo')
                history.go(0);
            }
        },

    }
</script>
<style scoped>
    .hiddenInput {
        display: none;
    }

    #photo {
        margin: 0.5rem auto;
        text-align: center;
    }

    .tou {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        margin: 0.5rem auto;

    }
</style>