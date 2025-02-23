import React from "react";

const SubmitButton = ({
  loading,
  mode,
}: {
  loading: boolean;
  mode: string;
}) => {
  return (
    <button
      type="submit"
      className={`btn btn-md btn-soft-primary ${loading && "disabled"}`}
    >
      {loading ? (
        <i className="fas fa-spinner fa-spin me-2" />
      ) : (
        <i className={`fas fa-light fa-floppy-disk me-2`} />
      )}
      {mode}
    </button>
  );
};

export default SubmitButton;
