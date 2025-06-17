const ProfileCard = ({name, description}) => {
  return (
    <div className="card">
        
        <h3>Name: {name}</h3>
        <p>Description: {description}</p>
    </div>
  );
};

export default ProfileCard;
