export const Controls = ({ onClick }) => {
  return (
    <section>
      <button
        type="button"
        name="back"
        // onClick={() => changeIndex(-1)}
        // disabled={index === 0}
        onClick={onClick}
      >
        Back
      </button>
      <button
        type="button"
        name="forward"
        // onClick={() => changeIndex(1)}
        // disabled={currentItem === totalItems}
        onClick={onClick}
      >
        Forward
      </button>
    </section>
  );
};
