<template>
    <div id="rickAndMortyCarousel" class="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#rickAndMortyCarousel" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#rickAndMortyCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#rickAndMortyCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../assets/banner1.jpg" class="w-100" alt="banner1" />
                <div class="container">
                    <div class="carousel-caption text-start">
                        <h1>Example headline.</h1>
                        <p class="opacity-75">
                            Some representative placeholder content for the first slide of
                            the carousel.
                        </p>
                        <p>
                            <a class="btn btn-lg btn-primary" href="#">Sign up today</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../../assets/banner2.jpg" class="w-100" alt="banner2" />
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Another example headline.</h1>
                        <p>
                            Some representative placeholder content for the second slide
                            of the carousel.
                        </p>
                        <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../../assets/banner3.png" class="w-100" alt="banner2" />
                <div class="container">
                    <div class="carousel-caption text-end">
                        <h1>One more for good measure.</h1>
                        <p>
                            Some representative placeholder content for the third slide of
                            this carousel.
                        </p>
                        <p>
                            <a class="btn btn-lg btn-primary" href="#">Browse gallery</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#rickAndMortyCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#rickAndMortyCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>