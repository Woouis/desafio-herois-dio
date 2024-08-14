class genericHero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const herois = [
    new genericHero("Merlin", 30, "mago"),
    new genericHero("Arthur", 35, "guerreiro"),
    new genericHero("Bruce", 28, "monge"),
    new genericHero("Hattori", 22, "ninja")
];

// Fazendo o herói atacar
herois.forEach(heroi => heroi.atacar());