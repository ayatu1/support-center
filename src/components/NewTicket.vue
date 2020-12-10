<template>
    <div class="new-ticket">
        <SmartForm
            title="New ticket"
            :operation="operation"
            :valid="valid"
        >
            <FormInput
                    name="title"
                    v-model="title"
                    placeholder="Short description (max 100 chars)"
                    maxlength="100"
                    required
            ></FormInput>
            <FormInput
                    type="textarea"
                    name="description"
                    v-model="description"
                    placeholder="describe your problem in dettails"
                    rows="4"
            >
            </FormInput>
        </SmartForm>
    </div>
</template>

<script>
    export default {
        name: "NewTicket",
        data() {
            return {
                title: '',
                description: ''
            }
        },
        computed: {
            valid() {
                return this.title && this.description
            }
        },
        methods: {
            async operation() {

            }
        }
    }
</script>

<style scoped>

</style>