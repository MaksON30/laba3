import "./Pallete.css";

const Pallete = (props) => {
  function onhover(e) {
    e.currentTarget.style.backgroundColor = "red";
    e.currentTarget.style.transition = "0.5s";
    e.currentTarget.style.opacity = "1";
  }
  function onleave(e) {
    e.currentTarget.style.backgroundColor = "white";
  }
  function renderitems(array) {
    const renderblocks = array.map((el, id) => {
      return (
        <div
          key={id}
          className={`${el.color}`}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: `${el.color}`,
          }}
        ></div>
      );
    });
    return (
      <div
        tabIndex={0}
        onMouseEnter={(e) => {
          onhover(e);
        }}
        onMouseLeave={(e) => {
          onleave(e);
        }}
        className={`${props.name}`}
        style={{
          width: "307px",
          height: "200px",
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto",
          backgroundColor: "white",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {renderblocks}
      </div>
    );
  }

  const nash = renderitems(props.data);
  return <>{nash}</>;
};

export default Pallete;
