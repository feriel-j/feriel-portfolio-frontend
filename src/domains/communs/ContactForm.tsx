import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { contactActionCreators } from "../../services/Action";
import Input from "../../components/inputs/Input";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import "../../_dist/ContactForm.css";
import { State } from "../../services/Reducers";
import Message from "../../components/messages/Message";
import {
  CLEAR_CONTACT_ERROR,
  CLEAR_CONTACT_SUCCESS,
} from "../../services/ActionTypes/contactActionTypes";
import TextArea from "../../components/inputs/TextArea";
import useFormValidation from "../../hooks/UseValidationForm";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
// Custom type for textarea change events
type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;
const ContactForm = () => {
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Use the custom hook
  const { errors,validateField,setErrors , validateForm } =
    useFormValidation();

  const handleChange = (field: keyof typeof sendMessage, value: string) => {
    setSendMessage((prevState) => ({ ...prevState, [field]: value }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the entire form
    const isFormValid = validateForm(sendMessage);

    if (!isFormValid) {
      console.log("Form has errors. Submission blocked.");
      return;
    }
    sendContactForm(sendMessage);

    
    
  };

  const dispatch = useDispatch();

  const { sendContactForm } = bindActionCreators(
    contactActionCreators,
    dispatch
  );

  const contactState = useSelector((state: State) => state.contactReducer);
  const successMessage = contactState.successMessage?.message;
  const errorMessage = contactState.error;

  // Auto-clear messages after 3 seconds
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        if (successMessage) dispatch({ type: CLEAR_CONTACT_SUCCESS });
        if (errorMessage) dispatch({ type: CLEAR_CONTACT_ERROR });
        setSendMessage({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage, dispatch]);

   // Handle blur (validate on blur)
  const handleBlur = (field: keyof typeof sendMessage) => {
    const error = validateField(field, sendMessage[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };
const handleClearErrors = () => {
    setErrors({
      name: "",
      email: "",
      message: "",
    });
     
  };

 const { handleKeyDown } = useKeyboardNavigation();



  return (
    <form className="form-container" onSubmit={sendEmail} noValidate  onBlur={() => handleClearErrors()}>
      <Input
        type="text"
        placeholder="Enter your name."
        // required
        name="name"
        value={sendMessage.name}
        onBlur={() => handleBlur("name")}
         onChange={(e: InputChangeEvent) => {
          e.stopPropagation();
          handleChange("name", e.target.value);
          
        }}
        onKeyDown={handleKeyDown}
      />
      {errors.name && <Message type="warning">{errors.name}</Message>}
      <Input 
        type="email"
        value={sendMessage.email}
        placeholder="Enter your email."
         onBlur={() => handleBlur("email")}
         onChange={(e: InputChangeEvent) => {
          e.stopPropagation();
          handleChange("email", e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      {errors.email && <Message type="warning">{errors.email}</Message>}

      <TextArea
        name="message"
        placeholder="Enter your message."
        value={sendMessage.message}
        onBlur={() => handleBlur("email")}
        onChange={(e: TextAreaChangeEvent) => {
          e.stopPropagation();
          handleChange("message", e.target.value);
        }}
        onKeyDown={handleKeyDown}
        rows={5}
      />
      {errors.message && <Message type="warning">{errors.message}</Message>}

      <ButtonPrimary type="submit">Send</ButtonPrimary>
      {successMessage && <Message type={"success"}>{successMessage}</Message>}
      {errorMessage && <Message type="error">{errorMessage}</Message>}
    </form>
  );
};

export default ContactForm;

