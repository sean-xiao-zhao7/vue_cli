<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="showHide">Show details</button>
        <button @click="setFav">Fav/Unfav</button>
        <ul v-if="detailsVisible">
            <li>
                <strong>Phone:</strong>
                {{ phone }}
            </li>
            <li>
                <strong>Email:</strong>
                {{ email }}
            </li>
            <li>
                <strong>ID:</strong>
                {{ id }}
            </li>
            <li>FAV: {{ fav }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ["name", "phone", "email", "fav", "id"],
    data() {
        return {
            detailsVisible: false,
        };
    },
    methods: {
        showHide() {
            this.detailsVisible = !this.detailsVisible;
        },
        setFav() {
            this.$emit("setFav", this.id);
        },
        favEmit() {},
    },
};
</script>
