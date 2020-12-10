<template>
    <div class="row">
        <component :is="element"
                class="input"
                :class="inputClass"
                :type="type"
                :value.prop="value"
                :name="name"
                :placeholder="placeholder"
                @input="update"
                   v-bind="$attrs"
        ></component>
    </div>
</template>

<script>
    export default {
        name: "FormInput",
        inheritAttrs: false,
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
            },
            element() {
                //当类型是textarea时要渲染textarea而不是input
                return this.type === 'textarea' ? 'textarea' : 'input'
            }
        }
    }
</script>

<style scoped>

</style>