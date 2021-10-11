import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getData} from "../actions/data.action";

export default function useData(type) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(type));
  }, []);

  const data = useSelector(({data}) => data);
  return data;
}
