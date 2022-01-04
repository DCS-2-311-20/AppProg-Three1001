//
// 応用プログラミング 課題11 (three1001.js) G084002020 拓殖太郎
// $Id$
//
"use strict"; // 厳格モード

// ３Ｄページ作成関数の定義
function init() {
  // 制御変数の定義
  const expressions = {
    Blink_L: 0,
  };

  // レンダラの設定
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x4080a0);
    document.getElementById("WebGL-output").appendChild(renderer.domElement);
  }

  // シーン作成
  const scene = new THREE.Scene();

  // カメラの作成
  const camera = new THREE.PerspectiveCamera(
    40, window.innerWidth/window.innerHeight, 0.1, 100);
  {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.position.set(-0.3, 1.5, -2);
    camera.lookAt(0, 1.4, 0);
  }

  // OrbitControls の導入

  // 光源の設定
  { // 環境ライト
    const light = new THREE.AmbientLight();
    light.intensity = 0.1;
    light.position.set(0, 0, 0);
    scene.add(light);
  }
  { // ポイントライト
    const light = new THREE.PointLight();
    light.position.set(0, 5, -3);
    scene.add(light);
  }

  // 背景の設定

  // ポースの設定

  // モデルの読み込み

  // 表情の設定

  // 顔のワイヤーフレーム

  // GUIの設定

  // グリッッドの表示
  const gridHelper = new THREE.GridHelper(10, 10);
  scene.add(gridHelper);
  // 座標軸の表示
  const axisHelper = new THREE.AxesHelper(5);
  scene.add(axisHelper);

  // Window サイズの変更に対応
  window.addEventListener("resize",
  ()=> {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  },false );

  // モデル視線の制御

  // 描画ループ
  function update() {
    renderer.render(scene, camera);
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

document.onload = init();
