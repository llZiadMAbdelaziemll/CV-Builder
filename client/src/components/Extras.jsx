import React from "react";

const Extras = ({ formData, setFormData }) => {
  // extra_1: "",
  //   extra_2: "",
  return (
    <div className="container d-flex ">
      <form className="row w-100 g-3">
        
        <div className="col-12">
          <label for="name" className="form-label ps-3 pt-3">
            Languages
          </label>
          <input
            type="text"
            className="form-control ms-3 pt-1"
            id="name"
            value={formData.extra_1}
            onChange={(e) => {
              setFormData({ ...formData, extra_1: e.target.value });
            }}
          />
        </div>

        <hr />
        
        <div className="col-12">
          <label for="name" className="form-label ps-3">
            Hobbies
          </label>
          <input
            type="text"
            className="form-control ms-3 pt-1"
            id="name"
            value={formData.extra_2}
            onChange={(e) => {
              setFormData({ ...formData, extra_2: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Extras;