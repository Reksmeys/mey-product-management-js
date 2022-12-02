import { Link } from "react-router-dom"

const ProductCard = (props) => {
    const {id, title, category, images, price, description} = props.product
    return(
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card h-100 border-0">
                <div className="position-relative">
                    <img src={images[0]} className="card-img-top" alt="book image" />
                
                    <div className="card-img-overlay d-flex z-index-0 p-3">
                    
                        <div className="w-100 mb-auto d-flex justify-content-end">
                            
                            <div className="icon-md bg-dark rounded-circle fs-5">
                                <a href="#" className="text-white"><i className="bi bi-book"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body px-3 bg-white">
                    <div class="d-flex justify-content-between mb-2">
                        <a href="#" class="badge bg-info bg-opacity-10 text-success text-decoration-none">{category.name}</a>
                        <a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
					</div>
                    <h5 className="card-title mb-0">
                        <Link to={`/read/${id}`} className="stretched-link text-decoration-none" state={{color: 'darkblue'}}>{title}</Link>
                    </h5>
                </div>

                <div className="card-footer pt-0 px-3 border-0 bg-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="text-success mb-4">$ {price}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard