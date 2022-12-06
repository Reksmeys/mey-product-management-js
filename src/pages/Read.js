import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { fetchProduct } from "../services/actions/productsActions"

const Read = () => {

    const {id} = useParams()
   
    const [product, setProduct] = useState({
        "title": "",
        "category":{
            "name": "",
        },
        "images": ["https://api.lorem.space/image/shoes?w=640&h=480&r=2450"]
    })

    useEffect(() => {
        fetchProduct(id)
        .then(res => res.json())
        .then(res => {
            setProduct(res)
        })
    })

    const navigation = useNavigate()
    const goBackHome = () => {
        navigation("/")
    }
    return(
        <>
            {
                product && <section className="pt-5">
                <div className="container" data-sticky-container="">
                    <div className="row g-4 g-sm-5">
                        <div className="col-xl-4">
                            <div data-sticky="" data-margin-top="80" data-sticky-for="992" >
                                <div className="row justify-content-center">
                                    <div className="col-md-8 col-xl-12">
                                        <div className="card border-0">
                                            
                                            <div className="rounded-3">
                                                <img src={product && product.images[0]} className="card-img-top" alt="book image" />
                                            </div>
                        
                                            <div className="card-body pb-3">
                                                
                                                <div className="text-center">
                                                    
                                                    <a href="#" className="btn btn-outline-success opacity-10 mb-2 mb-sm-0 me-00 me-sm-3"><i className="bi bi-cart3 me-2"></i>Add to Cart</a>
                                                    <a href="#" className="btn btn-light mb-0"><i className="bi bi-bookmark me-2"></i>Add wishlist</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> 
                            </div>
                        </div>
                
                        <div className="col-xl-8">
                        
                            <h1 className="mb-4">{product.title}</h1>

                            <div className="d-flex align-items-center mb-4">
                                <h2 className="me-3 mb-0">4.5</h2>
                                <div>
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                    </ul>
                                    <p className="mb-0 small mt-n1">Reviews from our buyers</p>
                                </div>
                            </div>

                            <ul className="list-inline mb-4">
                    
                                <li className="list-inline-item">
                                    <input type="radio" className="btn-check" name="options" id="option1" checked="" />
                                    <label className="btn btn-success-soft-check" for="option1">
                                        <span className="mb-2 h6 fw-light">Paperback</span>
                                        
                                        <span className="d-flex align-items-center">
                                            <span className="mb-0 h5 me-2 text-success">${product.price}</span>
                                            <span className="text-decoration-line-through fs-6 mb-0 me-2">$350</span>
                                            <span className="badge text-bg-dark mb-0">60% off</span>
                                        </span>
                                    </label>
                                </li>

                                <li className="list-inline-item">
                                    <input type="radio" className="btn-check" name="options" id="option2" />
                                    <label className="btn btn-success-soft-check" for="option2">
                                        <span className="mb-2 h6 fw-light">Compact disk</span>
                                    
                                    <span className="d-flex align-items-center">
                                        <span className="mb-0 h5 me-2 text-success">$180</span>
                                        <span className="text-decoration-line-through fs-6 mb-0 me-2">$240</span>
                                        <span className="badge text-bg-dark mb-0">40% off</span>
                                    </span>
                                    </label>
                                </li>
                            </ul>
                            
                            <h4>Description</h4>
                            <p>{product.description}</p>
                            
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item px-0">
                                            <span className="h6 fw-light"><i className="bi fa-fw bi-calendar-fill text-primary me-2"></i>Published date:</span>
                                            <span className="h6">12 Dec 2021</span>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <span className="h6 fw-light"><i className="fas fa-fw fa-book text-primary me-2"></i>Page count:</span>
                                            <span className="h6">180</span>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <span className="h6 fw-light"><i className="fas fa-fw fa-font text-primary me-2"></i>Word count:</span>
                                            <span className="h6">15879</span>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <span className="h6 fw-light"><i className="bi fa-fw bi-translate text-primary me-2"></i>Language:</span>
                                            <span className="h6">English</span>
                                        </li>
                                    </ul>
                                
                                </div>

                                <div className="col-md-6">
                                    
                                    <ul className="list-group list-group-borderless">
                                        <li className="list-group-item px-0">
                                            <span className="h6 fw-light"><i className="bi fa-fw bi-person-circle text-primary me-2"></i>Published by:</span>
                                            <span className="h6">{product.category.name}</span>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <span className="h6 fw-light"><i className="bi fa-fw bi-eye-fill text-primary me-2"></i>Visited by:</span>
                                            <span className="h6">18K</span>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <span className="h6 fw-light"><i className="bi fa-fw bi-bag-fill text-primary me-2"></i>Purchase by:</span>
                                            <span className="h6">8245</span>
                                        </li>
                                        <li className="list-group-item px-0">
                                            <span className="h6 fw-light"><i className="bi fa-fw bi-star-fill text-primary me-2"></i>Rating/Review:</span>
                                            <span className="h6">4.5 (568)</span>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>

                            <p>Crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this course is packed with practical hands-on examples that you can follow step by step.</p>
                            
                            
                            <div className="col-12">
                                <ul className="nav nav-pills nav-pills-bg-soft px-3" id="book-pills-tab" role="tablist">
                                    
                                    <li className="nav-item me-2 me-sm-4" role="presentation">
                                        <button className="nav-link mb-0 active" id="book-pills-tab-1" data-bs-toggle="pill" data-bs-target="#book-pills-1" type="button" role="tab" aria-controls="book-pills-1" aria-selected="true">Author</button>
                                    </li>
                                    <li className="nav-item me-2 me-sm-4" role="presentation">
                                        <button className="nav-link mb-0" id="book-pills-tab-2" data-bs-toggle="pill" data-bs-target="#book-pills-2" type="button" role="tab" aria-controls="book-pills-2" aria-selected="false" tabindex="-1">Reviews</button>
                                    </li>
                                    <li className="nav-item me-2 me-sm-4" role="presentation">
                                        <button className="nav-link mb-0" id="book-pills-tab-3" data-bs-toggle="pill" data-bs-target="#book-pills-3" type="button" role="tab" aria-controls="book-pills-3" aria-selected="false" tabindex="-1">Shipping Method </button>
                                    </li>
                                </ul>
                                
                                <div className="tab-content pt-4 px-3" id="book-pills-tabContent">
                                    
                                    <div className="tab-pane fade show active" id="book-pills-1" role="tabpanel" aria-labelledby="book-pills-tab-1">
                                        <div className="row g-4">
                                            <div className="col-md-3">
                                                <img src={product && product.category.image} className="rounded w-100" alt="" />
                                            </div>
                                            <div className="col-md-9">
                                                <div className="d-sm-flex justify-content-sm-between">

                                                    <div className="mb-3">
                                                        <h3 className="mb-0">Dennis Barrett</h3>
                                                        <span>Publisher</span>
                                                    </div>

                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item"> 
                                                            <a className="mb-0 me-1 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f"></i></a> 
                                                        </li>
                                                        <li className="list-inline-item"> 
                                                            <a className="mb-0 me-1 text-instagram-gradient" href="#"><i className="fab fa-fw fa-instagram"></i></a> 
                                                        </li>
                                                        <li className="list-inline-item"> 
                                                            <a className="mb-0 me-1 text-twitter" href="#"><i className="fab fa-fw fa-twitter"></i></a> 
                                                        </li>
                                                        <li className="list-inline-item"> 
                                                            <a className="mb-0 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in"></i></a> 
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <p className="mt-3 mt-sm-0 mb-0">We understand that theory is important to build a solid foundation, we understand that theory alone isn't going to get the job done so that's why this course is packed with practical hands-on examples that you can follow step by step.</p>
                                            </div>
                                        </div>
                                    </div>
                    
                                    <div className="tab-pane fade" id="book-pills-2" role="tabpanel" aria-labelledby="book-pills-tab-2">
                                        
                                        <div className="row mb-4">
                                            <h4 className="mb-4">All Reviews</h4>

                                            <div className="col-md-4 mb-3 mb-md-0">
                                                <div className="text-center">
                                                    
                                                    <h2 className="mb-0">4.5</h2>
                                                    
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                        <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                        <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                        <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                        <li className="list-inline-item me-0"><i className="fas fa-star-half-alt text-warning"></i></li>
                                                    </ul>
                                                    <p className="mb-0">(Based on 155 review)</p>
                                                </div>
                                            </div>

                                    
                                        </div>
                                
                                        <div className="row">
                                            <div className="d-md-flex my-4">
                                                
                                                <div className="avatar avatar-xl me-4 flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                                                </div>
                                                
                                                <div>
                                                    <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                                                        <h5 className="me-3 mb-0">Jacqueline Miller</h5>
                                                        
                                                        <ul className="list-inline mb-0">
                                                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="far fa-star text-warning"></i></li>
                                                        </ul>
                                                    </div>
                                                    
                                                    <p className="small mb-2">2 days ago</p>
                                                    <p className="mb-2">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>
                                                    
                                                    
                                                    <a href="#" className="text-body mb-0"><i className="fas fa-reply me-2"></i>Reply</a>
                                                </div>
                                            </div>
                                            
                                            <hr />
                                            
                                            <div className="d-md-flex my-4">
                                                
                                                <div className="avatar avatar-xl me-4 flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                                                </div>
                                            
                                                <div>
                                                    <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                                                        <h5 className="me-3 mb-0">Dennis Barrett</h5>
                                                    
                                                        <ul className="list-inline mb-0">
                                                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                            <li className="list-inline-item me-0"><i className="far fa-star text-warning"></i></li>
                                                        </ul>
                                                    </div>
                                                    
                                                    <p className="small mb-2">2 days ago</p>
                                                    <p className="mb-2">Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance. </p>
                                                    
                                                    <a href="#" className="text-body mb-0"><i className="fas fa-reply me-2"></i>Reply</a>
                                                </div>	
                                            </div>
                                        
                                            <hr />
                                        </div>
                                    
                                        <div className="mt-2">
                                            <h5 className="mb-4">Leave a Review</h5>
                                            <form className="row g-3">
                                                
                                                <div className="col-md-6">
                                                    <input type="text" className="form-control" id="inputtext" placeholder="Name" aria-label="First name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="email" className="form-control" placeholder="Email" id="inputEmail4" />
                                                </div>
                                                
                                                
                                                
                                                <div className="col-12">
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your review" rows="3"></textarea>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-primary mb-0">Post Review</button>
                                                </div>
                                            </form>
                                        </div>
                                    

                                    </div>
                                    
                                    <div className="tab-pane fade" id="book-pills-3" role="tabpanel" aria-labelledby="book-pills-tab-3">
                                        
                                        <p>As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.</p>
                                        
                                    
                                        <div className="row mb-4">
                                            <div className="col-12">
                                                <div className="bg-light p-4 rounded-3">
                                                    <div className="row g-4 text-center mx-auto">

                                                        
                                                        <div className="col-md-4 text-center">	
                                                            
                                                            <div className="icon-xl bg-dark bg-opacity-10 mx-auto rounded-circle mb-3">
                                                                <i className="far fa-fw fa-file-alt"></i>
                                                            </div>
                                                            <h6>You place your order</h6>
                                                        </div>

                                                        
                                                        <div className="col-md-4 text-center">
                                                            
                                                            <div className="icon-xl bg-dark bg-opacity-10 mx-auto rounded-circle mb-3">
                                                                <i className="fas fa-fw fa-truck-moving"></i>
                                                            </div>
                                                            
                                                            <h6>We Ship Your Order</h6>
                                                        </div>
                                                        <div className="col-md-4 text-center">
                                                            <div className="icon-xl bg-dark bg-opacity-10 mx-auto rounded-circle mb-3">
                                                                <i className="fas fa-fw fa-people-carry"></i>
                                                            </div>
                                                            <h6>Delivery</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        
                                        <p>Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.</p>
                                        <p><b>Processing time:</b> The time it takes to prepare your item(s) to ship from our warehouse. This includes preparing your items, performing quality checks, and packing for shipment.</p>
                                        <p><b>Shipping time:</b> The time for your item(s) to travel from our warehouse to your destination.</p>
                                        <p>Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.</p>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div> 
                </div>
            </section>
            }


            

        </>
    )
}

export default Read