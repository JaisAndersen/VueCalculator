Vue.createApp({
    data() {
        return{
            number1: 0,
            number2: 0,
            result: 0,
            operator: "+"
        }
    },
    methods: {
        Calculate() {
            if(this.operator == "+"){
            this.add()
            }
            else if(this.operator == "-"){
            this.subtract()
            }
            else if(this.operator == "*"){
            this.multiply()
            }
            else if(this.operator == "/"){
            this.divide()
            }
        },
        add(){
            this.result = this.number1 + this.number2
        },
        subtract(){
            this.result = this.number1 - this.number2
        },
        multiply(){
            this.result = this.number1 * this.number2
        },
        divide(){
            this.result = this.number1 / this.number2
        }
    }
}).mount('#app')
