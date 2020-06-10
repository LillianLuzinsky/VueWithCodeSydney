var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                variantQuantity: 10,
                variantOnSale: true,
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0,
                VariantOnSale: false,
            }
        ],
        cart: 0   
    },
    methods: {
        addToCart () {
            this.cart += 1
          },
        remove () {
            if (this.cart === 0) return
            this.cart -= 1
          },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product + ' ' + 'is on sale'
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        onSale(){
            return this.variants[this.selectedVariant].variantOnSale
        }
    }
})