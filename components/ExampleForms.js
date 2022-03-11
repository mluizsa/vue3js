const exampleForm = {
    template: `
    <form action="#" method="post" @submit.prevent="saveData()">
    <label>
        Nome:
        <input v-model="name" type="text" name="name" placeholder="Nome" id="" >
        <div v-if="errors.name"> {{ errors.name }}</div>

    </label>
    <label>
        Sexo:
        <select name="sexo" id="" v-model="sexo">
            <option value="">Escolha</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
        </select>
    </label>
    <label>
        Descricao:
        <textarea v-model="description" name="description" id="" placeholder="Descricao" cols="30" rows="10"></textarea>
    </label>

    <label>
        <input v-model="agree" type="checkbox" name="agree" id="">
        Concordo
    </label>
    <button type="submit">Enviar</button>
</form>
    `,
    data(){
        return{
            name: 'Carlos Ferreira',
            sexo: '',
            description: '',
            agree: true,


            errors: {
                name: ''
            }
        }
    },

    methods: {
        saveData () {
            this.reset()


            if(this.name === '') {
                this.errors.name = 'Informe um valor para o Nome'
                return
            }

            console.log(this.name)
            console.log(this.sexo)
            console.log(this.description)
            console.log(this.agree)
        },

        reset (){
            this.errors = {
                name: ''
            }
        }


    },

}

app.component ('example-form', exampleForm)