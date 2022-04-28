import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { createEvent } from "../../actions/event";
import { clearMessage } from "../../actions/message";

function CreateEvent(props) {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [form, setForm] = useState({
    title: "",
    about: "",
    location: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const { isCreated } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const handleCreate = (e) => {
    e.preventDefault();
    setLoading(true);

    const event = {
      title: form.title,
      about: form.about,
      location: form.location,
      username: currentUser.username,
    };
    console.log(event);

    dispatch(createEvent(event))
      .then(() => {
        props.history.push("/home");
        window.location.reload();
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isCreated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="editEvent container mt-3">
      <h3 className="title">Create Event</h3>
      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label htmlFor="name">Title: </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Location: </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={form.location}
            onChange={(e) => updateForm({ location: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">About: </label>
          <input
            type="text"
            className="form-control"
            id="about"
            value={form.about}
            onChange={(e) => updateForm({ about: e.target.value })}
          />
        </div>
        {/* <div className="form-group">
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className=""
          />
        </div> */}
        <div className="button-wrapper">
          {/* <div className="form-group">
            <button className="btn btn-primary" onClick={uploadImage}>
              Upload image
            </button>
          </div> */}
          <div className="form-group">
            <button
              type="submit"
              value="Create Event"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Create Event</span>
            </button>
          </div>
        </div>
        {message && (
          <div className="form-group message-option">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateEvent;
