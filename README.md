# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh






const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.applicantCitizenship === "") {
      console.log("Please select citizenship");
    }
    if (formData.identificationnumber === "") {
      console.log("Please enter identification number");
    }
    if (formData.passport === "") {
      console.log("Please enter passport number");
    }
    if (formData.names === "") {
      console.log("Please enter other names");
    }
    if (formData.surname === "") {
      console.log("Please enter surname");
    }
    if (formData.phonenumber === "") {
      console.log("Please enter phone number");
    }
    if (formData.email === "") {
      console.log("Please enter email");
    }
    if (formData.address === "") {
      console.log("Please enter address");
    }
    if (formData.businessType === "") {
      console.log("Please select business type");
    }
    if (formData.businessname === "") {
      console.log("Please enter business name");
    }
    if (formData.businessaddress === "") {
      console.log("Please enter business address");
    }
    if (formData.registrationDate === "") {
      console.log("Please enter registration date");
    }
    if (formData.businessAddress === "") {
      console.log("Please enter business address");
    }
    if (formData.importationPurpose === "") {
      console.log("Please select importation purpose");
    }
    if (formData.productCategory === "") {
      console.log("Please select product category");
    }
    if (formData.unitOfMeasurement === "") {
      console.log("Please select unit of measurement");
    }
    if (formData.weight === "") {
      console.log("Please enter weight");
    }
    if (formData.quantity === "") {
      console.log("Please enter quantity");
    }
    if (formData.productDescription === "") {
      console.log("Please enter product description");
    }