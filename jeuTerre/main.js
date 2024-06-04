

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

const gameContainer = document.getElementById("game-container");

gameContainer.appendChild(mainCanvas)


//charger kaboom
const k = kaboom({
    canvas: mainCanvas,
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
            speed: 2,
            loop: true
        }
    }
})

loadSprite("healthBar", "healthBar.png", {
    sliceY: 12
})

loadSprite("heart", "heart.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
        tourne: {
            from:0,
            to:3,
            speed: 2,
            loop: true
        },
    },
})


//loader les sprite individuels de façon simplifiée, juste écrire le nom du fichier dans tableauSprites 
const tableauSprites = ["voitureRose","voitureBleue","furgonGris","jeepGris","voitureAzure","voitureBlanche","voitureBordeau","voitureJaune","voitureNoire","voitureRouge","motoNoire","motoRouge","motoBleue","vanBleu","bullet1","bullet2","bullet3","bullet4","bullet5","bullet6","bullet7","bullet8","bullet9","bullet10","bullet11","busPublic", "avion", "helico", "jetRouge", "jetHelico", "locomotive", "vagon", "train", "velo", "objetsNeg1", "objetsNeg2", "objetsPos1", "objetsPos2", "commandes"]

function chargerSprites(tableau){
    tableau.forEach(v =>{
        loadSprite(v,v+".png");
    })
}

chargerSprites(tableauSprites);

loadSprite("generalBackground", "generalBackground.png")

loadFont("superPixel", "assets/SuperPixel-m2L8j.ttf")

//background audio
loadSound("level0", "Fields of Ice.wav")
loadSound("contexte", "explication.WAV")
loadSound("level1", "The Way You Love.wav")
loadSound("accueil", "Title Theme.wav")
loadSound("level3", "Zero Respect.wav")
loadSound("level2", "Abandoned Hopes.wav")
loadSound("win", "victory1.WAV")
loadSound("gameOver", "Fallen in Battle.wav")

//sound effects
loadSound("playerHeal", "heal.wav")
loadSound("hurtEnemy", "menu_9.wav")
loadSound("spaceSound", "hurtEnemy.wav")

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

let gameState = {
    currentSong: null
}
    

//LEVEL0
const objsTrash0 = [
    "motoNoire",
    "motoRouge",
    "motoBleue",
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
    "assets/montagne13.jpeg",
    "assets/montagne14.jpeg",
    "assets/montagne15.jpeg",
]

//LEVEL1
const backgrounds1 = [
    "assets/ville0.jpeg",
    "assets/ville1.jpeg",
    "assets/ville3.jpeg",
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
    "voitureBleue",
    "voitureAzure",
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
    "voitureBleue",
    "vanBleu",
];
//LEVEL3

const backgrounds3 = [
    "assets/campagne1.jpeg",
    "assets/campagne3.jpeg",
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
    const musicAccueil = play("accueil", {
        loop: true
    })

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
        const spaceSound = play("spaceSound", {
            volume:1.4
        })
        musicAccueil.stop()
    });
})

go("accueil");


scene("contexte", ()=>{

    const musicContexte = play("contexte", {
        loop: true
    })

    //Définition du contenu des dialogues
    const dialogues = [
        ["slime", "Hello toi! Regarde cette pauvre planète terre... Elle était si belle avant les effets du rechauffement climatique!"],
        ["slime", "Si le rechauffement climatique continue à ce rythme, la terre va devenir invivable de façon définitive."],
        ["slime", "Pour l'instant, nous sommes encore à temps et chaque action compte! Avec ton aide et ton courage, nous pouvons déjà essayer d'intervenir dans un des domaines qui impacte le rechauffement climatique..."],
        ["slime", "...la mobilité et les transports!"],
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

    // Structure de la bulle de texte
    const textbox = add([
        rect(width() - 200, 200, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 120),
        outline(4),
    ])

    // Caractérisation du texte dans la bulle
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
        scale(5.5),
        
    ])

    onKeyPress("space", () => {
        // Bouger d'un dialogue à l'autre et quand ils sont finis, changer de scène 
        if (curDialog < dialogues.length - 1) {
            curDialog++
            updateDialog()
            slime.play("parle")
            const spaceSound = play("spaceSound", {
                volume:1.4
            })
        } else {
            go("explication")
            const spaceSound = play("spaceSound", {
                volume:1.4
            })
            musicContexte.stop()
        }
    })
    
    // Mise à jour des dialogues
    function updateDialog() {
    
        const [ char, dialog ] = dialogues[curDialog]
        txt.text = dialog
    
    }
    
    updateDialog()

    slime.play("parle")

    makeCanvas({
        width:200,
        height:200,
        background:[127,255,255],
    })

});

//Explication du fonctionnement du jeu et des enjeux liés à la mobilité et aux transports 
scene("explication", ()=>{
    musicContexte = play("contexte", {
        loop:true
    })

    //Définition du contenu des dialogues
    const dialogues1 = [
        ["slime", "Certains moyens de transports sont plus polluants que d'autres, alors que des alternatives sont disponibles pour une mobilité plus eco friendly!"],
        ["slime", "Tout d'abord, il y a les véhicules motorisés à usage individuel, pour lesquels d'autres choix sont souvent possibles!"],
        ["slime", "Ensuite, pour les grands trajets, il est aussi possible de bouger plus lentement mais en polluant moins!"],
        ["slime", "Afin d'empecher l'explosion de la terre, tu dois detruire les exemples de mobilité négative!"],
        ["slime", "Voici la liste de commandes. Tue le boss et tous les ennemis, mais évite les alliés! Si tu as besoin d'énergie, ils pourront t'aider."]

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

    const textbox = add([
        rect(width() - 200, 200, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 120),
        outline(4),
    ])

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
        scale(5.5),
    ])

    onKeyPress("space", () => {
        if (curDialog < dialogues1.length - 1) {
            curDialog++
            updateDialog()
            slime.play("parle")
            const spaceSound = play("spaceSound", {
                volume:1.4
            })
        } else {
            go("level0")
            musicContexte.stop()
            const spaceSound = play("spaceSound", {
                volume:1.4
            })
        }
    })
  
    function updateDialog() {
        const [ char, dialog ] = dialogues1[curDialog]
     
        slime.use(sprite(char))
    
        txt.text = dialog

        destroyAll("dynamicObject")

        const baseX = (width()*2/4)
        const baseY = height()/3

        if (curDialog === 0) {
     
        //Ajouter les sprite des transports pour chaque dialogue
        } else if (curDialog === 1) {
            add([
                sprite("objetsNeg1"),
                pos(width()/4 - 60, baseY - 120),
                scale(2.5),
                "dynamicObject"
            ])
            add([
                sprite("objetsPos1"),
                pos(baseX - 20, baseY - 123),
                scale(2.30),
                "dynamicObject"
            ])
            
        } else if (curDialog === 2) {
            add([
                sprite("objetsNeg2"),
                pos(width() / 4 - 60, baseY - 120),
                scale(2.5),
                "dynamicObject"
            ])
            add([
                sprite("objetsPos2"),
                pos(baseX -20, baseY - 123),
                scale(2.30),
                "dynamicObject"
            ])
           
           
        } else if (curDialog === 3) {
            add([
                sprite("objetsNeg1"),
                pos(width()/4 - 60, baseY - 120),
                scale(2.5),
                "dynamicObject"
            ])
            add([
                sprite("objetsNeg2"),
                pos(baseX - 30, baseY - 120),
                scale(2.5),
                "dynamicObject"
            ])

        } else if (curDialog ===4) {
            //mettre ici sprite de liste des commandes 
            add([
                sprite("commandes"),
                pos(width()/4 - 90, baseY - 250),
                scale(5),
                "dynamicObject"
            ]);
            add([
                text("tirer", {
                    font:"superPixel",
                    size: 30,
                    align:"center"
                }),
                pos(baseX + 26, baseY - 100)

            ]);
            add([
                text("bouger", {
                    font: "superPixel",
                    size:30,
                    align: "center"
                }),
                pos(baseX + 26, baseY)
            ])
        }
    }
    
    updateDialog()

    slime.play("parle")

});

//Le code de chaque niveau a environ la même structure et grammaire (sauf pour certains détails), donc uniquement le niveau 0 est commenté de façon plus extensive 

scene("level0", ()=>{

    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ])

    //ajout du deuxième canvas (sans la librairie de kaboom.js) à la droite du mainCanvas 
    const secondCanvas = createCanvas(640,480);
    gameContainer.appendChild(secondCanvas)


    const healthPoints = [100, 90, 80, 70, 60, 50, 30, 25, 20, 15, 10, 5, 1]

    const BULLET_SPEED = 800
    const TRASH_SPEED = 70
    const BOSS_SPEED = 75
    const PLAYER_SPEED = 480
    const BOSS_HEALTH = 20
    const OBJ_HEALTH = 1
    const PLAYER_HEALTH = 100
    const MAX_TRASH = 5;
    const MAX_ALLY = 3

    const bossName = choose(objsTrash0)

    let insaneMode = false

    const musicLevel0 = play("level0", {
        loop: true
    })

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

    //Texte qui définit le boss du niveau
    add([
        text("KILL", { 
            size: 160,
            font: "superPixel"
        }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(1),
        fixed(),
    ])

    add([
        text("THE", { 
            size: 80,
            font: "superPixel"
        }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(2),
        late(1),
        fixed(),
    ])

    add([
        text(bossName.toUpperCase(), { 
            size: 45,
            font: "superPixel"
        }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(4),
        late(2),
        fixed(),
    ])

    //Couleur du ciel (utile surtout pour le insaneMode)
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

    //ajouter le joueur et définir ses mouvements 
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
    })

    onKeyRelease("up", () => {
        insaneMode = false
    })

    //fonction qui ajoute des cercles verts quand un objet est centré par bullet 
    function addExplode(p, n, rad, size) {
        for (let i = 0; i < n; i++) {
            wait(rand(n * 0.1), () => {
                for (let i = 0; i < 2; i++) {
                    add([
                        pos(p.add(rand(vec2(-rad), vec2,(rad)))),
                        circle(4),
                        scale(1 * size, 1 * size),
                        lifespan(0.1),
                        grow(rand(48, 72) * size),
                        anchor("center"),
                        color(0,128,0,150),
                    ])
                }
            })
        }
    }

    //fonction qui définit ce qui doit se passer quand le bullet est tiré 
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
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    const SPAWN_INTERVAL = insaneMode ? 0.1 : 0.3;

    //fonction qui ajoute les éléments de mobilité positifs (définit comme "ally")
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

    //fonction qui ajoute les éléments de mobilité négatifs (définit comme "trash")
    // définition du compteur de trash sur l'écran 
    let offscreenTrashCount = 0;  

    function spawnTrash() {
        //les objets trash à l'écran ne doivent jamais dépasser MAX_TRASH
        while (get("trash").length < MAX_TRASH) {
            const name = choose(objsTrash0.filter(n => n != bossName));
            add([
                sprite(name),
                area(),
                pos(rand(0, width()), 0),
                health(OBJ_HEALTH),
                anchor("bot"),
                scale(1 / 2),
                "trash",
                "enemy",
                { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) },
                { offscreenChecked: false } 
            ]);
        }
    
        wait(SPAWN_INTERVAL, spawnTrash);
    };
    //Boucle qui se charge de mettre à jour combien d'objets négatifs ont été laissé passé et de les détruire 
    loop(1, () => {
        get("trash").forEach((t) => {
            if (t.pos.y > height() && !t.offscreenChecked) {
                offscreenTrashCount++;
                t.offscreenChecked = true;  
                destroy(t);  
                console.log("Trash went offscreen. Current count:", offscreenTrashCount);
            }
        });
        //Déplacer cette condition en dessous permet de faire marcher le jeu
        if (offscreenTrashCount > 1) {
            go("gameOver");
            musicLevel0.stop();
            // Apparemment le problème est que l'élément enlevé n'est pas le bon
            // Solutions testées mais qui ne marchent pas : 
            gameContainer.removeChild(secondCanvas);
            //gameContainer.removeChild(gameContainer.lastElementChild)
            //secondCanvas.parentNode.removeChild(secondCanvas)
            // Solution qui a l'air de marcher : 
            //gameContainer.removeChild(gameContainer.childNodes[1])
        }
    });

    //ajouter le boss 
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
    
    //Définition d'interactions pour les différents objets sur l'écran 
    on("death", "enemy", (e) => {
        destroy(e)
        shake(2)
    })

    on("hurt", "enemy", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    on("hurt", "player", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    on("death", "ally", (e) => {
        destroy(e)
        shake(2)
    })

    on("hurt", "ally", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    //Ajouter du timer 
    const timer = add([
        text(0, {
            font: "superPixel"
        }),
        pos(25, 32),
        fixed(),
        { time: 0 },
    ])

    timer.onUpdate(() => {
        timer.time += dt()
        timer.text = timer.time.toFixed(2)
    })

    //Définition des actions de collide entre les différents objets 
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
        addExplode(b.pos, 1, 24, 1)
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
        go("level1", {
            time: timer.time,
            boss: bossName,
        })
        gameContainer.removeChild(secondCanvas)
        //gameContainer.removeChild(gameContainer.childNodes[1])
        musicLevel0.stop()
    })

    //Ajout de la barre de vie du boss et lien avec ses points de vie, 
    const bossHealthbar = add([
        sprite("healthBar", { frame: 0 }), 
        pos(width() - 55, 450), 
        scale(3), 
        rotate(270),
        fixed(),
        //calcul du frame à utiliser selon les hp du boss et leur mise à jour 
        {
            max: BOSS_HEALTH,
            set(hp) {
                this.frame = Math.min(11, Math.max(0, 11 - Math.floor((hp / this.max) * 11))); 
                this.flash = true;
            },
        },
    ]);

    add([
        text(`hp de ${bossName}`, {
            font: "superPixel",
            size: 20
        }),
        pos(width() - 55, 60),
        fixed(),
        rotate(90)
    ])

    // Effet dans le insaneMode 
    bossHealthbar.onUpdate(() => {
        if (bossHealthbar.flash) {
            bossHealthbar.color = rgb(255, 255, 255);
            bossHealthbar.flash = false;
        } else {
            bossHealthbar.color = rgb(255, 255, 255); 
        }
    });

    add([
        text("UP: insane mode", { 
            width: width() / 2, 
            size: 32,
            font: "superPixel" 
        }),
        anchor("botleft"),
        pos(24, height() - 24),
    ])

    //Ajout des coeurs pour les hp du player 
    const hearts = []
    for (let i=0; i<10; i++) {
        const heart = add ([
            sprite("heart", {
                anim: "tourne"
            }), 
            pos(10, 10 + i * (32 + 5)),
            fixed()
        ]);
        hearts.push(heart);
    }

    //Mise à jour des hp du player avec les coeurs 
    function updatePlayerHealth(hp) {
        const heartsToShow = Math.ceil(hp / 10);
        hearts.forEach((heart, index) => {
            heart.hidden = index >= heartsToShow;
        });
    }

    updatePlayerHealth(PLAYER_HEALTH);

    //Définition des actions quand le player fait collision avec les différents objets 
    player.onCollide("enemy", (e) => {
        destroy(e);
        addExplode(player.pos, 1, 24, 1);
        player.hurt(10); 
        e.hurt(insaneMode ? 10 : 1);
        wait(1, () => {});
    });
    
    player.onHurt(() => {
        updatePlayerHealth(player.hp());
    });
    
    player.onDeath(() => {
        go("gameOver");
        gameContainer.removeChild(secondCanvas);
        musicLevel0.stop()
    });
    
    player.onCollide("ally", (e) => {
        destroy(e);
        player.heal(10); 
        e.hurt(insaneMode ? 10 : 1);
        wait(1, () => {});
        addExplode(player.pos, 1, 24, 1);
        let heal = play("playerHeal", {
            volume:1.5
        })
    });
    
    player.onHeal(() => {
        updatePlayerHealth(player.hp());
    });

    //Appel des fonctions
    spawnTrash()
    spawnAlly()


    //Partie du code qui gère l'ajout et la mise à jour du deuxième écran sur la droite avec les paysages qui évoluent selon les hp du player 
    const secondCtx = secondCanvas.getContext('2d');

    let backgroundIndex = 0
    backgroundIndex == hearts

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

    //Mise à jour du deuxièmeCanvas selon les hp du player avec l'utilisation d'un backgroundIndex 
    function update() {
        for (let i = 0; i < healthPoints.length; i++) {
            if (player.hp() > healthPoints[i]) {
                backgroundIndex = i;
                break;
            }
            
        }
        updateSecondCanvas();
    }
    onUpdate(update);
    
});


scene("level1", ()=>{

    const secondCanvas = createCanvas(640,480);
    gameContainer.appendChild(secondCanvas)

    const musicLevel1 = play("level1", {
        loop: true
    })

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
    const BOSS_SPEED = 80
    const PLAYER_SPEED = 480
    const BOSS_HEALTH = 10
    const OBJ_HEALTH = 1
    const PLAYER_HEALTH = 100
    const MAX_TRASH = 5;
    const MAX_ALLY = 3

    const healthPoints = [100, 90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10]

    const bossName = choose(objsTrash1)

    let insaneMode = false

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
        text("KILL", { 
            size: 160,
            font: "superPixel" 
        }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(1),
        fixed(),
    ])

    add([
        text("THE", { 
            size: 80,
            font: "superPixel"
        }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(2),
        late(1),
        fixed(),
    ])

    add([
        text(bossName.toUpperCase(), { 
            size: 45,
            font: "superPixel" 
        }),
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
    })

    onKeyRelease("up", () => {
        insaneMode = false
    })

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
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
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

    let offscreenTrashCount = 0;  

    function spawnTrash() {
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
                { offscreenChecked: false } 
            ]);
        }
    
        wait(SPAWN_INTERVAL, spawnTrash);
    };
    loop(1, () => {
        get("trash").forEach((t) => {
            if (t.pos.y > height() && !t.offscreenChecked) {
                offscreenTrashCount++;
                t.offscreenChecked = true;  
                destroy(t);  
                console.log("Trash went offscreen. Current count:", offscreenTrashCount);
                
            }
        });
        if (offscreenTrashCount > 1) {
            go("gameOver");
            musicLevel1.stop();
            gameContainer.removeChild(secondCanvas);

        }
    });

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
    })

    on("death", "ally", (e) => {
        destroy(e)
        shake(2)
    })

    on("hurt", "ally", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    on("hurt", "enemy", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    on("hurt", "player", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })


    const timer = add([
        text(0, {
            font: "superPixel"
        }),
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
        addExplode(b.pos, 1, 24, 1)
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
        go("level2", {
            time: timer.time,
            boss: bossName,
        })
        gameContainer.removeChild(secondCanvas)
        musicLevel1.stop()
    })

    const bossHealthbar = add([
        sprite("healthBar", { frame: 0 }), 
        pos(width() - 55, 450), 
        scale(3), 
        rotate(270),
        fixed(),
        {
            max: BOSS_HEALTH,
            set(hp) {
                this.frame = Math.min(11, Math.max(0, 11 - Math.floor((hp / this.max) * 11))); 
                this.flash = true;
            },
        },
    ]);
    
    add([
        text(`hp de ${bossName}`, {
            font: "superPixel",
            size:20
        }),
        pos(width() - 55, 60),
        fixed(),
        rotate(90)
    ])

    add([
        text("UP: insane mode", { 
            width: width() / 2, 
            size: 32,
            font: "superPixel"
        }),
        anchor("botleft"),
        pos(24, height() - 24),
    ])

    const hearts = []
    for (let i=0; i<10; i++) {
        const heart = add ([
            sprite("heart", {
                anim: "tourne"
            }), 
            pos(10, 10 + i * (32 + 5)),
            fixed()
        ]);
        hearts.push(heart);
    }

    function updatePlayerHealth(hp) {
        const heartsToShow = Math.ceil(hp / 10);
        hearts.forEach((heart, index) => {
            heart.hidden = index >= heartsToShow;
        });
    }
   
    updatePlayerHealth(PLAYER_HEALTH);

    player.onCollide("enemy", (e) => {
        destroy(e);
        addExplode(player.pos, 1, 24, 1);
        player.hurt(10); 
        e.hurt(insaneMode ? 10 : 1);
        wait(1, () => {});
    });
    
    player.onHurt(() => {
        updatePlayerHealth(player.hp());
    });
    
    player.onDeath(() => {
        go("gameOver");
        gameContainer.removeChild(secondCanvas);
        musicLevel1.stop()
    });
    
    player.onCollide("ally", (e) => {
        destroy(e);
        player.heal(10); 
        e.hurt(insaneMode ? 10 : 1);
        wait(1, () => {});
        addExplode(player.pos, 1, 24, 1);
        let heal = play("playerHeal", {
            volume:1.5
        })
    });
    
    player.onHeal(() => {
        updatePlayerHealth(player.hp());
    });

    spawnTrash();

    spawnAlly();

    //Partie du code pour mettre des trucs sur le deuxième canvas 
    const secondCtx = secondCanvas.getContext('2d');

    let backgroundIndex = 0
    backgroundIndex == hearts 

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
        for (let i = 0; i < healthPoints.length; i++) {
            if (player.hp() > healthPoints[i]) {
                backgroundIndex = i;
                break;
            }
        }

        updateSecondCanvas();

    };

    onUpdate(update);
});

scene("level2", ()=>{

    const secondCanvas = createCanvas(640,480);
    gameContainer.appendChild(secondCanvas)

    let musicLevel2 = play("level2", {
        loop:true
    })

    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ])

    const BULLET_SPEED = 800
    const TRASH_SPEED = 90
    const BOSS_SPEED = 85
    const PLAYER_SPEED = 480
    const ALLY_SPEED = 60
    const BOSS_HEALTH = 10
    const OBJ_HEALTH = 1
    const OBJ_ALLY_HEALTH = 10
    const PLAYER_HEALTH = 100
    const MAX_TRASH = 5;
    const MAX_ALLY = 3

    const healthPoints = [100, 95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10]

    const bossName = choose(objsTrash2)

    let insaneMode = false

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
        text("KILL", { 
            size: 160,
            font: "superPixel"
         }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(1),
        fixed(),
    ])

    add([
        text("THE", { 
            size: 80,
            font: "superPixel"
         }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(2),
        late(1),
        fixed(),
    ])

    add([
        text(bossName.toUpperCase(), { 
            size: 45,
            font: "superPixel"
         }),
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
    })

    onKeyRelease("up", () => {
        insaneMode = false
    })

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
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    const SPAWN_INTERVAL = insaneMode ? 0.1 : 0.3;

    let offscreenTrashCount = 0;  

    function spawnTrash() {
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
                { offscreenChecked: false }  
            ]);
        }
    
        wait(SPAWN_INTERVAL, spawnTrash);
    };
    loop(1, () => {
        get("trash").forEach((t) => {
            if (t.pos.y > height() && !t.offscreenChecked) {
                offscreenTrashCount++;
                t.offscreenChecked = true;  
                destroy(t);  
                console.log("Trash went offscreen. Current count:", offscreenTrashCount);
                
            }
        });
        if (offscreenTrashCount > 1) {
            go("gameOver");
            musicLevel2.stop();
            gameContainer.removeChild(secondCanvas);
        }
    });

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

    //Ajout d'un objet positif de droite à gauche sous le boss (qui prend la place du spawnAlly des niveaux 0 et 1)
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
        pietonAlly.move(ALLY_SPEED * pietonAlly.dir * (insaneMode ? 3 : 1), 0)
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
    })

    on("hurt", "enemy", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    on("hurt", "player", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    on("death", "ally", (e) => {
        destroy(e)
        shake(2)
    })

    on("hurt", "ally", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })


    const timer = add([
        text(0, {
            font: "superPixel"
        }),
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
        addExplode(b.pos, 1, 24, 1)
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
        go("level3", {
            time: timer.time,
            boss: bossName,
        })
        gameContainer.removeChild(secondCanvas)
        musicLevel2.stop()
    })

    const bossHealthbar = add([
        sprite("healthBar", { frame: 0 }), 
        pos(width() - 55, 450), 
        scale(3), 
        rotate(270),
        fixed(),
        {
            max: BOSS_HEALTH,
            set(hp) {
                this.frame = Math.min(11, Math.max(0, 11 - Math.floor((hp / this.max) * 11))); 
                this.flash = true;
            },
        },
    ]);
    
    add([
        text(`hp de ${bossName}`, {
            font: "superPixel",
            size:20
        }),
        pos(width() - 55, 60),
        fixed(),
        rotate(90)
    ])

    add([
        text("UP: insane mode", { 
            width: width() / 2, 
            size: 32,
            font: "superPixel"
         }),
        anchor("botleft"),
        pos(24, height() - 24),
    ])

    const hearts = []
    for (let i=0; i<10; i++) {
        const heart = add ([
            sprite("heart", {
                anim: "tourne"
            }), 
            pos(10, 10 + i * (32 + 5)),
            fixed()
        ]);
        hearts.push(heart);
    }

    function updatePlayerHealth(hp) {
        const heartsToShow = Math.ceil(hp / 10);
        hearts.forEach((heart, index) => {
            heart.hidden = index >= heartsToShow;
        });
    }
    
    updatePlayerHealth(PLAYER_HEALTH);

    player.onCollide("enemy", (e) => {
        destroy(e);
        addExplode(player.pos, 1, 24, 1);
        player.hurt(10); 
        e.hurt(insaneMode ? 10 : 1);
        wait(1, () => {});
    });
    
    player.onHurt(() => {
        updatePlayerHealth(player.hp());
    });
    
    player.onDeath(() => {
        go("gameOver");
        gameContainer.removeChild(secondCanvas);
        musicLevel2.stop()
    });
    
    player.onCollide("ally", (e) => {
        destroy(e);
        player.heal(10); 
        e.hurt(insaneMode ? 10 : 1);
        wait(1, () => {});
        addExplode(player.pos, 1, 24, 1);
        let heal = play("playerHeal", {
            volume:1.5
        })
    });
    
    player.onHeal(() => {
        updatePlayerHealth(player.hp());
    });

    spawnTrash()

    //Partie du code pour mettre des trucs sur le deuxième canvas 
    const secondCtx = secondCanvas.getContext('2d');

    let backgroundIndex = 0
    backgroundIndex == hearts

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
        for (let i = 0; i < healthPoints.length; i++) {
            if (player.hp() > healthPoints[i]) {
                backgroundIndex = i;
                break;
            }
        }

        updateSecondCanvas();
    }

    onUpdate(update);
});

scene("level3", () => {

    const secondCanvas = createCanvas(640,480);
    gameContainer.appendChild(secondCanvas)

    let musicLevel3 = play("level3", {
        loop:true
    })

    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ])

    const BULLET_SPEED = 800
    const TRASH_SPEED = 90
    const BOSS_SPEED = 90
    const PLAYER_SPEED = 480
    const ALLY_SPEED = 55
    const BOSS_HEALTH = 10
    const OBJ_HEALTH = 1
    const OBJ_ALLY_HEALTH = 10
    const PLAYER_HEALTH = 130
    const MAX_TRASH = 5;
    const MAX_ALLY = 3
    const CROSS_LIMIT = 2
    const DISAPPEAR_DURATION = 4

    const healthPoints = [100, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10]

    const bossName = choose(objsTrash3)

    let insaneMode = false

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
        text("KILL", { 
            size: 160,
            font: "superPixel"
         }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(1),
        fixed(),
    ])

    add([
        text("THE", { 
            size: 80,
            font: "superPixel"
         }),
        pos(width() / 2, height() / 2),
        anchor("center"),
        lifespan(2),
        late(1),
        fixed(),
    ])

    add([
        text(bossName.toUpperCase(), { 
            size: 45,
            font: "superPixel"
         }),
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
    })

    onKeyRelease("up", () => {
        insaneMode = false
    })

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
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    const SPAWN_INTERVAL = insaneMode ? 0.1 : 0.3;

    let offscreenTrashCount = 0;  

    function spawnTrash() {
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
                { offscreenChecked: false }  
            ]);
        }
    
        wait(SPAWN_INTERVAL, spawnTrash);
    };
    loop(1, () => {
        get("trash").forEach((t) => {
            if (t.pos.y > height() && !t.offscreenChecked) {
                offscreenTrashCount++;
                t.offscreenChecked = true;  
                destroy(t);  
                console.log("Trash went offscreen. Current count:", offscreenTrashCount);
                
            }
        });
        
        if (offscreenTrashCount > 1) {
                    go("gameOver");
                    musicLevel3.stop();
                    gameContainer.removeChild(secondCanvas);
                }
    });

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

    //Ajout d'un élément de mobilité positif qui bouge de droite à gauche sous le boss (remplace le spawnAlly des niveaux 0 et 1)
    const trainAlly = add([
        sprite("train"),
        area(),
        pos(width() / 2, 230),
        health(OBJ_ALLY_HEALTH),
        scale(0.35),
        anchor("top"),
        "ally",
        {
            dir: 1,
            crossCount: 0
        },
    ]);

    trainAlly.onUpdate((p) => {
        if (!trainAlly.hidden) {
            trainAlly.move(ALLY_SPEED * trainAlly.dir * (insaneMode ? 3 : 1), 0)

            //controle si le train a été vers la droite
            if (trainAlly.dir === 1 && trainAlly.pos.x >= width() - 20) {
                trainAlly.dir = -1
                trainAlly.flipX = false
                trainAlly.crossCount++
            }

            //controle si le train a été vers la gauche
            if (trainAlly.dir === -1 && trainAlly.pos.x <= 20) {
                trainAlly.dir = 1
                trainAlly.flipX = true
                trainAlly.crossCount++
            }

            //controle si le train a deja traversé l'écran 3 fois, et le faire disparaitre
            if (trainAlly.crossCount >= CROSS_LIMIT) {
                trainAlly.hidden = true; 
                trainAlly.crossCount = 0 
                wait(DISAPPEAR_DURATION, () => {
                    trainAlly.hidden = false; 
                    trainAlly.pos.x = width() / 2; 
                    trainAlly.dir = -1 
                    trainAlly.flipX = false
                });
            }
        }
        
    })

    on("death", "enemy", (e) => {
        destroy(e)
        shake(2)
    })

    on("hurt", "enemy", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    on("hurt", "player", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })

    on("death", "ally", (e) => {
        destroy(e)
        shake(2)
    })

    on("hurt", "ally", (e) => {
        shake(1)
        let shoot = play("hurtEnemy", {
            volume:0.85
        })
    })


    const timer = add([
        text(0, {
            font: "superPixel"
        }),
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
        addExplode(b.pos, 1, 24, 1)
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
        go("win", {
            time: timer.time,
            boss: bossName,
        })
        gameContainer.removeChild(secondCanvas)
        musicLevel3.stop()
    })

    const bossHealthbar = add([
        sprite("healthBar", { frame: 0 }), 
        pos(width() - 55, 450), 
        scale(3), 
        rotate(270),
        fixed(),
        {
            max: BOSS_HEALTH,
            set(hp) {
                this.frame = Math.min(11, Math.max(0, 11 - Math.floor((hp / this.max) * 11)));
                this.flash = true;
            },
        },
    ]);
    
    add([
        text(`hp de ${bossName}`, {
            font: "superPixel",
            size:20
        }),
        pos(width() - 55, 60),
        fixed(),
        rotate(90)
    ])

    add([
        text("UP: insane mode", { 
            width: width() / 2,
            size: 32,
            font: "superPixel"
         }),
        anchor("botleft"),
        pos(24, height() - 24),
    ])

    const hearts = []
    for (let i=0; i<10; i++) {
        const heart = add ([
            sprite("heart", {
                anim: "tourne"
            }), 
            pos(10, 10 + i * (32 + 5)),
            fixed()
        ]);
        hearts.push(heart);
    }

    function updatePlayerHealth(hp) {
        const heartsToShow = Math.ceil(hp / 10);
        hearts.forEach((heart, index) => {
            heart.hidden = index >= heartsToShow;
        });
    }
    
    updatePlayerHealth(PLAYER_HEALTH);

    player.onCollide("enemy", (e) => {
        destroy(e);
        addExplode(player.pos, 1, 24, 1);
        player.hurt(10); 
        e.hurt(insaneMode ? 10 : 1);
        wait(1, () => {});
    });
    
    player.onHurt(() => {
        updatePlayerHealth(player.hp());
    });
    
    player.onDeath(() => {
        go("gameOver");
        gameContainer.removeChild(secondCanvas);
        musicLevel3.stop();
    });
    
    player.onCollide("ally", (e) => {
        destroy(e);
        player.heal(10); 
        e.hurt(insaneMode ? 10 : 1);
        wait(1, () => {});
        addExplode(player.pos, 1, 24, 1);
        let heal = play("playerHeal", {
            volume:1.5
        })
    });
    
    player.onHeal(() => {
        updatePlayerHealth(player.hp());
    });

    spawnTrash()

    //Partie du code pour mettre des trucs sur le deuxième canvas 
    const secondCtx = secondCanvas.getContext('2d');

    let backgroundIndex = 0
    backgroundIndex == hearts

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
        for (let i = 0; i < healthPoints.length; i++) {
            if (player.hp() > healthPoints[i]) {
                backgroundIndex = i;
                break;
            }
        }

        updateSecondCanvas();

    }

    onUpdate(update);

});

scene("win", ()=>{
    let musicWin = play("win")
    add([
        sprite("generalBackground", {
            width: width(),
            height: height()
        }),
        pos(0,0),
        fixed()
    ]);

    const terreTournante = add([
        sprite("terre", {
            anim: "tourne",
            width: 300,
            height: 300,
        }),
        anchor("center"),
        pos(center())
    ]);
    
    add([
        text("TU AS GAGNÉ!", {
            font:"superPixel"
        }),
        anchor("center"),
        pos(center()),
        scale(1.5)
    ]);

    add([
        text("Appuie sur up pour rejouer", {
            font:"superPixel",
            width: 450  
        }),
        anchor("center"),
        pos(370, 350),
        scale(0.75)
    ])

    onKeyPress("up", ()=>{
        go("accueil")
        musicWin.stop()
        const spaceSound = play("spaceSound", {
            volume:1.4
        })
    });
});

scene("gameOver", ()=>{
    let musicGameOver = play("gameOver")
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
            width: 300,
            height: 300,
        }),
        anchor("center"),
        pos(center())
    ]);

    add([
        text("TU AS PERDU!", {
            font:"superPixel"
        }),
        anchor("center"),
        pos(center()),
        scale(1.5)
    ]);

    add([
        text("Appuie sur up pour rejouer", {
            font:"superPixel",
            width: 450  
        }),
        anchor("center"),
        pos(370, 350),
        scale(0.75)
    ])

    onKeyPress("up", ()=>{
        go("accueil")
        musicGameOver.stop()
        const spaceSound = play("spaceSound", {
            volume:1.4
        })
    });
});

//debug.inspect = true