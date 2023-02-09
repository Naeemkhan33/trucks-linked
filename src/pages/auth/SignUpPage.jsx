import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "../../components/utils/Container";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;

    switch (fieldName) {
      case "firstName":
        fieldValidationErrors.firstName =
          value.length === 0 ? "First name is required" : "";
        break;
      case "surname":
        fieldValidationErrors.surname =
          value.length === 0 ? "Surname is required" : "";
        break;
      case "email":
        fieldValidationErrors.email = value.match(
          /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
        )
          ? ""
          : "Email is invalid";
        break;
      case "password":
        fieldValidationErrors.password =
          value.length < 6 ? "Password must be at least 6 characters long" : "";
        break;
      case "confirmPassword":
        fieldValidationErrors.confirmPassword =
          value !== formData.password ? "Passwords do not match" : "";
        break;
      default:
        break;
    }

    setFormErrors({ ...fieldValidationErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormValid(Object.values(formErrors).every((error) => error === ""));

    if (formValid) {
      navigate("/sign-in");
    }
  };

  return (
    <main>
      <section className="py-8">
        <Container>
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
              <div>
                <div className="bg-white text-black rounded-2xl p-6">
                  <div className="flex flex-shrink-0 items-center justify-center mb-3">
                    <div className="relative">
                      <img
                        className="h-14 w-auto"
                        src="/assets/images/logo-2.png"
                        alt="logo"
                      />
                    </div>
                    <div className="ml-2">
                      <h4 className="text-orange-500 text-base font-extrabold">
                        Trucks Linked
                      </h4>
                      <p className="text-gray-300 text-xs font-bold uppercase tracking-widest">
                        Inventory
                      </p>
                    </div>
                  </div>
                  <h3 class="mb-6 text-xl xl:text-2xl text-center capitalize">
                    Join the Trucks Linked Community Today!
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-roboto">
                      <li>
                        <div className="rounded-xl bg-gray-100 border border-gray-300 px-3 py-4 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                          <label
                            htmlFor="firstName"
                            className="mb-1 block text-xs text-gray-400"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="block w-full border-0 p-1 bg-gray-100 text-black placeholder-gray-500 focus:ring-0 sm:text-sm"
                            placeholder="Name..."
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                          {formErrors.firstName.length > 0 && (
                            <span className="error mt-2 text-xs block text-red-500">
                              {formErrors.firstName}
                            </span>
                          )}
                        </div>
                      </li>
                      <li>
                        <div className="rounded-xl bg-gray-100 border border-gray-300 px-3 py-4 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                          <label
                            htmlFor="surname"
                            className="mb-1 block text-xs text-gray-400"
                          >
                            Surname
                          </label>
                          <input
                            type="text"
                            name="surname"
                            id="surname"
                            className="block w-full border-0 p-1 bg-gray-100 text-black placeholder-gray-500 focus:ring-0 sm:text-sm"
                            placeholder="Surname..."
                            required
                            value={formData.surname}
                            onChange={handleChange}
                          />
                          {formErrors.surname.length > 0 && (
                            <span className="error mt-2 text-xs block text-red-500">
                              {formErrors.surname}
                            </span>
                          )}
                        </div>
                      </li>
                      <li className="lg:col-span-2">
                        <div className="rounded-xl bg-gray-100 border border-gray-300 px-3 py-4 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                          <label
                            htmlFor="email"
                            className="mb-1 block text-xs text-gray-400"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full border-0 p-1 bg-gray-100 text-black placeholder-gray-500 focus:ring-0 sm:text-sm"
                            placeholder="email@email.com..."
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {formErrors.email.length > 0 && (
                            <span className="error mt-2 text-xs block text-red-500">
                              {formErrors.email}
                            </span>
                          )}
                        </div>
                      </li>
                      <li>
                        <div className="rounded-xl bg-gray-100 border border-gray-300 px-3 py-4 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                          <label
                            htmlFor="password"
                            className="mb-1 block text-xs text-gray-400"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full border-0 p-1 bg-gray-100 text-black placeholder-gray-500 focus:ring-0 sm:text-sm"
                            placeholder="Password..."
                            required
                            value={formData.password}
                            onChange={handleChange}
                          />
                          {formErrors.password.length > 0 && (
                            <span className="error mt-2 text-xs block text-red-500">
                              {formErrors.password}
                            </span>
                          )}
                        </div>
                      </li>
                      <li>
                        <div className="rounded-xl bg-gray-100 border border-gray-300 px-3 py-4 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                          <label
                            htmlFor="confirmPassword"
                            className="mb-1 block text-xs text-gray-400"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            className="block w-full border-0 p-1 bg-gray-100 text-black placeholder-gray-500 focus:ring-0 sm:text-sm"
                            placeholder="Conf. Password..."
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                          {formErrors.confirmPassword.length > 0 && (
                            <span className="error mt-2 text-xs block text-red-500">
                              {formErrors.confirmPassword}
                            </span>
                          )}
                        </div>
                      </li>
                      <li className="lg:col-span-2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          Sign up
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
              <div className="h-full">
                <img
                  className="block h-full w-full object-contain"
                  src="/assets/images/truck-1.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SignUpPage;
