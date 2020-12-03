<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="white" class="pa-4 text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="100"></v-avatar>

        <!-- <div>john@vuetifyjs.com</div> -->
      </v-sheet>

      <!-- <v-list>
        <inertia-link :href="route('dashboard')">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </inertia-link>
        <v-list-group prepend-icon="mdi-account-circle" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>tes</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>posts</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="mdi-account-circle">
          <template v-slot:activator>
            <v-list-item-title>Master</v-list-item-title>
          </template>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Principal</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link>
              <v-list-item-title>Address</v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-account-multiple-outline</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list> -->

      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item> -->
      <v-list>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="title"> Application </v-list-item-title>
              <v-list-item-subtitle> subtext </v-list-item-subtitle>
            </v-list-item-content>
          </template>

          <form @submit.prevent="logout">
            <jet-dropdown-link as="button">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Setting</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </jet-dropdown-link>
          </form>
          <form @submit.prevent="logout">
            <jet-dropdown-link as="button">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </jet-dropdown-link>
          </form>
        </v-list-group>
      </v-list>
      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
          active-class="light-blue lighten-5 blue--text text--darken-4"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            link
            @click="$inertia.visit(route(item.route))"
            :value="item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
import JetDropdownLink from "@/Jetstream/DropdownLink";
export default {
  components: {
    JetDropdownLink,
  },
  data: () => ({
    selectedItem: null,
    errorClass: "text-danger",
    drawer: null,
    items: [
      { text: "Home", icon: "mdi-folder", link: "/", route: "dashboard" },
      {
        text: "Posts [CRUD modal]",
        icon: "mdi-account-multiple",
        link: "/posts",
        route: "posts.index",
      },
      {
        text: "Category [CRUD view]",
        icon: "mdi-star",
        link: "/category",
        route: "category.index",
      },
    ],
  }),
  created() {
    //   if((route().current("dashboard")) {
    //       this.activeClass="purple darken-2 text-center";
    //   }
    this.plus();
  },
  methods: {
    plus() {
      console.log(route().current("dashboard"));
      if (route().current("dashboard")) {
        this.activeClass = "text-primary";
      }
    },
    logout() {
      axios.post(route("logout").url()).then((response) => {
        window.location = "/";
      });
    },
  },
};
</script>