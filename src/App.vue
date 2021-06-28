<template>
  <the-header></the-header>
  <main>
    <selection-tab
      @select-tab="changeContent"
      :tabChoices="tabChoices"
      :activeTab="activeTab"
    ></selection-tab>
    <keep-alive>
      <component
        :is="activeTab"
        :list="resourceList"
        @add-resource="addResource"
      ></component>
    </keep-alive>
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import SelectionTab from "./components/layout/SelectionTab.vue";
import StoredResources from "./components/content/StoredResources.vue";
import AddResource from "./components/content/AddResource.vue";

export default {
  components: {
    TheHeader,
    SelectionTab,
    StoredResources,
    AddResource,
  },
  data() {
    return {
      tabChoices: [
        {
          name: "Stored Resources",
          tagName: "stored-resources",
        },
        {
          name: "Add Resource",
          tagName: "add-resource",
        },
      ],
      resourceList: [
        {
          id: "official",
          title: "Official Guide",
          description: "The official Vue.js documentation",
          link: "https://v3.vuejs.org/guide/introduction.html",
        },
        {
          id: "google",
          title: "Google",
          description: "learn to google...",
          link: "https://www.google.com",
        },
      ],
      activeTab: "stored-resources",
    };
  },
  methods: {
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.resourceList.push(newResource);
    },
    changeContent(tagName) {
      this.activeTab = tagName;
    },
    deleteResource(id) {
      this.resourceList = this.resourceList.filter((item) => item.id !== id);
    },
  },
  provide() {
    return {
      deleteResource: this.deleteResource,
    };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
</style>