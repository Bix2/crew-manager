<template>
    <div class="c-detail">

        <div class="c-header">
            <div class="wrap">
                <div class="grid py-16">
                    <div class="grid-col w-1/2">
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
                            <label>First Name</label>
                            <input type="text" v-model="developer.first_name" />
                        </div>
                        <div class="c-form__group flex-col">
                            <label>Last Name</label>
                            <input type="text"  v-model="developer.last_name" />
                        </div>
                        <div class="c-form__group flex-col">
                            <label>Role</label>
                            <multiselect v-model="developer.role" :options="roles" label="title" track-by="id" open-direction="bottom" :multiple="false" :taggable="false"></multiselect>
                        </div>
                        <div class="c-form__group flex-col">
                            <label>Frameworks</label>
                            <multiselect v-model="developer.frameworks" :options="frameworks" label="title" track-by="id" open-direction="bottom" :multiple="true" :taggable="true"></multiselect>
                        </div>
                        <div class="c-form__group flex-row justify-between">
                            <button class="c-btn c-btn--green" @click.prevent="updateDeveloper(developer.id)">Save</button>
                            <button class="c-btn c-btn--red" @click="fireDeveloper(developer.id)">Fire</button>
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
import axios from 'axios'

export default {
    name: 'Detail',
    components: { 
        Multiselect 
    },

    data() {
        return {
            saving: false,
        };
    },

    beforeMount () {
        this.$store.dispatch('getDeveloper', this.$route.params.id);
        this.$store.dispatch('loadFrameworks');
        this.$store.dispatch('loadRoles');
    },
    mounted() {
        this.$store.dispatch('getDeveloper', this.$route.params.id);
        this.$store.dispatch('loadFrameworks');
        this.$store.dispatch('loadRoles');
    },
    methods: {
        fireDeveloper(id) {
            this.$store.dispatch('deleteDeveloper', id)
        },
        updateDeveloper() {
            this.$store.dispatch( 'updateDeveloper', this.developer)
            .then(() => {
                this.$router.push({ name: 'Dashboard' })
            })
        }
        
    },
    computed: {
        ...mapState([
            'developer',
            'roles',
            'frameworks'
        ]),
        filteredRoles() {
            return this.roles.filter(item => {
               return item.id != this.developer.role.id;
            })
        },
    }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
