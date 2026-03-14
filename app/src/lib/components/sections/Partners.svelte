<script lang="ts">
    import type { Partner } from "$lib/config/site";

    export let heading = "";
    export let intro = "";
    export let partners: Partner[] = [];
</script>

<section id="partners" class="margin6">
    <div class="section-header">
        <h2>{heading}</h2>
        <p>{intro}</p>
    </div>

    <div class="three-col-grid">
        {#each partners as partner (partner.key)}
            <article class="card">
                <div class="card__media">
                    <img
                        src={partner.imageUrl}
                        alt={partner.name}
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div class="card__body">
                    <h3>{partner.name}</h3>
                    <p>{partner.blurb}</p>
                </div>
            </article>
        {/each}
    </div>
</section>
