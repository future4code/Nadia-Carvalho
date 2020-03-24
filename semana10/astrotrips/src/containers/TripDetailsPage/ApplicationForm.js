import React from 'react';

const appForm = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{5,}",
    title: "User's full name, at least 5 letters long."
  },
  {
    name: "age",
    label: "User's age",
    type: "number",
    required: true,
    min: 18,
    title: "Age (in years)",
  },
{
    name: "applicationText",
    label: "Application Text",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{30,}",
    title: "Your application text, at least 30 letters long."
  },
  {
    name: "profession",
    label: "User's profession",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{10,}",
    title: "Profession, at least 10 letters long"

  },
  {
    name: "country",
    label: "User's country",
    type: "select",
    required: true,
    title: "Select your country"
  },
  {
    name: "trip",
    label: "Selected trip",
    type: "select",
    required: true,
    title: "Select your trip"
  },

]

export default class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }
}