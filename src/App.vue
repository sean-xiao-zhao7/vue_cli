<template>
    <section>
        <header><h1>People</h1></header>
        <add-person @add-person="addPerson"></add-person>
        <ul v-for="person of friends" :key="person.id">
            <person
                :name="person.name"
                :email="person.email"
                :phone="person.phone"
                :fav="person.fav"
                @setFav="setFav"
                :id="person.id"
            ></person>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: "asdfasd",
                    name: "Manuel",
                    phone: "1231231",
                    email: "asdfas@adsfasdfa.com",
                    fav: true,
                },
                {
                    id: "asdfaasdfasdfasdsd",
                    name: "Dan",
                    phone: "1231231",
                    email: "Dan@adsfasdfa.com",
                    fav: false,
                },
                {
                    id: "asdfasdfasdasd",
                    name: "Sven",
                    phone: "1231231",
                    email: "Sven@adsfasdfa.com",
                    fav: false,
                },
                {
                    id: "asdfasdfasd",
                    name: "Jo",
                    phone: "1231231",
                    email: "Jo@adsfasdfa.com",
                    fav: true,
                },
            ],
        };
    },
    methods: {
        setFav(id) {
            const person = this.friends.find((p) => p.id === id);
            person.fav = !person.fav;
        },
        addPerson(id, name, email, phone) {
            this.friends.unshift({
                id: id,
                name: name,
                email: email,
                phone: phone,
                fav: false,
            });
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: "Jost", sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li,
#add-person {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
