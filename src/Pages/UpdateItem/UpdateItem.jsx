import React from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const UpdateItem = () => {
  //   const { user } = useAuth();
  const itemUpdate = useLoaderData();

  // console.table(itemUpdate);

  const {
    _id,
    nameContact,
    type,
    photo,
    title,
    description,
    category,
    location,
    date,
    email,
  } = itemUpdate;

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const nameContact = form.contactName.value;
    const type = form.postType.value;
    const photo = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const date = form.dateLostOrFound.value;

    const updatedItem = {
      email,
      nameContact,
      type,
      photo,
      title,
      description,
      category,
      location,
      date,
    };
    console.log(updatedItem);

    // send data to the server side
    fetch(`http://localhost:5000/lostAndFounds/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Item is updated Successfully !");
        form.reset();
      });
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center py-5">Here we update The Items</h2>

      <div className="w-3/4 mx-auto mb-8 bg-slate-300">
        <form onSubmit={handleForm}>
          <div className="grid lg:grid-cols-2 gap-2">
            {/* Post Type */}
            <div className="form-control mb-4 ">
              <label className="label font-semibold">Post Type</label>
              <select
                name="postType"
                defaultValue={type}
                placeholder="type"
                className="select select-bordered w-full">
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
              </select>
            </div>

            {/* Thumbnail */}
            <div className="form-control mb-4">
              <label className="label font-semibold">
                Thumbnail (Image URL)
              </label>
              <input
                type="url"
                defaultValue={photo}
                name="thumbnail"
                className="input input-bordered w-full"
                placeholder="Enter image URL"
              />
            </div>
          </div>

          {/* Title */}
          <div className="form-control mb-4">
            <label className="label font-semibold">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              className="input input-bordered w-full"
              placeholder="Enter title"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control mb-4">
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              defaultValue={description}
              className="textarea textarea-bordered w-full"
              placeholder="Enter description"
              required></textarea>
          </div>

          <div className="grid lg:grid-cols-2 gap-2">
            {/* Category */}
            <div className="form-control mb-4">
              <label className="label font-semibold">Category</label>
              <select
                name="category"
                defaultValue={category}
                className="select select-bordered w-full">
                <option value="">Select Category</option>
                <option value="Pets">Pets</option>
                <option value="Documents">Documents</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            {/* Location */}
            <div className="form-control mb-4">
              <label className="label font-semibold">Location</label>
              <input
                type="text"
                name="location"
                defaultValue={location}
                className="input input-bordered w-full"
                placeholder="Enter location"
                required
              />
            </div>
          </div>

          {/* Date Lost or Found */}
          <div className="form-control mb-4">
            <label className="label font-semibold">Date Lost/Found</label>
            <input
              type="date"
              name="dateLostOrFound"
              defaultValue={date}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-2">
            {/* Contact Information */}
            <div className="form-control mb-4">
              <label className="label font-semibold">Contact Name</label>
              <input
                type="text"
                name="contactName"
                defaultValue={nameContact}
                readOnly
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label font-semibold">Contact Email</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                readOnly
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full">
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
