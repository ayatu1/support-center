<template>
    <div>
        <form @submit="submit">
            <section class="content">
                <h2>{{title}}</h2>
<!--                表单输入框之类的-->
                <slot></slot>
                <div class="actions">
<!--                    按钮-->
                    <slot name="actions"></slot>
                </div>
                <div class="error" v-if="error">{{error}}</div>
            </section>

        </form>
    </div>
</template>

<script>
    export default {
        name: "smartForm",
        data() {
          return {
              error: null
          }
        },
        props: {
            title: {
                type: String,
                required: true
            },
            operation: {  //提交表单时的处理函数
                type: Function,
                required: true
            },
            valid: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            async submit() {   //点击提交按钮时触发此函数
                //统一处理提交错误
                if(this.valid) {
                    this.error = null
                    try {
                        await this.operation()
                    }catch (e) {
                        this.error = e.message
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>