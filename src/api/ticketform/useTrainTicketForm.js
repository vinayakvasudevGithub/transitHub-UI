import { useState } from "react";
import { trainTicketApiStructure } from "../structure/ticket/trainTicketApiStructure";

export const useTrainTicketForm = (initialTrainData) => {
  const [formData, setFormData] = useState({
    ...trainTicketApiStructure,
    ...initialTrainData, // Allows overriding defaults
  });

  const updateFormData = (updates) => {
    setFormData((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const updatePassenger = (index, updates) => {
    setFormData((prev) => {
      const updatedPassengers = [...prev.userDetails];
      updatedPassengers[index] = {
        ...updatedPassengers[index],
        ...updates,
      };
      return {
        ...prev,
        userDetails: updatedPassengers,
      };
    });
  };

  const addPassenger = () => {
    setFormData((prev) => ({
      ...prev,
      userDetails: [
        ...prev.userDetails,
        { ...trainTicketApiStructure.userDetails[0] }, // Add new passenger with defaults
      ],
    }));
  };

  const removePassenger = (index) => {
    if (formData.userDetails.length <= 1) return;

    setFormData((prev) => ({
      ...prev,
      userDetails: prev.userDetails.filter((_, i) => i !== index),
    }));
  };

  return {
    formData,
    updateFormData,
    updatePassenger,
    addPassenger,
    removePassenger,
  };
};
