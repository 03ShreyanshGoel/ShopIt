const DetailsImage = ({ image }) => {
  return (
    <div className="w-full md:w-6/12 p-1">
      <img
        src={image}
        alt="image"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default DetailsImage;
