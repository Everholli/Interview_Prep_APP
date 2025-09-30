import React from "react";

const Modal = ({ isOpen, onClose, children, title, hideheader }) => {
  if (!isOpen) return null; // prevent rendering when closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="relative flex flex-col bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden"
      >
        {/* Header */}
        {!hideheader && (
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        )}

        {/* Close Button */}
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 cursor-pointer"
          onClick={onClose}
        >
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Body (scrollable if long) */}
        <div className="flex-1 p-4 overflow-y-auto max-h-[80vh] custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
