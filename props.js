function Props() {
    const data = "Hello I am D.Sahithya";
    return (
      <div>
        <User1 data={data} />
      </div>
    );
  }
  
  // User1 component
  function User1({ data }) {
    return <User2 data={data} />;
  }
  
  // User2 component
  function User2({ data }) {
    return <User3 data={data} />;
  }
  
  // User3 component
  function User3({ data }) {
    return <User4 data={data} />;
  }
  
  // User4 component
  function User4({ data }) {
    return <div>{data}</div>;
  }
  
  export default Props;
  