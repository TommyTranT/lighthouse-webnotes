// Generic button that calls on 'onClick'. 

const Button = (props) => {
  return (
    <button onClick={ props.onClick }>{ props.children}</button>
  );
};

export default Button;