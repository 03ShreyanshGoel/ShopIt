const Colors = ({ colors, deleteColor }) => {
  return (
    <>
      {colors.length > 0 && (
        <>
          <h3 className="right-heading">colors list</h3>
          <div className="flex flex-wrap -mx-1">
            {colors.map((color) => (
              <div key={color.id} className="p-1">
                <div
                  className="w-[30px] h-[30px] rounded-full cursor-pointer p-3"
                  style={{ background: color.color }}
                  onClick={() => {
                    deleteColor(color);
                  }}
                ></div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Colors;
