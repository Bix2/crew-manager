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
</div>
</template>

<script>
export default {
    name: 'Dashboard',
}
</script>
