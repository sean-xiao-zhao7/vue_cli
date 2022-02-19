<template>
    <form id="add-person">
        Name: <input type="text" name="name" v-model="name" /><br />
        Email: <input type="text" name="name" v-model="email" /><br />
        Phone: <input type="text" name="name" v-model="phone" /><br />
        <button @click.prevent="submit" type="submit">Add</button>
    </form>
</template>
<script>
export default {
    emits: ["add-person"],
    data() {
        return {
            id: null,
            name: "",
            email: "",
            phone: "",
        };
    },
    methods: {
        submit() {
            this.$emit(
                "add-person",
                Math.floor(Math.random() * 10000),
                this.name,
                this.email,
                this.phone
            );
        },
    },
};
</script>
