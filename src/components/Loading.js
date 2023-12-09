import "./loading.scss";
export default function Loading() {
  return (
    <div className="loading-container">
      <div className="container">
        <div className="loading"></div>
        <div className="loading"></div>
        <div className="loading"></div>
        <div className="loading"></div>
      </div>
    </div>
  );
}
export function LoadingText() {
  return (
    <>
      <div className="loading-paragraph"></div>
      <div className="loading-paragraph"></div>
      <div className="loading-paragraph"></div>
      <div className="loading-paragraph"></div>
      <div className="loading-paragraph"></div>
      <div className="loading-paragraph"></div>
    </>
  );
}

export function LoadingH1() {
  return (
    <>
      <div className="loading-h1"></div>
    </>
  );
}
export function LoadingImage() {
  return (
    <>
      <div className="loading-image"></div>
    </>
  );
}
