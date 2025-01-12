export default function productCard() {
    const price = 400000;
    return `
        <div class="w-auto h-auto p-2">
            <div class="card shadow text-center text-white mb-3 p-2" style="width: 18rem; background-color: #7ba33c;" >
                <figure class="figure mb-0">
                    <div class="w-100 d-flex align-items-center justify-content-center" style="height: 250px;" id="spinner-container">
                        <div class="spinner-grow text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <img 
                        src="https://my-store.msi.com/cdn/shop/files/B15C7VRGB_1_869x869.png?v=1714807391" 
                        class="figure-img rounded mb-0 d-none" style="width: 100%; height: 250px;" 
                        id="product-image" 
                    />
                </figure>
                <div class="card-body" style="margin-top: -60px;">
                    <h6 class="card-title">Laptop Gamer AMD</h6>
                    <form>
                        <div class="my-3">
                            <input type="number" class="form-control form-control-sm" id="selected-quantity" placeholder="Cantidad" step="1" min="1" max="9" pattern="[1-9]">
                        </div>
                        <div class="my-3">
                            <select class="form-select form-select-sm" aria-label="Small select example" id="selected-color">
                                <option selected disabled>Color</option>
                                <option value="#000000">Negro</option> 
                                <option value="#00008B">Azul Oscuro</option>
                                <option value="#C0C0C0">Gris Plata</option>
                            </select>
                        </div>
                        <div class="my-3">
                            <p class="text-start">Precio: <span id="price">${price.toLocaleString(
                                'en-US',
                                {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                }
                            )}</span></p>
                        </div>
                        <button type="button" class="btn btn-warning btn-sm fw-medium" id="calculate-total">Calcular Total</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}
