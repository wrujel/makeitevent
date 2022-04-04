import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "./EditEvent.css";

function EditEvent() {
  const [form, setForm] = useState({
    title: "",
    about: "",
    image: "",
  });
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/events/find/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${params.id.toString()} not found`);
        navigate("/");
        return;
      }
      const form_changed = {
        title: record.title,
        about: record.about,
        image: record.image,
      };
      setForm(form_changed);
      setUrl(form_changed.image);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function uploadImage() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "makeitevent");
    data.append("cloud_name", "dwovtydne");
    await fetch("https://api.cloudinary.com/v1_1/dwovtydne/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        updateForm({ image: data.url });
      })
      .catch((err) => console.log(err));
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedEvent = {
      title: form.title,
      about: form.about,
      image: url,
    };

    await fetch(`http://localhost:5000/events/update/${params.id.toString()}`, {
      method: "POST",
      body: JSON.stringify(editedEvent),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="editEvent container mt-3">
      <h3 className="title">Update Record</h3>
      <form onSubmit={onSubmit}>
        <img src={form.image} alt="Event" className="event-image" />
        <div className="form-group">
          <label htmlFor="name">Title: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">About: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.about}
            onChange={(e) => updateForm({ about: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className=""
          />
        </div>
        <div className="button-wrapper">
          <div className="form-group">
            <button className="btn btn-primary" onClick={uploadImage}>
              Upload image
            </button>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Save changes"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditEvent;
