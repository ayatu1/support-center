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

            <template v-slot:actions>
                <router-link tag="button" :to="{name: 'tickets'}" class="secondary">Go back</router-link>
                <button type="submit" :disabled="!valid">Send ticket</button>
            </template>
        </SmartForm>
    </div>
</template>

<script>
    import PersistantData from "../mixin/PersistantData";

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
                return !!this.title && !!this.description
            }
        },
        methods: {
            async operation(e) {
                await this.$fetch('tickets/new', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: this.title,
                        description: this.description
                    })
                })
                this.$router.push({name: 'tickets'})
            }
        },
        mixins: [
            PersistantData('NewTickets', [
                'title',
                'description'
            ])
        ]
    }
</script>

<style scoped>

</style>