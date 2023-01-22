<script setup>
import payoutResponseCode from "./pages/docs/payoutResponseCode.md";
import payoutResponseText from "./pages/docs/payoutResponseText.md";
</script>

<template>
  <div class="flex">
    <aside
      class="w-[220px] min-w-[220px] shadow-sm shadow-gray-400 fixed h-screen"
      aria-label="Sidebar"
    >
      <div
        class="px-3 py-4 overflow-y-auto  bg-gray-50 dark:bg-gray-800 h-full"
      >
        <!-- logo -->
        <a href="https://flowbite.com/" class="flex items-center pr-2.5 mb-5">
          <img
            src="https://cdn.vandar.io/public/logos/typo.svg"
            class="h-6 ml-3 sm:h-7"
            alt="Vandar Logo"
          />
          <a
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >API</a
          >
        </a>

        <!-- search -->
        <div class="flex justify-center">
          <div class="mb-3 w-full">
            <div
              class="input-group relative flex flex-wrap items-stretch w-full mb-4 border border-solid border-gray-300 rounded-lg bg-teal-50"
            >
              <span
                class="input-group-text flex items-center pr-3 py-1.5 text-base font-normal text-gray-600 text-center whitespace-nowrap rounded"
                id="basic-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  class="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </span>
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-4/6 px-3 py-1.5 text-base font-normal text-gray-700 bg-transparent bg-clip-padding transition ease-in-out m-0 focus:outline-none"
                placeholder="جستجو"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
            </div>
          </div>
        </div>

        <!-- navbar -->

        <ul class="space-y-2">
          <li>
            <a
              href="#a2aList"
              class="flex items-center text-base font-normal text-gray-600 rounded-lg dark:text-white hover:text-gray-900 dark:hover:bg-gray-700"
            >
              <span class="mr-3"
                >تسویه آنی
                <ul class="space-y-2">
                  <li>
                    <a
                      href="#a2aList"
                      class="flex items-center text-base font-normal text-gray-600 rounded-lg dark:text-white hover:text-gray-900 dark:hover:bg-gray-700"
                    >
                      <span class="mr-3 py-1 px-2"> لیست تسویه ها </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#submit"
                      class="flex items-center py-1 px-2 text-base font-normal text-gray-600 rounded-lg dark:text-white hover:text-gray-900 dark:hover:bg-gray-700"
                    >
                      <span class="mr-3"> ثبت درخواست تسویه </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#a2aParameters"
                      class="flex items-center py-1 px-2 text-base font-normal text-gray-600 rounded-lg dark:text-white hover:text-gray-900 dark:hover:bg-gray-700"
                    >
                      <span class="mr-3"> پارامترهای مجاز </span>
                    </a>
                  </li>
                </ul>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <div class="w-screen pr-[220px]">
      <!-- navbar -->
      <ul class="flex justify-end py-5 pl-[4%]">
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
        </li>
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
        </li>
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
        </li>
        <li class="mr-6">
          <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
        </li>
      </ul> 
      <div class=" px-[4%] pt-16  w-full grid grid-cols-2 gap-x-20">
        <payoutResponseText/>
        <payoutResponseCode class="max-h-[73vh] overflow-y-scroll"/>
      </div>
    </div>
  </div>
</template>
