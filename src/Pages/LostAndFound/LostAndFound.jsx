import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const LostAndFound = () => {
  const { user } = useContext(AuthContext);

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

    const newItems = {
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
    console.log(newItems);

    // send data to the server side
    fetch("http://localhost:5000/lostAndFounds", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newItems),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("post added successfully");
        form.reset();
      });
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center font-semibold pb-5">
        Add Lost And Found Items Here!
      </h2>

      <div className="w-3/4 mx-auto mb-8 bg-slate-300">
        <form onSubmit={handleForm}>
          <div className="grid lg:grid-cols-2 gap-2">
            {/* Post Type */}
            <div className="form-control mb-4 ">
              <label className="label font-semibold">Post Type</label>
              <select name="postType" className="select select-bordered w-full">
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
              className="textarea textarea-bordered w-full"
              placeholder="Enter description"
              required></textarea>
          </div>

          <div className="grid lg:grid-cols-2 gap-2">
            {/* Category */}
            <div className="form-control mb-4">
              <label className="label font-semibold">Category</label>
              <select name="category" className="select select-bordered w-full">
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
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
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
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LostAndFound;
