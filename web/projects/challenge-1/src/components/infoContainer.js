export default function infoContainer() {
    return `
        <div class="w-auto h-auto p-2">
            <label class="fw-medium fw-semibold">Total: <span class="fw-normal" id="total-amount"></span></label>
            <br />
            <label class="fw-medium fw-semibold">Cantidad: <span class="fw-normal" id="quantity"></span></label>
            <br />
            <label class="fw-medium fw-semibold me-1">Color: </label> 
            <div class="bg-secondary rounded-circle d-inline-block" style="width: 14px; height: 14px;"></div>
        </div>
    `;
}
