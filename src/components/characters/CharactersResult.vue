<script setup lang="ts">
import RMAlert from '@/components/common/RMAlert.vue';
</script>

<template>
    <div class="row align-items-md-stretch py-5">
        <div class="col-12 col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3">
                <h2>Change the background</h2>
                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look.
                    Then, mix and match with additional component themes and more.</p>
                <button class="btn btn-outline-light mb-5" type="button">Example button </button>
                <r-m-alert text="You are watching episode schema" variant="success" />
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                <r-m-alert text="You are watching characters schema" variant="primary" />
                <h2>Add borders</h2>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be
                    sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of
                    both column's content for equal-height.</p>
                <button class="btn btn-outline-secondary" type="button">Example button</button>
            </div>
        </div>
    </div>
</template>