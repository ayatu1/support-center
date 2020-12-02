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
            operation: {
                type: Function,
                required: true
            },
            valid: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            async submit() {
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