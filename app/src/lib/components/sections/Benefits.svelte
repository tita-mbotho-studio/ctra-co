<script context="module" lang="ts">
    export type Benefit = {
        key: string;
        title: string;
        blurb: string;
        iconPath: string;
    };
</script>

<script lang="ts">
    export let heading = "Benefits";
    export let intro = "";
    export let benefits: Benefit[] = [];
</script>

<section id="benefits" class="margin6 benefits-section">
    <section class="center">
        <h2>{heading}</h2>
        <p>{intro}</p>
    </section>

    <section class="benefits-section__cards">
        <div class="benefits-section__grid">
            {#each benefits as b (b.key)}
                <article class="benefits-section__card">
                    <div class="benefits-section__icon">
                        <img src={b.iconPath} alt="" loading="lazy" />
                    </div>

                    <div class="benefits-section__copy">
                        <h3>{b.title}</h3>
                        <p>{b.blurb}</p>
                    </div>
                </article>
            {/each}
        </div>
    </section>
</section>
