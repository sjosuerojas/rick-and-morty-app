<template>
    <div class="row mb-2">
        <div v-for="(_, idx) in 2" :key="idx" class="col-md-6" aria-hidden="true">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 placeholder-glow text-primary-emphasis">
                        <span class="placeholder col-3"></span>
                    </strong>
                    <h3 class="mb-0">
                        <span class="placeholder col-8"></span>
                    </h3>
                    <p class="card-text placeholder-glow mb-auto">
                        <span class="placeholder col-12"></span>
                    </p>
                    <a href="#" class="btn btn-primary disabled placeholder col-6"></a>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>