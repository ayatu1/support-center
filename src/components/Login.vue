<template>
    <div>
        <main class="login">
            <h1>please login to continue</h1>
            <SmartForm
                    class="form"
                    :title="title"
                    :operation="operation"
                    :valid="valid"
            >
                <template v-slot:default>
                    <FormInput v-model="username" name="username" placeholder="Username"></FormInput>
                    <FormInput type="password" v-model="password" name="password" placeholder="Password"></FormInput>
                    <FormInput type="password" v-model="password2" name="verify-password" placeholder="Retype Password" :invalid="retypePasswordError"></FormInput>
                    <FormInput type="email" v-model="email" name="email" placeholder="Email"></FormInput>
                </template>
                <template v-slot:actions>
                    <template v-if="mode === 'login'">
                        <button type="button" class="secondary" @click="mode = 'signup'">Sign up</button>
                        <button type="submit" :disabled="!valid">Login</button>
                    </template>
                    <template v-else-if="mode === 'signup'">
                        <button type="button" class="secondary" @click="mode = 'login'">Back to login</button>
                        <button type="submit" :disabled="!valid">Create accout</button>
                    </template>
                </template>
            </SmartForm>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                mode: 'login',  //可以为login或signup
                username: '',
                password: '',
                password2: '',
                email: ''
            }
        },
        computed: {
            title() {
                switch (this.mode){
                    case 'login':
                        return 'Login';
                    case 'signup':
                        return 'Create a new account';
                    default:
                        return ''
                }
            },
            //重新输入密码字段不等于第一个密码时返回true
            retypePasswordError() {
                return this.password2 && this.password !== this.password2
            },
            //检查注册时是否有空字段
            signupValid() {
                return this.password2 && this.email && !this.retypePasswordError()
            },
            //检查登录时是否有空字段
            valid() {
                return this.username && this.password && (this.mode !== 'signup' || this.signupValid())
            }
        },
        methods: {
            async operation() {
                await this[this.mode]()
            },
            async login() {

            },
            async signup() {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .form {
        >>> .content {
            max-width: 400px;
        }
    }
</style>

