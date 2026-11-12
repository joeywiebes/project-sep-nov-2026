const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.z = 3;

const canvas = document.getElementById("wereldbol");

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
});

renderer.setClearColor(0x000000, 0)

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setClearColor(0x000000, 0);

// Licht
const light = new THREE.DirectionalLight(
    0xffffff,
    0.8
);

light.position.set(-5, 5, 5);

scene.add(light);

const moonLight = new THREE.DirectionalLight(
    0xffffff,
    0.5
);

moonLight.position.set(5, -5, 5);

scene.add(moonLight);

// Aarde
const geometry = new THREE.SphereGeometry(
    1.3,
    64,
    64
);


// Wereldkaart op de bol
const textureLoader = new THREE.TextureLoader();

const earthTexture = textureLoader.load(
    "img/the-world.png"
);


const material = new THREE.MeshStandardMaterial({
    map: earthTexture
});

const aarde = new THREE.Mesh(
    geometry,
    material
);

aarde.position.x = 1.9;
aarde.position.y = -0.9;

scene.add(aarde);

// maan adden
const geometry2 = new THREE.SphereGeometry(
    0.5,
    64,
    64
);

const texturemoonLoader = new THREE.TextureLoader();

const moonTexture = texturemoonLoader.load(
    "img/moon-texture.jpg"
);

const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture
});

// const material2 = new THREE.MeshStandardMaterial({
//     color: 0xff0000
// });

const moon = new THREE.Mesh(
    geometry2,
    moonMaterial
);

moon.position.x = -2.3;
moon.position.y = 0.95;

scene.add(moon);

// Animatie
function animatie() {

    requestAnimationFrame(animatie);

    aarde.rotation.y += 0.002;
    moon.rotation.y += 0.002;

    renderer.render(
        scene,
        camera
    );
}

animatie();


// Scherm aanpassen
window.addEventListener("resize", () => {

    camera.aspect =
        window.innerWidth /
        window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});

