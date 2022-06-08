import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { podcast } from 'src/api';

const useFetchData = (route) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (path) => {
      try {
        const { data: response } = await podcast.get(path);
        setData(response);
      }
      catch (error) {
        if (error.response.data.error.infos.statusCode === 400) navigate('/notfound', { replace: true });
      }
      setLoading(false);
    };

    fetchData(route);
  }, [route]);

  return {
    data,
    loading,
  };
};

export default useFetchData;
