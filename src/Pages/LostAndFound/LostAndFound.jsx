import React from "react";

const LostAndFound = () => {
  return (
    <div className="mt-20">
      <h2>Lost and found page add</h2>

      <div className="w-3/4 mx-auto">
        <form>
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
            <label className="label font-semibold">Thumbnail (Image URL)</label>
            <input
              type="url"
              name="thumbnail"
              className="input input-bordered w-full"
              placeholder="Enter image URL"
            />
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

          {/* Contact Information */}
          <div className="form-control mb-4">
            <label className="label font-semibold">Contact Name</label>
            <input
              type="text"
              name="displayName"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label font-semibold">Contact Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
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
