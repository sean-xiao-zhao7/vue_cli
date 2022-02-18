<template>
    <li>
        <h2>{{ person.name }}</h2>
        <button @click="showHide">Show details</button>
        <ul v-if="detailsVisible">
            <li>
                <strong>Phone:</strong>
                {{ person.phone }}
            </li>
            <li>
                <strong>Email:</strong>
                {{ person.email }}
            </li>
            <li>
                <strong>ID:</strong>
                {{ person.id }}
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsVisible: false,
            person: {
                name: "Test",
                id: "asdfasdfasdf",
                email: "test@dasdfasdsf.com",
            },
        };
    },
    methods: {
        showHide() {
            this.detailsVisible = !this.detailsVisible;
        },
    },
};
</script>
