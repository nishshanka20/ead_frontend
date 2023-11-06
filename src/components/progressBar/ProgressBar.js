import React from "react";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const deliveryData = useSelector((state) => state.delivery.deliveryData);
  // Determine the current step from the delivery data (you may have a different way of doing this)

  // Define the steps
  const steps = [
    "Order Placed",
    "Order Processed",
    "Shipped",
    "In Transit",
    "Out for Delivery",
    "Delivered",
  ];

  const currentStep = steps.indexOf(deliveryData);

  return (
    <div className="max-w-container mx-auto px-4 py-4">
      <div className="relative pt-1">
        {steps.map((step, index) => (
          <div key={step} className="flex mb-2">
            {/* Step Name */}
            <div className="w-1/4">
              <p
                className={
                  currentStep >= index ? "text-primeColor" : "text-lightText"
                }
              >
                {step}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-3/4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center">
                  <div className="flex-1">
                    <div
                      className={`text-xs font-semibold ${
                        currentStep >= index
                          ? "text-primeColor"
                          : "text-lightText"
                      }`}
                    >
                      {currentStep >= index ? "Completed" : "Pending"}
                    </div>
                  </div>
                </div>
                <div className="relative flex justify-between items-center">
                  <div
                    className={`flex-1 h-2 ${
                      currentStep >= index ? "bg-primeColor" : "bg-lightText"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
