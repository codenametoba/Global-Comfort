"use client";

export function BackButton() {
  function goBack() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.href = "/";
  }

  return (
    <button type="button" className="back-button" onClick={goBack}>
      Go Back
    </button>
  );
}
