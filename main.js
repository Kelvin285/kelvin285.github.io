const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

const createScene = () => {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    const camera = new BABYLON.ArcRotateCamera(
    "camera",
    Math.PI / 2.2,
    Math.PI / 3.4,
    6,
    BABYLON.Vector3.Zero(),
    scene
    );
    camera.attachControl(canvas, true);
    camera.inputs.clear();

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.9;

    const rim = new BABYLON.PointLight("rim", new BABYLON.Vector3(3, 3, 3), scene);
    rim.intensity = 0.7;
    rim.diffuse = new BABYLON.Color3(0.8, 0.9, 1.0);

    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
    const mat = new BABYLON.StandardMaterial("mat", scene);
    mat.diffuseColor = new BABYLON.Color3(0.95, 0.7, 0.1);
    mat.emissiveColor = new BABYLON.Color3(0.2, 0.15, 0.05);
    mat.specularColor = new BABYLON.Color3(0.9, 0.9, 0.95);
    box.material = mat;

    scene.registerBeforeRender(() => {
    const t = performance.now() * 0.0006;
    box.rotation.y = t;
    box.rotation.x = t * 0.6;
    });

    return scene;
};

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener("resize", () => {
    engine.resize();
});