class FastQuickAdd extends HTMLElement {
  constructor() {
    super();
    this.variantSelect = null;
    this.addToCartButton = null;
    this.productImage = null;
    this.productId = null;
  }

  connectedCallback() {
    this.variantSelect = this.querySelector('.js-variant-select');
    this.addToCartButton = this.querySelector('.js-add-to-cart-custom');
    this.productId = this.getAttribute('data-product-id');
    this.productImage = document.querySelector(`#product-card-${this.productId} #product-image-${this.productId}`);

    this.updateButtonState();
    this.updateProductImage();

    this.variantSelect.addEventListener('change', () => {
      this.updateButtonState();
      this.updateProductImage();
    });

    this.addToCartButton.addEventListener('click', this.addToCart.bind(this));
  }

  addToCart() {
    const variantId = this.variantSelect.value;
    const cartData = {
      items: [
        {
          id: variantId,
          quantity: 1
        }
      ]
    };

    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(cartData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Item added to cart:', data);
      window.location.href = '/cart';
    })
    .catch(error => {
      console.error('Error adding item to cart:', error);
    });
  }

  updateButtonState() {
    const selectedOption = this.variantSelect.options[this.variantSelect.selectedIndex];

    if (selectedOption.disabled) {
      this.addToCartButton.disabled = true;
    } else {
      this.addToCartButton.disabled = false;
    }
  }

  updateProductImage() {
    const selectedOption = this.variantSelect.options[this.variantSelect.selectedIndex];
    const newImageSrc = selectedOption.getAttribute('data-image-src');
    const newImageSrcSet = selectedOption.getAttribute('data-image-srcset');

    if (this.productImage) {
      if (newImageSrc) {
        this.productImage.src = newImageSrc;
      }
      if (newImageSrcSet) {
        this.productImage.srcset = newImageSrcSet;
      }
    }
  }
}

if (!customElements.get('quick-add-fast')) {
  customElements.define('quick-add-fast', FastQuickAdd);
}