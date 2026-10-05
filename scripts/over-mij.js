const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.z = 3;

const canvas = document.getElementById("maan-oppervlak");

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

// Licht
const light = new THREE.DirectionalLight(
    0xffffff,
    0.5
);

light.position.set(-5, 5, 5);

scene.add(light);

// een oppervlakte adden

const geometry = new THREE.SphereGeometry(
    1,
    64,
    64
);

// een texture adden
const textureLoader = new THREE.TextureLoader();

const moonTexture = textureLoader.load(
    "img/moon-texture.jpg"
);


const material = new THREE.MeshStandardMaterial({
    map: moonTexture
});

const moon = new THREE.Mesh(
    geometry,
    material
);

moon.scale.set(3, 1, 1);

moon.position.x = 0;
moon.position.y = -1.4;

scene.add(moon);

function animatie() {

    requestAnimationFrame(animatie);

    moon.rotation.x += 0.002;

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

