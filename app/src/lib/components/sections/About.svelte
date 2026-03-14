<script lang="ts">
    export let heading = "About us";
    export let intro = "";
    export let body: string[] = [];
</script>

<section id="about" class="margin6">
    <section class="center">
        <h2>{heading}</h2>
        <p>{intro}</p>
    </section>

    <section class="about-content">
        <div class="about-copy">
            {#each body as para, i (i)}
                <p>{para}</p>
            {/each}
        </div>
    </section>
</section>
