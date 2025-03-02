import cerrarModal from "./cerrarModal.js";

export default function botonCerrarModal() {
  const $cerrarModal = document.createElement("button");
  $cerrarModal.className = "cerrarModal";
  $cerrarModal.addEventListener("click", (e) => cerrarModal(e));
  $cerrarModal.innerText = "X";
  return $cerrarModal;
}
