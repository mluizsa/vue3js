const productDetail = {
    template: `
            <p>{{ product.title }}</p>
            <img :src="product.image" v-bind:alt="product.title" style="max-width:150px;">
            <strong v-if="product.stars > 0">{{ product.stars }}</strong>


            <a href="#"
                @click.prevent="removeCart(product)"
                v-if="productInCart">
                remove Cart
            </a>

            <a href="#"
                v-on:click.prevent="addCart(product)"
                v-else>
                add cart
            </a>
    `,

    emits : ['add-prod-cart', 'remove-prod-cart'],
    // props:['product', 'productInCart'],

    props:{
        product:{
            type: Object,
            required: true,
            default: true,
        },
        productInCart:{
            type: Boolean,
            required: true,
            
        }
    },

    data(){
        return{
            exemple: 123,
        }
    },

    methods: {
        addCart(product){
            console.log('Add Cart in componet')
            this.$emit('add-prod-cart', product)
        },
        removeCart(product){
            console.log('remove Cart in componet')
            this.$emit('remove-prod-cart', product)
        }
    }

}


app.component ('product-detail', productDetail)

