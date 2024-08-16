const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki',
};

export const ChildArea = (props) => {
  const { open } = props;
  console.log('showed ChildArea.');

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('xxx');
  });
  console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>Child Component</p>
        </div>
      ) : null}
    </>
  );
};
