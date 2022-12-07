import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createProduct,
  fetchCategories,
  uploadFile,
} from "../services/actions/productsActions";
import "./../utils/styles/Default.css";

const InsertProduct = () => {
  const navigation = useNavigate();
  const [msg, setMsg] = useState("");
  const [source, setSource] = useState("");
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    categoryId: 1,
    images: ["https://api.lorem.space/image/watch?w=640&h=480&r=9735"],
  });

  useEffect(() => {
    fetchCategories()
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  const onChangeHandler = (e) => {
    // destructuring
    console.log(e);
    const { name, value } = e.target;
    setProduct((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    console.log(product);
  };
  
  

  const onChangeFileHandler = (e) => {
    console.log(e.target.files[0].name);
    setSource(e.target.files[0]);
  };

  const submitProduct = () => {
    // upload to api
    const formData = new FormData();
    formData.append("file", source, source.name);
    uploadFile(formData).then((res) => {
      console.log(res.data);
      product.images = [res.data.location];
      console.log('product', product);
      createProduct(product)
      .then((res) => {
        setMsg("Insert Sucess");
        alert("Insert Sucess");
        res.json()
        console.log(res.json());
      })
      .then((response) => navigation("/"));
    });
    
  };

  return (
    <>
      <h1 className="h2 text-center mt-4">បញ្ចូលទិន្នន័យទំនិញ</h1>
      <div style={{ width: "50%", margin: "auto", marginTop: 30 }}>
        <div className="row">
          <div className="col-md-8">
            <div class="mb-3">
              <label for="title" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                name="title"
                value={product.title}
                placeholder="product title"
                onChange={onChangeHandler}
              />
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">
                Price
              </label>
              <input
                type="text"
                class="form-control"
                name="price"
                value={product.price}
                placeholder="$230"
                onChange={onChangeHandler}
              />
            </div>

            <div className="mb-3">
              <label for="price" class="form-label">
                Price
              </label>
              <select
                class="form-select"
                name="categoryId"
                aria-label="Default select example"
                onChange={onChangeHandler}
              >
                <option selected>Choose Category</option>
                {categories &&
                  categories.map((category) => (
                    <option value={category.id}>{category.name}</option>
                  ))}
              </select>
            </div>

            <div class="mb-3">
              <label for="description" class="form-label">
                Product Description
              </label>
              <textarea
                class="form-control"
                name="description"
                value={product.description}
                rows="3"
                onChange={onChangeHandler}
              ></textarea>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center" style={{border: '3px dotted darkblue', height: 300}}>
              <img src={source && URL.createObjectURL(source)} style={{height: 260}}/>
              <input type="file" onChange={onChangeFileHandler} />
            </div>
          </div>
        </div>

        {/* upload file */}

        <div class="d-grid gap-2 col-12 mx-auto">
          <button class="btn btn-primary" type="button" onClick={submitProduct}>
            Create Product
          </button>
        </div>
      </div>
    </>
  );
};

export default InsertProduct;
