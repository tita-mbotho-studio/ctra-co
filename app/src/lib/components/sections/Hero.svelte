<script lang="ts">
    export let heading = "";
    export let details = "";
    export let ctaText = "";
    export let ctaLink = "#";
    export let img = "";
</script>

<section id="home" class="hero margin6">
    <div class="hero__image-wrap">
        <img class="hero__image" src={img} alt="" />
    </div>

    <div class="hero__content">
        <h1>{heading}</h1>
        <p>{details}</p>
        <a class="btn" href={ctaLink} target="_blank" rel="noreferrer">
            {ctaText}
        </a>
    </div>
</section>
