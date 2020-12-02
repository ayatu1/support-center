<template>
    <div class="row">
        <input
                class="input"
                :class="inputClass"
                :type="type"
                :value.prop="value"
                :name="name"
                :placeholder="placeholder"
                @input="update"
        >
    </div>
</template>

<script>
    export default {
        name: "FormInput",
        props: {
            type: {
                type: String,
                default: 'text'
            },
            name: {
                type: String
            },
            value: {
              required: true
            },
            placeholder: {
                type: String
            },
            invalid: {
                type: Boolean,
                default: false   //用来切换无效显示(红色边框）
            }
        },
        methods: {
            update(event) {
                this.$emit('input', event.currentTarget.value)
            }
        },
        computed: {
            inputClass() {
                return {
                    'invalid': this.invalid
                }
            }
        }
    }
</script>

<style scoped>

</style>