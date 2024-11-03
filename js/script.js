const app = {
    data() {
        return {
            avance: 0,
            clase: 0,
            tareas: [
                { texto: "tarea de Frameworks", tachado: false },
                { texto: "modelar el salon", tachado: false },
                { texto: "lavar la ropa", tachado: false },
                { texto: "tarea de ingles", tachado: false },
                { texto: "terminar el pase de batalla", tachado: false },
            ],
            conteo: 0
        }
    },
    methods: {
        incrementar() {
            if (this.avance < 100) this.avance++;
            this.validar();
        },
        decrementar() {
            if (this.avance > 0) this.avance--;
            this.validar();
        },
        validar() {
            if (this.avance >= 1 && this.avance <= 40) {
                this.clase = 0;
            } else if (this.avance >= 41 && this.avance <= 70) {
                this.clase = 1;
            } else {
                this.clase = 2;
            }
        },
        tacharTexto(tarea) {
            tarea.tachado = !tarea.tachado;
            this.actualizarConteo();
        },
        actualizarConteo() {
            this.conteo = this.tareas.filter(tarea => tarea.tachado).length;
        }
    },
    computed: {
        cambioColor() {
            return {
                colorVerde: this.clase == 0,
                colorAmarillo: this.clase == 1,
                colorRojo: this.clase == 2,
            };
        },
    },
};
Vue.createApp(app).mount('#seccion');