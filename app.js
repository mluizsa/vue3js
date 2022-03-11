const myApp = {
    data() {
        return {
            title: 'Curso de Vue 3',
            name: 'Carlos',
            lastName: 'Ferreira - EspecializaTI ',
            products: [
                {
                    title: 'Filme 01',
                    description: 'Filme muito legal',
                    image: './assets/images/filme01.png',
                    stars: 3,
                },
                {
                    title: 'Filme 02',
                    description: 'Filme muito legal (2)',
                    image: './assets/images/filme02.png',
                    stars: 0,
                }
            ],
            cart:[],
            
            styles:{
                backgroundColor : '#000',
                color           : '#fff',
            },

            themeBlack: true

        }
    },

    computed: {
        fullname(){
            return this.name + ' ' + this.lastName
        }
    },

    methods:{
        addCart (product){
            this.cart.push(product)
        },
        inCart (product){
            return this.cart.indexOf(product) != -1
        },
        removeCart (product){
            this.cart = this.cart.filter((prod, index) => product != prod )
        },


        toogleTheme(){
            this.themeBlack = !this.themeBlack

            if(this.themeBlack){
                this.styles.backgroundColor = '#000'
                this.styles.color = '#fff'
            } else {
                this.styles.backgroundColor = '#fff'
                this.styles.color = '#000'    
            }

        }

    },
}






const app = Vue.createApp(myApp)

