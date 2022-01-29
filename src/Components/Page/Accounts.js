import React, { useState } from 'react';

const Accounts = () => {
  const [data, setData] = useState({
    color: '',
    size: '',
    name: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Color  ${data.color}. My Size is ${data.size} , My Name is ${data.name} `,
    );
  };

  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Fill Form Select tent</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Color</label>
                <input
                  type="email"
                  class="form-control"
                  name="color"
                  value={data.color}
                  onChange={InputEvent}
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Make Size</label>
                <input
                  type="email"
                  class="form-control"
                  name="size"
                  value={data.size}
                  onChange={InputEvent}
                  placeholder="Enter Size"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Write Name</label>
                <input
                  type="email"
                  class="form-control"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter Name"
                />
              </div>
              <div class="form-group form-check"></div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
