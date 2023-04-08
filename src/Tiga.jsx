function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Jerianto',
    lastName: 'Mandalika'
  };
  
  const element = (
    <h1>
{formatName(user)}
    </h1>
  );
  
function Tiga() {
    return (
        element
);
}

export default Tiga;