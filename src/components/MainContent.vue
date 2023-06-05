<template>
  <div class="content-wrap">
    <IAm />

    <h1 class="mt-16 sm:mt-20">I like</h1>
    <div class="text-[17px]">
      <p>- to make architecture decisions and be accountable for them</p>
      <p>- to empower a team to reach its full potential</p>
      <p>- to constantly arbitrate between velocity and quality</p>
      <p>- to enforce consistency across the code base</p>
      <p>- to use the best available tools and tech</p>
      <p class="mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mb-[2px] inline h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
          />
        </svg>
        Tech
      </p>
      <p>
        Vue.js, Vite, pinia, vitest, tailwindcss<br />Node.js, fastify, TypeScript<br />PostgreSQL,
        Prisma<br />
        Vercel, Netlify, Firebase, Supabase
      </p>
    </div>

    <h1 class="mt-16 sm:mt-20">I code</h1>
    <div class="ced-link-wrap">
      <a
        href="https://ages-and-birthdays.netlify.app/"
        target="_blank"
        rel="noopener"
        class="ced-link text-[17px]"
      >
        <div class="flex items-center">
          <div class="mr-3">
            <img
              src="/ages-and-birthdays-icon.png"
              class="w-5"
              alt="Ages and Birthdays app icon"
              width="20"
              height="20"
            />
          </div>
          <div>Ages and Birthdays</div>
        </div>
      </a>
      <span class="link-note">
        (<a
          href="https://github.com/cedric25/ages-and-birthdays"
          class="font-medium text-primary hover:underline"
          target="_blank"
          rel="noopener"
          >Github</a
        >)
      </span>
    </div>
    <div class="ced-link-wrap">
      <a
        href="https://birthdays-qwik.netlify.app/"
        target="_blank"
        rel="noopener"
        class="ced-link text-[17px]"
      >
        <div class="flex items-center">
          <div class="mr-3">
            <img
              src="/ages-and-birthdays-icon.png"
              class="w-5"
              alt="Ages and Birthdays app icon"
              width="20"
              height="20"
            />
          </div>
          <div>Ages and Birthdays with Qwik</div>
        </div>
      </a>
      <span class="link-note">
        (<a
          href="https://github.com/cedric25/ages-and-birthdays-qwik"
          class="font-medium text-primary hover:underline"
          target="_blank"
          rel="noopener"
          >Github</a
        >)
      </span>
    </div>
    <div class="ced-link-wrap">
      <a
        href="https://github.com/cedric25/node-api-starter"
        target="_blank"
        rel="noopener"
        class="ced-link text-[17px]"
      >
        <div class="flex items-center">
          <div class="mr-3">
            <img src="/node-logo.png" class="w-5" alt="Node.js icon" width="20" height="20" />
          </div>
          <div>node-api-starter</div>
        </div>
      </a>
    </div>
    <div class="ced-link-wrap">
      <a href="https://github.com/cedric25" target="_blank" rel="noopener" class="ced-link">
        <div class="flex items-center">
          <div class="mr-3">
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </div>
          <div>More on my GitHub...</div>
        </div>
      </a>
    </div>

    <h1 class="mt-16 sm:mt-20">I write</h1>
    <WriteLink
      title="From TypeScript Hater to TypeScript Convinced User"
      written-at="February 2022"
      link="https://javascript.plainenglish.io/from-typescript-hater-to-typescript-convinced-user-85cd0179c6aa"
    />
    <div class="mt-6">
      <WriteLink
        title="Prisma to interact with my DB"
        written-at="October 2021"
        link="https://medium.com/nerd-for-tech/prisma-to-interact-with-my-db-13da91562600"
      />
    </div>
    <div class="mt-6">
      <WriteLink
        title="From vue-cli to vitejs"
        written-at="April 2021"
        link="https://medium.com/nerd-for-tech/from-vue-cli-to-vitejs-648d2f5e031d"
      />
    </div>
    <div class="mt-6">
      <WriteLink
        title="From Vuetify to tailwind"
        written-at="April 2020"
        link="https://medium.com/front-end-weekly/from-vuetify-to-tailwind-a7e83284ddfc"
      />
    </div>
    <div class="mt-6">
      <div class="ced-link-wrap">
        <a href="https://cedric25.medium.com/" target="_blank" rel="noopener" class="ced-link">
          <div class="flex items-center">
            <div class="mr-3 w-5 flex-shrink-0">
              <img src="/medium-logo.svg" alt="Medium icon" />
            </div>
            <div class="tracking-tight">More on Medium...</div>
          </div>
        </a>
      </div>
    </div>

    <h1 class="mt-16 sm:mt-20">I present</h1>
    <div class="my-4">
      <Link title="Prisma as my ORM for PostgreSQL" link="https://prisma-talk.netlify.app/" />
      <div class="mt-2 font-sans">
        <span class="chip">LyonJS Meetup</span>
        <span class="chip ml-2">July 2021</span>
      </div>
    </div>
    <div class="mb-4 mt-8">
      <Link
        title="Vue Testing"
        link="https://fr.slideshare.net/CedricNicoloso/vue-testing-vue-sydney-meetup-dec-2017"
      />
      <div class="mt-2 font-sans">
        <span class="chip">Vue Sydney Meetup</span>
        <span class="chip ml-2">Dec. 2017</span>
      </div>
    </div>

    <h1 class="mt-16 sm:mt-20">I read</h1>
    <BooksRead />
  </div>
</template>

<script>
import Link from './Link.vue'
import WriteLink from './WriteLink.vue'
import BooksRead from './BooksRead.vue'
import IAm from './IAm.vue'

export default {
  components: {
    IAm,
    Link,
    WriteLink,
    BooksRead,
  },
}
</script>

<style scoped>
.content-wrap {
  padding: 3rem 3rem 9rem 3rem;
  flex: 1;
}
@screen sm {
  .content-wrap {
    padding: 3rem 5rem 9rem 5rem;
  }
}
@screen md {
  .content-wrap {
    padding: 3rem 4rem 9rem 4rem;
    margin-left: 300px;
  }
}
@screen lg {
  .content-wrap {
    padding: 3rem 5rem 9rem 5rem;
    margin-left: 400px;
  }
}
@screen xl {
  .content-wrap {
    padding: 3rem 5rem 9rem 5rem;
    margin-left: 500px;
  }
}
</style>
