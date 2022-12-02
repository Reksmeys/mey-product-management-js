
const CreateProduct = () => {
    return(
        <>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" placeholder="product title" />
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="text" class="form-control" id="price" placeholder="$230" />
            </div>

            <div class="mb-3">
            <label for="description" class="form-label">Product Description</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
            </div>
        </>
    )
}

export default CreateProduct