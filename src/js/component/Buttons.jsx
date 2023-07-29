import React from "react";

export const SimpleButton = ({ content }) => {
  return <button className="btn btn-primary">{content}</button>;
};

export const IconButton = ({ content }) => {
  return <button className="btn btn-secondary">{content}</button>;
};

const PrimaryButton = ({ content }) => {
  return <button className="btn">{content}</button>;
};

export default PrimaryButton;
