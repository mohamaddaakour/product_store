import { useState } from "react";

const CreatePage = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    price: "",
    image: "",
  });

  // handle the changement of inputs and store them in the state
  function handleInputs(event) {
    const { name, value } = event.currentTarget;

    setFormInputs((preview) => {
      return { ...preview, [name]: value };
    });
  }

  // handle the submission of the form
  function handleSubmit(event) {
    event.preventDefault();

    if (!formInputs.name || !formInputs.price || !formInputs.price) {
      alert("Please enter the 3 fields");
      return;
    }

    console.log(`The form has been submitted ${formInputs}`);

    // we reset the form because maybe the user want to create another product
    setFormInputs({ name: "", price: "", image: "" });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        action=""
        className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-xl shadow-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="text-lg font-medium">
          Name:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter the product name"
          value={formInputs.name}
          onChange={handleInputs}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <label htmlFor="price" className="text-lg font-medium">
          Price:
        </label>
        <input
          id="price"
          type="text"
          name="price"
          placeholder="Enter product price"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={formInputs.price}
          onChange={handleInputs}
        />

        <label htmlFor="image" className="text-lg font-medium">
          Image:
        </label>
        <input
          id="image"
          type="text"
          name="image"
          placeholder="Enter product URL"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={formInputs.image}
          onChange={handleInputs}
        />

        <button
          type="submit"
          className="mt-4 bg-cyan-500 text-white font-bold py-2 rounded-md transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-700 cursor-pointer"
        >
          Create product
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
