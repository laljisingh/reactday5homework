function Crousel() {
  return (
    <div>
      <section class="relative bg-cover bg-center  bg-no-repeat" style={{backgroundImage: 'url("https://edc.h-cdn.co/assets/16/28/2560x1440/hd-aspect-1468508286-ce-la-vi-restaurant-indoor.jpg")'}}>
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong class="block font-extrabold text-rose-700">
                Forever Food.
              </strong>
            </h1>
            <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white bg-gray-900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/hotel"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Search Now
              </a>
              <a
                href="#"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Know more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Crousel;
