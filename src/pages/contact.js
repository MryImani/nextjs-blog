import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <section className="px-4 mt-8 lg:px-36 lg:py-8 md:w-2/3  md:mx-auto ">
      <h1 className="text-3xl font-bold">How can i help you?</h1>
      <form className="mt-12" onSubmit={handleSubmit}>
        <div className="form-controls grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="form-control flex flex-col">
            <label className=" text-slate-800 font-bold mb-4" htmlFor="name">
              Your name
            </label>
            <input
              className="flex-1 text-inherit rounded-xl  border-none p-2"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control flex flex-col">
            <label className=" text-slate-800 font-bold mb-4" htmlFor="email">
              Your email
            </label>
            <input
              className="flex-1 text-inherit rounded-xl  border-none p-2"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control md:col-span-2 flex flex-col">
            <label className=" text-slate-800 font-bold mb-4" htmlFor="message">
              Your message
            </label>
            <textarea
              className="flex-1 text-inherit rounded-xl  border-none p-2"
              rows={5}
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-action md:col-span-2 text-center">
            <button className="bg-black text-slate-400 font-semibold rounded-xl  cursor-pointer px-4 py-3 hover:bg-slate-900 hover:text-slate-100">
              Send message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
