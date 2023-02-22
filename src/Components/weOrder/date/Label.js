const Label = (props) => {
  return <label htmlFor={props.for}>{props.content}</label>;
};

export default Label;
