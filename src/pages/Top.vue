<script setup>
import { onMounted, ref, onUpdated } from "vue";
import { createClient } from "microcms-js-sdk"; //ES6
import { useRoute } from "vue-router";
import { marked } from "marked";

const route = useRoute();
const articles = ref([]);
const filterId = ref("");

const upd = (id) => {
  console.log(id);

  let q = { limit: 999 };
  if (id !== "" && id !== undefined) {
    q = {
      limit: 999,
      filters:
        "content[contains]" +
        id +
        "[or]publishedAt[contains]" +
        id +
        "[or]id[equals]" +
        id,
    };
  }

  console.log(q);

  // Initialize Client SDK.
  const client = createClient({
    serviceDomain: "official-mikiri", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
    apiKey: "oY2LPAQFaL9EOWysbTttmnS0q7XhCuR2EyfI",
  });
  client
    .get({
      endpoint: "articles",
      queries: q,
    })
    .then((res) => {
      console.log(res);
      for (const content of res.contents) {
        const title = content.content.split("\n")[0].replace("# ", "");

        articles.value.push({
          id: content.id,
          title,
          content: content.content,
          publishedAt: content.publishedAt,
        });
      }
    })
    .catch((err) => console.error(err));
};

onUpdated(() => {
  if (filterId.value !== route.params.q) {
    filterId.value = route.params.q;
    articles.value.splice(0);
    upd(filterId.value);
  }
});

onMounted(() => {
  if (route.params.q === undefined) {
    filterId.value = "";
    upd(filterId.value);
  } else {
    filterId.value = route.params.q;
    upd(filterId.value);
  }
});
</script>

<template>
  <article v-for="article of articles" class="card bg-base-100 shadow-xl m-4">
    <div class="card-body">
      <h2 class="card-title">
        {{ article.title }}
        <small>
          {{ new Date(article.publishedAt).toLocaleDateString() }}
        </small>
      </h2>
      <hr class="border border-primary bordersolid" />
      <div class="prose" v-html="marked.parse(article.content)"></div>
      <footer class="text-right">
        <RouterLink
          class="link link-hover link-secondary"
          :to="'/q/' + article.id"
        >
          ID:{{ article.id }}
        </RouterLink>
      </footer>
    </div>
  </article>
</template>
