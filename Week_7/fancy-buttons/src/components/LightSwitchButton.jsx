const lightSwitchButton = () => {
  return(
    {/* When the state is on */}<span><i>💡</i> I'm on!</span>
    {/* When the state is off */}<span className="off"><i>💡</i> I'm off!</span>
  );
};

export default lightSwitchButton;