import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from '../../store/action';
import { fetchData } from '../../components/apiService/doc';

const MyComponent: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.data);

  const fetchAndSaveData = async () => {
    try {
      const result = await fetchData();
      dispatch(fetchDataAction(result));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchAndSaveData}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default MyComponent;