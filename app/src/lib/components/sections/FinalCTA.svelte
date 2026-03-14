<script lang="ts">
    export let heading = "Ready to get started?";
    export let details =
        "Tell us what you need and we will confirm scope, timelines, and the next steps.";
    export let buttonText = "Contact us on WhatsApp";
    export let whatsappNumber = "";
    export let message =
        "Hi, I'd like to request a quote. Please share pricing, availability, and the next steps.";

    function whatsappHref() {
        const num = (whatsappNumber || "").replace(/[^\d]/g, "");
        const text = message || "";

        if (!num) return `https://wa.me/?text=${encodeURIComponent(text)}`;
        return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
    }
</script>

<section class="margin6 final-cta-section">
    <section class="cta-box final-cta-box">
        <div class="cta-box__copy final-cta-box__copy">
            <h2>{heading}</h2>
            <p>{details}</p>
        </div>

        <div class="cta-box__actions final-cta-box__actions">
            <a
                class="btn final-cta-box__btn"
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
            >
                {buttonText}
            </a>
        </div>
    </section>
</section>
