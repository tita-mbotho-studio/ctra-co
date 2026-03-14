<script lang="ts">
    type Service = {
        key: string;
        title: string;
        blurb: string;
        description: string;
        bullets: string[];
        mediaUrl: string;
        mediaType: "image" | "video";
    };

    export let whatsappNumber = "";
    export let services: Service[] = [];

    let active: Service | null = null;

    function openModal(service: Service) {
        active = service;
        document.documentElement.style.overflow = "hidden";
    }

    function closeModal() {
        active = null;
        document.documentElement.style.overflow = "";
    }

    function onBackdropClick(e: MouseEvent) {
        if (e.target === e.currentTarget) closeModal();
    }

    function onKeydown(e: KeyboardEvent) {
        if (e.key === "Escape") closeModal();
    }

    function whatsappHref(service: Service) {
        const num = (whatsappNumber || "").replace(/[^\d]/g, "");
        const text =
            `Hi, I'd like to speak with your experts about ${service.title}. ` +
            `Please share availability, pricing, and the next steps.`;

        if (!num) return `https://wa.me/?text=${encodeURIComponent(text)}`;
        return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
    }

    function primeCardVideo(event: Event) {
        const video = event.currentTarget as HTMLVideoElement | null;
        if (!video) return;

        video.pause();

        try {
            if (video.readyState >= 2) {
                video.currentTime = 0.01;
            }
        } catch {
            // ignore seek timing issues
        }
    }

    function playCardVideo(event: MouseEvent) {
        const card = event.currentTarget as HTMLElement | null;
        const video = card?.querySelector("video") as HTMLVideoElement | null;

        if (!video) return;

        video.currentTime = 0;
        void video.play();
    }

    function stopCardVideo(event: MouseEvent) {
        const card = event.currentTarget as HTMLElement | null;
        const video = card?.querySelector("video") as HTMLVideoElement | null;

        if (!video) return;

        video.pause();

        try {
            video.currentTime = 0.01;
        } catch {
            video.currentTime = 0;
        }
    }
</script>

<section id="services" class="margin6">
    <div class="center">
        <h2>Services</h2>
        <p>Choose a service to learn more and contact us on WhatsApp.</p>
    </div>

    <div class="three-col-grid">
        {#each services as s (s.key)}
            <article
                class="service-card"
                on:mouseenter={playCardVideo}
                on:mouseleave={stopCardVideo}
            >
                <div class="service-card__media">
                    <svelte:element
                        this={s.mediaType === "video" ? "video" : "img"}
                        class="service-card__media-el"
                        src={s.mediaUrl}
                        alt={s.title}
                        muted={s.mediaType === "video"}
                        loop={s.mediaType === "video"}
                        playsinline={s.mediaType === "video"}
                        preload={s.mediaType === "video" ? "auto" : undefined}
                        loading={s.mediaType === "image" ? "lazy" : undefined}
                        decoding={s.mediaType === "image" ? "async" : undefined}
                        on:loadeddata={s.mediaType === "video"
                            ? primeCardVideo
                            : undefined}
                    />
                </div>

                <div class="service-card__body">
                    <div class="service-card__bottom">
                        <div class="service-card__title">
                            <h3>{s.title}</h3>
                        </div>

                        <div class="service-card__actions">
                            <button
                                type="button"
                                class="btn service-card__btn"
                                on:click={() => openModal(s)}
                            >
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        {/each}
    </div>
</section>

{#if active}
    <div
        class="modal-backdrop"
        role="presentation"
        tabindex="-1"
        on:click={onBackdropClick}
        on:keydown={onKeydown}
    >
        <div
            class="modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} details`}
        >
            <div class="modal-top">
                <h3>{active.title}</h3>
                <button
                    type="button"
                    class="icon-btn"
                    on:click={closeModal}
                    aria-label="Close"
                >
                    ×
                </button>
            </div>

            <div class="modal-row desc">
                <p>{active.description}</p>
            </div>

            <div class="modal-row bullets">
                <ul>
                    {#each active.bullets as b, i (i)}
                        <li>{b}</li>
                    {/each}
                </ul>
            </div>

            <div class="modal-row modal-actions">
                <a
                    class="btn"
                    href={whatsappHref(active)}
                    target="_blank"
                    rel="noreferrer"
                >
                    Connect with our experts
                </a>
            </div>
        </div>
    </div>
{/if}
