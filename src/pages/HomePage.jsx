import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f6effd',
      }}
    >
      <p>
        This is Home Page <Link to="tweets">To Tweets</Link>
      </p>
    </div>
  );
};

export default HomePage;
