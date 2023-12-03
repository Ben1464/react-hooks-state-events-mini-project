import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text && formData.category) {
      // Only submit the form if text and category are provided
      onTaskFormSubmit(formData);
      // Clear the form data after submission
      setFormData({ text: "", category: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="">Select Category</option>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;