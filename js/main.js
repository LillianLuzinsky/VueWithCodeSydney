Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `,
    computed: {
        productDetails() {
            return this.brand + this.product
        }
}
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div id="product">
        <div class="product-image">
            <img v-bind:src="image" alt="Vue socks">
        </div>

        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants" 
                :key="variant.variantId"
                class="color-box"
                :style="{ background: variant.variantColor }"
                @mouseover="updateProduct(index)">
            </div>
                
            <button v-on:click="addToCart" 
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">Add To Cart</button>
            <button @click="remove">Remove</button>
        </div>

        <product-review></product-review>
    </div>
    `,
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: './assets/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: './assets/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ]
        }
    },
    methods: {
        addToCart () {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
          },
          remove () {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
          },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})

Vue.component('product-review', {
    template: `
        <input v-model="name">
    `,
    data(){
        return{
            name: null
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        decreaseCart(id){
            this.cart.pop(id)
        }
    }
})