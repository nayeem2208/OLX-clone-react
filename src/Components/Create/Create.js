import React, { Fragment, useState, useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import {useHistory} from 'react-router-dom'
import { AuthContext, FirebaseContext } from "../../store/context";

const Create = () => {
  let history=useHistory()
  let {firebase} = useContext(FirebaseContext);
  let { user } = useContext(AuthContext);
  
  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState(null);
  let date=new Date()
  let submitHandle = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url,'this is url');
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        history.push('/')
      });
    });  
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            onChange={(e) => setName(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="Name"
            val={name}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            onChange={(e) => setCategory(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="category"
            val={category}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            onChange={(e) => setPrice(e.target.value)}
            className="input"
            type="number"
            id="fname"
            name="Price"
            val={price}
          />
          <br />

          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : " "}
          ></img>

          <br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button className="uploadBtn" onClick={submitHandle}>
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
