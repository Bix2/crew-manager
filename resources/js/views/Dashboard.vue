<template>
<div class="c-dashboard">
    <div class="c-header">
        <div class="wrap">
            <div class="grid py-16">
                <div class="grid-col w-1/2">
                    <h2>Developers</h2>
                </div>
                 <div class="grid-col w-1/2 text-right">
                    <router-link class="c-btn c-btn--green" :to="{ name: 'Hire' }">Hire</router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="c-content min-h-screen bg-gray-100">
        <div class="wrap py-48">
            <div v-if="developers" class="grid">
                
                <div class="grid-col w-full">
                    <div class="c-filters w-full flex justify-end">
                        <div class="c-filters__item c-form__group w-1/4 mr-8">
                            <select v-model="selectedRole">
                                <option selected value="">Filter by role</option>
                                <option :value="role.title" v-for="role in roles" :key="role.id">
                                    {{ role.title }}
                                </option>
                            </select>
                        </div>
                        <div class="c-filters__item c-form__group w-1/4">
                            <select v-model="selectedFramework">
                                <option selected value="">Filter by framework</option>
                                <option :value="framework.title" v-for="framework in frameworks" :key="framework.id">
                                    {{ framework.title }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="grid-col py-16 w-full flex text-gray-300 text-14">
                    <div class="w-1/12">
                        &nbsp;
                    </div>
                    <div class="w-2/12">
                        First Name
                    </div>
                        <div class="w-2/12">
                        Last Name
                    </div>
                        <div class="w-2/12">
                        Role
                    </div>
                    <div class="w-3/12">
                        Frameworks
                    </div>
                    <div class="w-2/12">
                        &nbsp;
                    </div>
                </div>
                
                <div class="grid-col w-full">
                    <div class="c-dashboard__item" v-for="developer in filteredList" :key="developer.id">
                        <div class="w-1/12">
                            &nbsp;
                        </div>
                        <div class="w-2/12">
                            {{ developer.first_name }}
                        </div>
                        <div class="w-2/12">
                            {{ developer.last_name }}
                        </div>
                        <div class="w-2/12">
                            {{ developer.role.title }}
                        </div>
                        <div class="w-3/12">
                            <span class="c-tag" v-for="(framework, index) in developer.frameworks" :key="index">
                                {{ framework.title }}
                            </span>
                        </div>
                        <div class="w-2/12 flex justify-evenly">
                            <router-link class="c-btn c-btn--link" :to="{ name: 'Detail', params: { id: developer.id }}">Edit</router-link>
                             <!-- <a href="{{ route('company.destroy',$element->id) }}" class="btn btn-sm btn-outline-danger py-0" id="deleteDeveloper" data-id="{{ developer.id }}">Fire</a> -->
                            <button class="c-btn c-btn--red" @click="fireDeveloper(developer.id)">Fire</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Dashboard',

    data() {
        return {
            selectedFramework: '',
            selectedRole: '',
        }
    },
    beforeMount () {
        this.$store.dispatch('loadDevelopers');
        this.$store.dispatch('loadRoles');
        this.$store.dispatch('loadFrameworks');
    },
    mounted() {
     
      
    },
    methods: {
        fireDeveloper(id) {
            this.$store.dispatch('deleteDeveloper', id)
        },
    },
    computed: {
        ...mapState([
            'developers',
            'roles',
            'frameworks'
        ]),
         filteredList() {
            // if no filters applied, return list of all developers
			if(this.selectedRole === "" && this.selectedFramework === "") {
                return this.developers;
            } else {
                return this.developers.filter(person => {
                     // role filter applied
                    return (this.selectedRole === '' || person.role.title === this.selectedRole) && 
                     // framework filter applied
                    (this.selectedFramework === '' || person.frameworks.some((subElement) => subElement.title === this.selectedFramework))
                })
            }
        }
    }
}
</script>
