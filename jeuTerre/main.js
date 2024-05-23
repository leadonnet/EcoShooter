

let div = document.createElement("div")
document.body.appendChild(div)
div.setAttribute("id", "game-container")

function createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

const mainCanvas = createCanvas(640, 480);

//const secondCanvas = createCanvas(640,480);

const gameContainer = document.getElementById("game-container");

gameContainer.appendChild(mainCanvas)


//charger kaboom
const k = kaboom({
    canvas: mainCanvas,
    //couleur du fond
    //background: [0,0,1],
    //largeur et hauteur 
    width: 640,
    height: 480,
    /*global: true,
	fullscreen: true,
	scale: 2,
	debug: true,
	clearColor: [0, 0, 0, 1]*/
});

//load assets
loadRoot("assets/");

//chargement image terre qui tourne 
loadSprite("terre", "terreAccueil2.png", {
    sliceX:10,
    sliceY:1, 
    anims: {
        tourne: {
            from: 0,
            to: 9,
            speed: 1.5,
            loop: true,
        }  
    },
});

//chargement image terre rouge contexte
loadSprite("terreRouge", "terreRouge.png", {
    sliceX: 10,
    sliceY: 1,
    anims:{
        tourneRouge: {
            from: 0,
            to: 9,
            speed: 1.5,
            loop: true,
        }
    },
});

loadSprite("player", "spritePlayer.png", {
    sliceX: 9,
    sliceY: 9,
    anims: {
        marcheArriere: {
            from: 36,
            to: 44,
            //speed: 1.5,
            loop: true,
        },
        marcheDroite: {
            from: 18,
            to: 26,
            //speed: 1.5,
            loop: true,
        },
        marcheGauche: {
            from: 54,
            to: 62,
            //speed: 1.5,
            loop: true,
        },
    },
});

loadSprite("pieton", "spriteMannequin.png", {
    sliceX : 8,
    sliceY: 1,
    anims: {
        marche : {
            from: 0,
            to: 7,
            loop: true 
        }
    }
})

loadSprite("slime", "spriteSlime.png", {
    sliceX: 1,
    sliceY: 2,
    anims: {
        parle: {
            from: 0,
            to: 1,
            speed: 1,
            loop: true
        }
    }
})

loadSprite("healthBar", "healthBar.png", {
    sliceY: 12
})


//loader les sprite individuels de façon simplifiée, juste écrire le nom du fichier dans tableauSprites 
const tableauSprites = ["voitureRose","voitureBleu","furgonGris","jeepGris","voitureAzur","voitureBlanche","voitureBordeau","voitureJaune","voitureNoire","voitureRouge","motoNoire","motoRouge","motoBleu","vanBleu","bullet1","bullet2","bullet3","bullet4","bullet5","bullet6","bullet7","bullet8","bullet9","bullet10","bullet11","busPublic", "avion", "helico", "jetRouge", "jetHelico", "locomotive", "vagon", "train", "velo", "jetR - Copie"]

function chargerSprites(tableau){
    tableau.forEach(v =>{
        loadSprite(v,v+".png");
    })
}

chargerSprites(tableauSprites);


/*loadSprite("voitureRose", "voitureRose.png");
loadSprite("voitureBleu", "voitureBleu.png");
loadSprite("furgonGris", "furgonGris.png");
loadSprite("jeepGris", "jeepGris.png");
loadSprite("voitureAzur", "voitureAzur.png");
loadSprite("voitureBlanche", "voitureBlanche.png");
loadSprite("voitureBordeau", "voitureBordeau.png");
loadSprite("voitureJaune", "voitureJaune.png");
loadSprite("voitureNoire", "voitureNoire.png");
loadSprite("voitureRouge", "voitureRouge.png");
loadSprite("motoNoire", "motoNoire.png");
loadSprite("motoRouge", "motoRouge.png");
loadSprite("motoBleu", "motoBleu.png");
loadSprite("vanBleu", "vanBleu.png");
loadSprite("bullet1", "bullet1.png");
loadSprite("bullet2", "bullet2.png");
loadSprite("bullet3", "bullet3.png");
loadSprite("bullet4", "bullet4.png");
loadSprite("bullet5", "bullet5.png");
loadSprite("bullet6", "bullet6.png");
loadSprite("bullet7", "bullet7.png");
loadSprite("bullet8", "bullet8.png");
loadSprite("bullet9", "bullet9.png");
loadSprite("bullet10", "bullet10.png");
loadSprite("bullet11", "bullet11.png");*/

loadSprite("generalBackground", "generalBackground.png")

loadFont("pixelifySans", "assets/static/PixelifySans-Regular.ttf")

loadFont("superPixel", "assets/SuperPixel-m2L8j.ttf")


//Ecrire toutes les constantes utilisées dans chaque niveau 
const objsBullet = [
    "bullet1",
    "bullet2",
    "bullet3",
    "bullet4",
    "bullet5",
    "bullet6",
    "bullet7",
    "bullet8",
    "bullet9",
    "bullet10",
    "bullet11"
];
//LEVEL0
const objsTrash0 = [
    "motoNoire",
    "motoRouge",
    "motoBleu",
];

const objsAlly0 = [
    "velo",
]

const backgrounds0 = [
    "assets/montagne1.jpeg",
    "assets/montagne2.jpeg",
    "assets/montagne3.jpeg", 
    "assets/montagne4.jpeg",
    "assets/montagne5.jpeg",
    "assets/montagne6.jpeg",
    "assets/montagne7.jpeg",
    "assets/montagne8.jpeg",
    "assets/montagne9.jpeg",
    "assets/montagne10.jpeg",
    "assets/montagne11.jpeg",
    "assets/montagne12.jpeg",
    "assets/montagne13.jpeg"
]

//LEVEL1
const backgrounds1 = [
    "assets/ville0.jpeg",
    "assets/ville1.jpeg",
    "assets/ville2.jpeg",
    "assets/ville3.jpeg",
    "assets/ville3A.jpeg",
    "assets/ville3B.jpeg",
    "assets/ville4.jpeg",
    "assets/ville4A.jpeg",
    "assets/ville5.jpeg",
    "assets/ville6.jpeg",
    "assets/ville6A.jpeg",
    "assets/ville7.jpeg",
    "assets/ville8.jpeg",
    "assets/ville9.jpeg",
]

//mettre toute la trash dans une constante
const objsTrash1 = [
    "voitureRose",
    "voitureBleu",
    "voitureAzur",
    "voitureBlanche",
    "voitureBordeau",
    "voitureJaune",
    "voitureNoire",
    "voitureRouge",
];

const objsAlly1 = [
    "busPublic",
]
//LEVEL2
backgrounds2 = [
    "assets/industrie1.jpeg",
    "assets/industrie2.jpeg",
    "assets/industrie3.jpeg",
    "assets/industrie4.jpeg",
    "assets/industrie5.jpeg",
    "assets/industrie6.jpeg",
    "assets/industrie7.jpeg",
    "assets/industrie8.jpeg",
    "assets/industrie9.jpeg",
    "assets/industrie10.jpeg",
    "assets/industrie11.jpeg",
    "assets/industrie12.jpeg",
    "assets/industrie13.jpeg",
    "assets/industrie14.jpeg",
    "assets/industrie15.jpeg",
]

const objsTrash2 = [
    "furgonGris",
    "jeepGris",
    "voitureBleu",
    "vanBleu",
];
//LEVEL3

const backgrounds3 = [
    "assets/campagne1.jpeg",
    "assets/campagne2.jpeg",
    "assets/campagne3.jpeg",
    "assets/campagne4.jpeg",
    "assets/campagne5.jpeg",
    "assets/campagne6.jpeg",
    "assets/campagne7.jpeg",
    "assets/campagne8.jpeg",
    "assets/campagne9.jpeg",
    "assets/campagne10.jpeg",
    "assets/campagne11.jpeg",
    "assets/campagne12.jpeg",
    "assets/campagne13.jpeg",
    "assets/campagne14.jpeg",
    "assets/campagne15.jpeg",
]

const objsTrash3 = [
    "avion",
    "helico",
    "jetRouge",
    //"jetHelico",
];

const objsAlly3 = [
    "locomotive",
    "vagon",
    "train"
]

//découpages en scènes
scene("accueil", ()=>{
    //gameContainer.appendChild(secondCanvas)
    //charger musique

    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ])

    //charger fond scène d'accueil
    //objet terre 
    const terreTournante = add([
        sprite("terre", {
            //comportement de l'objet terre, qui doit avoir le sprite avec caractéristique de l'animation "tourne"
            anim: "tourne",
            width: 500,
            height: 500,
        }),
        anchor("center"),
        pos(center())
    ]);

    //texte accueil 
    add([
        text("Eco Shooter", {
            width: 550,
            font:"superPixel"
        }),
        anchor("center"),
        pos(484,180),
        scale(1.5)
    ])

    //texte pour entrer dans le jeu
    add([
        text("Appuie sur espace!", {
            width: 400,
            font:"superPixel"
        }),
        anchor("center"),
        pos(370, 300),
    ]);

    const player = add([
        sprite("player"),
        area(),
        pos(width() / 2, height() - 64),
        anchor("center"),
        scale(3),
        "player",
    ])

    player.play("marcheArriere");

    onKeyPress("space", ()=>{
        go("contexte")
    });
})

go("accueil");


scene("contexte", ()=>{
    //terre rouge -> mettre la terre en feu qui tourne comme background, en partant de transition du vert vers le rouge (corriger en pixel art manuellement ?)

    const dialogues = [
        ["slime", "Hello toi! Regarde cette pauvre planète terre... Elle était si belle avant! (Appuye sur 'up' pour avancer) "],
        ["slime", "Si le rechauffement climatique continue à ce rythme, la terre va devenir invivable de façon définitive."],
        ["slime", "Pour l'instant, nous sommes encore à temps et chaque action compte! Avec ton aide et ton courage, nous pouvons déjà essayer d'intervenir dans un des domaines qui impacte le rechauffement climatique..."],
        ["slime", "...la mobilité et les transports! (Appuie sur espace pour avancer)"],
    ]

    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ])

    const terreTournanteRouge = add([
        sprite("terreRouge", {
            anim: "tourneRouge",
            width: 500,
            height: 500,
        }),
        anchor("center"),
        pos(center())
    ]);

    let curDialog = 0

    // Text bubble
    const textbox = add([
        rect(width() - 200, 200, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 120),
        outline(4),
    ])

    // Text
    const txt = add([
        text("", { 
            size: 20, 
            width: width() - 230, 
            align: "center",
            font:"superPixel"
        }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ])

    const slime = add([
        sprite("slime", {
            anim: "parle",
        }),
        anchor("center"),
        pos(center().x, 440),
        scale(4),
        
    ])

    onKeyPress("up", () => {
        // Cycle through the dialogs
        curDialog = (curDialog + 1) % dialogues.length
        updateDialog()
        slime.play("parle")
    })
    
    // Update the on screen sprite & text
    function updateDialog() {
    
        const [ char, dialog ] = dialogues[curDialog]
    
        // Use a new sprite component to replace the old one
        slime.use(sprite(char))
        // Update the dialog text
        txt.text = dialog
    
    }
    
    updateDialog()

    slime.play("parle")

    onKeyPress("space", ()=>{
        go("explication")
    });

    makeCanvas({
        width:200,
        height:200,
        background:[127,255,255],
    })

});

//Explication du fonctionnement du jeu et des enjeux liés à la mobilité et aux transports 
scene("explication", ()=>{
    const dialogues1 = [
        ["slime", "Certains moyens de transports sont plus polluants que d'autres, alors que des alternatives sont disponibles pour une mobilité plus eco friendly!"],
        ["slime", "Tout d'abord, il y a les véhicules motorisés à usage individuel, pour lesquels d'autres choix sont souvent possibles!"],
        ["slime", "Ensuite, pour les grands trajets, il est aussi possible de bouger plus lentement mais en polluant moins!"]
    ]

    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ])

    let curDialog = 0

    // Text bubble
    const textbox = add([
        rect(width() - 200, 200, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 120),
        outline(4),
    ])

    // Text
    const txt = add([
        text("", { 
            size: 20, 
            width: width() - 230, 
            align: "center",
            font:"superPixel"
        }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ])

    const slime = add([
        sprite("slime", {
            anim: "parle",
        }),
        anchor("center"),
        pos(center().x, 440),
        scale(4),
    ])

    onKeyPress("up", () => {
        // Cycle through the dialogs
        curDialog = (curDialog + 1) % dialogues1.length;
        updateDialog();
        slime.play("parle");
    })
    
    // Update the on screen sprite & text
    function updateDialog() {
    
        const [ char, dialog ] = dialogues1[curDialog]
    
        // Use a new sprite component to replace the old one
        slime.use(sprite(char))
        // Update the dialog text
        txt.text = dialog
        add([
            sprite("avion"),
            scale(0.25),
            pos(width()% 1/3, height()-20)
        ])
        add([
            sprite("jetRouge")
        ])
        add([
            sprite("jeepGris")
        ])
        add([
            sprite("motoRouge")
        ])
        add([
            sprite("voitureRose")
        ])
    }
    
    updateDialog()

    slime.play("parle")

    onKeyPress("space", ()=>{
        go("level0")
    });
});

scene("level0", ()=>{

    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ])

    const secondCanvas = createCanvas(640,480);
    gameContainer.appendChild(secondCanvas)


    const healthPoints = [100, 90, 80, 70, 60, 50, 30, 25, 20, 15, 10, 5, 1]

    const BULLET_SPEED = 800
    const TRASH_SPEED = 80
    const BOSS_SPEED = 48
    const PLAYER_SPEED = 480
    const BOSS_HEALTH = 10
    const OBJ_HEALTH = 1
    const PLAYER_HEALTH = 100
    const MAX_TRASH = 7;
    const MAX_ALLY = 3

    const bossName = choose(objsTrash0)

    let insaneMode = false

    //const music = play("OtherworldlyFoe")

    //volume(0.5)

    //fonction qui est utilisé dans la fonction addExplode 
    function grow(rate) {
        return {
            update() {
                const n = rate * dt()
                this.scale.x += n
                this.scale.y += n
            },
        }
    }

    function late(t) {
        let timer = 0
        return {
            add() {
                this.hidden = true
            },
            update() {
                timer += dt()
                if (timer >= t) {
                    this.hidden = false
                }
            },
        }
    }

    add([
        text("KILL", { size: 160 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(1),
        fixed(),
    ])

    add([
        text("THE", { size: 80 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(2),
        late(1),
        fixed(),
    ])

    add([
        text(bossName.toUpperCase(), { size: 120 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(4),
        late(2),
        fixed(),
    ])

    const sky = add([
        rect(width(), height()),
        color(0, 0, 0),
        opacity(0),
    ])

    sky.onUpdate(() => {
        if (insaneMode) {
            const t = time() * 10
            sky.color.r = wave(127, 255, t)
            sky.color.g = wave(127, 255, t + 1)
            sky.color.b = wave(127, 255, t + 2)
            sky.opacity = 1
        } else {
            sky.color = rgb(0, 0, 0)
            sky.opacity = 0
        }
    })

    //ajouter le joueur 

    let animEnCours = false;

    const player = add([
        sprite("player"),
        area(),
        pos(width() / 2, height() - 64),
        anchor("center"),
        scale(3),
        health(PLAYER_HEALTH),
        "player",
    ])

    player.play("marcheArriere");

    onKeyDown("left", () => {
        if(!animEnCours) {
            player.play("marcheGauche");
            player.flipX = false;
            animEnCours = true;
        }
        player.move(-PLAYER_SPEED, 0)
        if (player.pos.x < 0) {
            player.pos.x = width()
        }
    });

    onKeyRelease("left", () => {
        player.play("marcheArriere");
        animEnCours = false;
    }); 

    onKeyDown("right", () => {
        if(!animEnCours) {
            player.play("marcheDroite");
            player.flipX = false;
            animEnCours = true;
        }
        player.move(PLAYER_SPEED, 0)
        if (player.pos.x > width()) {
            player.pos.x = 0
        }
    });

    onKeyRelease("right", () => {
        player.play("marcheArriere");
        animEnCours = false;
    }); 

    onKeyPress("up", () => {
        insaneMode = true
        //music.speed = 2
    })

    onKeyRelease("up", () => {
        insaneMode = false
        //music.speed = 1
    })

    //fonction qui ajoute trucs blancs et shake lors du collide entre plusieurs trucs, qui est appelé plusieurs fois ensuite dans le code 
    function addExplode(p, n, rad, size) {
        for (let i = 0; i < n; i++) {
            wait(rand(n * 0.1), () => {
                for (let i = 0; i < 2; i++) {
                    add([
                        pos(p.add(rand(vec2(-rad), vec2(rad)))),
                        circle(4),
                        scale(1 * size, 1 * size),
                        lifespan(0.1),
                        grow(rand(48, 72) * size),
                        anchor("center"),
                        color(0,128,0)
                    ])
                }
            })
        }
    }

    function spawnBullet(p) {
        const name1 = choose(objsBullet)
        add([
            sprite(name1), 
            area(),
            pos(p),
            anchor("center"),
            scale(3),
            color(144, 238, 144),
            outline(4),
            move(UP, BULLET_SPEED),
            offscreen({ destroy: true }),
            // strings here means a tag
            "bullet",
        ])
    }

    onUpdate("bullet", (b) => {
        if (insaneMode) {
            b.color = rand(rgb(0, 0, 0), rgb(255, 255, 255))
        }
    })

    onKeyPress("space", () => {
        spawnBullet(player.pos.add(6, 0))
        //spawnBullet(player.pos.sub(16, 0))
        //play("shoot", {
            //volume: 0.3,
            //detune: rand(-1200, 1200),
        //})
    })

    const SPAWN_INTERVAL = insaneMode ? 0.1 : 0.3;

    function spawnAlly() {
        //console.log("Nombre de gameObject 'ally' disponibles: ", get("ally", 0.1).length)
        while (get("ally").length < MAX_ALLY) {
            const name = choose(objsAlly0);
            add([
                sprite(name),
                area(),
                pos(rand(0, width()), 0),
                health(OBJ_HEALTH),
                anchor("bot"),
                scale(0.25),
                "ally",
                { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) },
                offscreen({ destroy: true }),
            ]);
        }
        wait(SPAWN_INTERVAL, spawnAlly)
    }

    //fonction qui ajoute les trucs qui tombent du ciel, qui sont appelés Trash dans le code 
    function spawnTrash() {
        //console.log("Nombre de gameObject 'trash' disponibles: ", get("trash", 0.1).length);
        while (get("trash").length < MAX_TRASH) {
            const name = choose(objsTrash0.filter(n => n != bossName));
            add([
                sprite(name),
                area(),
                pos(rand(0, width()), 0),
                health(OBJ_HEALTH),
                anchor("bot"),
                scale(1/2),
                "trash",
                "enemy",
                { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) },
                offscreen({ destroy: true }),
            ]);
        }

        wait(SPAWN_INTERVAL, spawnTrash)
    }

    const boss = add([
        sprite(bossName),
        area(),
        pos(width() / 2, 40),
        health(BOSS_HEALTH),
        scale(1.2),
        anchor("top"),
        "enemy",
        {
            dir: 1,
        },
    ])

    on("death", "enemy", (e) => {
        destroy(e)
        shake(2)
        //addKaboom(e.pos)
    })

    on("hurt", "enemy", (e) => {
        shake(1)
        /*play("hit", {
            detune: rand(-1200, 1200),
            speed: rand(0.2, 2),
        })*/
    })

    on("hurt", "player", (e) => {
        shake(1)
    })

    on("death", "ally", (e) => {
        destroy(e)
        shake(2)
    })

    on("hurt", "ally", (e) => {
        shake(1)
    } )


    const timer = add([
        text(0),
        pos(25, 32),
        fixed(),
        { time: 0 },
    ])

    timer.onUpdate(() => {
        timer.time += dt()
        timer.text = timer.time.toFixed(2)
    })

    onCollide("bullet", "enemy", (b, e) => {
        destroy(b)
        e.hurt(insaneMode ? 10 : 1)
        addExplode(b.pos, 1, 24, 1)
    })

    onUpdate("trash", (t) => {
        t.move(0, t.speed * (insaneMode ? 5 : 1))
        if (t.pos.y - t.height > height()) {
            destroy(t)
        }
    })

    onCollide("bullet", "ally", (b,e) => {
        destroy(b)
        e.hurt(insaneMode ? 10 : 1)
        player.hurt(10)
    })

    onUpdate("ally", (t) => {
        t.move(0, t.speed * (insaneMode ? 5 : 1))
        if (t.pos.y - t.height > height()) {
            destroy(t)
        }
    })

    boss.onUpdate((p) => {
        boss.move(BOSS_SPEED * boss.dir * (insaneMode ? 3 : 1), 0)
        if (boss.dir === 1 && boss.pos.x >= width() - 20) {
            boss.dir = -1
            boss.flipX = true
        }
        if (boss.dir === -1 && boss.pos.x <= 20) {
            boss.dir = 1
            boss.flipX = false
        }
    })

    //hp = health points -> donc ici quand le boss est hurt, on met à jour son healthbar 
    boss.onHurt(() => {
        bossHealthbar.set(boss.hp())
    })

    boss.onDeath(() => {
        //music.stop()
        go("level1", {
            time: timer.time,
            boss: bossName,
        })
        gameContainer.removeChild(secondCanvas)
    })

    const bossHealthbar = add([
        sprite("healthBar", { frame: 0 }), // Start with the first frame (full health)
        pos(width() - 55, 450), // Adjust position as needed
        scale(3), 
        rotate(270),
        fixed(),
        {
            max: BOSS_HEALTH,
            set(hp) {
                // Calculate the frame based on the boss's health
                // Assuming BOSS_HEALTH is 12 or less, each HP corresponds to one frame
                // If BOSS_HEALTH is more than 12, adjust the calculation accordingly
                this.frame = Math.min(11, Math.max(0, 11 - Math.floor((hp / this.max) * 11))); 
                // frame 0 to 11 for 12 frames
                this.flash = true;
            },
        },
    ]);
    
    add([
        text(`hp de ${bossName}`),
        pos(width() - 55, 60),
        fixed(),
        rotate(90)
    ])

    // Flash effect
    bossHealthbar.onUpdate(() => {
        if (bossHealthbar.flash) {
            bossHealthbar.color = rgb(255, 255, 255);
            bossHealthbar.flash = false;
        } else {
            bossHealthbar.color = rgb(255, 255, 255); // Assuming the health bar sprite does not need color change
        }
    });

    /*const bossHealthbar = add([
        rect(24, height()),
        pos(width() - 24 , 0),
        color(107, 201, 108),
        fixed(),
        {
            max: BOSS_HEALTH,
            set(hp) {
                this.height = height() * hp / this.max
                this.flash = true
            },
        },
    ])

    bossHealthbar.onUpdate(() => {
        if (bossHealthbar.flash) {
            bossHealthbar.color = rgb(255, 255, 255)
            bossHealthbar.flash = false
        } else {
            bossHealthbar.color = rgb(127, 255, 127) 
        }
    })*/

    add([
        text("UP: insane mode", { width: width() / 2, size: 32 }),
        anchor("botleft"),
        pos(24, height() - 24),
    ])

    player.onCollide("enemy", (e) => {
        destroy(e)
        //destroy(player)
        //shake(120) 
        //play("explode")
        //music.detune = -1200
        addExplode(player.pos, 1, 24, 1)
        player.hurt(1)
        e.hurt(insaneMode ? 10 : 1)
        wait(1, () => {
            //music.paused = true
            //go("gameOver")
        });
    });

    player.onCollide("ally", (e) => {
        destroy(e)
        player.heal(1)
        e.hurt(insaneMode ? 10 : 1)
        wait(1, () => {
            //music.paused = true
        });
    })

    player.onHurt(() => {
        playerHealthbar.set(player.hp())
        console.log(player.hp())
    });

    player.onDeath(() => {
        go("gameOver")
        gameContainer.removeChild(secondCanvas)
    });

    player.onHeal(() => {
        playerHealthbar.set(player.hp())
        console.log(player.hp())
    })

    const playerHealthbar = add([
        rect(24, height()),
        pos(0,0),
        color(107, 201, 108),
        fixed(),
        {
            max: PLAYER_HEALTH,
            set(hp) {
                this.height = height() * hp / this.max
                this.flash = true
            },
        },

    ])

    playerHealthbar.onUpdate(() => {
        if (playerHealthbar.flash) {
            playerHealthbar.color = rgb(255, 255, 255)
            playerHealthbar.flash = false
        } else {
            playerHealthbar.color = rgb(127, 255, 127)
        }
        
    });

    spawnTrash()
    spawnAlly()


    //partie du code pour mettre des trucs sur le deuxième canvas 
        const secondCtx = secondCanvas.getContext('2d');

    let backgroundIndex = 0
    backgroundIndex == playerHealthbar 

    const backgroundImages = backgrounds0.map(src => {
        const img = new Image ();
        img.src = src;
        return img;
    });

    function updateSecondCanvas() {
        secondCtx.clearRect(0, 0, secondCanvas.width, secondCanvas.height);
        const backgroundImage = backgroundImages[backgroundIndex];
        if (backgroundImage.complete) {
            secondCtx.drawImage(backgroundImage, 0, 0, secondCanvas.width, secondCanvas.height);
        } else {
            backgroundImage.onload = () => {
                secondCtx.drawImage(backgroundImage, 0, 0, secondCanvas.width, secondCanvas.height);
            };
        }
    };

    function update() {
        // Update the backgroundIndex based on player health
        for (let i = 0; i < healthPoints.length; i++) {
            if (player.hp() > healthPoints[i]) {
                backgroundIndex = i;
                break;
            }
        }

        // Update the second canvas based on the current backgroundIndex
        updateSecondCanvas();
    }

    // Add the update function to Kaboom's game loop
    onUpdate(update);
    
});



//Pour utiliser duex écrans en même temps sur une scène, utiliser fonction multiboom (cf. doc kaboom)
scene("level1", ()=>{

    const secondCanvas = createCanvas(640,480);
    gameContainer.appendChild(secondCanvas)

    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ])

    const BULLET_SPEED = 800
    const TRASH_SPEED = 80
    const BOSS_SPEED = 48
    const PLAYER_SPEED = 480
    const BOSS_HEALTH = 10
    const OBJ_HEALTH = 1
    const PLAYER_HEALTH = 100
    const MAX_TRASH = 7;
    const MAX_ALLY = 3

    const healthPoints = [100, 90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10, 5, 1]

    const bossName = choose(objsTrash1)

    let insaneMode = false

    //const music = play("OtherworldlyFoe")

    //volume(0.5)

    //fonction qui est utilisé dans la fonction addExplode 
    function grow(rate) {
        return {
            update() {
                const n = rate * dt()
                this.scale.x += n
                this.scale.y += n
            },
        }
    }

    function late(t) {
        let timer = 0
        return {
            add() {
                this.hidden = true
            },
            update() {
                timer += dt()
                if (timer >= t) {
                    this.hidden = false
                }
            },
        }
    }

    add([
        text("KILL", { size: 160 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(1),
        fixed(),
    ])

    add([
        text("THE", { size: 80 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(2),
        late(1),
        fixed(),
    ])

    add([
        text(bossName.toUpperCase(), { size: 120 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(4),
        late(2),
        fixed(),
    ])

    const sky = add([
        rect(width(), height()),
        color(0, 0, 0),
        opacity(0),
    ])

    sky.onUpdate(() => {
        if (insaneMode) {
            const t = time() * 10
            sky.color.r = wave(127, 255, t)
            sky.color.g = wave(127, 255, t + 1)
            sky.color.b = wave(127, 255, t + 2)
            sky.opacity = 1
        } else {
            sky.color = rgb(0, 0, 0)
            sky.opacity = 0
        }
    })

    //ajouter le joueur 

    let animEnCours = false;

    const player = add([
        sprite("player"/* {
            anim: "marcheArriere",
        }*/),
        area(),
        pos(width() / 2, height() - 64),
        anchor("center"),
        scale(3),
        health(PLAYER_HEALTH),
        "player",
    ])

    player.play("marcheArriere");

    onKeyDown("left", () => {
        if(!animEnCours) {
            player.play("marcheGauche");
            player.flipX = false;
            animEnCours = true;
        }
        player.move(-PLAYER_SPEED, 0)
        if (player.pos.x < 0) {
            player.pos.x = width()
        }
    });

    onKeyRelease("left", () => {
        player.play("marcheArriere");
        animEnCours = false;
    }); 

    onKeyDown("right", () => {
        if(!animEnCours) {
            player.play("marcheDroite");
            player.flipX = false;
            animEnCours = true;
        }
        player.move(PLAYER_SPEED, 0)
        if (player.pos.x > width()) {
            player.pos.x = 0
        }
    });

    onKeyRelease("right", () => {
        player.play("marcheArriere");
        animEnCours = false;
    }); 

    onKeyPress("up", () => {
        insaneMode = true
        //music.speed = 2
    })

    onKeyRelease("up", () => {
        insaneMode = false
        //music.speed = 1
    })

    //fonction qui ajoute trucs blancs et shake lors du collide entre plusieurs trucs, qui est appelé plusieurs fois ensuite dans le code 
    function addExplode(p, n, rad, size) {
        for (let i = 0; i < n; i++) {
            wait(rand(n * 0.1), () => {
                for (let i = 0; i < 2; i++) {
                    add([
                        pos(p.add(rand(vec2(-rad), vec2(rad)))),
                        circle(4),
                        scale(1 * size, 1 * size),
                        lifespan(0.1),
                        grow(rand(48, 72) * size),
                        anchor("center"),
                        color(0,128,0)
                    ])
                }
            })
        }
    }

    function spawnBullet(p) {
        const name1 = choose(objsBullet)
        add([
            sprite(name1), 
            area(),
            pos(p),
            anchor("center"),
            scale(3),
            color(144, 238, 144),
            outline(4),
            move(UP, BULLET_SPEED),
            offscreen({ destroy: true }),
            // strings here means a tag
            "bullet",
        ])
    }

    onUpdate("bullet", (b) => {
        if (insaneMode) {
            b.color = rand(rgb(0, 0, 0), rgb(255, 255, 255))
        }
    })

    onKeyPress("space", () => {
        spawnBullet(player.pos.add(6, 0))
        //spawnBullet(player.pos.sub(16, 0))
        //play("shoot", {
            //volume: 0.3,
            //detune: rand(-1200, 1200),
        //})
    })

    const SPAWN_INTERVAL = insaneMode ? 0.1 : 0.3;

    function spawnAlly() {
        //console.log("Nombre de gameObject 'ally' disponibles: ", get("ally", 0.1).length)
        while (get("ally").length < MAX_ALLY) {
            const name = choose(objsAlly1);
            add([
                sprite(name),
                area(),
                pos(rand(0, width()), 0),
                health(OBJ_HEALTH),
                anchor("bot"),
                scale(1.5),
                "ally",
                { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) },
                offscreen({ destroy: true }),
            ]);
        }
        wait(SPAWN_INTERVAL, spawnAlly)
    }
    

    //fonction qui ajoute les trucs qui tombent du ciel, qui sont appelés Trash dans le code 
    function spawnTrash() {
        //console.log("Nombre de gameObject 'trash' disponibles: ", get("trash", 0.1).length);
        while (get("trash").length < MAX_TRASH) {
            const name = choose(objsTrash1.filter(n => n != bossName));
            add([
                sprite(name),
                area(),
                pos(rand(0, width()), 0),
                health(OBJ_HEALTH),
                anchor("bot"),
                scale(2),
                "trash",
                "enemy",
                { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) },
                offscreen({ destroy: true }),
            ]);
        }

        wait(SPAWN_INTERVAL, spawnTrash)
    }

    const boss = add([
        sprite(bossName),
        area(),
        pos(width() / 2, 40),
        health(BOSS_HEALTH),
        scale(4),
        anchor("top"),
        "enemy",
        {
            dir: 1,
        },
    ])

    on("death", "enemy", (e) => {
        destroy(e)
        shake(2)
        //addKaboom(e.pos)
    })

    on("death", "ally", (e) => {
        destroy(e)
        shake(2)
    })

    on("hurt", "ally", (e) => {
        shake(1)
    } )

    on("hurt", "enemy", (e) => {
        shake(1)
        /*play("hit", {
            detune: rand(-1200, 1200),
            speed: rand(0.2, 2),
        })*/
    })

    on("hurt", "player", (e) => {
        shake(1)
    })


    const timer = add([
        text(0),
        pos(25, 32),
        fixed(),
        { time: 0 },
    ])

    timer.onUpdate(() => {
        timer.time += dt()
        timer.text = timer.time.toFixed(2)
    })

    onCollide("bullet", "enemy", (b, e) => {
        destroy(b)
        e.hurt(insaneMode ? 10 : 1)
        addExplode(b.pos, 1, 24, 1)
    })

    onUpdate("trash", (t) => {
        t.move(0, t.speed * (insaneMode ? 5 : 1))
        if (t.pos.y - t.height > height()) {
            destroy(t)
        }
    })

    onCollide("bullet", "ally", (b,e) => {
        destroy(b)
        e.hurt(insaneMode ? 10 : 1)
        player.hurt(10)
    })

    onUpdate("ally", (t) => {
        t.move(0, t.speed * (insaneMode ? 5 : 1))
        if (t.pos.y - t.height > height()) {
            destroy(t)
        }
    })

    boss.onUpdate((p) => {
        boss.move(BOSS_SPEED * boss.dir * (insaneMode ? 3 : 1), 0)
        if (boss.dir === 1 && boss.pos.x >= width() - 20) {
            boss.dir = -1
            boss.flipX = true
        }
        if (boss.dir === -1 && boss.pos.x <= 20) {
            boss.dir = 1
            boss.flipX = false
        }
    })

    //hp = health points -> donc ici quand le boss est hurt, on met à jour son healthbar 
    boss.onHurt(() => {
        bossHealthbar.set(boss.hp())
    })

    boss.onDeath(() => {
        //music.stop()
        go("level2", {
            time: timer.time,
            boss: bossName,
        })
        gameContainer.removeChild(secondCanvas)
    })

    const bossHealthbar = add([
        sprite("healthBar", { frame: 0 }), // Start with the first frame (full health)
        pos(width() - 55, 450), // Adjust position as needed
        scale(3), 
        rotate(270),
        fixed(),
        {
            max: BOSS_HEALTH,
            set(hp) {
                // Calculate the frame based on the boss's health
                // Assuming BOSS_HEALTH is 12 or less, each HP corresponds to one frame
                // If BOSS_HEALTH is more than 12, adjust the calculation accordingly
                this.frame = Math.min(11, Math.max(0, 11 - Math.floor((hp / this.max) * 11))); 
                // frame 0 to 11 for 12 frames
                this.flash = true;
            },
        },
    ]);
    
    add([
        text(`hp de ${bossName}`),
        pos(width() - 55, 60),
        fixed(),
        rotate(90)
    ])

    add([
        text("UP: insane mode", { width: width() / 2, size: 32 }),
        anchor("botleft"),
        pos(24, height() - 24),
    ])

    player.onCollide("enemy", (e) => {
        destroy(e)
        //destroy(player)
        //shake(120) 
        //play("explode")
        //music.detune = -1200
        addExplode(player.pos, 1, 24, 1)
        player.hurt(1)
        e.hurt(insaneMode ? 10 : 1)
        wait(1, () => {
            //music.paused = true
            //go("gameOver")
        });
    });

    player.onHurt(() => {
        playerHealthbar.set(player.hp())
    });

    player.onDeath(() => {
        go("gameOver")
        gameContainer.removeChild(secondCanvas)
    });

    player.onCollide("ally", (e) => {
        destroy(e)
        player.heal(1)
        e.hurt(insaneMode ? 10 : 1)
        wait(1, () => {
            //music.paused = true
        });
    })

    player.onHeal(() => {
        playerHealthbar.set(player.hp())
    })

    const playerHealthbar = add([
        rect(24, height()),
        pos(0,0),
        color(107, 201, 108),
        fixed(),
        {
            max: PLAYER_HEALTH,
            set(hp) {
                this.height = height() * hp / this.max
                this.flash = true
            },
        },
    ])

    playerHealthbar.onUpdate(() => {
        if (playerHealthbar.flash) {
            playerHealthbar.color = rgb(255, 255, 255)
            playerHealthbar.flash = false
        } else {
            playerHealthbar.color = rgb(127, 255, 127)
        }
    });

    spawnTrash();

    spawnAlly();

    //partie du code pour mettre des trucs sur le deuxième canvas 
    const secondCtx = secondCanvas.getContext('2d');

    let backgroundIndex = 0
    backgroundIndex == playerHealthbar 

    const backgroundImages = backgrounds1.map(src => {
        const img = new Image ();
        img.src = src;
        return img;
    });

    function updateSecondCanvas() {
        secondCtx.clearRect(0, 0, secondCanvas.width, secondCanvas.height);
        const backgroundImage = backgroundImages[backgroundIndex];
        if (backgroundImage.complete) {
            secondCtx.drawImage(backgroundImage, 0, 0, secondCanvas.width, secondCanvas.height);
        } else {
            backgroundImage.onload = () => {
                secondCtx.drawImage(backgroundImage, 0, 0, secondCanvas.width, secondCanvas.height);
            };
        }
    };

    function update() {
        // Update the backgroundIndex based on player health
        for (let i = 0; i < healthPoints.length; i++) {
            if (player.hp() > healthPoints[i]) {
                backgroundIndex = i;
                break;
            }
        }

        // Update the second canvas based on the current backgroundIndex
        updateSecondCanvas();

    };

    // Add the update function to Kaboom's game loop
    onUpdate(update);
});

scene("level2", ()=>{

    const secondCanvas = createCanvas(640,480);
    gameContainer.appendChild(secondCanvas)

    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ])

    const BULLET_SPEED = 800
    const TRASH_SPEED = 80
    const BOSS_SPEED = 48
    const PLAYER_SPEED = 480
    const BOSS_HEALTH = 10
    const OBJ_HEALTH = 1
    const OBJ_ALLY_HEALTH = 10
    const PLAYER_HEALTH = 100
    const MAX_TRASH = 7;
    const MAX_ALLY = 3

    const healthPoints = [100, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 1]

    const bossName = choose(objsTrash2)

    let insaneMode = false

    //const music = play("OtherworldlyFoe")

    //volume(0.5)

    //fonction qui est utilisé dans la fonction addExplode 
    function grow(rate) {
        return {
            update() {
                const n = rate * dt()
                this.scale.x += n
                this.scale.y += n
            },
        }
    }

    function late(t) {
        let timer = 0
        return {
            add() {
                this.hidden = true
            },
            update() {
                timer += dt()
                if (timer >= t) {
                    this.hidden = false
                }
            },
        }
    }

    add([
        text("KILL", { size: 160 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(1),
        fixed(),
    ])

    add([
        text("THE", { size: 80 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(2),
        late(1),
        fixed(),
    ])

    add([
        text(bossName.toUpperCase(), { size: 120 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(4),
        late(2),
        fixed(),
    ])

    const sky = add([
        rect(width(), height()),
        color(0, 0, 0),
        opacity(0),
    ])

    sky.onUpdate(() => {
        if (insaneMode) {
            const t = time() * 10
            sky.color.r = wave(127, 255, t)
            sky.color.g = wave(127, 255, t + 1)
            sky.color.b = wave(127, 255, t + 2)
            sky.opacity = 1
        } else {
            sky.color = rgb(0, 0, 0)
            sky.opacity = 0
        }
    })

    //ajouter le joueur 

    let animEnCours = false;

    const player = add([
        sprite("player"/* {
            anim: "marcheArriere",
        }*/),
        area(),
        pos(width() / 2, height() - 64),
        anchor("center"),
        scale(3),
        health(PLAYER_HEALTH),
        "player",
    ])

    player.play("marcheArriere");

    onKeyDown("left", () => {
        if(!animEnCours) {
            player.play("marcheGauche");
            player.flipX = false;
            animEnCours = true;
        }
        player.move(-PLAYER_SPEED, 0)
        if (player.pos.x < 0) {
            player.pos.x = width()
        }
    });

    onKeyRelease("left", () => {
        player.play("marcheArriere");
        animEnCours = false;
    }); 

    onKeyDown("right", () => {
        if(!animEnCours) {
            player.play("marcheDroite");
            player.flipX = false;
            animEnCours = true;
        }
        player.move(PLAYER_SPEED, 0)
        if (player.pos.x > width()) {
            player.pos.x = 0
        }
    });

    onKeyRelease("right", () => {
        player.play("marcheArriere");
        animEnCours = false;
    }); 

    onKeyPress("up", () => {
        insaneMode = true
        //music.speed = 2
    })

    onKeyRelease("up", () => {
        insaneMode = false
        //music.speed = 1
    })

    //fonction qui ajoute trucs blancs et shake lors du collide entre plusieurs trucs, qui est appelé plusieurs fois ensuite dans le code 
    function addExplode(p, n, rad, size) {
        for (let i = 0; i < n; i++) {
            wait(rand(n * 0.1), () => {
                for (let i = 0; i < 2; i++) {
                    add([
                        pos(p.add(rand(vec2(-rad), vec2(rad)))),
                        circle(4),
                        scale(1 * size, 1 * size),
                        lifespan(0.1),
                        grow(rand(48, 72) * size),
                        anchor("center"),
                        color(0,128,0)
                    ])
                }
            })
        }
    }

    function spawnBullet(p) {
        const name1 = choose(objsBullet)
        add([
            sprite(name1), 
            area(),
            pos(p),
            anchor("center"),
            scale(3),
            color(144, 238, 144),
            outline(4),
            move(UP, BULLET_SPEED),
            offscreen({ destroy: true }),
            // strings here means a tag
            "bullet",
        ])
    }

    onUpdate("bullet", (b) => {
        if (insaneMode) {
            b.color = rand(rgb(0, 0, 0), rgb(255, 255, 255))
        }
    })

    onKeyPress("space", () => {
        spawnBullet(player.pos.add(6, 0))
        //spawnBullet(player.pos.sub(16, 0))
        //play("shoot", {
            //volume: 0.3,
            //detune: rand(-1200, 1200),
        //})
    })

    const SPAWN_INTERVAL = insaneMode ? 0.1 : 0.3;

    //fonction qui ajoute les trucs qui tombent du ciel, qui sont appelés Trash dans le code 
    function spawnTrash() {
        //console.log("Nombre de gameObject 'trash' disponibles: ", get("trash", 0.1).length);
        while (get("trash").length < MAX_TRASH) {
            const name = choose(objsTrash2.filter(n => n != bossName));
            add([
                sprite(name),
                area(),
                pos(rand(0, width()), 0),
                health(OBJ_HEALTH),
                anchor("bot"),
                scale(2),
                "trash",
                "enemy",
                { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) },
                offscreen({ destroy: true }),
            ]);
        }

        wait(SPAWN_INTERVAL, spawnTrash)
    }

    const boss = add([
        sprite(bossName),
        area(),
        pos(width() / 2, 40),
        health(BOSS_HEALTH),
        scale(4),
        anchor("top"),
        "enemy",
        {
            dir: 1,
        },
    ])

    const pietonAlly = add([
        sprite("pieton"),
        area(),
        pos(width() / 2, 120),
        health(OBJ_ALLY_HEALTH),
        scale(3),
        anchor("top"),
        "ally",
        {
            dir: 1,
        },
    ]);

    pietonAlly.play("marche")

    pietonAlly.onUpdate((p) => {
        pietonAlly.move(TRASH_SPEED * pietonAlly.dir * (insaneMode ? 3 : 1), 0)
        if (pietonAlly.dir === 1 && pietonAlly.pos.x >= width() - 20) {
            pietonAlly.dir = -1
            pietonAlly.flipX = true
        }
        if (pietonAlly.dir === -1 && pietonAlly.pos.x <= 20) {
            pietonAlly.dir = 1
            pietonAlly.flipX = false
        }
    })

    on("death", "enemy", (e) => {
        destroy(e)
        shake(2)
        //addKaboom(e.pos)
    })

    on("hurt", "enemy", (e) => {
        shake(1)
        /*play("hit", {
            detune: rand(-1200, 1200),
            speed: rand(0.2, 2),
        })*/
    })

    on("hurt", "player", (e) => {
        shake(1)
    })

    on("death", "ally", (e) => {
        destroy(e)
        shake(2)
    })

    on("hurt", "ally", (e) => {
        shake(1)
    } )


    const timer = add([
        text(0),
        pos(25, 32),
        fixed(),
        { time: 0 },
    ])

    timer.onUpdate(() => {
        timer.time += dt()
        timer.text = timer.time.toFixed(2)
    })

    onCollide("bullet", "enemy", (b, e) => {
        destroy(b)
        e.hurt(insaneMode ? 10 : 1)
        addExplode(b.pos, 1, 24, 1)
    })

    onCollide("bullet", "ally", (b,e) => {
        destroy(b)
        e.hurt(insaneMode ? 10 : 1)
        player.hurt(10)
    })

    onUpdate("trash", (t) => {
        t.move(0, t.speed * (insaneMode ? 5 : 1))
        if (t.pos.y - t.height > height()) {
            destroy(t)
        }
    })

    boss.onUpdate((p) => {
        boss.move(BOSS_SPEED * boss.dir * (insaneMode ? 3 : 1), 0)
        if (boss.dir === 1 && boss.pos.x >= width() - 20) {
            boss.dir = -1
            boss.flipX = true
        }
        if (boss.dir === -1 && boss.pos.x <= 20) {
            boss.dir = 1
            boss.flipX = false
        }
    })

    //hp = health points -> donc ici quand le boss est hurt, on met à jour son healthbar 
    boss.onHurt(() => {
        bossHealthbar.set(boss.hp())
    })

    boss.onDeath(() => {
        //music.stop()
        go("level3", {
            time: timer.time,
            boss: bossName,
        })
        gameContainer.removeChild(secondCanvas)
    })

    const bossHealthbar = add([
        sprite("healthBar", { frame: 0 }), // Start with the first frame (full health)
        pos(width() - 55, 450), // Adjust position as needed
        scale(3), 
        rotate(270),
        fixed(),
        {
            max: BOSS_HEALTH,
            set(hp) {
                // Calculate the frame based on the boss's health
                // Assuming BOSS_HEALTH is 12 or less, each HP corresponds to one frame
                // If BOSS_HEALTH is more than 12, adjust the calculation accordingly
                this.frame = Math.min(11, Math.max(0, 11 - Math.floor((hp / this.max) * 11))); 
                // frame 0 to 11 for 12 frames
                this.flash = true;
            },
        },
    ]);
    
    add([
        text(`hp de ${bossName}`),
        pos(width() - 55, 60),
        fixed(),
        rotate(90)
    ])

    add([
        text("UP: insane mode", { width: width() / 2, size: 32 }),
        anchor("botleft"),
        pos(24, height() - 24),
    ])

    player.onCollide("enemy", (e) => {
        destroy(e)
        //destroy(player)
        //shake(120) 
        //play("explode")
        //music.detune = -1200
        addExplode(player.pos, 1, 24, 1)
        player.hurt(1)
        e.hurt(insaneMode ? 10 : 1)
        wait(1, () => {
            //music.paused = true
            //go("gameOver")
        });
    });


    player.onHurt(() => {
        playerHealthbar.set(player.hp())
    });

    player.onDeath(() => {
        go("gameOver")
        gameContainer.removeChild(secondCanvas)
    });

    player.onCollide("ally", (e) => {
        destroy(e)
        player.heal(1)
        e.hurt(insaneMode ? 10 : 1)
        wait(1, () => {
            //music.paused = true
        });
    })

    const playerHealthbar = add([
        rect(24, height()),
        pos(0,0),
        color(107, 201, 108),
        fixed(),
        {
            max: PLAYER_HEALTH,
            set(hp) {
                this.height = height() * hp / this.max
                this.flash = true
            },
        },
    ])

    playerHealthbar.onUpdate(() => {
        if (playerHealthbar.flash) {
            playerHealthbar.color = rgb(255, 255, 255)
            playerHealthbar.flash = false
        } else {
            playerHealthbar.color = rgb(127, 255, 127)
        }
    });

    spawnTrash()

    //partie du code pour mettre des trucs sur le deuxième canvas 
    const secondCtx = secondCanvas.getContext('2d');

    let backgroundIndex = 0
    backgroundIndex == playerHealthbar 

    const backgroundImages = backgrounds2.map(src => {
        const img = new Image ();
        img.src = src;
        return img;
    });

    function updateSecondCanvas() {
        secondCtx.clearRect(0, 0, secondCanvas.width, secondCanvas.height);
        const backgroundImage = backgroundImages[backgroundIndex];
        if (backgroundImage.complete) {
            secondCtx.drawImage(backgroundImage, 0, 0, secondCanvas.width, secondCanvas.height);
        } else {
            backgroundImage.onload = () => {
                secondCtx.drawImage(backgroundImage, 0, 0, secondCanvas.width, secondCanvas.height);
            };
        }
    };

    function update() {
        // Update the backgroundIndex based on player health
        for (let i = 0; i < healthPoints.length; i++) {
            if (player.hp() > healthPoints[i]) {
                backgroundIndex = i;
                break;
            }
        }

        // Update the second canvas based on the current backgroundIndex
        updateSecondCanvas();

    }

    onUpdate(update);
});

scene("level3", () => {

    const secondCanvas = createCanvas(640,480);
    gameContainer.appendChild(secondCanvas)

    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ])

    const BULLET_SPEED = 800
    const TRASH_SPEED = 80
    const BOSS_SPEED = 48
    const PLAYER_SPEED = 480
    const BOSS_HEALTH = 10
    const OBJ_HEALTH = 1
    const OBJ_ALLY_HEALTH = 10
    const PLAYER_HEALTH = 150
    const MAX_TRASH = 7;
    const MAX_ALLY = 3

    const healthPoints = [100, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5, 1]

    const bossName = choose(objsTrash3)

    let insaneMode = false

    //const music = play("OtherworldlyFoe")

    //volume(0.5)

    //fonction qui est utilisé dans la fonction addExplode 
    function grow(rate) {
        return {
            update() {
                const n = rate * dt()
                this.scale.x += n
                this.scale.y += n
            },
        }
    }

    function late(t) {
        let timer = 0
        return {
            add() {
                this.hidden = true
            },
            update() {
                timer += dt()
                if (timer >= t) {
                    this.hidden = false
                }
            },
        }
    }

    add([
        text("KILL", { size: 160 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(1),
        fixed(),
    ])

    add([
        text("THE", { size: 80 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(2),
        late(1),
        fixed(),
    ])

    add([
        text(bossName.toUpperCase(), { size: 120 }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(4),
        late(2),
        fixed(),
    ])

    const sky = add([
        rect(width(), height()),
        color(0, 0, 0),
        opacity(0),
    ])

    sky.onUpdate(() => {
        if (insaneMode) {
            const t = time() * 10
            sky.color.r = wave(127, 255, t)
            sky.color.g = wave(127, 255, t + 1)
            sky.color.b = wave(127, 255, t + 2)
            sky.opacity = 1
        } else {
            sky.color = rgb(0, 0, 0)
            sky.opacity = 0
        }
    })

    //ajouter le joueur 

    let animEnCours = false;

    const player = add([
        sprite("player"/* {
            anim: "marcheArriere",
        }*/),
        area(),
        pos(width() / 2, height() - 64),
        anchor("center"),
        scale(3),
        health(PLAYER_HEALTH),
        "player",
    ])

    player.play("marcheArriere");

    onKeyDown("left", () => {
        if(!animEnCours) {
            player.play("marcheGauche");
            player.flipX = false;
            animEnCours = true;
        }
        player.move(-PLAYER_SPEED, 0)
        if (player.pos.x < 0) {
            player.pos.x = width()
        }
    });

    onKeyRelease("left", () => {
        player.play("marcheArriere");
        animEnCours = false;
    }); 

    onKeyDown("right", () => {
        if(!animEnCours) {
            player.play("marcheDroite");
            player.flipX = false;
            animEnCours = true;
        }
        player.move(PLAYER_SPEED, 0)
        if (player.pos.x > width()) {
            player.pos.x = 0
        }
    });

    onKeyRelease("right", () => {
        player.play("marcheArriere");
        animEnCours = false;
    }); 

    onKeyPress("up", () => {
        insaneMode = true
        //music.speed = 2
    })

    onKeyRelease("up", () => {
        insaneMode = false
        //music.speed = 1
    })

    //fonction qui ajoute trucs blancs et shake lors du collide entre plusieurs trucs, qui est appelé plusieurs fois ensuite dans le code 
    function addExplode(p, n, rad, size) {
        for (let i = 0; i < n; i++) {
            wait(rand(n * 0.1), () => {
                for (let i = 0; i < 2; i++) {
                    add([
                        pos(p.add(rand(vec2(-rad), vec2(rad)))),
                        circle(4),
                        scale(1 * size, 1 * size),
                        lifespan(0.1),
                        grow(rand(48, 72) * size),
                        anchor("center"),
                        color(0,128,0)
                    ])
                }
            })
        }
    }

    function spawnBullet(p) {
        const name1 = choose(objsBullet)
        add([
            sprite(name1), 
            area(),
            pos(p),
            anchor("center"),
            scale(3),
            color(144, 238, 144),
            outline(4),
            move(UP, BULLET_SPEED),
            offscreen({ destroy: true }),
            // strings here means a tag
            "bullet",
        ])
    }

    onUpdate("bullet", (b) => {
        if (insaneMode) {
            b.color = rand(rgb(0, 0, 0), rgb(255, 255, 255))
        }
    })

    onKeyPress("space", () => {
        spawnBullet(player.pos.add(6, 0))
        //spawnBullet(player.pos.sub(16, 0))
        //play("shoot", {
            //volume: 0.3,
            //detune: rand(-1200, 1200),
        //})
    })

    const SPAWN_INTERVAL = insaneMode ? 0.1 : 0.3;

    //fonction qui ajoute les trucs qui tombent du ciel, qui sont appelés Trash dans le code 
    function spawnTrash() {
        //console.log("Nombre de gameObject 'trash' disponibles: ", get("trash", 0.1).length);
        while (get("trash").length < MAX_TRASH) {
            const name = choose(objsTrash3.filter(n => n != bossName));
            add([
                sprite(name),
                area(),
                pos(rand(0, width()), 0),
                health(OBJ_HEALTH),
                anchor("bot"),
                scale(1/2),
                "trash",
                "enemy",
                { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) },
                offscreen({ destroy: true }),
            ]);
        }

        wait(SPAWN_INTERVAL, spawnTrash)
    }

    const boss = add([
        sprite(bossName),
        area(),
        pos(width() / 2, 40),
        health(BOSS_HEALTH),
        scale(1.2),
        anchor("top"),
        "enemy",
        {
            dir: 1,
        },
    ])

    /*if(bossName =="jetHelico") {
        sprite("avion")
        bossName == "avion"
    }*/

    /*if (bossName =="jetHelico") {
        scale(0)
        console.log("blabla")
        De base le jetHelico apparait si il a un scale(0.5), mais avec le scale 1.2 il n'apparait pas, même si je diminue ici dans un if le scale, alors que le console.log apparait dans console
    }*/

    const trainAlly = add([
        sprite("train"),
        area(),
        pos(width() / 2, 190),
        health(OBJ_ALLY_HEALTH),
        scale(0.5),
        anchor("top"),
        "ally",
        {
            dir: 1,
        },
    ]);

    trainAlly.onUpdate((p) => {
        trainAlly.move(TRASH_SPEED * trainAlly.dir * (insaneMode ? 3 : 1), 0)
        if (trainAlly.dir === 1 && trainAlly.pos.x >= width() - 20) {
            trainAlly.dir = -1
            trainAlly.flipX = false
        }
        if (trainAlly.dir === -1 && trainAlly.pos.x <= 20) {
            trainAlly.dir = 1
            trainAlly.flipX = true
        }
    })

    on("death", "enemy", (e) => {
        destroy(e)
        shake(2)
        //addKaboom(e.pos)
    })

    on("hurt", "enemy", (e) => {
        shake(1)
        /*play("hit", {
            detune: rand(-1200, 1200),
            speed: rand(0.2, 2),
        })*/
    })

    on("hurt", "player", (e) => {
        shake(1)
    })

    on("death", "ally", (e) => {
        destroy(e)
        shake(2)
    })

    on("hurt", "ally", (e) => {
        shake(1)
    } )


    const timer = add([
        text(0),
        pos(25, 32),
        fixed(),
        { time: 0 },
    ])

    timer.onUpdate(() => {
        timer.time += dt()
        timer.text = timer.time.toFixed(2)
    })

    onCollide("bullet", "enemy", (b, e) => {
        destroy(b)
        e.hurt(insaneMode ? 10 : 1)
        addExplode(b.pos, 1, 24, 1)
    })

    onCollide("bullet", "ally", (b,e) => {
        destroy(b)
        e.hurt(insaneMode ? 10 : 1)
        player.hurt(10)
    })

    onUpdate("trash", (t) => {
        t.move(0, t.speed * (insaneMode ? 5 : 1))
        if (t.pos.y - t.height > height()) {
            destroy(t)
        }
    })

    boss.onUpdate((p) => {
        boss.move(BOSS_SPEED * boss.dir * (insaneMode ? 3 : 1), 0)
        if (boss.dir === 1 && boss.pos.x >= width() - 20) {
            boss.dir = -1
            boss.flipX = false
        }
        if (boss.dir === -1 && boss.pos.x <= 20) {
            boss.dir = 1
            boss.flipX = true
        };
        
    })

    //hp = health points -> donc ici quand le boss est hurt, on met à jour son healthbar 
    boss.onHurt(() => {
        bossHealthbar.set(boss.hp())
    })

    boss.onDeath(() => {
        //music.stop()
        go("win", {
            time: timer.time,
            boss: bossName,
        })
        gameContainer.removeChild(secondCanvas)
    })

    const bossHealthbar = add([
        sprite("healthBar", { frame: 0 }), // Start with the first frame (full health)
        pos(width() - 55, 450), // Adjust position as needed
        scale(3), 
        rotate(270),
        fixed(),
        {
            max: BOSS_HEALTH,
            set(hp) {
                // Calculate the frame based on the boss's health
                // Assuming BOSS_HEALTH is 12 or less, each HP corresponds to one frame
                // If BOSS_HEALTH is more than 12, adjust the calculation accordingly
                this.frame = Math.min(11, Math.max(0, 11 - Math.floor((hp / this.max) * 11))); 
                // frame 0 to 11 for 12 frames
                this.flash = true;
            },
        },
    ]);
    
    add([
        text(`hp de ${bossName}`),
        pos(width() - 55, 60),
        fixed(),
        rotate(90)
    ])

    add([
        text("UP: insane mode", { width: width() / 2, size: 32 }),
        anchor("botleft"),
        pos(24, height() - 24),
    ])

    player.onCollide("enemy", (e) => {
        destroy(e)
        //destroy(player)
        //shake(120) 
        //play("explode")
        //music.detune = -1200
        addExplode(player.pos, 1, 24, 1)
        player.hurt(1)
        e.hurt(insaneMode ? 10 : 1)
        wait(1, () => {
            //music.paused = true
            //go("gameOver")
        });
    });


    player.onHurt(() => {
        playerHealthbar.set(player.hp())
    });

    player.onDeath(() => {
        go("gameOver")
        gameContainer.removeChild(secondCanvas)
    });

    player.onCollide("ally", (e) => {
        destroy(e)
        player.heal(1)
        e.hurt(insaneMode ? 10 : 1)
        wait(1, () => {
            //music.paused = true
        });
    })

    const playerHealthbar = add([
        rect(24, height()),
        pos(0,0),
        color(107, 201, 108),
        fixed(),
        {
            max: PLAYER_HEALTH,
            set(hp) {
                this.height = height() * hp / this.max
                this.flash = true
            },
        },
    ])

    playerHealthbar.onUpdate(() => {
        if (playerHealthbar.flash) {
            playerHealthbar.color = rgb(255, 255, 255)
            playerHealthbar.flash = false
        } else {
            playerHealthbar.color = rgb(127, 255, 127)
        }
    });

    spawnTrash()

    //partie du code pour mettre des trucs sur le deuxième canvas 
    const secondCtx = secondCanvas.getContext('2d');

    let backgroundIndex = 0
    backgroundIndex == playerHealthbar 

    const backgroundImages = backgrounds3.map(src => {
        const img = new Image ();
        img.src = src;
        return img;
    });

    function updateSecondCanvas() {
        secondCtx.clearRect(0, 0, secondCanvas.width, secondCanvas.height);
        const backgroundImage = backgroundImages[backgroundIndex];
        if (backgroundImage.complete) {
            secondCtx.drawImage(backgroundImage, 0, 0, secondCanvas.width, secondCanvas.height);
        } else {
            backgroundImage.onload = () => {
                secondCtx.drawImage(backgroundImage, 0, 0, secondCanvas.width, secondCanvas.height);
            };
        }
    };

    function update() {
        // Update the backgroundIndex based on player health
        for (let i = 0; i < healthPoints.length; i++) {
            if (player.hp() > healthPoints[i]) {
                backgroundIndex = i;
                break;
            }
        }

        // Update the second canvas based on the current backgroundIndex
        updateSecondCanvas();

    }

    onUpdate(update);

});

scene("win", ()=>{
    add([
        text("TU A GAGNÉ!!")
    ]);

    onKeyPress("space", ()=>{
        go("accueil")
    });
});

scene("gameOver", ()=>{
    add([
        text("GAME OVER")
    ]);

    onKeyPress("space", ()=>{
        go("accueil")
    });
});