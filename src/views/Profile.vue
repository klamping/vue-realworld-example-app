<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4 data-qa-id="profile-username">{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>
            <div v-if="isCurrentUser()">
              <router-link
                class="btn btn-sm btn-outline-secondary action-btn"
                data-qa-id="follow-toggle"
                :to="{ name: 'settings' }"
              >
                <i class="ion-gear-a"></i> Edit Profile Settings
              </router-link>
            </div>
            <div v-else>
              <button
                class="btn btn-sm btn-secondary action-btn"
                data-qa-id="follow-toggle"
                v-if="profile.following"
                @click.prevent="unfollow()"
              >
                <i class="ion-plus-round"></i> &nbsp;Unfollow
                {{ profile.username }}
              </button>
              <button
                class="btn btn-sm btn-outline-secondary action-btn"
                data-qa-id="follow-toggle"
                v-if="!profile.following"
                @click.prevent="follow()"
              >
                <i class="ion-plus-round"></i> &nbsp;Follow
                {{ profile.username }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active" data-qa-id="profile-tabs">
              <li class="nav-item" data-qa-type="profile-tab">
                <router-link
                  class="nav-link"
                  active-class="active"
                  exact
                  :to="{ name: 'profile' }"
                >
                  My Articles
                </router-link>
              </li>
              <li class="nav-item" data-qa-type="profile-tab">
                <router-link
                  class="nav-link"
                  active-class="active"
                  exact
                  :to="{ name: 'profile-favorites' }"
                >
                  Favorited Articles
                </router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FOLLOW,
  FETCH_PROFILE_UNFOLLOW
} from "@/store/actions.type";

export default {
  name: "RwvProfile",
  mounted() {
    this.$store.dispatch(FETCH_PROFILE, this.$route.params);
  },
  computed: {
    ...mapGetters(["currentUser", "profile", "isAuthenticated"])
  },
  methods: {
    isCurrentUser() {
      if (this.currentUser.username && this.profile.username) {
        return this.currentUser.username === this.profile.username;
      }
      return false;
    },
    follow() {
      if (!this.isAuthenticated) return;
      this.$store.dispatch(FETCH_PROFILE_FOLLOW, this.$route.params);
    },
    unfollow() {
      this.$store.dispatch(FETCH_PROFILE_UNFOLLOW, this.$route.params);
    }
  },
  watch: {
    $route(to) {
      this.$store.dispatch(FETCH_PROFILE, to.params);
    }
  }
};
</script>
