<template>
  <section class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-center text-gray-900">
        Apa Kata Pelanggan Kami
      </h2>
      
      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-4">
            <img
              class="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Pelanggan"
            >
            <div class="ml-4">
              <h4 class="text-lg font-semibold">Sarah K.</h4>
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="h-5 w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <p class="text-gray-600">
            "Dessertnya tidak hanya cantik tapi juga sangat lezat! Sempurna untuk acara spesial."
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-4">
            <img
              class="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Pelanggan"
            >
            <div class="ml-4">
              <h4 class="text-lg font-semibold">Michael R.</h4>
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="h-5 w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <p class="text-gray-600">
            "Dessert box terbaik di Jakarta! Kemasannya cantik dan pengirimannya cepat."
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-4">
            <img
              class="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Pelanggan"
            >
            <div class="ml-4">
              <h4 class="text-lg font-semibold">Lisa M.</h4>
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="h-5 w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <p class="text-gray-600">
            "Red Velvet Istimewa benar-benar luar biasa! Pasti akan pesan lagi."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>