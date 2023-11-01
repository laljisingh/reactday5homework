function Touch() {
    return (
        <section>
            <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div class="relative z-10 lg:py-16">
                        <div class="relative h-64 sm:h-80 lg:h-full">
                            <img alt="House" src="https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.webp?b=1&s=170667a&w=0&k=20&c=oEpszLJm7Hk3Q7qshJvde1P6tfaW5EJsmsYzOuuHGR8=" class="absolute inset-0 h-full w-full object-cover" />
                        </div>
                    </div>
                    <div class="relative flex items-center bg-gray-100">
                        <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100">
                        </span>
                        <div class="p-8 sm:p-16 lg:p-24">
                            <h2 class="text-2xl font-bold sm:text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                            <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                            <a href="#" class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Get in Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Touch;