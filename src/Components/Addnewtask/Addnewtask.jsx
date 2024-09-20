import { Link } from "react-router-dom";

const Addnewtask = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Task Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <Link
                className="text-center bg-blue-500 text-white p-2 rounded-lg"
                to="/"
              >
                Add Task
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addnewtask;
