async function setupCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  const video = document.getElementById("video");
  video.style.display = "block";
  video.srcObject = stream;
  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve();
    };
  });
}

async function start() {
  await setupCamera();
  document.getElementById("btn").style.display = "none";
  const deviceInfos = await navigator.mediaDevices.enumerateDevices();
  // deviceInfos.forEach((deviceInfo) => {
  //   console.log(deviceInfo.kind, deviceInfo.label, deviceInfo.deviceId);
  // });
  // const constraints = await navigator.mediaDevices.getSupportedConstraints();
  // for (const [key, value] of Object.entries(constraints)) {
  //   console.log(`${key}: ${value}`);
  // }
  // navigator.mediaDevices.ondevicechange = function (event) {
  //   console.log("ondevicechange", event);
  // };
}

window.addEventListener("load", async () => {
  if (!navigator.permissions || !navigator.permissions.query) {
    console.log(
      "this browser doesn't have permission API",
      navigator.userAgent
    );
  }
  if (!navigator.mediaDevices.getDisplayMedia) {
    console.log(
      "this browser doesn't have getDisplayMedia",
      navigator.userAgent
    );
  }
  const deviceInfos = await navigator.mediaDevices.enumerateDevices();
  // deviceInfos.forEach((deviceInfo) => {
  //   console.log(deviceInfo.kind, deviceInfo.label, deviceInfo.deviceId);
  // });
});
