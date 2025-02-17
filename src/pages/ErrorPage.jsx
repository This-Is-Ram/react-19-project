import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate(-1);
  };
  return (
    <section className="notFound-container">
      <div>
        <img
          src="https://static-00.iconduck.com/assets.00/location-not-found-icon-222x256-y4igkvh7.png"
          alt="not Found"
          className="hero-image"
        />
      </div>
      <h1 className="container-title"> Page Does't Exist !!!</h1>
      <button onClick={handleBtn}>Go Back</button>
    </section>
  );
};
