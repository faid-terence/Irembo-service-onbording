import React, { useState, useRef } from "react";
import "../styles/Application.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ApplicationPage = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    applicantCitizenship: "",
    identificationnumber: "",
    passport: "",
    names: "",
    surname: "",
    phonenumber: "",
    email: "",
    address: "",
    businessType: "",
    businessname: "",
    businessTIN: "",
    registrationDate: "",
    businessAddress: "",
    importationPurpose: "",
    productCategory: "",
    unitOfMeasurement: "",
    weight: "",
    quantity: "",
    productDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [errors, setErrors] = useState({});

  const sendEmail = () => {
    const currentForm = formRef.current;
    const messageBody = `
      Applicant Citizenship: ${formData.applicantCitizenship}
      Identification Document Number: ${formData.identificationnumber}
      Passport Number: ${formData.passport}
      Other Names: ${formData.names}
      Phone Number: ${formData.phonenumber}
      Email: ${formData.email}
      Location: ${formData.address}
      Business Type: ${formData.businessType}
      Company Name: ${formData.businessname}
      TIN Number: ${formData.businessaddress}
      Registration Date: ${formData.registrationDate}
      Business Address: ${formData.businessAddress}
      Purpose of Importation: ${formData.importationPurpose}
      Product Category: ${formData.productCategory}
      Unit of Measurement: ${formData.unitOfMeasurement}
      Weight: ${formData.weight}
      Quantity of Product: ${formData.quantity}
      Description of Product: ${formData.productDescription}
    `;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        currentForm,
        {
          publicKey: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
          message: messageBody,
        }
      )
      .then(
        () => {
          toast.success("Application sent successfully");
        },
        (error) => {
          toast.error("Sorry, we could not send your application");
        }
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data
    const formErrors = {};
    if (!formData.identificationnumber) {
      formErrors.identificationnumber =
        "Sorry, we can’t find your identification data from NIDA system. Please contact NIDA for more details.";
    }
    if (!formData.businessTIN) {
      formErrors.businessDetailsTinNumber = "Please provide a valid TIN number";
    }
    if (!formData.quantity || formData.quantity <= 0) {
      formErrors.productDetailsQuantity =
        "Please provide a number greater than zero for quantity";
    }
    if (!formData.weight) {
      formErrors.productDetailsWeight =
        "Please provide a number greater than zero";
    }
    if (!formData.productDescription) {
      formErrors.productDetailsDescription =
        "Please provide a valid description";
    }
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      // Send email
      sendEmail();
      toast.success("Thank for Applying , We will get back to you soon!");
      setFormData({
        applicantCitizenship: "",
        identificationnumber: "",
        passport: "",
        names: "",
        surname: "",
        phonenumber: "",
        email: "",
        address: "",
        businessType: "",
        businessname: "",
        businessTIN: "",
        registrationDate: "",
        businessAddress: "",
        importationPurpose: "",
        productCategory: "",
        unitOfMeasurement: "",
        weight: "",
        quantity: "",
        productDescription: "",
      });
    } else {
      Object.values(formErrors).forEach((error) => {
        toast.error(error);
      });
    }
  };

  return (
    <div className="application-container">
      <form className="form" onSubmit={handleSubmit} ref={formRef}>
        {/* Business Owner Details */}
        <div className="form-section">
          <div className="form-header">
            <h2>Business Owner Details</h2>
          </div>
          <div className="form-group">
            <label htmlFor="applicantCitizenship">
              Applicant Citizenship: <span>*</span>
            </label>
            <select
              name="applicantCitizenship"
              id="applicantCitizenship"
              value={formData.applicantCitizenship}
              onChange={handleChange}
              required
            >
              <option value="">Select citizenship</option>
              <option value="Rwandan">Rwandan</option>
              <option value="Foreigner">Foreigner</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="identificationnumber">
              Identification Document Number: <span>*</span>
            </label>
            <input
              type="tel"
              id="identificationnumber"
              name="identificationnumber"
              value={formData.identificationnumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passport">
              Passport Number: <span>*</span>
            </label>
            <input
              type="text"
              id="passport"
              name="passport"
              value={formData.passport}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="names">
              Other Names: <span>*</span>
            </label>
            <input
              type="text"
              id="names"
              name="names"
              value={formData.names}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phonenumber">
              Phone Number:<span>*</span>
            </label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email: <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">
              Location: <span>*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Business Details */}
        <div className="form-section">
          <div className="form-header">
            <h2>Business Details</h2>
          </div>
          <div className="form-group">
            <label htmlFor="businessType">
              Business Type: <span>*</span>
            </label>
            <select
              name="businessType"
              id="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
            >
              <option value="">Select business type</option>
              <option value="Retailer">Retailer</option>
              <option value="Wholesale">Wholesale</option>
              <option value="Manufacturer">Manufacturer</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="businessname">
              Company Name:<span>*</span>
            </label>
            <input
              type="text"
              id="businessname"
              name="businessname"
              value={formData.businessname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="businessaddress">
              TIN Number:<span>*</span>
            </label>
            <input
              type="text"
              id="businessTIN"
              name="businessTIN"
              value={formData.businessTIN}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registrationDate">
              Registration Date:<span>*</span>
            </label>
            <input
              type="date"
              id="registrationDate"
              name="registrationDate"
              value={formData.registrationDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="businessAddress">
              Business Address: <span>*</span>
            </label>
            <input
              type="text"
              id="businessAddress"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="form-section">
          <div className="form-header">
            <h2>Product Details</h2>
          </div>
          <div className="form-group">
            <label htmlFor="importationPurpose">
              Purpose of Importation: <span>*</span>
            </label>
            <select
              name="importationPurpose"
              id="importationPurpose"
              value={formData.importationPurpose}
              onChange={handleChange}
              required
            >
              <option value="">Select purpose of importation</option>
              <option value="Direct sale">Direct sale</option>
              <option value="Personal Use">Personal Use</option>
              <option value="Trial">Trial</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="productCategory">
              Product Category: <span>*</span>
            </label>
            <select
              name="productCategory"
              id="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              required
            >
              <option value="">Select product category</option>
              <option value="General Purpose">General Purpose</option>
              <option value="Construction Materials">
                Construction Materials
              </option>
              <option value="Chemicals">Chemicals</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="unitOfMeasurement">
              Unit of Measurement: <span>*</span>
            </label>
            <select
              name="unitOfMeasurement"
              id="unitOfMeasurement"
              value={formData.unitOfMeasurement}
              onChange={handleChange}
              required
            >
              <option value="">Select unit of measurement</option>
              <option value="Kg">Kg</option>
              <option value="Tones">Tones</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight:</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">
              Quantity of Product: <span>*</span>
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">
              Description of Product: <span>*</span>
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              rows="6"
              value={formData.productDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <button type="submit">Submit</button>

        <ToastContainer />
      </form>
    </div>
  );
};

export default ApplicationPage;
