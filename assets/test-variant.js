class ImageChanger extends HTMLElement {
  constructor() {
    super();

    // Get select and image elements from attributes
    const variantSelect = document.querySelector(this.getAttribute('data-variant-select'));
    const imageTarget = document.querySelector("#product-feature-img");
    const defaultImage = this.getAttribute('data-default-image');

    if (!variantSelect || !imageTarget) return;

    // Listen for changes in the variant selection
    variantSelect.addEventListener('change', (event) => {
      const selectedImage = event.target.value;
      if (selectedImage) {
        imageTarget.src = selectedImage;
        imageTarget.srcset = selectedImage;
      } else {
        imageTarget.src = defaultImage;
        imageTarget.srcset = defaultImage;
      }
    });
  }
}

customElements.define('image-changer', ImageChanger);