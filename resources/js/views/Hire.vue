<template>
    <div class="c-hire">
        <div class="c-header">
            <div class="wrap">
                <div class="grid py-16">
                    <div class="grid-col w-1/2">
                        <h2>Hire</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="c-content min-h-screen bg-gray-100">
            <div class="wrap py-48">
                <div class="grid">
                    <div class="grid-col w-full">
                        <router-link class="c-btn c-btn--underline" :to="{ name: 'Dashboard' }">Back to developers</router-link>
                    </div>

                    <form class="grid-col w-full pt-24">
                        <div class="c-form__group flex-col">
                            <label for="first_name">First Name</label>
                            <input id="first_name" name="first_name" placeholder="First name" type="text" v-model="form.first_name" />
                        </div>
                        <div class="c-form__group flex-col">
                            <label for="last_name">Last Name</label>
                            <input id="last_name" name="last_name" placeholder="Last name" type="text" v-model="form.last_name" />
                        </div>
                        <div class="c-form__group flex-col">
                            <label for="role">Role</label>
                            <select class="text-gray-400" v-model="form.role_id">
                                <option selected disabled value="">Select a role</option>
                                <option v-for="r in roles" :key="r.id" :value="r.id">{{ r.title }}</option>
                            </select>
                        </div>
                        <div class="c-form__group flex-col">
                            <label for="frameworks">Frameworks</label>
                            <multiselect v-model="form.frameworks" :options="frameworks" label="title" track-by="id" open-direction="bottom" :multiple="true" :taggable="true"></multiselect>
                        </div>
                        <div class="c-form__group flex-row justify-between">
                            <button class="c-btn c-btn--green" @click.prevent="addDeveloper()">Hire</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

import { mapState } from 'vuex'
import Multiselect from 'vue-multiselect'

export default {
    name: 'Hire',
    components: { 
        Multiselect 
    },
    data() {
        return {
            saving: false,
            form: {
                first_name: '',
                last_name: '',
                role_id: '',
                frameworks: []
            }
        };
    },
    mounted() {
        this.$store.dispatch('loadFrameworks');
        this.$store.dispatch('loadRoles');
    },
    methods: {
        addDeveloper() {
            const data = this.form;

            this.$store.dispatch('saveDeveloper', data)
            .then(() => {
                this.$router.push({ name: 'Dashboard' })
            })
        }
    },
    computed: {
        ...mapState([
            'developers',
            'roles',
            'frameworks'
        ])
    }
};
</script>
